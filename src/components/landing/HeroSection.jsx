import { useI18n } from '@/lib/i18n'
import { HeroForm } from './HeroForm'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section class="relative flex min-h-screen items-start pt-20 pb-16 lg:items-center bg-hero">
      <div class="absolute inset-0 z-0">
        <div class="flex h-full">
          <div class="flex-[0.45] 2xl:flex-[0.45] xl:flex-[0.4] lg:flex-[0.35] md:flex-[0.2] sm:flex-[0.15] flex-[0.1]" />
          <div class="flex-[0.55] 2xl:flex-[0.55] xl:flex-[0.6] lg:flex-[0.65] md:flex-[0.8] sm:flex-[0.85] flex-[0.9] relative">
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-[hsl(var(--hero-bg)/50%)] to-[hsl(var(--hero-bg))] z-10" />
            <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[hsl(var(--hero-bg))] z-10" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--hero-bg))] z-10" />
            <div class="hero-bg-image">
              <img
                src="/emay-bg-new.svg"
                alt="Abstract background image"
                class="absolute inset-0 w-full h-full object-contain object-right-bottom"
                loading="eager"
              />
            </div>
            <div class="absolute inset-0 bg-radial-gradient from-[var(--hero-glow)] to-transparent z-5" />
          </div>
        </div>
      </div>
      <div class="relative z-20 container mx-auto px-4">
        <div class="grid min-h-[calc(100vh-12rem)] items-center gap-8 lg:grid-cols-2">
          <div class="space-y-6">
            <div class="space-y-4">
              <h1 class="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-7xl">
                {t('hero.title')}
                <span class="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p class="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t('hero.subtitle')}
              </p>
            </div>
            <HeroForm />
            <div class="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
              <div class="flex items-center gap-2">
                <div class="i-lucide-check h-4 w-4 flex-shrink-0 text-primary" />
                <span>{t('hero.benefits.noPasswords')}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="i-lucide-check h-4 w-4 flex-shrink-0 text-primary" />
                <span>{t('hero.benefits.freePlan')}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="i-lucide-check h-4 w-4 flex-shrink-0 text-primary" />
                <span>{t('hero.benefits.trial')}</span>
              </div>
            </div>
          </div>
          <div class="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
