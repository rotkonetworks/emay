import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 bg-black dark:bg-black py-8 text-white dark:text-white border-t-4 border-white dark:border-black">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Link href="/" aria-label="Back to homepage">
            <Image
              src="/emay-icon.svg"
              alt="emay.me"
              width={100}
              height={32}
              className="h-8 w-auto filter dark:invert dark:brightness-0"
            />
          </Link>
        </div>
        <div className="mb-4 flex justify-center gap-4 text-[#AEB7CB] dark:text-gray-300">
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="/support" className="transition-colors hover:text-white">
            Support
          </Link>
        </div>
        <p className="text-[#DCE2E9] dark:text-gray-300">© 2024 emay.me. The fastest email service on the web.</p>
      </div>
    </footer>
  )
}
