"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { useI18n } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useRouter, usePathname } from "next/navigation"

export const Header = React.memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { t, locale } = useI18n()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
    return () => document.body.classList.remove("no-scroll")
  }, [isMenuOpen])

  const handleGetStartedClick = useCallback(() => {
    // If not on home page, navigate to home first
    const isOnHomePage = pathname === `/${locale}` || pathname === "/" || pathname === `/en` || pathname === `/es`

    if (!isOnHomePage) {
      router.push(`/${locale}`)
      setTimeout(() => {
        const emailInput = document.querySelector('input[name="username"]') as HTMLInputElement | null
        emailInput?.focus({ preventScroll: true })
      }, 100)
    } else {
      const emailInput = document.querySelector('input[name="username"]') as HTMLInputElement | null
      emailInput?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [router, locale, pathname])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMenuOpen(false)

      if (href.startsWith("#")) {
        const sectionId = href.substring(1) // Remove the #
        const isOnHomePage = pathname === `/${locale}` || pathname === "/" || pathname === `/en` || pathname === `/es`

        if (isOnHomePage) {
          // We're on home page, scroll to section
          setTimeout(() => scrollToSection(sectionId), 100)
        } else {
          // Navigate to home page first, then scroll
          router.push(`/${locale}`)
          setTimeout(() => scrollToSection(sectionId), 500)
        }
      } else {
        // Handle regular page navigation with locale
        const localizedPath = href.startsWith("/") ? `/${locale}${href}` : href
        router.push(localizedPath)
      }
    },
    [router, locale, pathname, scrollToSection],
  )

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleMobileGetStarted = useCallback(() => {
    setIsMenuOpen(false)
    handleGetStartedClick()
  }, [handleGetStartedClick])

  const navLinks = useMemo(
    () => [
      { href: "#features", label: t("nav.features") },
      { href: "#pricing", label: t("nav.pricing") },
      { href: "/blog", label: t("nav.blog") },
      { href: "/support", label: t("nav.support") },
    ],
    [t],
  )

  const themeIcon = useMemo(() => {
    return theme === "light" ? <Moon className="h-5 w-5 text-black" /> : <Sun className="h-5 w-5 text-white" />
  }, [theme])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-black/10 dark:border-white/10 bg-emay-lime/80 dark:bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href={`/${locale}`} aria-label="Back to homepage">
              <Image
                src="/emay-icon.svg"
                alt="emay.me logo"
                width={120}
                height={40}
                className="h-8 w-auto md:h-10 filter dark:invert dark:brightness-0"
                priority
              />
            </Link>

            {/* Desktop Navigation - only show on large screens */}
            <div className="hidden items-center gap-3 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-black dark:text-white bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink hover:text-white dark:hover:bg-emay-pink"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={toggleTheme}
                className="p-2 bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                aria-label="Toggle theme"
              >
                {themeIcon}
              </button>
              <Button
                onClick={handleGetStartedClick}
                className="hidden lg:block text-white bg-emay-pink border-2 border-black shadow-sharp transition-all active:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 hover:bg-emay-pink/90 hover:shadow-none"
                aria-label="Get started with a new account"
              >
                {t("nav.getStarted")}
              </Button>
              <button
                onClick={handleMenuToggle}
                className="p-2 lg:hidden bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-black dark:text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-black dark:text-white" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation - now shows on medium devices too */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-3 text-base font-medium text-black dark:text-white bg-white/80 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink hover:text-white text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={handleMobileGetStarted}
                  className="text-white bg-emay-pink border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink/90"
                >
                  {t("nav.getStarted")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
})
