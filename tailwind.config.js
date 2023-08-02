/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-3xl': 'clamp(2rem, 4vw, 4rem)'
      },
      colors: {
        brown: {
          50: '#f7f3ef',
          100: '#ebe1d6',
          200: '#d8c5b0',
          300: '#c1a183',
          400: '#ac7f5c',
          500: '#9f7253',
          600: '#895a45',
          700: '#6e463a',
          800: '#5e3c35',
          900: '#523531',
          950: '#2e1c1a'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'mask-left': 'mask-left 1000ms linear forwards',
        marquee: 'marquee 25000ms linear infinite',
        marquee2: 'marquee2 25000ms linear infinite'
      },
      keyframes: {
        'mask-left': {
          '0%': { 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
          '100%': { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
}
