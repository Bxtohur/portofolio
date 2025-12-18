/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
      borderWidth: {
        3: '3px',
      }
    },
  },
  plugins: [],
}
