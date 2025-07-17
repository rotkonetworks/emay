import type { Locale } from "./types"
import { en } from "./locales/en"
import { es } from "./locales/es"
import { de } from "./locales/de"
import { fr } from "./locales/fr"
import { th } from "./locales/th"
import { id } from "./locales/id"
import { zh } from "./locales/zh"
import { faqs } from "./content/faqs"
import { blogPosts } from "./content/blog-posts"

const localesData = { en, es, de, fr, th, id, zh }

export const availableLocales = Object.keys(localesData) as Locale[]

// Server-side translation function
export function getTranslations(locale: Locale) {
  return localesData[locale]?.translations || localesData.en.translations
}

// Get localized content
export function getLocalizedFAQs(locale: Locale) {
  return faqs[locale] || faqs.en
}

export function getLocalizedBlogPosts(locale: Locale) {
  return blogPosts[locale] || blogPosts.en
}
