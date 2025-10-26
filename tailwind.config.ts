import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#E6E1DC",
          dark: "#0C0C14",
        },
        foreground: {
          light: "#111111",
          dark: "#FAFAFA",
        },
        primary: {
          light: "#7CB3FF",
          dark: "#4A8BFF",
        },
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.75rem",
      },
      transitionDuration: {
        "180": "180ms",
      },
    },
  },
  plugins: [],
};
export default config;

