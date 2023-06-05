/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "login-social-app":"url('https://static-cse.canva.com/blob/563164/socialmediaicons.jpg')"
      }
    },
  },
  plugins: [],
  darkMode:'class',
}

