/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        black: "#191A23",
        gray: "#F3F3F3",
        green: "#B9FF66",
      },
    },
    keyframes: {
      "move-left": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-50%)",
        },
      },
    },
    animation: {
      "move-left": "move-left 1s linear infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
