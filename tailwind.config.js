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
        sky_day_fair: '#DEFAF8',
        sky_night_fair: '#25587C',
        sky_day_rain: '#3f5957',
        sky_night_rain: '',
        sun: '#FDB813',
        moon: '#FCFEDA',
        ocean_day: '#2DB8C2',
        ocean_night: '#1b4e52',
        sand_day: '#EDD793',
        sand_night: '#736b53',
        rain: "#B0C4DE"
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

/**
 * Weather
 * 
 * sky
 *  good - blue
 *  rain - grey
 *  
 * water
 *  good - blue
 *  rain - darker
 * 
 * 
 * 
 * night
 * 
 * 
 * 
 */