module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        stone: {
          '900': '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
