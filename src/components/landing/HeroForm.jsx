import { createSignal } from 'solid-js'
import { useI18n } from '@/lib/i18n'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { StreamlinedAuthModal } from './StreamlinedAuthModal'

export function HeroForm() {
 const { t } = useI18n()
 const [username, setUsername] = createSignal('')
 const [authState, setAuthState] = createSignal({
 status: 'initial',
 message: '',
 flow: 'register',
 email: '',
 isPremium: false,
 })
 const [isModalOpen, setIsModalOpen] = createSignal(false)

 const handleSubmit = async (e) => {
 e.preventDefault()
 const fullEmail = `${username().toLowerCase()}@emay.me`
 
 // Simulate auth check
 setAuthState({
 status: 'success',
 message: 'New user. Proceeding to registration.',
 flow: 'register',
 email: fullEmail,
 isPremium: username().length < 7,
 })
 setIsModalOpen(true)
 }

 return (
 <>
 <div class="w-full max-w-lg">
 <form
 onSubmit={handleSubmit}
 class="flex items-center gap-0 bg-card p-0 border-2 border-border shadow-sharp"
 >
 <div class="relative flex-grow">
 <Input
 type="text"
 name="username"
 placeholder={t('hero.form.placeholder')}
 required
 class="h-12 w-full border-none bg-transparent pl-3 text-base focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
 aria-label="Enter your desired username"
 value={username()}
 onInput={(e) => setUsername(e.target.value)}
 />
 <span class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
 {t('hero.form.suffix')}
 </span>
 </div>
 <Button
 type="submit"
 size="lg"
 class="h-12 flex-shrink-0 rounded-none px-6 text-base font-semibold text-primary-foreground bg-primary border-l-2 border-black shadow-none transition-colors hover:bg-primary/90"
 >
 <div class="i-lucide-arrow-right h-5 w-5" />
 </Button>
 </form>
 </div>

 <StreamlinedAuthModal
 isOpen={isModalOpen()}
 onOpenChange={setIsModalOpen}
 authState={authState()}
 />
 </>
 )
}
