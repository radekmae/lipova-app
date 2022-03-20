import React, { useState, useEffect, useContext, createContext } from "react";
import { get } from "firebase/database";
import { dbRef } from "components/Firebase/initFirebase";
import { initialDatabase } from "./initialDatabase";

export async function doGetDatabase() {
    let db = {};
    let settings = {};
    await get(dbRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                db = snapshot.val();
                settings = db.admin.settings;
            }
        })
        .catch((error) => {
            console.log("log-2", error);
        });
    return { database: db.web, settings };
}

export const DatabaseContext = createContext({ user: null });

export function DatabaseProvider({ children }) {
    const [database, setDatabase] = useState(initialDatabase);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDB() {
            const database = await doGetDatabase();

            setDatabase(database);
            setLoading(false);
        }
        getDB();
    }, []);

    return (
        <DatabaseContext.Provider value={{ ...database, loading }}>
            {children}
        </DatabaseContext.Provider>
    );
}

export const useDatabaseContext = () => {
    return useContext(DatabaseContext);
};
