/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html'],
  theme: {
    extend: {
    fontFamily:{
      'rowdies':'"Rowdies"',
      'righteous':'"Righteous"',
      'Saira':'"Saira"',
    },
    textColor: {
      'regal-blue': '#4883FF',
    },
    colors:{
      'verylightblue' : '#D9ECFF',
      'lightwhite':'#F0F3FF',
      'custom-blue': '#00B3FF',
      'custom-via': '#1901F8',
      'custom-purple': '#E441FF',
    },
  },
  },
  plugins: [],
}

