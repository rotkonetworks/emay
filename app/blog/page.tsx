import { getAllPosts } from "@/lib/markdown"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import type { Metadata, Viewport } from "next"
import { SharpCard } from "@/components/ui/sharp-card"
import { Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - emay.me",
  description: "The official emay.me blog. Get updates, technical deep dives, and news about our fast email service.",
  alternates: {
    canonical: "/blog",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF2670",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-black md:text-5xl">The emay.me Blog</h1>
            <p className="mt-4 text-lg text-[#6E7391]">
              Updates, technical deep dives, and news from the team building the future of email.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8">
            {posts.length === 0 ? (
              <SharpCard className="bg-white text-center py-12">
                <h2 className="text-2xl font-bold text-black mb-4">No posts yet</h2>
                <p className="text-[#6E7391]">Check back soon for updates and insights from the emay.me team.</p>
              </SharpCard>
            ) : (
              posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                  <SharpCard as="article" className="bg-white">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-black transition-colors group-hover:text-emay-pink mb-2">
                          {post.title}
                        </h2>
                        <p className="text-[#6E7391] mb-3">{post.description}</p>
                        <div className="flex items-center gap-4 text-sm text-[#AEB7CB]">
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
                      <ArrowRight className="h-5 w-5 text-[#AEB7CB] transition-colors group-hover:text-emay-pink flex-shrink-0 mt-1" />
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
