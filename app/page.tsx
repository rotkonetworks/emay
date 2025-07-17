import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingBuilderSection } from "@/components/landing/pricing-builder-section"
import { AppPromoSection } from "@/components/landing/app-promo-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#e9fd57]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingBuilderSection />
      <AppPromoSection />
      <Footer />
    </main>
  )
}
