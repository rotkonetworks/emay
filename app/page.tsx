import { redirect } from "next/navigation"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SimplePricingSection } from "@/components/landing/simple-pricing-section"
import { AppPromoSection } from "@/components/landing/app-promo-section"
import { Footer } from "@/components/landing/footer"

export default function RootPage() {
  // Default to English for the root page
  redirect("/en")

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
