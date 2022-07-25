/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        'is-hover': { raw: '(hover: hover)' },
        'no-hover': { raw: '(hover: none)' },
      },
      colors: {
        primary: '#EE3026',
        secondary: '#191F34',
        tertiary: '#5066B0',
      },
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
