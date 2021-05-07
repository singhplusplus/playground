const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: Object.assign(colors, {
      primary: colors.indigo,
      secondary: colors.rose,
      neutral: colors.warmGray
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
