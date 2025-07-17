"use client"

import React from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const LanguageSwitcher = React.memo(function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useI18n()

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
      <DropdownMenuContent align="end" className="bg-white dark:bg-card border-2 border-black shadow-sharp">
        {availableLocales.map((localeData) => (
          <DropdownMenuItem
            key={localeData.locale}
            onClick={() => setLocale(localeData.locale)}
            className="cursor-pointer hover:bg-emay-pink/10 focus:bg-emay-pink/10"
          >
            <span className="mr-2">{localeData.flag}</span>
            {localeData.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
