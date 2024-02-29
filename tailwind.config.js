/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0a192f",
        "secondary": "#f97316",
        "tertiary": "#54d688"
      }
    },
  },
  plugins: [],
}

