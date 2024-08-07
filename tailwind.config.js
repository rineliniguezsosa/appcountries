/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DarkBlueBackground:'hsl(209, 23%, 22%)', // Dark Blue (Dark Mode Elements)
        DarkModeBg: 'hsl(207, 26%, 17%)',//Very Dark Blue (Dark Mode Background)
        LightModeTextDarkBlue: 'hsl(200, 15%, 8%)', //Very Dark Blue (Light Mode Text)
        LightModeDarkGrayInput:'hsl(0, 0%, 52%)', // Dark Gray (Light Mode Input)
        LightModeBgGray: 'hsl(0, 0%, 98%)' // Very Light Gray (Light Mode Background)
      }
    },
  },
  plugins: [],
}

