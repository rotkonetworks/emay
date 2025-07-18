import { useI18n } from '@/lib/i18n'
import { HeroForm } from './HeroForm'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section class="relative flex min-h-screen items-center bg-hero">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="flex h-full">
          <div class="flex-[0.45] 2xl:flex-[0.45] xl:flex-[0.4] lg:flex-[0.35] md:flex-[0.2] sm:flex-[0.15] flex-[0.1]" />
          <div class="flex-[0.55] 2xl:flex-[0.55] xl:flex-[0.6] lg:flex-[0.65] md:flex-[0.8] sm:flex-[0.85] flex-[0.9] relative">
            <img
              src="/emay-bg-trans.webp"
              alt="Abstract background image"
              class="absolute inset-0 w-full h-full object-contain object-right-bottom pointer-events-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div class="relative z-20 w-full">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid min-h-[calc(100vh-5rem)] items-center gap-8 lg:grid-cols-2 pt-20 pb-16">
            <div class="space-y-6 max-w-2xl">
              <div class="space-y-4">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                  {t('hero.title')}
                  <span class="text-primary block sm:inline">{t('hero.titleHighlight')}</span>
                </h1>
                <p class="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div class="max-w-lg">
                <HeroForm />
              </div>
              <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 text-sm text-muted-foreground">
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
      </div>
    </section>
  )
}
