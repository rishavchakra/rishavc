/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "sans-serif"],
    },
    extend: {
      animation: {
        oscillate: 'oscillate 3s infinite alternate-reverse ease-in-out',
      },
      keyframes: {
        oscillate: {
          "0%": { transform: "translateY(-1.5rem)" },
          "100%": { transform: "translateY(1.5rem)" },
        },
      },
    },
  },
};
