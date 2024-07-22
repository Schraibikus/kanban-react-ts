/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-blue": "#0067a3",
        "primory-gray": "#ebecf0",
      },
    },
  },
  plugins: [],
};
