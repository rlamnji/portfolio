import { keyframes } from 'motion';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#A18081",
                primary_line: "#C7B6B7",
            },
        },
    },

    plugins: [require("tailwind-scrollbar-hide")],
};
