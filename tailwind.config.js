/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FA5805',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        'sans': ['Helveticaneue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}