/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '394px',
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    extend: {
      colors: {
        primary: '#db1f26',
        secondary: '#750024',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        bounce1: {
          '0%, 100%': {
            transform: 'translateY(-25%) scale(1,1)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'scale(1.1,.9)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },

      animation: {
        wiggle: 'wiggle 250ms linear ',
        bounce1: 'bounce1 1s cubic-bezier(0.280, 0.840, 0.420, 1) infinite',
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
