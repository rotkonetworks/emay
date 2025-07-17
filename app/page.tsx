import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SimplePricingSection } from "@/components/landing/simple-pricing-section"
import { AppPromoSection } from "@/components/landing/app-promo-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SimplePricingSection />
      <AppPromoSection />
      <Footer />
    </main>
  )
}
