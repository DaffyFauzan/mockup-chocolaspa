/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
      letterSpacing: {
        beranda: ["5px"],
      },
      height: {
        '600':'600px',
        '400':'400px',
      },
      transitionDuration: {
        '670': '670ms'
      },
      backgroundImage: {
        'text-about': "url('/img/title-background.png')"
      },
      textShadow: {
        'outline': '2px 2px 0 #000'
      },
      textStrokeWidth: {
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
      },
      textStrokeColor: {
        white: '#ffffff',
        brown: '#906335',
      },
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-fill-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
        },
        '.text-stroke-4': {
          '-webkit-text-stroke-width': '4px',
        },
        '.text-stroke-6': {
          '-webkit-text-stroke-width': '6px',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#ffffff',
        },
        '.text-stroke-brown': {
          '-webkit-text-stroke-color': '#906335',
        },
      });
    },
  ],
}

