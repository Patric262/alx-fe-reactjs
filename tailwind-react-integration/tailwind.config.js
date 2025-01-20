/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Purge unused styles
  darkMode: false, // Can be 'media', 'class', or false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

