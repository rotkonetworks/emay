import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { getTranslations, getLocalizedFAQs } from "@/lib/i18n"
import type { Metadata, Viewport } from "next"
import type { Locale } from "@/lib/i18n/types"
import Script from "next/script"
import { SharpCard } from "@/components/ui/sharp-card"
import { Mail, MessageCircle, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = getTranslations(params.locale)

  return {
    title: `${translations["support.title"]} - emay.me`,
    description: translations["support.subtitle"],
    alternates: {
      canonical: params.locale === "en" ? "https://emay.me/support" : `https://emay.me/${params.locale}/support`,
      languages: {
        en: "https://emay.me/support",
        es: "https://emay.me/es/support",
      },
    },
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF2670",
}

export default function SupportPage({ params }: Props) {
  const translations = getTranslations(params.locale)
  const faqs = getLocalizedFAQs(params.locale)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const contactOptions = [
    {
      Icon: Mail,
      title: translations["support.contact.email.title"],
      description: translations["support.contact.email.description"],
      buttonText: translations["support.contact.email.button"],
      href: "mailto:support@emay.me",
      badge: translations["support.contact.paidPlan"],
      badgeColor: "bg-emay-violet text-white",
    },
    {
      Icon: MessageCircle,
      title: translations["support.contact.chat.title"],
      description: translations["support.contact.chat.description"],
      buttonText: translations["support.contact.chat.button"],
      href: "#chat",
      badge: translations["support.contact.paidPlan"],
      badgeColor: "bg-emay-violet text-white",
    },
    {
      Icon: Users,
      title: translations["support.contact.forum.title"],
      description: translations["support.contact.forum.description"],
      buttonText: translations["support.contact.forum.button"],
      href: "/community",
      badge: translations["support.contact.freeForAll"],
      badgeColor: "bg-emay-lime text-emay-black",
    },
  ]

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">{translations["support.title"]}</h1>
              <p className="text-lg text-muted-foreground">{translations["support.subtitle"]}</p>
            </div>

            {/* Contact Options */}
            <div id="contact" className="mx-auto max-w-5xl mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                {translations["support.getInTouch"]}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {contactOptions.map((option) => (
                  <SharpCard key={option.title} className="bg-card text-center flex flex-col">
                    <div className="flex-grow">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-emay-pink/10 text-emay-pink">
                        <option.Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                    </div>
                    <div className="mt-auto">
                      <div
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${option.badgeColor}`}
                      >
                        {option.badge}
                      </div>
                      <Link href={option.href}>
                        <Button
                          variant="outline"
                          className="w-full bg-card border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink hover:text-white"
                        >
                          {option.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </SharpCard>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                {translations["support.popularQuestions"]}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
