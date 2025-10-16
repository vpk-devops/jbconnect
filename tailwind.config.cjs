// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],           
        archivo: ['Archivo', 'sans-serif'], 
        acme:['Acme', 'sans-serif']     
      },
      fontSize: {
        'base18': '18px',
      
      '22px': '22px',
    
      },
      variants: {
        extend: {
          textColor: ['aria-selected'],
          backgroundColor: ['aria-selected'],
        },
      },
      colors: {
        'custom-blue':'#274C77FF',
        "custom-black":'#171A1FFF',
        "custom-gray":'#565D6DFF',
        "custom-linegray":"#BDC1CA",
        "custom-light":"#9095A1FF",

      },
    },
  },
  plugins: [],
}