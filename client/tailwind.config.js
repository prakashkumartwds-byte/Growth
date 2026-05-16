/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {

      colors: {
        primary: "#00C2A8",
        secondary: "#14B8A6",
        accent: "#00E0C6",

        dark: "#0F172A",
        dark2: "#1E293B",

        light: "#F8FAFC",
        soft: "#F1F5F9",

        border: "#E2E8F0",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
        glass: "0 8px 32px rgba(31,38,135,0.1)",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        float: "float 4s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },

  plugins: [],
}