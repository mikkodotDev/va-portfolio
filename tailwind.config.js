/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#050b0c",
        background: "#f1f8f9",
        primary: "#56b0b9",
        secondary: "#99a5d5",
        accent: "#7c71c5",
      },
    },
  },
  plugins: [],
};
