/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tumbleweed': '#E09F7D',
        'sizzling-red': '#EF5D60',
        'paradise-pink': '#EC4067',
        'flirt': '#A01A7D',
        'russian-violet': '#311847',
        'gray':'#ccc'
      }
    },
  },
  plugins: [],
};