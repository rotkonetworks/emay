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
      'emay-lime': '#e9fd57',
      'emay-lime-subtle': '#f9ffef',
      'emay-pink': '#FF2670',
      'emay-black': '#000000',
      'emay-white': '#FFFFFF',
      'emay-lime-bright': '#E4FF07',
      'emay-cyan': '#07FFFF',
      'emay-violet': '#7916F3',
      'storm-200': '#DCE2E9',
      'storm-400': '#AEB7CB',
      'storm-700': '#6E7391',
      'dark-green-button': '#384209',
      'dark-green-field': '#5c6b12',
    }
  },
  shortcuts: {
    'shadow-sharp': 'shadow-[4px_4px_0px_#000000]',
    'shadow-sharp-pink': 'shadow-[4px_4px_0px_#FF2670]',
    'shadow-sharp-dark': 'shadow-[4px_4px_0px_#9ca3af]',
    'btn-primary': 'px-6 py-3 bg-emay-pink text-white font-semibold border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1',
    'sharp-card': 'bg-white dark:bg-card p-6 border-2 border-black shadow-sharp',
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
  ]
})
