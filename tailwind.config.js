/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#121217',
        muted: '#6c757d',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'], // Adding the Sora font family
      },
    },
  },
  plugins: [],
}

