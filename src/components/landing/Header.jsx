import { createSignal, Show, For } from 'solid-js'
import { useNavigate, useLocation } from '@solidjs/router'
import { useTheme } from '@/lib/theme'
import { useI18n } from '@/lib/i18n'
import { Button } from '../ui/Button'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)
  const { theme, toggleTheme } = useTheme()
  const { t, locale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/support', label: t('nav.support') },
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    if (href.startsWith('#')) {
      // For hash links, navigate to home first if not there
      const currentPath = location.pathname
      const isHome = currentPath === '/' || currentPath === `/${locale()}`
      
      if (!isHome) {
        navigate(locale() === 'en' ? '/' : `/${locale()}`)
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // For regular links
      navigate(locale() === 'en' ? href : `/${locale()}${href}`)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    const currentPath = location.pathname
    const isHome = currentPath === '/' || currentPath === `/${locale()}`
    
    if (isHome) {
      // If already on home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to home
      navigate(locale() === 'en' ? '/' : `/${locale()}`)
    }
  }

  const getHomeLink = () => locale() === 'en' ? '/' : `/${locale()}`

  return (
    <header class="fixed top-0 left-0 right-0 z-40 border-b border-border/30 bg-hero backdrop-blur-sm">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center justify-between">
          <a href={getHomeLink()} onClick={handleLogoClick} aria-label="Back to homepage">
            <img
              src="/emay-logo.svg"
              alt="emay.me logo"
              class="h-8 w-auto md:h-10 dark:hidden"
            />
            <img
              src="/emay-logo-dark.svg"
              alt="emay.me logo"
              class="h-8 w-auto md:h-10 hidden dark:block"
            />
          </a>
          <div class="hidden items-center gap-3 lg:flex">
            <For each={navLinks}>
              {(link) => (
                <button
                  onClick={() => handleNavClick(link.href)}
                  class="px-4 py-2 text-sm font-medium text-foreground bg-card border-2 border-border shadow-sharp transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  {link.label}
                </button>
              )}
            </For>
          </div>
          <div class="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              class="p-2 bg-card border-2 border-border shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              aria-label="Toggle theme"
            >
              <Show when={theme() === 'light'} fallback={<div class="i-lucide-sun h-5 w-5 text-foreground" />}>
                <div class="i-lucide-moon h-5 w-5 text-foreground" />
              </Show>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen())}
              class="p-2 lg:hidden bg-card border-2 border-border shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              aria-label="Toggle menu"
            >
              <Show when={isMenuOpen()} fallback={<div class="i-lucide-menu h-6 w-6 text-foreground" />}>
                <div class="i-lucide-x h-6 w-6 text-foreground" />
              </Show>
            </button>
          </div>
        </nav>
        <Show when={isMenuOpen()}>
          <div class="lg:hidden mt-4 pb-4">
            <div class="flex flex-col gap-3">
              <For each={navLinks}>
                {(link) => (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    class="px-4 py-3 text-base font-medium text-foreground bg-card border-2 border-border shadow-sharp transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-primary-foreground text-left"
                  >
                    {link.label}
                  </button>
                )}
              </For>
            </div>
          </div>
        </Show>
      </div>
    </header>
  )
}
