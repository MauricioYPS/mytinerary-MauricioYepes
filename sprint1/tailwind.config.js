/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      backgroundImage:{
        'founded-back': "url('./public/images/image_10.jpg')"
      },
      fontFamily:{
        'mTFont': ' font-family: "Edu AU VIC WA NT Guides", cursive;'
      }
    },
  },
  plugins: [],
}