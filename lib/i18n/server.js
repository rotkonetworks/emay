
import { en } from "./locales/en.js"
import { es } from "./locales/es.js"
import { de } from "./locales/de.js"
import { fr } from "./locales/fr.js"
import { th } from "./locales/th.js"
import { id } from "./locales/id.js"
import { zh } from "./locales/zh.js"
import { faqs } from "./content/faqs.js"
import { blogPosts } from "./content/blog-posts.js"

const localesData = { en, es, de, fr, th, id, zh }

export const availableLocales = Object.keys(localesData) 

// Server-side translation function
export function getTranslations(locale) {
  return localesData[locale]?.translations || localesData.en.translations
}

// Get localized content
export function getLocalizedFAQs(locale) {
  return faqs[locale] || faqs.en
}

export function getLocalizedBlogPosts(locale) {
  return blogPosts[locale] || blogPosts.en
}
