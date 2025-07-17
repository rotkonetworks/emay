"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
    return () => document.body.classList.remove("no-scroll")
  }, [isMenuOpen])

  const handleGetStartedClick = () => {
    const emailInput = document.querySelector('input[name="username"]') as HTMLInputElement | null
    emailInput?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // For external links or other pages
      window.location.href = href
    }
  }

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-black/10 dark:border-white/10 bg-emay-lime/80 dark:bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" aria-label="Back to homepage">
              <Image
                src="/emay-logo.svg"
                alt="emay.me logo"
                width={120}
                height={40}
                className="h-8 w-auto md:h-10 dark:brightness-0 dark:invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-3 md:flex">
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
              <button
                onClick={toggleTheme}
                className="p-2 bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="h-5 w-5 text-black" /> : <Sun className="h-5 w-5 text-white" />}
              </button>
              <Button
                onClick={handleGetStartedClick}
                className="hidden sm:block text-white bg-emay-pink border-2 border-black shadow-sharp transition-all active:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 hover:bg-emay-pink/90 hover:shadow-none"
                aria-label="Get started with a new account"
              >
                Get Started
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 md:hidden bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
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
                  onClick={() => {
                    setIsMenuOpen(false)
                    handleGetStartedClick()
                  }}
                  className="text-white bg-emay-pink border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink/90"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
