module.exports = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            "/": { page: "/" },
            "/admin": { page: "/admin" },
            "/login": { page: "/login" },
            "/account": { page: "/account" },
        };
    },
};
