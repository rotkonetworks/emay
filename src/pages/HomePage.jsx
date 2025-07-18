import { Header } from '../components/landing/Header'
import { HeroSection } from '../components/landing/HeroSection'
import { FeaturesSection } from '../components/landing/FeaturesSection'
import { SimplePricingSection } from '../components/landing/SimplePricingSection'
import { BlogSection } from '../components/landing/BlogSection'
import { SupportSection } from '../components/landing/SupportSection'
import { AppPromoSection } from '../components/landing/AppPromoSection'
import { Footer } from '../components/landing/Footer'
import { useI18n } from '../lib/i18n'
import { getLocalizedBlogPosts, getLocalizedFAQs } from '../lib/i18n/server'

export default function HomePage() {
  const { locale } = useI18n()
  const latestPosts = getLocalizedBlogPosts(locale()).slice(0, 2)
  const popularFaqs = getLocalizedFAQs(locale()).slice(0, 3)

  return (
    <main class="min-h-screen">
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
