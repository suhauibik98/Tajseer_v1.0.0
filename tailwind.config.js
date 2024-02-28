/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        swipe: "swipe 20000ms linear infinite backwards",
        swipe1: "swipe1 20000ms linear infinite backwards ",
      },
    },
  },
  plugins: [],
};
