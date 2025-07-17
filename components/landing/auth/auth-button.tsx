"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

type AuthButtonProps = {
  icon: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
  isPrimary?: boolean
}

export function AuthButton({ icon, children, onClick, isPrimary = false }: AuthButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={`w-full justify-start h-14 text-base border-2 border-black shadow-sharp transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 ${
        isPrimary ? "bg-emay-pink text-white" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
        <span className="font-semibold">{children}</span>
      </div>
    </Button>
  )
}
