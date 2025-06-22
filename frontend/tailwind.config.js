/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
    screens: {
      mb: {'min': '400px', 'max': '599px'},   // 400px ≤ width < 600px
      tb: {'min': '600px', 'max': '1179px'},  // 600px ≤ width < 1180px
      dk: '1180px',                           // width ≥ 1180px
    },
  },
  plugins: [],
};