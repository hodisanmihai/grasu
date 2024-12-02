/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors:{
      primary: '#3572EF',
      secondary: '#38B6FF',
      bggray:"#F2F5F6",
    }, fontFamily: {
      grotesk: ['HK Grotesk', 'sans-serif'],
    },
  },
  },
  plugins: [],
}