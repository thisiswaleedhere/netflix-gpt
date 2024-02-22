/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        enter: {
          '0%': {
            transform: 'translateX(-40px)',
            opacity: 0
          },
          '90%': { transform: 'translateX(-4px)', opacity: 20 },
          '100%': { transform: 'translateX(0px)', opacity: 100 },
        },
      },
      animation: {
        'enter-scene': 'enter 0.5s ease-in',
      },
    },
  },
  plugins: [],
}

