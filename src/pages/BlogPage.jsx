import { For, Show } from 'solid-js'
import { Header } from '../components/landing/Header'
import { Footer } from '../components/landing/Footer'
import { useI18n } from '../lib/i18n'
import { SharpCard } from '../components/ui/SharpCard'
import { getLocalizedBlogPosts } from '../lib/i18n/server'

export default function BlogPage() {
  const { t, locale } = useI18n()
  const posts = getLocalizedBlogPosts(locale())

  return (
    <div class="min-h-screen bg-background">
      <Header />
      <main class="pt-24 pb-16">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-4xl font-bold text-foreground md:text-5xl">{t('blog.title')}</h1>
            <p class="mt-4 text-lg text-muted-foreground">{t('blog.subtitle')}</p>
          </div>

          <div class="mx-auto mt-12 grid max-w-4xl gap-8">
            <Show
              when={posts.length > 0}
              fallback={
                <SharpCard class="bg-card text-center py-12">
                  <h2 class="text-2xl font-bold text-foreground mb-4">No posts yet</h2>
                  <p class="text-muted-foreground">{t('blog.noPosts')}</p>
                </SharpCard>
              }
            >
              <For each={posts}>
                {(post) => (
                  <a href={`/${locale()}/blog/${post.slug}`} class="block group">
                    <SharpCard as="article" class="bg-card">
                      <div class="flex items-start justify-between gap-4 mb-4">
                        <div class="flex-1">
                          <h2 class="text-2xl font-bold text-foreground transition-colors group-hover:text-emay-pink mb-2">
                            {post.title}
                          </h2>
                          <p class="text-muted-foreground mb-3">{post.description}</p>
                          <div class="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{post.author}</span>
                            <span>&middot;</span>
                            <span>
                              {new Intl.DateTimeFormat(locale(), {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                timeZone: 'UTC',
                              }).format(new Date(post.date))}
                            </span>
                            <span>&middot;</span>
                            <div class="flex items-center gap-1">
                              <div class="i-lucide-clock h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <div class="i-lucide-arrow-right h-5 w-5 text-muted-foreground transition-colors group-hover:text-emay-pink flex-shrink-0 mt-1" />
                      </div>
                    </SharpCard>
                  </a>
                )}
              </For>
            </Show>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
