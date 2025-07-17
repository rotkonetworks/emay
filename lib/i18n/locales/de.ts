import type { LocaleData } from "../types"
import { en } from "./en" // Use English as a fallback

export const de: LocaleData = {
  locale: "de",
  name: "Deutsch",
  flag: "🇩🇪",
  translations: {
    ...en.translations, // Copy English translations
    // --- Override with German translations ---
    "site.title": "emay.me - Schnelle, private E-Mail mit JMAP",
    "site.description":
      "Erleben Sie schnellere, privatere E-Mails mit emay.me, aufgebaut auf dem modernen JMAP-Protokoll. Verabschieden Sie sich von langsamen, überladenen Posteingängen.",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.support": "Hilfe",
    "nav.getStarted": "Loslegen",
    "hero.title": "Schnelle, private E-Mail.",
    "hero.titleHighlight": " Kostenlos.",
    "hero.subtitle":
      "Eine moderne E-Mail-Erfahrung mit Fokus auf Geschwindigkeit, Sicherheit und Einfachheit. In Sekunden von Null zum Postfach.",
    "features.title": "Entwickelt für Geschwindigkeit & Einfachheit",
    "pricing.title": "Einfache, transparente Preise",
    "app.title": "Native Android App. Bald verfügbar.",
    "app.notifyMe": "Benachrichtigen",
    "blog.title": "Der emay.me Blog",
    "support.title": "Hilfe-Center",
    "footer.tagline": "Der schnellste E-Mail-Dienst im Web.",
    "common.search": "Suchen...",
  },
}
