
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1B1B1B',
        emerald: '#046C4E',
        beige: '#D6C4A8',
        champagne: '#EED9B6',
        mint: '#00FFBF',
        platinum: '#C1C1C1'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
