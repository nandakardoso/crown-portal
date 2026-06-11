import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'crown-black':     'oklch(4% 0.004 48 / <alpha-value>)',
        'crown-dark':      'oklch(8% 0.005 45 / <alpha-value>)',
        'crown-dark2':     'oklch(12% 0.005 45 / <alpha-value>)',
        'crown-dark3':     'oklch(17% 0.006 45 / <alpha-value>)',
        'crown-gold':      'oklch(72% 0.14 82 / <alpha-value>)',
        'crown-gold2':     'oklch(80% 0.15 82 / <alpha-value>)',
        'crown-gold-dim':  'oklch(55% 0.10 82 / <alpha-value>)',
        'crown-rose':      'oklch(54% 0.057 45 / <alpha-value>)',
        'crown-rose2':     'oklch(72% 0.061 51 / <alpha-value>)',
        'crown-rose-light':'oklch(84% 0.043 50 / <alpha-value>)',
        'crown-rose-deep': 'oklch(10% 0.018 48 / <alpha-value>)',
        'crown-rose-ink':  'oklch(28% 0.030 47 / <alpha-value>)',
        'crown-border':    'oklch(72% 0.14 82 / 0.18)',
        'crown-border-dim':'oklch(98% 0 0 / 0.07)',
        'crown-white':     'oklch(98% 0.002 0 / <alpha-value>)',
        'crown-gray1':     'oklch(92% 0.004 0 / <alpha-value>)',
        'crown-gray2':     'oklch(76% 0.005 0 / <alpha-value>)',
        'crown-gray3':     'oklch(56% 0.005 0 / <alpha-value>)',
        'crown-gray4':     'oklch(38% 0.005 0 / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '18px',
      },
      maxWidth: {
        content: '1200px',
        wide: '1440px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
        fadeIn: 'fadeIn 0.5s ease both',
      },
    },
  },
  plugins: [],
}

export default config
