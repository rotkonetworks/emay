import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function AppPromoSection() {
  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <MotionWrapper
          tag="div"
          variants={staggerContainer}
          className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16"
        >
          <MotionWrapper tag="div" variants={fadeInUp} className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Native Android App. Coming Soon.</h2>
            <p className="mb-6 text-lg text-[#6E7391]">
              Get the full emay.me experience on the go. Our native Android app is in the final stages of development,
              designed for speed and simplicity.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 text-base"
                aria-label="Email for app notification"
              />
              <Button size="lg" className="h-12 bg-black text-white transition-colors hover:bg-black/80">
                Notify Me
              </Button>
            </form>
          </MotionWrapper>
          <MotionWrapper
            tag="div"
            variants={fadeInUp}
            className="relative mx-auto aspect-[9/19] max-w-xs overflow-hidden rounded-3xl shadow-2xl"
          >
            <Image
              src="/placeholder.svg?width=400&height=800"
              alt="emay.me Android App Preview"
              fill
              className="object-cover"
              loading="lazy"
            />
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  )
}
