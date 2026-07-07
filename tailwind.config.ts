import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0b0b0b",
        rust: {
          DEFAULT: "#ae5516",
          dark: "#8f4411",
        },
        gold: "#ebbe11",
        "gray-bg": "#d9d9d9",
        card: "#f9f8f4",
        dark: "#404040",
        muted: "#828282",
        ink: "#111111",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        head: ["var(--font-head)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.10)",
        panel: "0 10px 30px rgba(0,0,0,.25)",
      },
      screens: {
        nav: "860px",
      },
    },
  },
  plugins: [],
};

export default config;
