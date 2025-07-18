import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import { useI18n } from '@/lib/i18n'
import { SharpCard } from '@/components/ui/SharpCard'

export default function SupportPage() {
  const { t } = useI18n()

  return (
    <div class="min-h-screen bg-background">
      <Header />
      <main class="pt-24 pb-16">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-4xl font-bold text-foreground md:text-5xl">Support Center</h1>
            <p class="mt-4 text-lg text-muted-foreground">Have questions? We've got answers.</p>
          </div>

          <div class="mx-auto mt-12 max-w-3xl">
            <SharpCard class="bg-card">
              <h2 class="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p class="text-muted-foreground">FAQs will be listed here.</p>
            </SharpCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
