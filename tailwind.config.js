/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {

      borderRadius: {
      
        '5xl': '3rem',
      },
      screens:{
        'xs':'375px'
      }
     
    },
  },
  plugins: [],
}

