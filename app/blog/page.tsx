import { Card, CardContent } from "@/components/ui/card"
import { posts } from "@/lib/blog-data"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - emay.me",
  description: "The official emay.me blog. Get updates, technical deep dives, and news about our fast email service.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
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
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
                <Card className="group transition-all duration-300 hover:border-emay-pink hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-2xl font-bold text-black transition-colors group-hover:text-emay-pink">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-[#6E7391]">{post.description}</p>
                    <div className="text-sm text-[#AEB7CB]">
                      <span>{post.author}</span> &middot; <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
