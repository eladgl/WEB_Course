/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js, css}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#f0f0f0', // Lightest shade of dark mode
          200: '#c0c0c0', // Light shade of dark mode
          button: '#333'          
        },
        light: {
          button: '#fff'
        }
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50&': { transform: 'translate(-50%)', opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 2s ease-out',
      },
    },
  },
  plugins: []
}

