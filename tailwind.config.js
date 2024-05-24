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
      }
    }
  },
  plugins: [],
}

