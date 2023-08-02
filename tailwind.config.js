/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'mask-left': 'mask-left 1000ms linear forwards',
        marquee: 'marquee 17000ms linear infinite',
        marquee2: 'marquee2 17000ms linear infinite'
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
