/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'header': "url('/src/assets/header_img.png')"
      }
      
    },
  },
  plugins: [],
}

