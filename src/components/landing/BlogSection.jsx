import { For } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { useI18n } from '@/lib/i18n'
import { SharpCard } from '../ui/SharpCard'
import { Button } from '../ui/Button'

export function BlogSection(props) {
 const { t, locale } = useI18n()
 const navigate = useNavigate()

 const posts = props.initialPosts || []

 if (!posts || posts.length === 0) {
 return null
 }

 return (
 <section class="bg-background py-16 lg:py-24">
 <div class="container mx-auto px-4">
 <div class="mb-12 text-center">
 <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t('blog.latestPosts')}</h2>
 <p class="mx-auto max-w-3xl text-lg text-muted-foreground">{t('blog.latestPostsSubtitle')}</p>
 </div>

 <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
 <For each={posts}>
 {(post) => (
 <article>
 <a href={`/${locale()}/blog/${post.slug}`} class="block group h-full">
 <SharpCard class="bg-card h-full flex flex-col">
 <div class="flex-1">
 <h3 class="text-xl font-bold text-foreground transition-colors group-hover:text-primary mb-3 line-clamp-2">
 {post.title}
 </h3>
 <p class="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
 </div>
 <div class="flex items-center justify-between text-sm text-muted-foreground mt-auto">
 <div class="flex items-center gap-4">
 <div class="flex items-center gap-1">
 <div class="i-lucide-user h-3 w-3" />
 <span>{post.author}</span>
 </div>
 <div class="flex items-center gap-1">
 <div class="i-lucide-calendar h-3 w-3" />
 <span>
 {new Intl.DateTimeFormat(locale(), {
 year: 'numeric',
 month: 'long',
 day: 'numeric',
 timeZone: 'UTC',
 }).format(new Date(post.date))}
 </span>
 </div>
 <div class="flex items-center gap-1">
 <div class="i-lucide-clock h-3 w-3" />
 <span>{post.readTime}</span>
 </div>
 </div>
 <div class="i-lucide-arrow-right h-4 w-4 transition-colors group-hover:text-primary flex-shrink-0" />
 </div>
 </SharpCard>
 </a>
 </article>
 )}
 </For>
 </div>

 <div class="mt-12 text-center">
 <Button
 variant="outline"
 class="bg-card border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-primary hover:text-primary-foreground"
 onClick={() => navigate(`/${locale()}/blog`)}
 >
 {t('blog.viewAllPosts')} <div class="i-lucide-arrow-right ml-2 h-4 w-4" />
 </Button>
 </div>
 </div>
 </section>
 )
}
