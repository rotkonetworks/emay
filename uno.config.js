import { defineConfig, presetUno, presetIcons, presetTypography } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetTypography(),
    presetForms(),
  ],
  theme: {
    colors: {
      // Map to CSS variables
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      // Custom colors
      'emay-pink': 'hsl(var(--emay-pink))',
      'emay-lime': 'hsl(var(--emay-lime))',
      'emay-violet': 'hsl(var(--emay-violet))',
      'emay-cyan': 'hsl(var(--emay-cyan))',
    }
  },
  shortcuts: {
    'shadow-sharp': 'shadow-[4px_4px_0px_#000000]',
    'btn-primary': 'px-6 py-3 bg-primary text-primary-foreground font-semibold border-2 border-border shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1',
    'sharp-card': 'bg-card p-6 border-2 border-border shadow-sharp',
    'feature-icon-wrapper': 'flex h-12 w-12 items-center justify-center',
  },
  safelist: [
    'i-lucide-github',
    'i-lucide-mail',
    'i-lucide-wallet',
    'i-lucide-x',
    'i-lucide-menu',
    'i-lucide-moon',
    'i-lucide-sun',
    'i-lucide-check',
    'i-lucide-arrow-right',
    'i-lucide-git-branch',
    'i-lucide-smartphone',
    'i-lucide-star',
    'i-lucide-users',
    'i-lucide-globe',
    'i-lucide-clock',
    'i-lucide-calendar',
    'i-lucide-user',
    'i-lucide-arrow-left',
    'i-lucide-help-circle',
    'i-lucide-message-circle',
    'i-lucide-book',
    'i-lucide-chevron-down',
    'i-lucide-share-2',
    'i-lucide-check-circle',
    'i-lucide-file-x',
    'i-lucide-chevron-right',
    'i-lucide-book-open',
    'i-lucide-circle-user-round',
  ]
})
