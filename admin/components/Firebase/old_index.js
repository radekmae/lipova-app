import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { ref, update, set, remove } from "firebase/database";
import { app, db } from "components/Firebase/initFirebase";

import {
    getAuth,
    updatePassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "firebase/auth";

import {
    getStorage,
    ref as refStorage,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";

const auth = getAuth();
const storage = getStorage(app);

// Authentication

export const doSignIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const doUpdatePassword = (password) =>
    updatePassword(auth.currentUser, password);

export const doResetPassword = (email) => sendPasswordResetEmail(auth, email);

// Realtime database

export const doEditFlat = (data) => {
    const updates = {};
    updates[`database/flats/${data.id}`] = data;
    return update(ref(db), updates);
};
export const doEditCellar = (data) => {
    const updates = {};
    updates[`database/cellar/${data.id}`] = data;
    return update(ref(db), updates);
};
export const doEditParking = (data) => {
    const updates = {};
    updates[`database/parking/${data.id}`] = data;
    return update(ref(db), updates);
};
export const doEditContact = (data, name) => {
    const updates = {};
    updates[`database/contacts/${name}`] = data;
    return update(ref(db), updates);
};
export const doEditText = (data, src) => {
    const updates = {};
    updates[`database/texts/${src}`] = data;
    return update(ref(db), updates);
};

export const doAddStandard = (data, src) => {
    const uuid = uuidv4();
    const date = moment().unix();

    return set(ref(db, `database/standards/${src}/${uuid}`), {
        uuid,
        date,
        ...data,
    });
};
export const doEditStandard = (data, src) => {
    const updates = {};
    updates[`database/standards/${src}/${data.uuid}`] = data;
    return update(ref(db), updates);
};
export const doDeleteStandard = (uuid, src) => {
    remove(ref(db, `database/standards/${src}/${uuid}`));
};

export const doUploadFile = (file, id) => {
    const storageRef = refStorage(storage, `pdf/${id}`);

    uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then((url) => {
            const data = {
                url,
                date: moment().unix(),
            };
            const updates = {};
            updates[`database/pdf/${id}`] = data;
            return update(ref(db), updates);
        });
    });
};
