"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type { Locale, TranslationKey, LocaleData } from "./types"
import { en } from "./locales/en"
import { es } from "./locales/es"
import { de } from "./locales/de"
import { fr } from "./locales/fr"
import { th } from "./locales/th"
import { id } from "./locales/id"
import { zh } from "./locales/zh"

const locales: Record<Locale, LocaleData> = {
  en,
  es,
  de,
  fr,
  th,
  id,
  zh,
}

type I18nContextType = {
  locale: Locale
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
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const localeFromPath = pathname.split("/")[1] as Locale
    if (locales[localeFromPath]) {
      setLocale(localeFromPath)
      document.documentElement.lang = localeFromPath
      localStorage.setItem("locale", localeFromPath)
    }
  }, [pathname])

  const t = (key: TranslationKey): string => {
    return locales[locale]?.translations[key] || key
  }

  const availableLocales = Object.values(locales)

  const contextValue = {
    locale,
    t,
    availableLocales,
  }

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}
