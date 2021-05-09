const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.html', './src/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: Object.assign(colors, {
      primary: colors.indigo,
      secondary: colors.pink,
      neutral: colors.warmGray
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
