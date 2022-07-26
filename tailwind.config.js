/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer'
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'sans-serif'],
    }
  }
};
