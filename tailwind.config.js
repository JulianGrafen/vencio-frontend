/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
   
      colors: {
        'background': "#A9D1DE",
        'loginBackground': "#C8D2D9"
      },
      fontFamily: {
        sans:["Poppins"]
      },
      fontSize: {
      
        "heading": '4em',
        "subheading": '1.5em',
        "xl":'2em',
        "3xl": '2.8rem',
        "4xl": '4.025rem',
        "5xl": '8.052rem',
      }
    },
  },
  plugins: [],
}