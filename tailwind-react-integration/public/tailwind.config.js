/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // For older versions
    darkMode: false, // Disable dark mode (or set to 'media' or 'class')
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // For Tailwind v3+
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  