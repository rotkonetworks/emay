// src/pages/BlogPostPage.jsx
import { Show, createMemo, createSignal, For, onMount, onCleanup } from 'solid-js'
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
 const [copied, setCopied] = createSignal(false)
 
 const allPosts = getLocalizedBlogPosts(locale())
 
 const post = createMemo(() => {
 return allPosts.find((p) => p.slug === params.slug)
 })
 
 // Get related posts (same category or random)
 const relatedPosts = createMemo(() => {
 if (!post()) return []
 
 let related = allPosts.filter(p => 
 p.slug !== post().slug && 
 p.category === post().category
 )
 
 // If not enough related posts, add some random ones
 if (related.length < 3) {
 const others = allPosts.filter(p => 
 p.slug !== post().slug && 
 (!post().category || p.category !== post().category)
 )
 related = [...related, ...others].slice(0, 3)
 }
 
 return related.slice(0, 3)
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
 
 const handleShare = async () => {
 const url = window.location.href
 
 if (navigator.share) {
 try {
 await navigator.share({
 title: post().title,
 text: post().description,
 url: url
 })
 } catch (err) {
 console.log('Error sharing:', err)
 }
 } else {
 // Fallback to clipboard
 await navigator.clipboard.writeText(url)
 setCopied(true)
 setTimeout(() => setCopied(false), 2000)
 }
 }
 
 // Estimate reading progress
 const [readingProgress, setReadingProgress] = createSignal(0)
 
 onMount(() => {
 const handleScroll = () => {
 const scrollTop = window.scrollY
 const docHeight = document.documentElement.scrollHeight - window.innerHeight
 const progress = Math.min((scrollTop / docHeight) * 100, 100)
 setReadingProgress(progress)
 }
 
 window.addEventListener('scroll', handleScroll)
 onCleanup(() => window.removeEventListener('scroll', handleScroll))
 })

 return (
 <div class="min-h-screen bg-background">
 <Header />
 
 {/* Reading Progress Bar */}
 <div class="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
 <div 
 class="h-full bg-primary transition-all duration-200"
 style={{ width: `${readingProgress()}%` }}
 />
 </div>
 
 <main class="pt-24 pb-16">
 <div class="container mx-auto px-4">
 <Show
 when={post()}
 fallback={
 <div class="mx-auto max-w-4xl text-center">
 <SharpCard class="bg-card py-12">
 <div class="i-lucide-file-x h-12 w-12 text-muted-foreground mx-auto mb-4" />
 <h1 class="text-4xl font-bold text-foreground mb-4">{t('blog.postNotFound')}</h1>
 <Button
 onClick={handleBackClick}
 variant="outline"
 class="border-2 border-black shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1"
 >
 <div class="i-lucide-arrow-left h-4 w-4 mr-2" />
 {t('blog.backToBlog')}
 </Button>
 </SharpCard>
 </div>
 }
 >
 <div class="mx-auto max-w-4xl">
 {/* Breadcrumb */}
 <nav class="mb-8">
 <ol class="flex items-center gap-2 text-sm text-muted-foreground">
 <li>
 <a href={locale() === 'en' ? '/' : `/${locale()}`} class="hover:text-foreground">
 Home
 </a>
 </li>
 <li class="i-lucide-chevron-right h-4 w-4" />
 <li>
 <a href={locale() === 'en' ? '/blog' : `/${locale()}/blog`} class="hover:text-foreground">
 Blog
 </a>
 </li>
 <li class="i-lucide-chevron-right h-4 w-4" />
 <li class="text-foreground">{post().title}</li>
 </ol>
 </nav>
 
 {/* Article Header */}
 <SharpCard class="bg-card mb-8">
 <header>
 {/* Category */}
 <Show when={post().category}>
 <span class="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded mb-4">
 {post().category}
 </span>
 </Show>
 
 <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
 {post().title}
 </h1>
 
 <p class="text-lg text-muted-foreground mb-6 max-w-3xl">
 {post().description}
 </p>
 
 <div class="flex flex-wrap items-center justify-between gap-4 border-t pt-6">
 <div class="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
 <div class="flex items-center gap-2">
 <div class="i-lucide-user h-4 w-4" />
 <span>{post().author}</span>
 </div>
 <div class="flex items-center gap-2">
 <div class="i-lucide-calendar h-4 w-4" />
 <span>{displayDate()}</span>
 </div>
 <div class="flex items-center gap-2">
 <div class="i-lucide-clock h-4 w-4" />
 <span>{post().readTime}</span>
 </div>
 </div>
 
 {/* Share Button */}
 <Button
 onClick={handleShare}
 variant="outline"
 size="sm"
 class="border-2 border-black shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1"
 >
 <Show when={!copied()} fallback={
 <>
 <div class="i-lucide-check h-4 w-4 mr-2" />
 Copied!
 </>
 }>
 <div class="i-lucide-share-2 h-4 w-4 mr-2" />
 Share
 </Show>
 </Button>
 </div>
 </header>
 </SharpCard>
 
 {/* Featured Image */}
 <Show when={post().image}>
 <SharpCard class="bg-card mb-8 p-0 overflow-hidden">
 <img 
 src={post().image} 
 alt={post().title}
 class="w-full h-auto"
 />
 </SharpCard>
 </Show>
 
 {/* Article Content */}
 <SharpCard class="bg-card">
 <article
 class="prose prose-lg max-w-none
 prose-headings:text-foreground prose-headings:font-bold
 prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
 prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
 prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
 prose-strong:text-foreground prose-strong:font-semibold
 prose-a:text-primary prose-a:no-underline hover:prose-a:underline
 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
 prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
 prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border-2 prose-pre:border-black prose-pre:shadow-sharp
 prose-ul:text-muted-foreground prose-ol:text-muted-foreground
 prose-li:mb-2
 prose-img:rounded-lg prose-img:border-2 prose-img:border-black prose-img:shadow-sharp
 prose-hr:border-border prose-hr:my-8"
 innerHTML={post().content}
 />
 </SharpCard>
 
 {/* Author Bio */}
 <SharpCard class="bg-emay-lime/10 mt-8">
 <div class="flex items-start gap-4">
 <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
 <div class="i-lucide-user h-8 w-8 text-primary" />
 </div>
 <div>
 <h3 class="font-bold text-foreground mb-1">About {post().author}</h3>
 <p class="text-sm text-muted-foreground">
 The emay.me team is passionate about building the future of email. 
 We believe in speed, privacy, and simplicity.
 </p>
 </div>
 </div>
 </SharpCard>
 
 {/* Related Posts */}
 <Show when={relatedPosts().length > 0}>
 <div class="mt-12">
 <h2 class="text-2xl font-bold text-foreground mb-6">Related Posts</h2>
 <div class="grid gap-6 md:grid-cols-3">
 <For each={relatedPosts()}>
 {(relatedPost) => (
 <a href={`/${locale()}/blog/${relatedPost.slug}`} class="block group">
 <SharpCard class="bg-card h-full hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
 <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
 {relatedPost.title}
 </h3>
 <p class="text-sm text-muted-foreground line-clamp-2 mb-3">
 {relatedPost.description}
 </p>
 <div class="flex items-center gap-2 text-xs text-muted-foreground">
 <div class="i-lucide-clock h-3 w-3" />
 <span>{relatedPost.readTime}</span>
 </div>
 </SharpCard>
 </a>
 )}
 </For>
 </div>
 </div>
 </Show>
 
 {/* Call to Action */}
 <SharpCard class="bg-primary text-white mt-12 text-center">
 <h3 class="text-2xl font-bold mb-4">{t('blog.readyToTry')}</h3>
 <p class="mb-6 text-white/90">{t('blog.ctaDescription')}</p>
 <Button
 class="bg-white text-primary font-semibold border-2 border-black shadow-sharp hover:shadow-none hover:translate-x-1 hover:translate-y-1"
 onClick={() => navigate(locale() === 'en' ? '/' : `/${locale()}`)}
 >
 {t('blog.getStartedFree')}
 <div class="i-lucide-arrow-right ml-2 h-4 w-4" />
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
