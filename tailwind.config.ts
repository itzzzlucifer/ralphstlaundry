import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: "#A3CF34",
                    blue: "#0079C1",
                    navy: "#0A4A75",
                },
                cream: "#F5F0E8",
                dark: "#0C0C10",
                "dark-navy": "#071D2C",
                muted: "#8A8A9A",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "serif"],
                dm: ["var(--font-dm-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
