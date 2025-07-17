"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch, Smartphone } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Link from "next/link"
import { SharpCard } from "@/components/ui/sharp-card"
import React, { useMemo } from "react"
import { useI18n } from "@/lib/i18n"

export const FeaturesSection = React.memo(function FeaturesSection() {
  const { t, locale } = useI18n()

  const featureCards = useMemo(
    () => [
      {
        title: t("features.jmap.title"),
        description: t("features.jmap.description"),
        Icon: GitBranch,
        iconBgColor: "bg-[#7916F3]/10",
        iconColor: "text-[#7916F3]",
        learnMoreLink:
          locale === "es"
            ? `/${locale}/blog/por-que-jmap-es-el-futuro-del-email`
            : `/${locale}/blog/why-jmap-is-the-future-of-email`,
        learnMoreText: t("features.jmap.learnMore"),
      },
      {
        title: t("features.clients.title"),
        description: t("features.clients.description"),
        Icon: Smartphone,
        iconBgColor: "bg-[#07FFFF]/20",
        iconColor: "text-[#075f5f]",
      },
    ],
    [t, locale],
  )

  const featureCardElements = useMemo(
    () =>
      featureCards.map((feature) => (
        <MotionWrapper tag="article" variants={fadeInUp} key={feature.title}>
          <SharpCard className="bg-card">
            <div className="mb-4 flex items-center gap-4">
              <div className={`feature-icon-wrapper ${feature.iconBgColor}`}>
                <feature.Icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
            </div>
            <p className="text-muted-foreground">{feature.description}</p>
            {feature.learnMoreLink && (
              <Link href={feature.learnMoreLink} passHref>
                <Button variant="link" className="mt-4 p-0 font-semibold text-[#7916F3]">
                  {feature.learnMoreText} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            )}
          </SharpCard>
        </MotionWrapper>
      )),
    [featureCards],
  )

  return (
    <MotionWrapper
      id="features"
      tag="section"
      variants={staggerContainer}
      className="relative border-t-4 border-white dark:border-black bg-card py-16 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("features.title")}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t("features.subtitle")}</p>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-12">{featureCardElements}</div>
      </div>
    </MotionWrapper>
  )
})
