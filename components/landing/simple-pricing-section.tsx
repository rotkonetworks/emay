import { Star, Users, Globe } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SharpCard } from "@/components/ui/sharp-card"

const features = [
  {
    Icon: Star,
    title: "Premium Addresses",
    description: "Secure a short, memorable @emay.me address.",
    price: "from $5/year",
  },
  {
    Icon: Users,
    title: "More Storage",
    description: "Increase your mailbox size as your needs grow.",
    price: "from $1/GB/year",
  },
  {
    Icon: Globe,
    title: "Custom Domains",
    description: "Use your own domain for a professional identity.",
    price: "from $10/year",
  },
]

export function SimplePricingSection() {
  return (
    <MotionWrapper
      id="pricing"
      tag="section"
      variants={staggerContainer}
      className="bg-emay-cyan/10 dark:bg-dark-green-button/20 py-16 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-storm-700 dark:text-storm-400">
            Our core service is free. Add premium features if and when you need them. No bundles, no pressure.
          </p>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <MotionWrapper tag="div" variants={fadeInUp} key={feature.title}>
              <SharpCard className="bg-white dark:bg-card text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-emay-pink/10 text-emay-pink">
                  <feature.Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{feature.title}</h3>
                <p className="mb-4 text-storm-700 dark:text-storm-400">{feature.description}</p>
                <p className="font-semibold text-black dark:text-white">{feature.price}</p>
              </SharpCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </MotionWrapper>
  )
}
