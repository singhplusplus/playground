const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './dist/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: Object.assign(colors, {
      primary: colors.fuchsia,
      secondary: colors.pink,
      lessprior: colors.warmGray
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
