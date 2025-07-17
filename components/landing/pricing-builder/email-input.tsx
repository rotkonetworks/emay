"use client"

import { Input } from "@/components/ui/input"
import { calculateEmailCost } from "@/lib/pricing-builder-data"
import { motion, AnimatePresence } from "framer-motion"

type EmailInputProps = {
  value: string
  onChange: (value: string) => void
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  const { cost, length } = calculateEmailCost(value)

  let costLabel = "+$0/year"
  if (cost > 0 && cost < 999) {
    costLabel = `+$${cost}/year`
  }

  let lengthDescription = "7+ characters (Free)"
  if (length > 0 && length < 4) {
    lengthDescription = "3 characters or less not available"
  } else if (length >= 4 && length < 7) {
    lengthDescription = `${length} characters`
  } else if (length === 0) {
    lengthDescription = "Enter your desired username"
  }

  return (
    <div>
      <h4 className="mb-3 text-lg font-semibold text-black">Choose Your Address</h4>
      <div className="relative">
        <Input
          type="text"
          placeholder="your-name"
          value={value}
          onChange={(e) => onChange(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
          className="h-12 pr-28 text-base"
          maxLength={20}
          aria-label="Desired email username"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-base text-storm-700">@emay.me</div>
      </div>
      <div className="mt-2 flex h-6 items-center justify-between text-sm">
        <span className="text-storm-700">{lengthDescription}</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={cost}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className={`font-medium ${cost > 0 ? "text-emay-violet" : "text-storm-700"}`}
          >
            {cost < 999 && costLabel}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
