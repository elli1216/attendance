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
        myWhite: '#FFFDFD',
        myGreen: '#7CA47C',
        myRed: '#CB4900',
        buttonColor: '#454B1B',
        gradeBgColor: '#EAE8E8',
        divAuthColor: '#111312',
        linkColor: '#3C96F0',
      },
      gridTemplateColumns: {
        'mainContent': '1fr 5fr',
      },
      gridTemplateRows: {
        'body': 'auto 1fr',
      },
      backgroundImage: {
        'authBg': "url('/images/background.png')",
      }
    },
  },
  plugins: [],
}