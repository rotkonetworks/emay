import { GitBranch, Smartphone, type LucideIcon } from "lucide-react"

type FeatureCard = {
  title: string
  description: string
  Icon: LucideIcon
  iconBgColor: string
  iconColor: string
}

export const featureCards: FeatureCard[] = [
  {
    title: "Powered by JMAP",
    description:
      "We use JMAP, the modern successor to IMAP. This means faster message fetching, push notifications that don't drain your battery, and significantly less data usage.",
    Icon: GitBranch,
    iconBgColor: "bg-[#7916F3]/10",
    iconColor: "text-[#7916F3]",
  },
  {
    title: "Purpose-Built Clients",
    description:
      "A faster protocol deserves a faster client. Our web and upcoming native apps are designed to be minimal, performant, and a joy to use. No feature bloat, just pure speed and focus.",
    Icon: Smartphone,
    iconBgColor: "bg-[#07FFFF]/20",
    iconColor: "text-[#075f5f]",
  },
]
