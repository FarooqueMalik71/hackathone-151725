/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ], 
  theme: {
    extend: {
      colors: {
        primary: '#23A6F0', // --primary-color
        secondary: '#2DC071', // --secondary-color
        'dark-blue': '#252B42', // --dark-blue-color
        gray: '#737373', // --gray-color
        white: '#FFFFFF', // --white-color
      },
      fontSize: {
        small: '1.2rem', // --small-fontsize
        medium: '1.3rem', // --medium-fontsize
        'xl-medium': '1.5rem', // --xl-medium-fontsize
        large: '4rem', // --large-fontsize
      },
    },
  },
  plugins: [],
   purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

};