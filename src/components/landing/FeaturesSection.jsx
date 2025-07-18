import { useI18n } from '@/lib/i18n'
import { SharpCard } from '../ui/SharpCard'

export function FeaturesSection() {
  const { t, locale } = useI18n()

  const featureCards = [
    {
      title: t('features.jmap.title'),
      description: t('features.jmap.description'),
      icon: 'i-lucide-git-branch',
      iconBgColor: 'bg-[#7916F3]/10',
      iconColor: 'text-[#7916F3]',
    },
    {
      title: t('features.clients.title'),
      description: t('features.clients.description'),
      icon: 'i-lucide-smartphone',
      iconBgColor: 'bg-[#07FFFF]/20',
      iconColor: 'text-[#075f5f]',
    },
  ]

  return (
    <section id="features" class="relative border-t-4 border-white dark:border-black bg-card py-16 lg:py-24 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t('features.title')}</h2>
          <p class="mx-auto max-w-3xl text-lg text-muted-foreground">{t('features.subtitle')}</p>
        </div>

        <div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-12">
          {featureCards.map((feature) => (
            <article key={feature.title}>
              <SharpCard class="bg-card">
                <div class="mb-4 flex items-center gap-4">
                  <div class={`feature-icon-wrapper ${feature.iconBgColor}`}>
                    <div class={`${feature.icon} h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 class="text-2xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p class="text-muted-foreground">{feature.description}</p>
              </SharpCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
