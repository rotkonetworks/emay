import { useI18n } from '@/lib/i18n'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

export function AppPromoSection() {
  const { t } = useI18n()

  return (
    <section class="bg-emay-violet/5 dark:bg-dark-green-field/20 py-16 lg:py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="text-center lg:text-left">
            <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t('app.title')}</h2>
            <p class="mb-6 text-lg text-muted-foreground">{t('app.subtitle')}</p>
            <form class="mx-auto flex max-w-md flex-col gap-2 sm:flex-row lg:mx-0">
              <Input
                type="email"
                placeholder={t('app.emailPlaceholder')}
                class="h-12 text-base bg-card border-2 border-black text-foreground placeholder:text-muted-foreground"
                aria-label="Email for app notification"
              />
              <Button
                size="lg"
                class="h-12 bg-emay-pink text-white transition-colors hover:bg-emay-pink/80 border-2 border-black shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                {t('app.notifyMe')}
              </Button>
            </form>
          </div>
          <div class="relative mx-auto aspect-[9/19] max-w-xs overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/placeholder.svg?width=400&height=800"
              alt="emay.me Android App Preview"
              class="absolute inset-0 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
