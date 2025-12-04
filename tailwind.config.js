/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-slow': 'pulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'red-glow': 'redGlow 1.5s ease-in-out infinite',
        'blue-to-green': 'blueToGreen 0.5s ease-out',
        'checkmark-pop': 'checkmarkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'press-effect': 'pressEffect 0.3s ease-out',
        'light-up': 'lightUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        redGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(220, 38, 38, 1), 0 0 60px rgba(220, 38, 38, 0.8), 0 0 90px rgba(220, 38, 38, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
          },
        },
        blueToGreen: {
          '0%': {
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
            boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.4)',
          },
          '50%': {
            background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
            boxShadow: '0 0 40px rgba(16, 185, 129, 1), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
          },
          '100%': {
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
          },
        },
        checkmarkPop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(400px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        pressEffect: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
          '100%': { transform: 'translateY(0)' },
        },
        lightUp: {
          '0%': { backgroundColor: '#1e40af' },
          '50%': { backgroundColor: '#34d399' },
          '100%': { backgroundColor: '#10b981' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      textShadow: {
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        sm: '0 1px 2px var(--tw-shadow-color)',
        md: '0 4px 8px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
}