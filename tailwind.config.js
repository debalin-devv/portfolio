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
        aqua: "#C4ECEB",
        "aqua-dark": "#AEE5E3",
        lime: "#B5F547",
        "lime-hover": "#A5EA36",
        "hard-black": "#000000",
        "text-main": "#111111",
        "card-cream": "#FFFFFF",
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px #000000',
        'brutal': '5px 5px 0px #000000',
        'brutal-lg': '7px 7px 0px #000000',
        'brutal-xl': '10px 10px 0px #000000',
      },
      fontFamily: {
        sans: ["Outfit", "Plus Jakarta Sans", "Inter", "sans-serif"],
        handwriting: ["Caveat", "cursive"],
        mono: ["Space Mono", "monospace"],
      },
      spacing: {
        "container-max": "1280px",
      }
    }
  },
  plugins: [],
}
