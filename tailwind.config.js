/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta": ["Plus Jakarta Sans", "serif"],
      },
      backgroundImage: {
        "about1": 'url(/about1.jpg)',
        "about2": 'url(/about2.jpg)'
      }
    },
  },
  plugins: [],
}