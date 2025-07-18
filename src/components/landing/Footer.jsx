import { useI18n } from '@/lib/i18n'
import { useNavigate } from '@solidjs/router'

export function Footer() {
  const { t, locale } = useI18n()
  const navigate = useNavigate()

  return (
    <footer class="mt-16 bg-hero py-8 text-foreground border-t-4 border-border">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-4 flex items-center justify-center gap-2">
          <a href={`/${locale()}`} aria-label="Back to homepage">
              <img
                src="/emay-icon.svg"
                alt="emay.me"
                class="h-8 w-auto dark:hidden"
              />
              <img
                src="/emay-logo-dark.svg"
                alt="emay.me"
                class="h-8 w-auto hidden dark:block"
              />
          </a>
        </div>
        <div class="mb-4 flex justify-center gap-4 text-muted-foreground">
          <a 
            href={`/${locale()}/blog`} 
            class="transition-colors hover:text-primary"
          >
            {t('nav.blog')}
          </a>
          <a 
            href={`/${locale()}/support`} 
            class="transition-colors hover:text-primary"
          >
            {t('nav.support')}
          </a>
        </div>
        <p class="text-muted-foreground">© 2024 emay.me. {t('footer.tagline')}</p>
      </div>
    </footer>
  )
}
