/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
        'glow': 'glow-pulse 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'typing-cursor': 'typing-cursor 1s infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor'
          },
          '50%': {
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
          }
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          }
        },
        'typing-cursor': {
          '0%, 50%': {
            opacity: '1'
          },
          '51%, 100%': {
            opacity: '0'
          }
        }
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(59, 130, 246, 0.5)',
        'glow': '0 0 10px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-xl': '0 0 30px rgba(59, 130, 246, 0.5)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};