"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Clock, Calendar, User } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { SharpCard } from "@/components/ui/sharp-card"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/i18n/content/blog-posts"

export const BlogSection = React.memo(function BlogSection({ initialPosts }: { initialPosts: BlogPost[] }) {
  const { t, locale } = useI18n()

  if (!initialPosts || initialPosts.length === 0) {
    return null
  }

  return (
    <MotionWrapper tag="section" variants={staggerContainer} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <MotionWrapper tag="div" variants={fadeInUp} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t("blog.latestPosts")}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t("blog.latestPostsSubtitle")}</p>
        </MotionWrapper>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {initialPosts.map((post) => (
            <MotionWrapper tag="article" variants={fadeInUp} key={post.slug}>
              <Link href={`/${locale}/blog/${post.slug}`} className="block group h-full">
                <SharpCard className="bg-card h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-emay-pink mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 transition-colors group-hover:text-emay-pink flex-shrink-0" />
                  </div>
                </SharpCard>
              </Link>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper tag="div" variants={fadeInUp} className="mt-12 text-center">
          <Link href={`/${locale}/blog`}>
            <Button
              variant="outline"
              className="bg-card border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink hover:text-white"
            >
              {t("blog.viewAllPosts")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  )
})
