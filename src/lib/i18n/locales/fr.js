
import { en } from "./en.js" // Use English as a fallback

export const fr = {
  locale: "fr",
  name: "Français",
  flag: "🇫🇷",
  translations: {
    ...en.translations, // Copy English translations
    // --- Override with French translations ---
    "site.title": "emay.me - E-mail rapide et privé basé sur JMAP",
    "site.description":
      "Découvrez un e-mail plus rapide et plus privé avec emay.me, construit sur le protocole moderne JMAP. Dites adieu aux boîtes de réception lentes et surchargées.",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Tarifs",
    "nav.support": "Support",
    "nav.getStarted": "Commencer",
    "hero.title": "E-mail rapide et privé.",
    "hero.titleHighlight": " Gratuit.",
    "hero.subtitle":
      "Une expérience e-mail moderne axée sur la vitesse, la sécurité et la simplicité. Passez de zéro à une boîte de réception en quelques secondes.",
    "features.title": "Conçu pour la vitesse et la simplicité",
    "pricing.title": "Tarifs simples et transparents",
    "app.title": "Application Android native. Bientôt disponible.",
    "app.notifyMe": "M'avertir",
    "blog.title": "Le blog emay.me",
    "support.title": "Centre d'aide",
    "footer.tagline": "Le service de messagerie le plus rapide du web.",
    "common.search": "Rechercher...",
  },
}
