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
      }
    }
  },
  plugins: [],
}

