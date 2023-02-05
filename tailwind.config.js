/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize:{
        'small': ['0.875rem', {
          lineHeight: '2rem',
          fontWeight: '400',
        }],
        'normal': ['1.125rem', {
          lineHeight: '2rem',
          fontWeight: '400',
        }],
        'head': ['3.25rem', {
          lineHeight: '4.188rem',
          fontWeight: '700',
        }],
        'subhead': ['2.5rem', {
          lineHeight: '3.125rem',
          fontWeight: '700',
        }],

      }
    },
  },
  plugins: [],
}