import { useI18n } from '@/lib/i18n'
import { SharpCard } from '../ui/SharpCard'

export function SimplePricingSection() {
  const { t } = useI18n()

  const features = [
    {
      icon: 'i-lucide-star',
      title: t('pricing.premium.title'),
      description: t('pricing.premium.description'),
      price: t('pricing.premium.price'),
    },
    {
      icon: 'i-lucide-users',
      title: t('pricing.storage.title'),
      description: t('pricing.storage.description'),
      price: t('pricing.storage.price'),
    },
    {
      icon: 'i-lucide-globe',
      title: t('pricing.domains.title'),
      description: t('pricing.domains.description'),
      price: t('pricing.domains.price'),
    },
  ]

  return (
    <section id="pricing" class="bg-emay-cyan/10 dark:bg-dark-green-button/20 py-16 lg:py-24 scroll-mt-20">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t('pricing.title')}</h2>
          <p class="mx-auto max-w-3xl text-lg text-muted-foreground">{t('pricing.subtitle')}</p>
        </div>

        <div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <SharpCard class="bg-card text-center">
                <div class="mb-4 inline-flex h-12 w-12 items-center justify-center bg-emay-pink/10 text-emay-pink">
                  <div class={`${feature.icon} h-6 w-6`} />
                </div>
                <h3 class="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p class="mb-4 text-muted-foreground">{feature.description}</p>
                <p class="font-semibold text-foreground">{feature.price}</p>
              </SharpCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
