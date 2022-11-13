/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    fontFamily: {
      'archivo': ['Archivo', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        darkBlue: '#0c1734',
        lightBlue: '#4172f3',

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
