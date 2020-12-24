module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navyb: "#006699",
                lavendar: "#FB2CBE",
                vlblue: "#ABCDED",
            },
            screens: {
                xs: "300px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
