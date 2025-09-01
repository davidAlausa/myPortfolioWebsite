/** @type {import('tailwindcss').Config} */
export default{
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        'primaryDARK': '#272727',
        'secondaryDARK': '#D9D9D9',
        'accentDARK': '#00DA7C',
        'primaryLIGHT': '#EBEBEB',
        'secondaryLIGHT': '#272727',
        'accentLIGHT': '#2E005E',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}


