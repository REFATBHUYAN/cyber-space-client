/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var',],
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms'),],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
}

