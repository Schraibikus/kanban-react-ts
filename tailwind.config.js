/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0079bf",
        "secondary-blue": "#0067a3",
        "primary-gray": "#ebecf0",
        "secondary-gray-text": "#5E6C84",
      },
      backgroundImage: {
        "task-settings": "url('/public/task-settings.svg')",
      },
    },
    plugins: [],
  },
};
