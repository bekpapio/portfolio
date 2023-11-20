/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'dark': '#2c2d32',
      "primary":"#e86e1c",
      "secondary":"#323338",
      "body-text":"#5E5D5D"
    }},
  },
  plugins: [],
}

