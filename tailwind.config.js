module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      gridColumn: ['first', 'last', 'even', 'odd'],
      gridRow: ['first', 'last', 'even', 'odd'],
      gridColumnEnd: ['first', 'last', 'even', 'odd'],
      gridColumnStart: ['first', 'last', 'even', 'odd'],
      gridRowEnd: ['first', 'last', 'even', 'odd'],
      gridRowStart: ['first', 'last', 'even', 'odd'],
    },
  },
  plugins: [],
}
