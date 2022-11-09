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
        'gray':'#ccc',
        'legend-0':'#543005',
        'legend-1':'#8c510a',
        'legend-2':'#bf812d',
        'legend-3':'#dfc27d',
        'legend-4':'#f6e8c3',
        'legend-5':'#f5f5f5',
        'legend-6':'#c7eae5',
        'legend-7':'#80cdc1',
        'legend-8':'#35978f',
        'legend-9':'#01665e',
        'legend-10':'#003c30',
      }
    },
  },
  plugins: [],
};