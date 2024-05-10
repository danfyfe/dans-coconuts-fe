const plugin = require('tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bottom: 'bottom 2s forwards',
        fall: 'fall 2s forwards',
        tide: 'tide 10s infinite',
        'roll-left': 'roll-left 1s',
        'roll-right': 'roll-right 1s',
        'left-to-right': 'left-to-right 1.5s infinite',
        'lightning': 'lightning 20s infinite 1s',
      },
      colors: {
        sky_day_fair: '#DEFAF8',
        sky_night_fair: '#25587C',
        // sky_day_rain: '#3f5957',
        sky_day_rain: '#74b0ab',
        sky_night_rain: '',
        sun: '#FDB813',
        moon: '#FCFEDA',
        ocean_day: '#2DB8C2',
        ocean_night: '#1b4e52',
        sand_day: '#EDD793',
        sand_night: '#736b53',
        rain: "#B0C4DE",
        coconut_brown: "#73492e",
        error: "#d12806"
      },
      dropShadow: {
        'coconut': '0 1px 1px rgb(0 0 0 / 1)'
      },
      fontFamily: {
        'gilligan': ['Gilligan', 'Arial', 'sans-serif'],
        'roboto': ['RobotoCondensed', 'Arial', 'sans-serif']
      },
      height: {
        sky: '40vh',
        sun: '20vh',
        ocean: '15vh',
        sand: '200vh'
      },
      keyframes: {
        'bottom': {
          '0%': {
            transform: 'rotate(0)'
          },
          '5%': {
            transform: 'rotate(-5deg)'
          },
          '10%': {
            transform: 'rotate(0deg)'
          },
          '15%': {
            transform: 'rotate(5deg)'
          },
          '30%': {
            top: '90%',
            transform: 'rotate(0)'
          },
          '75%': {
            top: '90%',
          },
          '100%': {
            top: '90%',
          }
        },
        'fade-in-out': {
          '0%': {
            opacity: 0.5
          },
          '25%': {
            opacity: 0.75
          },
          '50%': {
            opacity: 0.5
          },
          '75%': {
            opacity: 0
          },
          '100%': {
            opacity: 0.5
          }
        },
        'fall': {
          '0%': {
            top: '0%',
            transform: 'rotate(0)'
          },
          '5%': {
            transform: 'rotate(-5deg)'
          },
          '10%': {
            transform: 'rotate(0deg)'
          },
          '15%': {
            transform: 'rotate(5deg)'
          },
          '25%': {
            top: '90%',
            transform: 'rotate(0)'
          },
          '75%': {
            top: '90%',
          },
          '100%': {
            top: '90%',
          }
        },
        'left-to-right': {
          "0%": {
            left: '100%'
          },
          "50%": {
            left: '0'
          },
          "100%": {
            left: '-100%'
          }
        },
        'lightning': {
          '49%': {
            'background-color': '#74b0ab'
          },
          '50%': {
            'background-color': '#8dccc7'
          },
          '51%': {
            'background-color': '#82bfba'
          },
          '52%': {
            'background-color': '#8dccc7'
          },
          '53%': {
            'background-color': '#74b0ab'
          }
        },
        'tide': {
          "0%": {
            height: '0px',
            borderBottom: 'none',
            borderBottom: '1px solid transparent',
          },
          "50%": {
            height: '25px',
            opacity: 1,
            borderBottom: '1px solid white',
          },
          "75%": {
            borderBottom: '10px solid white',
          },
          "100%": {
            height: '0px',
            opacity: 0,
          }
        },
        'spin': {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'rain': {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: 0.5
          },
          '100%': {
            transform: 'translate(-0.5rem, 0.5rem)',
            opacity: 0
          }
        },
        'roll-left': {
          '0%': {
            transform: 'rotate(30deg)'
          },
          '25%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(5deg)'
          }
        },
        'roll-right': {
          '0%': {
            transform: 'rotate(-130deg)'
          },
          '25%': {
            transform: 'rotate(-90deg)'
          },
          '50%': {
            transform: 'rotate(-100deg)'
          }
        }
      },
      backgroundImage: {
        'rain-drop': 'url("/images/forward-slash.svg")'
      },
      width: {
        sun: '20vh'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
