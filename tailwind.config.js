/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: '#454b1b',
        sideBarColor: '#303E30',
        sideBarTextColor: '#EAE8E8',
        sideBarIconColor: '#6B6A6A',
        sideBarHoverColor: '#3A473A',
        mainColor: '#EAE8E8',
        mainItemColor: '#5A8C5A',
        white: '#FFFDFD',
        green: '#7CA47C',
        red: '#CB4900'
      },
      gridTemplateColumns: {
        'mainContent': '1fr 5fr',
      },
      gridTemplateRows: {
        'body': 'auto 1fr',
      }
    },
  },
  plugins: [],
}