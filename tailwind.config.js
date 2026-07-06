/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', 'Courier New', 'Courier', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
      borderWidth: {
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      }
    },
  },
  plugins: [],
}
