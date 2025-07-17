import type React from "react"

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
)

export const XIcon = () => (
  <IconWrapper>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconWrapper>
)
export const BlueskyIcon = () => (
  <IconWrapper>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    <path d="M15.5 16a2.5 2.5 0 0 1-2.7-2.2c-.2-.6-.4-1.2-.4-1.8a4 4 0 0 1 5.2-3.5c.3.2.5.4.7.7" />
  </IconWrapper>
)
export const GoogleIcon = () => (
  <IconWrapper>
    <path d="M12 12v-1a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3Z" />
    <path d="M12 12v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Z" />
    <path d="M12 12h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3Z" />
    <path d="M12 12h-1a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3Z" />
  </IconWrapper>
)
export const AppleIcon = () => (
  <IconWrapper>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </IconWrapper>
)
export const TelegramIcon = () => (
  <IconWrapper>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="m22 2-11 11" />
  </IconWrapper>
)
export const WhatsAppIcon = () => (
  <IconWrapper>
    <path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z" />
    <path d="m10 12-2 4 4-2" />
    <path d="m14 8-4 4" />
  </IconWrapper>
)
export const SolanaIcon = () => (
  <IconWrapper>
    <path d="M4 18h16" />
    <path d="M4 12h16" />
    <path d="M4 6h16" />
  </IconWrapper>
)
export const PolkadotIcon = () => (
  <IconWrapper>
    <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
    <path d="M8 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4Z" />
  </IconWrapper>
)
