import { Show, createMemo } from 'solid-js'
import { useParams, useNavigate } from '@solidjs/router'
import { Header } from '../components/landing/Header'
import { Footer } from '../components/landing/Footer'
import { SharpCard } from '../components/ui/SharpCard'
import { Button } from '../components/ui/Button'
import { useI18n } from '../lib/i18n'
import { getLocalizedBlogPosts } from '../lib/i18n/server'

export default function BlogPostPage() {
  const params = useParams()
  const navigate = useNavigate()
  const { t, locale } = useI18n()
  
  const post = createMemo(() => {
    const posts = getLocalizedBlogPosts(locale())
    return posts.find((p) => p.slug === params.slug)
  })

  const displayDate = createMemo(() => {
    if (!post()) return ''
    return new Intl.DateTimeFormat(locale(), {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(post().date))
  })

  const handleBackClick = () => {
    navigate(locale() === 'en' ? '/blog' : `/${locale()}/blog`)
  }

  return (
    <div class="min-h-screen bg-background">
      <Header />
      <main class="pt-24 pb-16">
        <div class="container mx-auto px-4">
          <Show
            when={post()}
            fallback={
              <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-bold text-foreground">{t('blog.postNotFound')}</h1>
                <Button
                  class="mt-4"
                  onClick={handleBackClick}
                >
                  {t('blog.backToBlog')}
                </Button>
              </div>
            }
          >
            <div class="mx-auto max-w-4xl">
              {/* Back to blog link */}
              <button
                onClick={handleBackClick}
                class="inline-flex items-center gap-2 text-emay-pink hover:text-emay-pink/80 transition-colors mb-8 font-medium bg-transparent border-none cursor-pointer"
              >
                <span class="i-lucide-arrow-left h-4 w-4"></span>
                {t('blog.backToBlog')}
              </button>

              {/* Article header */}
              <SharpCard class="bg-card mb-8">
                <header class="text-center">
                  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    {post().title}
                  </h1>
                  <p class="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">{post().description}</p>
                  <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div class="flex items-center gap-2">
                      <span class="i-lucide-user h-4 w-4"></span>
                      <span>{post().author}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="i-lucide-calendar h-4 w-4"></span>
                      <span>{displayDate()}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="i-lucide-clock h-4 w-4"></span>
                      <span>{post().readTime}</span>
                    </div>
                  </div>
                </header>
              </SharpCard>

              {/* Article content */}
              <SharpCard class="bg-card">
                <article
                  class="prose prose-lg max-w-none
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
                  innerHTML={post().content}
                />
              </SharpCard>

              {/* Call to action */}
              <SharpCard class="bg-emay-lime/10 dark:bg-dark-green-button/20 mt-8 text-center">
                <h3 class="text-2xl font-bold text-foreground mb-4">{t('blog.readyToTry')}</h3>
                <p class="text-muted-foreground mb-6">{t('blog.ctaDescription')}</p>
                <Button
                  class="px-6 py-3 bg-emay-pink text-white font-semibold border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  onClick={() => navigate(locale() === 'en' ? '/' : `/${locale()}`)}
                >
                  {t('blog.getStartedFree')}
                </Button>
              </SharpCard>
            </div>
          </Show>
        </div>
      </main>
      <Footer />
    </div>
  )
}
