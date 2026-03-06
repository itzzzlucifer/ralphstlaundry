import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#C9A84C",
                cream: "#F5F0E8",
                dark: "#0C0C10",
                navy: "#0F1624",
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
