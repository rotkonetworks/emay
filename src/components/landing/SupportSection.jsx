import { For } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { useI18n } from '@/lib/i18n'
import { SharpCard } from '../ui/SharpCard'
import { Button } from '../ui/Button'

export function SupportSection(props) {
 const { t, locale } = useI18n()
 const navigate = useNavigate()

 const supportCards = [
 {
 icon: 'i-lucide-help-circle',
 title: t('support.faq.title'),
 description: t('support.faq.description'),
 link: `/${locale()}/support`,
 linkText: t('support.faq.viewAll'),
 iconBgColor: 'bg-primary/10',
 iconColor: 'text-primary',
 },
 {
 icon: 'i-lucide-message-circle',
 title: t('support.contact.title'),
 description: t('support.contact.description'),
 link: `/${locale()}/support#contact`,
 linkText: t('support.contact.getHelp'),
 iconBgColor: 'bg-primary/10',
 iconColor: 'text-primary',
 },
 {
 icon: 'i-lucide-book',
 title: t('support.docs.title'),
 description: t('support.docs.description'),
 link: `/${locale()}/blog`,
 linkText: t('support.docs.readMore'),
 iconBgColor: 'bg-emay-cyan/20',
 iconColor: 'text-primary',
 },
 ]

 const faqs = props.initialFaqs || []

 return (
 <section id="support" class="bg-secondary/5 py-16 lg:py-24 scroll-mt-20">
 <div class="container mx-auto px-4">
 <div class="mb-12 text-center">
 <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t('support.sectionTitle')}</h2>
 <p class="mx-auto max-w-3xl text-lg text-muted-foreground">{t('support.sectionSubtitle')}</p>
 </div>

 <div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 mb-12">
 <For each={supportCards}>
 {(card) => (
 <div>
 <SharpCard class="bg-card text-center h-full flex flex-col">
 <div class={`mb-4 inline-flex h-12 w-12 items-center justify-center ${card.iconBgColor}`}>
 <div class={`${card.icon} h-6 w-6 ${card.iconColor}`} />
 </div>
 <h3 class="mb-3 text-xl font-semibold text-foreground">{card.title}</h3>
 <p class="mb-4 text-muted-foreground flex-1">{card.description}</p>
 <Button
 variant="link"
 class="p-0 font-semibold text-primary hover:text-primary/80"
 onClick={() => navigate(card.link)}
 >
 {card.linkText} <div class="i-lucide-arrow-right ml-1 h-4 w-4" />
 </Button>
 </SharpCard>
 </div>
 )}
 </For>
 </div>

 {faqs.length > 0 && (
 <div class="mx-auto max-w-3xl">
 <h3 class="mb-6 text-2xl font-bold text-foreground text-center">{t('support.popularQuestions')}</h3>
 <div class="space-y-4">
 <For each={faqs}>
 {(faq) => (
 <div>
 <SharpCard class="bg-card">
 <h4 class="font-semibold text-foreground mb-2">{faq.question}</h4>
 <p class="text-muted-foreground text-sm line-clamp-2">{faq.answer}</p>
 </SharpCard>
 </div>
 )}
 </For>
 </div>
 <div class="mt-8 text-center">
 <Button
 variant="outline"
 class="bg-card border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-white"
 onClick={() => navigate(`/${locale()}/support`)}
 >
 {t('support.viewAllFAQs')} <div class="i-lucide-arrow-right ml-2 h-4 w-4" />
 </Button>
 </div>
 </div>
 )}
 </div>
 </section>
 )
}
