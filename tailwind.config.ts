import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a2236",
        surface: "#15344b",
        field: "#102b42",
        accent: "#fb923c",
        accentSoft: "#fdba74",
        accentMid: "#f97316",
        accentDeep: "#c2410c",
        accentHover: "#ea580c",
        link: "#9fddff",
        linkHover: "#ffe1c4",
        muted: "#b8cade"
      },
      boxShadow: {
        card: "0 24px 44px rgba(3, 20, 34, 0.5), 0 0 0 1px rgba(249, 115, 22, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
