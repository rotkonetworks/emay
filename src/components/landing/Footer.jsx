import { useI18n } from '@/lib/i18n'
import { useNavigate } from '@solidjs/router'

export function Footer() {
  const { t, locale } = useI18n()
  const navigate = useNavigate()

  return (
    <footer class="mt-16 bg-emay-lime dark:bg-black py-8 text-black dark:text-white border-t-4 border-white dark:border-black">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-4 flex items-center justify-center gap-2">
          <a href={`/${locale()}`} aria-label="Back to homepage">
            <img
              src="/emay-icon.svg"
              alt="emay.me"
              class="h-8 w-auto filter dark:invert dark:brightness-0"
            />
          </a>
        </div>
        <div class="mb-4 flex justify-center gap-4 text-black/70 dark:text-gray-300">
          <a 
            href={`/${locale()}/blog`} 
            class="transition-colors hover:text-black dark:hover:text-white"
          >
            {t('nav.blog')}
          </a>
          <a 
            href={`/${locale()}/support`} 
            class="transition-colors hover:text-black dark:hover:text-white"
          >
            {t('nav.support')}
          </a>
        </div>
        <p class="text-black/60 dark:text-gray-300">© 2024 emay.me. {t('footer.tagline')}</p>
      </div>
    </footer>
  )
}
