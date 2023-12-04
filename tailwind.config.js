/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Big\\ Shoulders\\ Display", "ui-monospace"], // 'sans-serif' as a fallback
      },
    },
  },
  plugins: [],
};
