"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { featureCards } from "@/lib/data"
import Link from "next/link"
import { SharpCard } from "@/components/ui/sharp-card"
import React, { useMemo } from "react"

export const FeaturesSection = React.memo(function FeaturesSection() {
  const featureCardElements = useMemo(
    () =>
      featureCards.map(({ title, description, Icon, iconBgColor, iconColor }) => (
        <MotionWrapper tag="article" variants={fadeInUp} key={title}>
          <SharpCard className="bg-white dark:bg-background">
            <div className="mb-4 flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center ${iconBgColor}`}>
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">{title}</h3>
            </div>
            <p className="text-storm-700 dark:text-storm-400">{description}</p>
            {title === "Powered by JMAP" && (
              <Link href="/blog/why-jmap-is-the-future-of-email" passHref>
                <Button variant="link" className="mt-4 p-0 font-semibold text-[#7916F3]">
                  Learn about our tech <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            )}
          </SharpCard>
        </MotionWrapper>
      )),
    [],
  )

  return (
    <MotionWrapper
      id="features"
      tag="section"
      variants={staggerContainer}
      className="relative border-t-4 border-white dark:border-black bg-white dark:bg-card py-16 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Engineered for Speed & Simplicity
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-storm-700 dark:text-storm-400">
            We didn't just build another email service. We re-architected it from the ground up for performance and a
            better user experience.
          </p>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-12">{featureCardElements}</div>
      </div>
    </MotionWrapper>
  )
})
