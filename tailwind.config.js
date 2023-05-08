/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: '#DEFAF8',
        sun: '#FDB813',
        ocean: '#2DB8C2',
        sand: '#EDD793'
      },
      height: {
        sky: '40vh',
        sun: '20vh',
        ocean: '15vh',
        sand: '200vh'
      },
      width: {
        sun: '20vh'
      }
    },
  },
  plugins: [],
}
