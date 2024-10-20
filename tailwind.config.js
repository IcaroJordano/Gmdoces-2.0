/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      textShadow:{
        'sm':' 4px 4px 10px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

