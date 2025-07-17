"use client"

import { Slider } from "@/components/ui/slider"

type StorageSliderProps = {
  value: number
  onChange: (value: number) => void
}

export function StorageSlider({ value, onChange }: StorageSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h4 className="text-lg font-semibold text-black">Storage</h4>
        <span className="text-2xl font-bold text-emay-violet">{value} GB</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        min={1}
        max={100}
        step={1}
        aria-label="Storage amount slider"
      />
      <div className="flex justify-between text-sm text-storm-700">
        <span>100 MB Free</span>
        <span>100 GB</span>
      </div>
    </div>
  )
}
