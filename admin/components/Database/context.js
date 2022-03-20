import React, { useState, useEffect, useContext, createContext } from "react";
// import { child, get } from "firebase/database";
import { dbRef } from "components/Firebase/initFirebase";
import { initialDatabase } from "./initialDatabase";

import { onValue } from "firebase/database";

// Admin Database Context

export const DatabaseContext = createContext({ user: null });

export function DatabaseProvider({ children }) {
    const [database, setDatabase] = useState(initialDatabase);

    useEffect(() => {
        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const db = snapshot.val();
                setDatabase({
                    database: db.web,
                    settings: db.admin.settings,
                    loading: false,
                });
            }
        });
    }, []);

    return (
        <DatabaseContext.Provider value={{ ...database }}>
            {children}
        </DatabaseContext.Provider>
    );
}

export const useDatabaseContext = () => {
    return useContext(DatabaseContext);
};
