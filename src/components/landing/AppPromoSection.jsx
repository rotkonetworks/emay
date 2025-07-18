import { useI18n } from '@/lib/i18n'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

export function AppPromoSection() {
  const { t } = useI18n()
  
  return (
    <section class="bg-muted py-16 lg:py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <div class="mb-8 inline-flex h-16 w-16 items-center justify-center bg-primary/10 rounded-full">
            <div class="i-lucide-smartphone h-8 w-8 text-primary" />
          </div>
          <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t('app.title')}
          </h2>
          <p class="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('app.subtitle')}
          </p>
          
          <div class="mx-auto max-w-md">
            <form class="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={t('app.emailPlaceholder')}
                class="h-12 text-base bg-card border-2 border-border text-foreground placeholder:text-muted-foreground flex-1"
                aria-label="Email for app notification"
              />
              <Button
                type="submit"
                size="lg"
                class="h-12 bg-primary text-primary-foreground border-2 border-border shadow-sharp hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-primary/90 sm:w-auto"
              >
                {t('app.notifyMe')}
              </Button>
            </form>
            
            <div class="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div class="flex items-center gap-2">
                <div class="i-lucide-check h-4 w-4 text-primary" />
                <span>Be the first to know</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="i-lucide-bell h-4 w-4 text-primary" />
                <span>Get early access</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="i-lucide-zap h-4 w-4 text-primary" />
                <span>Lightning fast JMAP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
