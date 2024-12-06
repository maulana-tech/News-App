/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "maga-black": "#070707",
                "maga-gray": "#6A7789",
                "maga-orange": "#FF6B18",
            },
        },
    },
    plugins: [],
};
