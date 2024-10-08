/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Nunito Sans', 'sans-serif'],
        'sans-light': ['Nunito Sans', 'sans-serif', '300'],
        'sans-semibold': ['Nunito Sans', 'sans-serif', '600'],
        'sans-extrabold': ['Nunito Sans', 'sans-serif', '800'],
      },
      colors:{
        DarkBlueBackground:'hsl(209, 23%, 22%)', // Dark Blue (Dark Mode Elements)
        DarkModeBg: 'hsl(207, 26%, 17%)',//Very Dark Blue (Dark Mode Background)
        LightModeTextDarkBlue: 'hsl(200, 15%, 8%)', //Very Dark Blue (Light Mode Text)
        LightModeDarkGrayInput:'hsl(0, 0%, 52%)', // Dark Gray (Light Mode Input)
        LightModeBgGray: 'hsl(0, 0%, 98%)', // Very Light Gray (Light Mode Background)
        LightModeElements:'hsl(0, 0%, 100%)' //LightModeElements
      },
      screens:{
        'xl2': {'min':'1440px'}, // Nuevo breakpoint para pantallas de 1440px
      },
    },
  },
  plugins: [],
}

