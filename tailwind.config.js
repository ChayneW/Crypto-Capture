/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ibm': ['"IBM Plex Mono"', 'sans-serif'],
        'source': ['Source+Code+Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

