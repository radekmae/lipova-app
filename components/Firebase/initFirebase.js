// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import config from "constants/firebaseConfig";

export function initFirebase() {
    if (typeof window !== undefined) {
        console.warn("INITED FIREBASE");
        return initializeApp(config);
    }
}

export const app = initFirebase();

export const db = getDatabase();

export const dbRef = ref(db, "database");
