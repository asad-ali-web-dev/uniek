module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00303f',
          dark: '#222831',
          light: '#30475e'
        },
        primary: '#f05454',
        secondary: '#dddddd'
      },
      animation: {
        'ping-fast': 'ping .5s linear infinite'
      },
      boxShadow: {
        '3xl': '0 35px 150px -12px rgba(0, 0, 0, 0.7)'
      },
      fontFamily: {
        'logo-font': '"Fondamento", cursive'
      }
    },
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
