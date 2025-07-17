// Memoized constants to prevent recreation
export const NAV_LINKS = Object.freeze([
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
] as const)

export const FEATURE_CARDS = Object.freeze([
  {
    title: "Powered by JMAP",
    description:
      "We use JMAP, the modern successor to IMAP. This means faster message fetching, push notifications that don't drain your battery, and significantly less data usage.",
    iconBgColor: "bg-[#7916F3]/10",
    iconColor: "text-[#7916F3]",
  },
  {
    title: "Purpose-Built Clients",
    description:
      "A faster protocol deserves a faster client. Our web and upcoming native apps are designed to be minimal, performant, and a joy to use. No feature bloat, just pure speed and focus.",
    iconBgColor: "bg-[#07FFFF]/20",
    iconColor: "text-[#075f5f]",
  },
] as const)

export const PRICING_FEATURES = Object.freeze([
  {
    title: "Premium Addresses",
    description: "Secure a short, memorable @emay.me address.",
    price: "from $5/year",
  },
  {
    title: "More Storage",
    description: "Increase your mailbox size as your needs grow.",
    price: "from $1/GB/year",
  },
  {
    title: "Custom Domains",
    description: "Use your own domain for a professional identity.",
    price: "from $10/year",
  },
] as const)

export const ANIMATION_CONFIG = Object.freeze({
  STAGGER_DELAY: 0.1,
  HERO_STAGGER_DELAY: 0.15,
  HERO_DELAY_CHILDREN: 0.2,
  FADE_DURATION: 0.6,
  HERO_IMAGE_DURATION: 1,
} as const)
