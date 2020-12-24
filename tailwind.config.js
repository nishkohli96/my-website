module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navyb: "#006699",
                lavendar: "#FB2CBE",
                vlblue: "#ABCDED",
                headercol: "#1F1F1F",
                bodycol: "#2B2B2B",
                cocowhite: "#F7F6F3",
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
