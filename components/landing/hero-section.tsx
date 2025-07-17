import React from "react"
import { Check } from "lucide-react"
import Image from "next/image"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, heroStaggerContainer, heroImageVariant } from "@/lib/animations"
import { HeroForm } from "./hero-form"

export const HeroSection = React.memo(function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-start pt-8 pb-16 lg:items-center bg-emay-lime dark:bg-background">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <MotionWrapper tag="div" variants={heroImageVariant} className="flex h-full">
          {/* Responsive left space: mobile (10%) -> sm (15%) -> md (20%) -> lg (35%) -> xl (40%) -> 2xl (45%) */}
          <div className="flex-[0.1] sm:flex-[0.15] md:flex-[0.2] lg:flex-[0.35] xl:flex-[0.4] 2xl:flex-[0.45]" />
          {/* Responsive image space: mobile (90%) -> sm (85%) -> md (80%) -> lg (65%) -> xl (60%) -> 2xl (55%) */}
          <div className="flex-[0.9] sm:flex-[0.85] md:flex-[0.8] lg:flex-[0.65] xl:flex-[0.6] 2xl:flex-[0.55] relative">
            <Image
              src="/emay-bg-new.svg"
              alt="Abstract background image"
              fill
              className="object-contain object-right-bottom"
              priority
              aria-hidden="true"
            />
          </div>
        </MotionWrapper>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <MotionWrapper
          tag="div"
          variants={heroStaggerContainer}
          className="grid min-h-[calc(100vh-12rem)] items-center gap-8 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <MotionWrapper tag="div" variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-7xl">
                Fast, Private Email.
                <span className="text-[#FF2670]"> For Free.</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-storm-700 dark:text-storm-400 md:text-xl">
                A modern email experience focused on speed, security, and simplicity. Get from zero to mailbox in
                seconds.
              </p>
            </MotionWrapper>

            <MotionWrapper tag="div" variants={fadeInUp}>
              <HeroForm />
            </MotionWrapper>

            <MotionWrapper
              tag="div"
              variants={fadeInUp}
              className="flex flex-col gap-4 text-sm text-black/80 dark:text-white/80 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0 text-[#FF2670]" />
                <span>No passwords, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0 text-[#FF2670]" />
                <span>Generous free plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0 text-[#FF2670]" />
                <span>7-day trial for premium names</span>
              </div>
            </MotionWrapper>
          </div>
          <div className="hidden lg:block" />
        </MotionWrapper>
      </div>
    </section>
  )
})
