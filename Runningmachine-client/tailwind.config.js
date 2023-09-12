module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope"],
            },
            colors: {
                blue: "#4d77ff",
                blues: "#0078f0",
                grays: "#808080",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
