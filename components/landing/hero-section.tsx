import { Button } from "@/components/ui/button"
import { Mail, Check } from "lucide-react"
import Image from "next/image"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, heroStaggerContainer, heroImageVariant } from "@/lib/animations"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-start pt-8 pb-16 lg:items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <MotionWrapper tag="div" variants={heroImageVariant}>
          <Image
            src="/emay-bg-trans.webp"
            alt="Abstract background image"
            fill
            className="object-contain object-right-bottom"
            priority
            aria-hidden="true"
          />
        </MotionWrapper>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <MotionWrapper
          tag="div"
          variants={heroStaggerContainer}
          className="grid min-h-[calc(100vh-12rem)] items-center gap-8 lg:grid-cols-2"
        >
          <div className="space-y-6 rounded-2xl bg-white/80 p-6 backdrop-blur-sm lg:space-y-8 lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <MotionWrapper tag="div" variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl lg:text-7xl">
                The Fastest Email
                <span className="text-[#FF2670]"> Experience.</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-[#6E7391] md:text-xl">
                Go from signup to inbox in seconds. Get a blazingly fast, modern email that's built for speed and
                respects your privacy.
              </p>
            </MotionWrapper>

            <MotionWrapper tag="div" variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold text-white bg-[#FF2670] shadow-lg transition-all duration-200 ease-in-out hover:bg-[#FF2670]/90 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
                aria-label="Start using emay.me for free"
              >
                <Mail className="mr-2 h-5 w-5" />
                Start Free Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black bg-white/90 px-8 py-6 text-lg font-semibold text-black shadow-lg backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-black hover:text-white hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
                aria-label="Sign in to existing account"
              >
                Sign In
              </Button>
            </MotionWrapper>

            <MotionWrapper
              tag="div"
              variants={fadeInUp}
              className="flex flex-col gap-4 text-sm text-[#6E7391] sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0 text-[#FF2670]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0 text-[#FF2670]" />
                <span>Instant setup</span>
              </div>
            </MotionWrapper>
          </div>
          <div className="hidden lg:block" />
        </MotionWrapper>
      </div>
    </section>
  )
}
