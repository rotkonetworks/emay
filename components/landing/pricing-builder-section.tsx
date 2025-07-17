import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { PricingBuilder } from "./pricing-builder/pricing-builder"

export function PricingBuilderSection() {
  return (
    <MotionWrapper tag="section" variants={staggerContainer} className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Build Your Perfect Plan</h2>
          <p className="mx-auto max-w-3xl text-lg text-storm-700">
            Start free, then add only the features you need. No bundles, no bloat.
          </p>
        </MotionWrapper>
        <PricingBuilder />
      </div>
    </MotionWrapper>
  )
}
