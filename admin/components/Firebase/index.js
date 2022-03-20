import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { ref, update, set, remove } from "firebase/database";
import { db } from "components/Firebase/initFirebase";

import {
    getAuth,
    updatePassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

// Authentication

export const doSignIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const doUpdatePassword = (password) =>
    updatePassword(auth.currentUser, password);

export const doResetPassword = (email) => sendPasswordResetEmail(auth, email);

// Realtime Database

export const doEditFlat = (data) => {
    const updates = {};
    updates[`database/web/flats/${data.id}`] = data;
    return update(ref(db), updates);
};

export const doEditFloor = (data) => {
    const updates = {};
    updates[`database/web/floors/${data.id}`] = data;
    return update(ref(db), updates);
};

export const doEditContact = (data, src) => {
    const updates = {};
    updates[`database/web/contacts/${src}`] = data;
    return update(ref(db), updates);
};

export const doEditTexts = (data, src) => {
    const updates = {};
    updates[`database/web/strings/${src}`] = data;
    return update(ref(db), updates);
};

export const doAddStandard = (data, src) => {
    const uuid = uuidv4();
    const date = moment().unix();

    return set(ref(db, `database/web/standards/${src}/${uuid}`), {
        uuid,
        date,
        ...data,
    });
};

export const doEditStandard = (data, src) => {
    const updates = {};
    updates[`database/web/standards/${src}/${data.uuid}`] = data;
    return update(ref(db), updates);
};

export const doDeleteStandard = (uuid, src) => {
    remove(ref(db, `database/web/standards/${src}/${uuid}`));
};

export const doAddPin = (data) => {
    const uuid = uuidv4();
    const date = moment().unix();

    return set(ref(db, `database/web/pins/${uuid}`), {
        uuid,
        date,
        ...data,
    });
};

export const doEditPin = (data) => {
    const updates = {};
    updates[`database/web/pins/${data.uuid}`] = data;
    return update(ref(db), updates);
};

export const doDeletePin = (uuid) => {
    remove(ref(db, `database/web/pins/${uuid}`));
};

export const doChangeLockStatus = (data) => {
    const updates = {};
    updates[`database/admin/settings/weblock/data/locked`] = data;
    return update(ref(db), updates);
};

export const doChangeLockPass = (data) => {
    const updates = {};
    updates[`database/admin/settings/weblock/data/pass`] = data;
    return update(ref(db), updates);
};
