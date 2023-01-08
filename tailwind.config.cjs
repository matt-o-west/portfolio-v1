/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  content: [
    './index.html',
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: { './src/**/*.{js,jsx,ts,tsx}': ['./src/**/*.{js,jsx,ts,tsx}'] },
  },
  plugins: [],
}
