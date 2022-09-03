/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        prim: "#f7bf4f",
        sec: "#271801",
        ...colors,
      },
    },
  },
  plugins: [],
};
