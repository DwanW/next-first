// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex:{
      '2': '0 1 45%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
