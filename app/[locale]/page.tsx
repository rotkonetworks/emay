import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SimplePricingSection } from "@/components/landing/simple-pricing-section"
import { BlogSection } from "@/components/landing/blog-section"
import { SupportSection } from "@/components/landing/support-section"
import { AppPromoSection } from "@/components/landing/app-promo-section"
import { Footer } from "@/components/landing/footer"
import { getTranslations } from "@/lib/i18n"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/types"

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = getTranslations(params.locale)

  return {
    title: translations["site.title"],
    description: translations["site.description"],
    keywords: translations["site.keywords"],
    alternates: {
      canonical: params.locale === "en" ? "https://emay.me" : `https://emay.me/${params.locale}`,
      languages: {
        en: "https://emay.me",
        es: "https://emay.me/es",
      },
    },
  }
}

export default function HomePage({ params }: Props) {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SimplePricingSection />
      <BlogSection />
      <SupportSection />
      <AppPromoSection />
      <Footer />
    </main>
  )
}
