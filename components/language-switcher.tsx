"use client"

import React, { useState, useMemo } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/lib/i18n/types"
import { Input } from "@/components/ui/input"

export const LanguageSwitcher = React.memo(function LanguageSwitcher() {
  const { locale, availableLocales, t } = useI18n()
  const pathname = usePathname()
  const router = useRouter()
  const [search, setSearch] = useState("")

  const handleLocaleChange = (newLocale: Locale) => {
    if (locale === newLocale) {
      return
    }
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  const filteredLocales = useMemo(
    () =>
      availableLocales.filter(
        (l) =>
          l.name.toLowerCase().includes(search.toLowerCase()) || l.locale.toLowerCase().includes(search.toLowerCase()),
      ),
    [availableLocales, search],
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/50 dark:bg-dark-green-button border-2 border-black shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
        >
          <Globe className="h-4 w-4 mr-2" />
          {availableLocales.find((l) => l.locale === locale)?.flag}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-card border-2 border-black shadow-sharp w-64 p-2">
        <Input
          type="text"
          placeholder={t("common.search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-2 bg-card border-black"
          onClick={(e) => e.stopPropagation()} // Prevent closing dropdown on click
        />
        <div className="max-h-60 overflow-y-auto">
          {filteredLocales.map((localeData) => (
            <DropdownMenuItem
              key={localeData.locale}
              onClick={() => handleLocaleChange(localeData.locale)}
              className="cursor-pointer hover:bg-emay-pink/10 focus:bg-emay-pink/10"
            >
              <span className="mr-2">{localeData.flag}</span>
              {localeData.name}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
