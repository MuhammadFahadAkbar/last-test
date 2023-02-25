/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,jsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins'],
    },
    boxShadow: {
      'custom': 'rgba(0, 0, 0, 0.1) -5px 5px'
    }
  },
  plugins: [],
}
