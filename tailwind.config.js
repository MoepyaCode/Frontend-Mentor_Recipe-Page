/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'snow': '#FFF7FB',
        'white-coffee': '#E3DDD7',
        'eggshell': '#F3E5D7',
        'wenge-brown': '#5F564D',
        'brandy-red': '#854632',
        'dark-raspberry': '#7A284E',
        'dark-charcoal': '#312E2C',

      },
      colors: {
        'snow': '#FFF7FB',
        'white-coffee': '#E3DDD7',
        'eggshell': '#F3E5D7',
        'wenge-brown': '#5F564D',
        'brandy-red': '#854632',
        'dark-raspberry': '#7A284E',
        'dark-charcoal': '#312E2C',
      },
      borderColor: {
        'snow': '#FFF7FB',
        'white-coffee': '#E3DDD7',
        'eggshell': '#F3E5D7',
        'wenge-brown': '#5F564D',
        'brandy-red': '#854632',
        'dark-raspberry': '#7A284E',
        'dark-charcoal': '#312E2C',
      },
      fontFamily: {
        'young-serif': ['YoungSerif'],
        'outfit': ['Outfit'],
      }
    },
  },
  plugins: [],
}