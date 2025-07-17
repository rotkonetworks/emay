"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Locale, TranslationKey, LocaleData } from "./types"
import { en } from "./locales/en"
import { es } from "./locales/es"
import { faqs } from "./content/faqs"
import { blogPosts } from "./content/blog-posts"

const locales: Record<Locale, LocaleData> = {
  en,
  es,
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
  availableLocales: LocaleData[]
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    // Check for saved locale or browser preference
    const savedLocale = localStorage.getItem("locale") as Locale | null
    const browserLocale = navigator.language.startsWith("es") ? "es" : "en"
    const initialLocale = savedLocale || browserLocale

    if (initialLocale !== locale) {
      setLocaleState(initialLocale)
    }
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
    // Update document language
    document.documentElement.lang = newLocale
  }

  const t = (key: TranslationKey): string => {
    return locales[locale]?.translations[key] || key
  }

  const availableLocales = Object.values(locales)

  return <I18nContext.Provider value={{ locale, setLocale, t, availableLocales }}>{children}</I18nContext.Provider>
}

// Server-side translation function
export function getTranslations(locale: Locale) {
  return locales[locale]?.translations || locales.en.translations
}

// Get localized content - now using direct imports
export function getLocalizedFAQs(locale: Locale) {
  return faqs[locale] || faqs.en
}

export function getLocalizedBlogPosts(locale: Locale) {
  return blogPosts[locale] || blogPosts.en
}
