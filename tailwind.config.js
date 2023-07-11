/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bright-red': 'hsl(12, 88%, 59%)',
      'dark-blue': 'hsl(228, 39%, 23%)',
      'dark-gray-blue': 'hsl(227, 12%, 61%)',
      'vd-blue': 'hsl(233, 12%, 13%)',
      'vp-red': 'hsl(13, 100%, 96%)',
      'vl-gray': 'hsl(0, 0%, 98%)',
      'white': '#ffffff',
    },
    fontFamily: {
      viet: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

