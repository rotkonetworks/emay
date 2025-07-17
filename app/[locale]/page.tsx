import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SimplePricingSection } from "@/components/landing/simple-pricing-section"
import { BlogSection } from "@/components/landing/blog-section"
import { SupportSection } from "@/components/landing/support-section"
import { AppPromoSection } from "@/components/landing/app-promo-section"
import { Footer } from "@/components/landing/footer"
import { getTranslations, getLocalizedBlogPosts, getLocalizedFAQs } from "@/lib/i18n/server"
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
        de: "https://emay.me/de",
        fr: "https://emay.me/fr",
        th: "https://emay.me/th",
        id: "https://emay.me/id",
        zh: "https://emay.me/zh",
      },
    },
  }
}

export default function HomePage({ params }: Props) {
  const latestPosts = getLocalizedBlogPosts(params.locale).slice(0, 2)
  const popularFaqs = getLocalizedFAQs(params.locale).slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SimplePricingSection />
      <BlogSection initialPosts={latestPosts} />
      <SupportSection initialFaqs={popularFaqs} />
      <AppPromoSection />
      <Footer />
    </main>
  )
}
