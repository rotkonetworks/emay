import { blogPosts } from './content/blog-posts'
import { faqs } from './content/faqs'

export function getLocalizedBlogPosts(locale) {
  return blogPosts[locale] || blogPosts.en
}

export function getLocalizedFAQs(locale) {
  return faqs[locale] || faqs.en
}
