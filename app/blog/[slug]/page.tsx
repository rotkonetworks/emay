import { getPostBySlug, posts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import type { Metadata } from "next"
import Script from "next/script"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
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

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

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
            <article className="prose lg:prose-xl mx-auto">
              <div className="mb-8 text-center">
                <h1 className="mb-2">{post.title}</h1>
                <p className="text-base text-gray-500">
                  By {post.author} on {post.date}
                </p>
              </div>
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={index} className="font-bold">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }
                return <p key={index}>{paragraph}</p>
              })}
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
