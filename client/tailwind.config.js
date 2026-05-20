/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  darkMode: "class",

  theme: {

    extend: {

      /* ========================================
         COLORS
      ======================================== */

      colors: {

        /* BRAND COLORS */

        primary: "#13C4A3",

        secondary: "#0A4D8C",

        accent: "#00DFC0",

        dark: "#071B3B",

        dark2: "#102A43",

        light: "#F8FAFC",

        soft: "#F1F5F9",

        border: "#E2E8F0",

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#EF4444",

      },

      /* ========================================
         FONTS
      ======================================== */

      fontFamily: {

        poppins: ["Poppins", "sans-serif"],

        inter: ["Inter", "sans-serif"],

        outfit: ["Outfit", "sans-serif"],

      },

      /* ========================================
         SHADOWS
      ======================================== */

      boxShadow: {

        soft: "0 10px 30px rgba(0,0,0,0.05)",

        glass: "0 8px 32px rgba(19,196,163,0.10)",

        primary: "0 15px 40px rgba(19,196,163,0.20)",

        dark: "0 20px 50px rgba(7,27,59,0.12)",

      },

      /* ========================================
         BACKDROP
      ======================================== */

      backdropBlur: {

        xs: "2px",

      },

      /* ========================================
         BORDER RADIUS
      ======================================== */

      borderRadius: {

        "4xl": "32px",

        "5xl": "40px",

      },

      /* ========================================
         ANIMATIONS
      ======================================== */

      animation: {

        float: "float 4s ease-in-out infinite",

        pulseSlow: "pulseSlow 3s infinite",

        slideUp: "slideUp 0.5s ease",

        spinSlow: "spin 8s linear infinite",

      },

      /* ========================================
         KEYFRAMES
      ======================================== */

      keyframes: {

        float: {

          "0%,100%": {

            transform: "translateY(0px)",

          },

          "50%": {

            transform: "translateY(-12px)",

          },

        },

        pulseSlow: {

          "0%,100%": {

            opacity: "1",

          },

          "50%": {

            opacity: ".6",

          },

        },

        slideUp: {

          "0%": {

            opacity: "0",

            transform: "translateY(30px)",

          },

          "100%": {

            opacity: "1",

            transform: "translateY(0px)",

          },

        },

      },

      /* ========================================
         CONTAINER
      ======================================== */

      container: {

        center: true,

        padding: {

          DEFAULT: "20px",

          sm: "24px",

          lg: "40px",

          xl: "60px",

        },

      },

      /* ========================================
         BACKGROUND IMAGES
      ======================================== */

      backgroundImage: {

        primaryGradient:
          "linear-gradient(135deg,#13C4A3 0%,#0A4D8C 100%)",

        darkGradient:
          "linear-gradient(135deg,#071B3B 0%,#102A43 100%)",

        glassGradient:
          "linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,255,255,0.2))",

      },

    },

  },

  plugins: [],

};