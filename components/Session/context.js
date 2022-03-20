import { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { signOut, getAuth, onIdTokenChanged } from "firebase/auth";
// components
import { mapUserData } from "./mapUserData";
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie,
} from "components/Cookies";
// constants
import * as ROUTES from "constants/routes";
import publicPages from "constants/publicPages";
import authPages from "constants/authPages";

export const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
    const [user, setUser] = useState(false);
    const router = useRouter();
    const auth = getAuth();

    const logout = async () => {
        await signOut(auth);
        removeUserCookie();
        router.push(ROUTES.LOGIN);
    };

    useEffect(() => {
        const unsubscribeListener = onIdTokenChanged(auth, (user) => {
            if (user) {
                const userData = mapUserData(user);
                setUserCookie(userData);
                setUser(userData);
                if (router.pathname == ROUTES.LOGIN) {
                    router.push(ROUTES.ADMIN);
                }
            } else {
                removeUserCookie();
                setUser();
                if (authPages.includes(router.pathname)) {
                    return router.push(ROUTES.LOGIN);
                } else if (!publicPages.includes(router.pathname)) {
                    router.push(ROUTES.LANDING);
                }
            }
        });

        const userFromCookie = getUserFromCookie();
        setUser(userFromCookie);

        return () => {
            unsubscribeListener();
        };
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
};
