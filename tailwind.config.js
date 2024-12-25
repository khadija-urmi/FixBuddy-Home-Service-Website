/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        btn_primary: 'rgb(14, 122, 129)',
        btn_primary_hover: 'rgb(10, 110, 116)',
      },
    },
  },
  plugins: [require('daisyui')],
}

