/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif']
      },
      strokeWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
