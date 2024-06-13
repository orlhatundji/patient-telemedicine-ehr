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
        },
        "tertiary": {
          100: "#111111",
          200: "#333333",
        },
        "stroke": {
          100: "#E0E0E0",
        },
        "placeholder": "#959595",
      },
      fontFamily: {
        'sans': ['Helveticaneue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}