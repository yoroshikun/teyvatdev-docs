module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#842eff', // TEMP
        DEFAULT: '#6900ff',
        dark: '#3d0094', // TEMP
      },
      secondary: '#1b0041',
      background: '#12002b',
      error: '#ed3939',
      black: '#0B001A',
      gray: '#9ca3af',
      white: '#fff',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
