import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e9fd57]/95 backdrop-blur-sm border-b border-black/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" aria-label="Back to homepage">
            <Image src="/emay-logo.svg" alt="emay.me logo" width={120} height={40} className="h-8 w-auto md:h-10" />
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              className="px-3 text-sm text-black transition-transform duration-200 ease-in-out hover:bg-black/10 hover:-translate-y-0.5 active:translate-y-0 md:px-4 md:text-base"
              aria-label="Sign in to existing account"
            >
              Sign In
            </Button>
            <Button
              className="px-3 text-sm text-white bg-[#FF2670] shadow-md transition-transform duration-200 ease-in-out hover:bg-[#FF2670]/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 md:px-6 md:text-base"
              aria-label="Get started with free account"
            >
              Get Started Free
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
