/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030509',
          900: '#060913',
          850: '#0B1120',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        },
        navy: {
          950: '#040711',
          900: '#080E1E',
          DEFAULT: '#0B132B',
          800: '#111D3D',
          700: '#1C2E59',
          600: '#2A437C',
        },
        orange: {
          DEFAULT: '#FF6B0B',
          hover: '#FF5400',
          dark: '#E04800',
          pale: '#FFF2E8',
          border: '#FFD2B3',
          light: '#FFF9F5',
          glow: 'rgba(255, 107, 11, 0.45)',
        },
        cyan: {
          DEFAULT: '#00E5FF',
          glow: 'rgba(0, 229, 255, 0.35)',
        },
        surface: {
          dark: '#0B1120',
          card: '#0F172A',
          glass: 'rgba(15, 23, 42, 0.65)',
          white: '#FFFFFF',
          off: '#FAFBFD',
          grey: '#F1F4F8',
          muted: '#F8FAFC',
        },
        ink: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1440px',
        'reading': '760px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 16px 48px 0 rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)',
        'glow-orange': '0 0 35px -5px rgba(255, 107, 11, 0.4)',
        'glow-cyan': '0 0 35px -5px rgba(0, 229, 255, 0.35)',
        'card-3d': '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1)',
        'orange-soft': '0 8px 24px -4px rgba(255, 107, 11, 0.35)',
        'orange-strong': '0 12px 36px -4px rgba(255, 107, 11, 0.55)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'radar': 'radar 4s linear infinite',
        'aurora': 'aurora 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
