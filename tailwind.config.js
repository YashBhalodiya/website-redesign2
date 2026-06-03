/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080B11",
        card: {
          DEFAULT: "#0D111C",
          hover: "#131828",
        },
        border: "#ffffff08",
        primary: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
        },
        accent: {
          DEFAULT: "#10B981", // Emerald
          dark: "#065F46",
          light: "#34D399",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "glow-accent": "0 0 20px -5px rgba(16, 185, 129, 0.15)",
        "glow-card": "0 4px 30px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        "theme-sm": "6px",
        "theme-md": "12px",
        "theme-lg": "24px",
      },
    },
  },
  plugins: [],
}
