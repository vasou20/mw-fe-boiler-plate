/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          100: 'var(--primary-100)',
        }
      }
    },
  },
  plugins: [],
}
