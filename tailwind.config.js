/** @type {import('tailwindcss').Config} */
import scrollBar from 'tailwind-scrollbar';
import scrollBarHide from 'tailwind-scrollbar-hide';

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
    },
  },
  plugins: [
    scrollBar,
    scrollBarHide,
  ],
}