
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        midnight: {
          DEFAULT: '#0E1117',
          light: '#141820',
          surface: '#1A1E27',
        },
        copper: {
          DEFAULT: '#C07A4E',
          light: '#D4935F',
          dark: '#A8693F',
          glow: 'rgba(192, 122, 78, 0.12)',
        },
        cream: '#F0E8D8',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: '#C07A4E',
          foreground: '#0E1117',
        },
        secondary: {
          DEFAULT: '#9A958E',
          foreground: '#E8E4DE',
        },
        muted: {
          DEFAULT: '#5A5550',
          foreground: '#9A958E',
        },
        accent: {
          DEFAULT: '#AB1E35',
          foreground: '#F0E8D8',
        },
        border: 'rgba(192, 122, 78, 0.08)',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'none' },
        },
        lineGrow: {
          from: { height: '0' },
          to: { height: '80px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeInUp: 'fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        lineGrow: 'lineGrow 1s ease forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
