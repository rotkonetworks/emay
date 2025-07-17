import { getLocalizedBlogPosts } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { getTranslations } from "@/lib/i18n"
import type { Metadata, Viewport } from "next"
import type { Locale } from "@/lib/i18n/types"
import Script from "next/script"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { SharpCard } from "@/components/ui/sharp-card"

type Props = {
  params: { locale: Locale; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = getLocalizedBlogPosts(params.locale)
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - emay.me Blog`,
    description: post.description,
    alternates: {
      canonical:
        params.locale === "en"
          ? `https://emay.me/blog/${post.slug}`
          : `https://emay.me/${params.locale}/blog/${post.slug}`,
      languages: {
        en: `https://emay.me/blog/${post.slug}`,
        es: `https://emay.me/es/blog/${post.slug}`,
      },
    },
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF2670",
}

export async function generateStaticParams() {
  const enPosts = getLocalizedBlogPosts("en")
  const esPosts = getLocalizedBlogPosts("es")

  return [
    ...enPosts.map((post) => ({ locale: "en" as const, slug: post.slug })),
    ...esPosts.map((post) => ({ locale: "es" as const, slug: post.slug })),
  ]
}

export default function BlogPostPage({ params }: Props) {
  const translations = getTranslations(params.locale)
  const posts = getLocalizedBlogPosts(params.locale)
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: "emay.me",
    },
    publisher: {
      "@type": "Organization",
      name: "emay.me",
      logo: {
        "@type": "ImageObject",
        url: "https://emay.me/emay-logo.svg",
      },
    },
  }

  return (
    <>
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </Script>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Back to blog link */}
              <Link
                href={`/${params.locale}/blog`}
                className="inline-flex items-center gap-2 text-emay-pink hover:text-emay-pink/80 transition-colors mb-8 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                {translations["blog.backToBlog"]}
              </Link>

              {/* Article header */}
              <SharpCard className="bg-card mb-8">
                <header className="text-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    {post.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">{post.description}</p>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </header>
              </SharpCard>

              {/* Article content */}
              <SharpCard className="bg-card">
                <article
                  className="prose prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                    prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                    prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-emay-pink prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-emay-pink prose-blockquote:pl-6 prose-blockquote:italic
                    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded prose-pre:overflow-x-auto
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                    prose-li:mb-2
                    prose-hr:border-border prose-hr:my-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </SharpCard>

              {/* Call to action */}
              <SharpCard className="bg-emay-lime/10 dark:bg-dark-green-button/20 mt-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">{translations["blog.readyToTry"]}</h3>
                <p className="text-muted-foreground mb-6">
                  Experience the fastest, most private email service. Get started in seconds.
                </p>
                <Link
                  href={`/${params.locale}`}
                  className="inline-block px-6 py-3 bg-emay-pink text-white font-semibold border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  {translations["blog.getStartedFree"]}
                </Link>
              </SharpCard>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
