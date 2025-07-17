"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
        >
          <div className="container mx-auto h-full px-4">
            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="p-2 bg-white border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-16">
              <div className="flex flex-col gap-4 w-full max-w-xs">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="px-6 py-4 text-lg font-medium text-black bg-white border-2 border-black shadow-sharp transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink hover:text-white text-center"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
