/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FAFAFA',      // Off-White (Default)
          '100': '#F5F5F5',
          '200': '#EAEAEA',
          '300': '#DFDFDF',
          '400': '#D4D4D4',
          '500': '#C9C9C9',
        },
        secondary: {
          DEFAULT: '#2D2D2D',     // Dark Gray (Default)
          '100': '#262626',
          '200': '#1F1F1F',
          '300': '#191919',
          '400': '#121212',
          '500': '#0B0B0B',
        },
        accent1: '#52B788',     // Mint Green
        accent2: '#FFD166',     // Goldenrod
        accent3: '#EF476F',     // Coral Pink
      },
    },
  },
  plugins: [],
};
