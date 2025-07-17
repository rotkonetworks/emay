import type React from "react"
import { cn } from "@/lib/utils"

type SharpCardProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function SharpCard({ children, className, as: Component = "div" }: SharpCardProps) {
  return (
    <Component className={cn("h-full bg-card p-6 border-2 border-black shadow-sharp", className)}>{children}</Component>
  )
}
