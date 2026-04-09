import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c12",
        surface: "#0f1724",
        accent: "#2f7cf6",
        muted: "#93a4bf"
      },
      boxShadow: {
        card: "0 20px 40px rgba(2, 8, 20, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
