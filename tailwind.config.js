const { Poppins_100Thin } = require('@expo-google-fonts/poppins');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ['Poppins_400Regular'],
        // 'poppins-medium': ['Poppins_500Medium'],
        poppinsBold: ['Poppins_700Bold'],
      },
    },
  },
  plugins: [],
};
