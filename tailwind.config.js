const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
  },
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      red: {
        ...colors.red,
        light: '#d40000',
        DEFAULT: '#d40000',
        dark: '#FEE2E2',
      },
      blue: {
        ...colors.blue,
        light: '#1492ff',
        DEFAULT: '#1492ff',
        dark: '#DBEAFE',
      },
      green: {
        ...colors.green,
        light: '#11a144',
        DEFAULT: '#11a144',
        dark: '#D1FAE5',
      },
      yellow: {
        ...colors.yellow,
        light: '#f1924e',
        DEFAULT: '#f1924e',
        dark: '#FEF3C7',
      }
    },
  },
}
