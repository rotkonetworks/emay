"use client"

import { ThemeContext, useThemeState } from "@/lib/theme"
import type React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeState = useThemeState()

  return <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
}
