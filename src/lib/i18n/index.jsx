import { createContext, useContext, createSignal, createEffect } from "solid-js"
import { en } from "./locales/en.js"
import { es } from "./locales/es.js"

const locales = {
  en,
  es,
}

const I18nContext = createContext()

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function I18nProvider(props) {
  const [locale, setLocaleSignal] = createSignal("en")

  createEffect(() => {
    // get locale from URL on mount
    const pathLocale = window.location.pathname.split("/")[1]
    
    if (pathLocale && locales[pathLocale]) {
      setLocaleSignal(pathLocale)
      document.documentElement.lang = pathLocale
      localStorage.setItem("locale", pathLocale)
    } else {
      // fallback to saved locale or default
      const savedLocale = localStorage.getItem("locale")
      if (savedLocale && locales[savedLocale]) {
        setLocaleSignal(savedLocale)
        document.documentElement.lang = savedLocale
      }
    }

    // listen for URL changes
    const handleLocationChange = () => {
      const newPathLocale = window.location.pathname.split("/")[1]
      if (newPathLocale && locales[newPathLocale] && newPathLocale !== locale()) {
        setLocaleSignal(newPathLocale)
        document.documentElement.lang = newPathLocale
        localStorage.setItem("locale", newPathLocale)
      }
    }

    window.addEventListener("popstate", handleLocationChange)
    
    // monitor for pushState/replaceState
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState
    
    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      handleLocationChange()
    }
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args)
      handleLocationChange()
    }

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
      history.pushState = originalPushState
      history.replaceState = originalReplaceState
    }
  })

  const setLocale = (newLocale) => {
    if (locales[newLocale]) {
      setLocaleSignal(newLocale)
      document.documentElement.lang = newLocale
      localStorage.setItem("locale", newLocale)
    }
  }

  const t = (key) => {
    return locales[locale()]?.translations[key] || key
  }

  const availableLocales = Object.values(locales)

  const contextValue = {
    locale,
    setLocale,
    t,
    availableLocales,
  }

  return (
    <I18nContext.Provider value={contextValue}>
      {props.children}
    </I18nContext.Provider>
  )
}
