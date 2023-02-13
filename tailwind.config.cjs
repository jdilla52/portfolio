/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Hind', 'sans-serif'],
      },
      strokeWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
