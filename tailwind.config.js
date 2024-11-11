/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        frontend: ['"DM Sans", sans-serif'],
      },
      colors: {
        frontend: {
          purple: {
            100: "hsl(254, 88%, 90%)",
            500: "hsl(256, 67%, 59%)",
          },
          yellow: {
            100: "hsl(31, 66%, 93%)",
            500: "hsl(39, 100%, 71%)",
          },
        },
      },
    },
  },
  plugins: [],
};
