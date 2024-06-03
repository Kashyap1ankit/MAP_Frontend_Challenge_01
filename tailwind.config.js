/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "300px",
      sm: "400px",
      md: "520px",
      lg: "800px",
      xl: "1024px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "serif"],
        Kanit: ["Kanit", "serif"],
      },
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinner: "spinner 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
