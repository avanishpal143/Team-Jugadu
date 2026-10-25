/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B14',
          900: '#0B111E',
          DEFAULT: '#10182A',
          800: '#17233B',
          700: '#233352',
          600: '#32476E',
        },
        orange: {
          DEFAULT: '#FF6B0B',
          hover: '#E95800',
          dark: '#D94D00',
          pale: '#FFF2E8',
          border: '#FFD2B3',
          light: '#FFF9F5',
        },
        surface: {
          white: '#FFFFFF',
          off: '#FAFBFD',
          grey: '#F1F4F8',
          muted: '#F8FAFC',
        },
        ink: {
          primary: '#10182A',
          secondary: '#475569',
          muted: '#64748B',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1400px',
        'reading': '760px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 24, 42, 0.04), 0 1px 2px -1px rgba(16, 24, 42, 0.04)',
        'card': '0 4px 20px -2px rgba(16, 24, 42, 0.06), 0 2px 6px -1px rgba(16, 24, 42, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(16, 24, 42, 0.08), 0 4px 12px -2px rgba(16, 24, 42, 0.05)',
        'elevated': '0 20px 40px -15px rgba(16, 24, 42, 0.12), 0 0 1px rgba(16, 24, 42, 0.15)',
        'orange-soft': '0 8px 24px -4px rgba(255, 107, 11, 0.28)',
        'orange-strong': '0 12px 32px -4px rgba(255, 107, 11, 0.4)',
      },
    },
  },
  plugins: [],
}
