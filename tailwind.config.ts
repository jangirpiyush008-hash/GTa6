import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050308',
          900: '#0a0a0a',
          850: '#0d0a14',
          800: '#0f0c1c',
          700: '#15102a',
        },
        navy: {
          900: '#0b0820',
          800: '#120a2e',
        },
        neon: {
          pink: '#FF006E',
          cyan: '#00F5FF',
          gold: '#FFD700',
          purple: '#9D4EDD',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 18px rgba(255,0,110,0.55), 0 0 48px rgba(255,0,110,0.25)',
        'neon-cyan': '0 0 18px rgba(0,245,255,0.55), 0 0 48px rgba(0,245,255,0.25)',
        'neon-gold': '0 0 18px rgba(255,215,0,0.55), 0 0 48px rgba(255,215,0,0.25)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 14px rgba(255,215,0,0.55), 0 0 36px rgba(255,215,0,0.25)',
          },
          '50%': {
            boxShadow:
              '0 0 24px rgba(255,215,0,0.85), 0 0 64px rgba(255,215,0,0.45)',
          },
        },
        'pink-flicker': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 14px rgba(255,0,110,0.65)' },
          '50%': { opacity: '0.92', textShadow: '0 0 22px rgba(255,0,110,0.95)' },
        },
        scanlines: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.2s ease-in-out infinite',
        'pink-flicker': 'pink-flicker 1.6s ease-in-out infinite',
        scanlines: 'scanlines 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
