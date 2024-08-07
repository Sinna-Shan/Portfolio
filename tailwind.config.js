/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
