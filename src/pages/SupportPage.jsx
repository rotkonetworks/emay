import { For, Show } from 'solid-js'
import { Header } from '../components/landing/Header'
import { Footer } from '../components/landing/Footer'
import { useI18n } from '../lib/i18n'
import { SharpCard } from '../components/ui/SharpCard'
import { Button } from '../components/ui/Button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/Accordion'
import { getLocalizedFAQs } from '../lib/i18n/server'

export default function SupportPage() {
 const { t, locale } = useI18n()
 const faqs = getLocalizedFAQs(locale())

 const contactOptions = [
 {
 icon: 'i-lucide-mail',
 title: t('support.contact.email.title'),
 description: t('support.contact.email.description'),
 action: t('support.contact.email.button'),
 badge: t('support.contact.paidPlan'),
 bgColor: 'bg-primary/10',
 iconColor: 'text-primary',
 },
 {
 icon: 'i-lucide-message-circle',
 title: t('support.contact.chat.title'),
 description: t('support.contact.chat.description'),
 action: t('support.contact.chat.button'),
 badge: t('support.contact.paidPlan'),
 bgColor: 'bg-primary/10',
 iconColor: 'text-primary',
 },
 {
 icon: 'i-lucide-users',
 title: t('support.contact.forum.title'),
 description: t('support.contact.forum.description'),
 action: t('support.contact.forum.button'),
 badge: t('support.contact.freeForAll'),
 bgColor: 'bg-emay-cyan/20',
 iconColor: 'text-primary',
 },
 ]

 return (
 <div class="min-h-screen bg-background">
 <Header />
 <main class="pt-24 pb-16">
 <div class="container mx-auto px-4">
 {/* Hero Section */}
 <div class="mx-auto max-w-3xl text-center mb-12">
 <h1 class="text-4xl font-bold text-foreground md:text-5xl mb-4">{t('support.title')}</h1>
 <p class="text-lg text-muted-foreground">{t('support.subtitle')}</p>
 </div>

 {/* FAQ Section */}
 <div class="mx-auto max-w-3xl mb-16">
 <SharpCard class="bg-card">
 <h2 class="text-2xl font-bold text-foreground mb-6">{t('support.faq.title')}</h2>
 <Accordion type="single" class="w-full">
 <For each={faqs}>
 {(faq, index) => (
 <AccordionItem value={`faq-${index()}`}>
 <AccordionTrigger value={`faq-${index()}`} class="text-left">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent value={`faq-${index()}`}>
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 )}
 </For>
 </Accordion>
 </SharpCard>
 </div>

 {/* Contact Options */}
 <div id="contact" class="mx-auto max-w-5xl">
 <h2 class="text-2xl font-bold text-foreground text-center mb-8">{t('support.getInTouch')}</h2>
 <div class="grid gap-6 md:grid-cols-3">
 <For each={contactOptions}>
 {(option) => (
 <SharpCard class="bg-card text-center">
 <div class={`inline-flex h-12 w-12 items-center justify-center ${option.bgColor} mb-4`}>
 <div class={`${option.icon} h-6 w-6 ${option.iconColor}`} />
 </div>
 <h3 class="text-xl font-semibold text-foreground mb-2">{option.title}</h3>
 <p class="text-muted-foreground mb-4">{option.description}</p>
 <div class="mb-4">
 <span class={`inline-block px-2 py-1 text-xs font-medium ${option.bgColor} ${option.iconColor} rounded`}>
 {option.badge}
 </span>
 </div>
 <Button
 variant="outline"
 class="border-2 border-black shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1"
 >
 {option.action}
 </Button>
 </SharpCard>
 )}
 </For>
 </div>
 </div>

 {/* Documentation Section */}
 <div class="mx-auto max-w-3xl mt-16">
 <SharpCard class="bg-emay-lime/10 text-center">
 <div class="i-lucide-book-open h-12 w-12 text-primary mx-auto mb-4" />
 <h2 class="text-2xl font-bold text-foreground mb-4">{t('support.docs.title')}</h2>
 <p class="text-muted-foreground mb-6">{t('support.docs.description')}</p>
 <Button
 variant="outline"
 class="border-2 border-black shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1"
 >
 {t('support.docs.readMore')}
 </Button>
 </SharpCard>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 )
}
