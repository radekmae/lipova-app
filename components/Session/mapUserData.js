export const mapUserData = (user) => {
    const { uid, email, accessToken, displayName, photoUrl } = user;
    return {
        id: uid,
        email,
        token: accessToken,
        name: displayName,
        userImage: photoUrl,
    };
};
