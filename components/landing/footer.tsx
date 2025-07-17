import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 bg-black py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Link href="/" aria-label="Back to homepage">
            <Image
              src="/emay-logo.svg"
              alt="emay.me"
              width={100}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
        </div>
        <div className="mb-4 flex justify-center gap-4 text-[#AEB7CB]">
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="/support" className="transition-colors hover:text-white">
            Support
          </Link>
        </div>
        <p className="text-[#DCE2E9]">© 2024 emay.me. The fastest email service on the web.</p>
      </div>
    </footer>
  )
}
