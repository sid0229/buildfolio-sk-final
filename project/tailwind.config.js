/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      colors: {
        gold: {
          400: '#fbbf24',
          600: '#d97706',
          700: '#b45309',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'magical-glow': 'magical-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
};