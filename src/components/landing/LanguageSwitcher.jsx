import { createSignal, For } from 'solid-js'
import { useNavigate, useLocation } from '@solidjs/router'
import { useI18n } from '@/lib/i18n'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function LanguageSwitcher() {
  const { locale, availableLocales } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setSearch] = createSignal('')
  const [isOpen, setIsOpen] = createSignal(false)

  const handleLocaleChange = (newLocale) => {
    if (locale() === newLocale) {
      setIsOpen(false)
      return
    }
    const pathname = location.pathname
    const newPathname = pathname.replace(`/${locale()}`, `/${newLocale}`)
    navigate(newPathname)
    setIsOpen(false)
  }

  const filteredLocales = () =>
    availableLocales.filter(
      (l) =>
        l.name.toLowerCase().includes(search().toLowerCase()) ||
        l.locale.toLowerCase().includes(search().toLowerCase())
    )

  return (
    <div class="relative">
      <Button
        variant="outline"
        size="sm"
        class="bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
        onClick={() => setIsOpen(!isOpen())}
      >
        <div class="i-lucide-globe h-4 w-4 mr-2" />
        {availableLocales.find((l) => l.locale === locale())?.flag}
      </Button>

      {isOpen() && (
        <>
          <div
            class="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div class="absolute right-0 mt-2 z-50 bg-white dark:bg-card border-2 border-black shadow-sharp w-64 p-2">
            <Input
              type="text"
              placeholder="Search..."
              value={search()}
              onInput={(e) => setSearch(e.target.value)}
              class="w-full mb-2 bg-card border-black"
              onClick={(e) => e.stopPropagation()}
            />
            <div class="max-h-60 overflow-y-auto">
              <For each={filteredLocales()}>
                {(localeData) => (
                  <div
                    class="cursor-pointer hover:bg-emay-pink/10 p-2 rounded flex items-center gap-2"
                    onClick={() => handleLocaleChange(localeData.locale)}
                  >
                    <span>{localeData.flag}</span>
                    {localeData.name}
                  </div>
                )}
              </For>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
