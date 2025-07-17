"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { FeatureOption } from "@/lib/pricing-builder-data"

type FeatureSelectorProps = {
  title: string
  options: FeatureOption[]
  value: string
  onChange: (value: string) => void
}

export function FeatureSelector({ title, options, value, onChange }: FeatureSelectorProps) {
  return (
    <div>
      <h4 className="mb-3 text-lg font-semibold text-black">{title}</h4>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
        {options.map((option) => (
          <Label
            key={option.value}
            className={`flex items-center gap-3 rounded-lg border p-3 transition-all ${
              value === option.value ? "border-emay-violet bg-emay-violet/5" : "border-storm-200"
            }`}
          >
            <RadioGroupItem value={option.value} id={`${title}-${option.value}`} />
            <div className="grid gap-1.5">
              <span className="font-medium text-black">
                {option.label} <span className="text-sm font-normal text-storm-700">(+${option.price}/year)</span>
              </span>
              {option.description && <span className="text-xs text-storm-700">{option.description}</span>}
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}
