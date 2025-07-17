"use client"

import React, { useMemo } from "react"
import Link from "next/link"
import { ArrowRight, HelpCircle, MessageCircle, Book } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SharpCard } from "@/components/ui/sharp-card"
import { useI18n, getLocalizedFAQs } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export const SupportSection = React.memo(function SupportSection() {
  const { t, locale } = useI18n()

  const faqs = useMemo(() => {
    const allFaqs = getLocalizedFAQs(locale)
    return allFaqs.slice(0, 3) // Show only the first 3 FAQs
  }, [locale])

  const supportCards = useMemo(
    () => [
      {
        Icon: HelpCircle,
        title: t("support.faq.title"),
        description: t("support.faq.description"),
        link: `/${locale}/support`,
        linkText: t("support.faq.viewAll"),
        iconBgColor: "bg-emay-pink/10",
        iconColor: "text-emay-pink",
      },
      {
        Icon: MessageCircle,
        title: t("support.contact.title"),
        description: t("support.contact.description"),
        link: `/${locale}/support#contact`,
        linkText: t("support.contact.getHelp"),
        iconBgColor: "bg-emay-violet/10",
        iconColor: "text-emay-violet",
      },
      {
        Icon: Book,
        title: t("support.docs.title"),
        description: t("support.docs.description"),
        link: `/${locale}/blog`,
        linkText: t("support.docs.readMore"),
        iconBgColor: "bg-emay-cyan/20",
        iconColor: "text-[#075f5f]",
      },
    ],
    [t, locale],
  )

  return (
    <MotionWrapper
      id="support"
      tag="section"
      variants={staggerContainer}
      className="bg-emay-lime/5 dark:bg-dark-green-field/10 py-16 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("support.sectionTitle")}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t("support.sectionSubtitle")}</p>
        </MotionWrapper>

        {/* Support Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 mb-12">
          {supportCards.map((card) => (
            <MotionWrapper tag="div" variants={fadeInUp} key={card.title}>
              <SharpCard className="bg-card text-center h-full flex flex-col">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center ${card.iconBgColor}`}>
                  <card.Icon className={`h-6 w-6 ${card.iconColor}`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mb-4 text-muted-foreground flex-1">{card.description}</p>
                <Link href={card.link}>
                  <Button variant="link" className="p-0 font-semibold text-emay-pink hover:text-emay-pink/80">
                    {card.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </SharpCard>
            </MotionWrapper>
          ))}
        </div>

        {/* Popular FAQs Preview */}
        <MotionWrapper tag="div" variants={fadeInUp} className="mx-auto max-w-3xl">
          <h3 className="mb-6 text-2xl font-bold text-foreground text-center">{t("support.popularQuestions")}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <MotionWrapper tag="div" variants={fadeInUp} key={index}>
                <SharpCard className="bg-card">
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">{faq.answer}</p>
                </SharpCard>
              </MotionWrapper>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/support`}>
              <Button
                variant="outline"
                className="bg-card border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink hover:text-white"
              >
                {t("support.viewAllFAQs")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  )
})
