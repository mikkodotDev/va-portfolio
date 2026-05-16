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
      spacing: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
        "5xl": "100px",
      },
      borderRadius: {
        xs: "2px",
        sm: "3px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0 2px 4px rgba(0, 0, 0, 0.08)",
        md: "0 4px 8px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.12)",
        "card-hover": "0 12px 24px rgba(0, 0, 0, 0.15)",
      },
      zIndex: {
        hide: "-1",
        auto: "auto",
        base: "0",
        dropdown: "10",
        sticky: "20",
        fixed: "30",
        modal: "40",
        popover: "50",
        tooltip: "60",
      },
      transitionTimingFunction: {
        "smooth-in": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.4" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["20px", { lineHeight: "1.7" }],
        "2xl": ["24px", { lineHeight: "1.8" }],
        "3xl": ["32px", { lineHeight: "1.2" }],
        "4xl": ["40px", { lineHeight: "1.2" }],
        "5xl": ["48px", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};
