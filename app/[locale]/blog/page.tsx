import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { getTranslations, getLocalizedBlogPosts } from "@/lib/i18n/server"
import type { Metadata, Viewport } from "next"
import type { Locale } from "@/lib/i18n/types"
import { SharpCard } from "@/components/ui/sharp-card"
import { Clock, ArrowRight } from "lucide-react"

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = getTranslations(params.locale)

  return {
    title: `${translations["blog.title"]} - emay.me`,
    description: translations["blog.subtitle"],
    alternates: {
      canonical: params.locale === "en" ? "https://emay.me/blog" : `https://emay.me/${params.locale}/blog`,
      languages: {
        en: "https://emay.me/blog",
        es: "https://emay.me/es/blog",
      },
    },
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF2670",
}

export default function BlogPage({ params }: Props) {
  const translations = getTranslations(params.locale)
  const posts = getLocalizedBlogPosts(params.locale)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">{translations["blog.title"]}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{translations["blog.subtitle"]}</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8">
            {posts.length === 0 ? (
              <SharpCard className="bg-card text-center py-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">No posts yet</h2>
                <p className="text-muted-foreground">{translations["blog.noPosts"]}</p>
              </SharpCard>
            ) : (
              posts.map((post) => (
                <Link href={`/${params.locale}/blog/${post.slug}`} key={post.slug} className="block group">
                  <SharpCard as="article" className="bg-card">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground transition-colors group-hover:text-emay-pink mb-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-3">{post.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{post.author}</span>
                          <span>&middot;</span>
                          <span>{post.date}</span>
                          <span>&middot;</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-emay-pink flex-shrink-0 mt-1" />
                    </div>
                  </SharpCard>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
