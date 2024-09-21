/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url(hero-bg-1.jpg)",
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
        blob: {
          "0%,100%": {
            borderRadius: "70% 90% 70% 90%",
            transform: "translate(-2%, 3%)",
          },
          "25%": {
            borderRadius: "80% 60% 70% 50%",
            transform: "translate(0%, 0%)",
          },
          "50%": {
            borderRadius: "60% 90% 50% 90%",
            transform: "translate(2%, 2%)",
          },
          "75%": {
            borderRadius: "80% 70% 90% 60%",
            transform: "translate(0%, -2%)",
          }
        },
      },
      animation: {
        blob: "blob 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
