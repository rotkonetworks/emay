import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { notFound } from "next/navigation"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { SharpCard } from "@/components/ui/sharp-card"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return {}
  }
  return {
    title: `${post.title} - emay.me Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

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
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Back to blog link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-emay-pink hover:text-emay-pink/80 transition-colors mb-8 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Article header */}
              <SharpCard className="bg-white mb-8">
                <header className="text-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                    {post.title}
                  </h1>
                  <p className="text-lg text-[#6E7391] mb-6 max-w-3xl mx-auto">{post.description}</p>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#AEB7CB]">
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
              <SharpCard className="bg-white">
                <article
                  className="prose prose-lg max-w-none
                    prose-headings:text-black prose-headings:font-bold
                    prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                    prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                    prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                    prose-p:text-[#6E7391] prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-black prose-strong:font-semibold
                    prose-a:text-emay-pink prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-emay-pink prose-blockquote:pl-6 prose-blockquote:italic
                    prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded prose-pre:overflow-x-auto
                    prose-ul:text-[#6E7391] prose-ol:text-[#6E7391]
                    prose-li:mb-2
                    prose-hr:border-gray-200 prose-hr:my-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </SharpCard>

              {/* Call to action */}
              <SharpCard className="bg-emay-lime-subtle mt-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Ready to try emay.me?</h3>
                <p className="text-[#6E7391] mb-6">
                  Experience the fastest, most private email service. Get started in seconds.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-emay-pink text-white font-semibold border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  Get Started Free
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
