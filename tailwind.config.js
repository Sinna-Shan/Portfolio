/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('hero-background.jpg')",
      },
      colors: {
        primary: {
          100: "#F7D98E",
          200: "#F5CC68",
          300: "#F2BF42",
          400: "#A9862E",
          500: "#614C1A",
        },
        shade: {
          100: "#E9ECEF",
          200: "#CED4DA",
          300: "#495057",
        },
      },
      keyframes: {
        wheel: {
          "12.5%": {
            transform: "translateY(-125%)",
          },
          "25%": {
            transform: "translateY(-115%)",
          },
          "37.5%": {
            transform: "translateY(-235%)",
          },
          "50%": {
            transform: "translateY(-228%)",
          },
          "62.5%": {
            transform: "translateY(-350%)",
          },
          "74.5%": {
            transform: "translateY(-340%)",
          },
          "87.5%": {
            transform: "translateY(-460%)",
          },
          "100%": {
            transform: "translateY(-450%)",
          },
        },
      },
      animation: {
        "word-wheel": "wheel 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
