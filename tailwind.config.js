/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          50: '#F9EAFD',
          100: '#F3D5FB',
          200: '#EBBFF9',
          300: '#E3AAF7',
          400: '#DEACF5', // Original color
          500: '#D694F3',
          600: '#CE7CF1',
          700: '#C664EF',
          800: '#BE4CED',
          900: '#B634EB',
        },
        text: '#000000',
      },
    },
  },
  plugins: [],
}