import { createSignal, For, Show } from 'solid-js'
import { useNavigate, useLocation } from '@solidjs/router'
import { useI18n } from '@/lib/i18n'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function LanguageSwitcher() {
 const { locale, availableLocales, setLocale } = useI18n()
 const navigate = useNavigate()
 const location = useLocation()
 const [search, setSearch] = createSignal('')
 const [isOpen, setIsOpen] = createSignal(false)

 const handleLocaleChange = (newLocale) => {
 if (locale() === newLocale) {
 setIsOpen(false)
 return
 }
 
 // Update the locale
 setLocale(newLocale)
 
 // Get current path without locale prefix
 const pathname = location.pathname
 let cleanPath = pathname
 
 // Remove existing locale prefix if present
 const currentLocale = locale()
 if (currentLocale !== 'en' && pathname.startsWith(`/${currentLocale}`)) {
 cleanPath = pathname.substring(currentLocale.length + 1) || '/'
 } else if (pathname.startsWith('/en')) {
 cleanPath = pathname.substring(3) || '/'
 }
 
 // Build new path with new locale
 let newPath
 if (newLocale === 'en') {
 newPath = cleanPath
 } else {
 newPath = `/${newLocale}${cleanPath === '/' ? '' : cleanPath}`
 }
 
 navigate(newPath)
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
 class="bg-card border-2 border-border shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
 onClick={() => setIsOpen(!isOpen())}
 >
 <div class="i-lucide-globe h-4 w-4 mr-2" />
 {availableLocales.find((l) => l.locale === locale())?.flag}
 </Button>
 <Show when={isOpen()}>
 <>
 <div
 class="fixed inset-0 z-40"
 onClick={() => setIsOpen(false)}
 />
 <div class="absolute right-0 mt-2 z-50 bg-card border-2 border-border shadow-sharp w-64 p-2">
 <Input
 type="text"
 placeholder="Search..."
 value={search()}
 onInput={(e) => setSearch(e.target.value)}
 class="w-full mb-2 bg-background border-border"
 onClick={(e) => e.stopPropagation()}
 />
 <div class="max-h-60 overflow-y-auto">
 <For each={filteredLocales()}>
 {(localeData) => (
 <div
 class="cursor-pointer hover:bg-primary/10 p-2 rounded flex items-center gap-2 text-foreground"
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
 </Show>
 </div>
 )
}
