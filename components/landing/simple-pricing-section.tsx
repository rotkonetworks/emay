"use client"

import React, { useMemo } from "react"
import { Star, Users, Globe } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SharpCard } from "@/components/ui/sharp-card"
import { useI18n } from "@/lib/i18n"

export const SimplePricingSection = React.memo(function SimplePricingSection() {
  const { t } = useI18n()

  const features = useMemo(
    () => [
      {
        Icon: Star,
        title: t("pricing.premium.title"),
        description: t("pricing.premium.description"),
        price: t("pricing.premium.price"),
      },
      {
        Icon: Users,
        title: t("pricing.storage.title"),
        description: t("pricing.storage.description"),
        price: t("pricing.storage.price"),
      },
      {
        Icon: Globe,
        title: t("pricing.domains.title"),
        description: t("pricing.domains.description"),
        price: t("pricing.domains.price"),
      },
    ],
    [t],
  )

  const featureElements = useMemo(
    () =>
      features.map((feature) => (
        <MotionWrapper tag="div" variants={fadeInUp} key={feature.title}>
          <SharpCard className="bg-card text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-emay-pink/10 text-emay-pink">
              <feature.Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
            <p className="mb-4 text-muted-foreground">{feature.description}</p>
            <p className="font-semibold text-foreground">{feature.price}</p>
          </SharpCard>
        </MotionWrapper>
      )),
    [features],
  )

  return (
    <MotionWrapper
      id="pricing"
      tag="section"
      variants={staggerContainer}
      className="bg-emay-cyan/10 dark:bg-dark-green-button/20 py-16 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("pricing.title")}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t("pricing.subtitle")}</p>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">{featureElements}</div>
      </div>
    </MotionWrapper>
  )
})
