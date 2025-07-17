export type FeatureOption = {
  value: string
  label: string
  price: number
  description?: string
}

export const domainOptions: FeatureOption[] = [
  { value: "0", label: "No custom domain", price: 0, description: "Use your @emay.me address" },
  { value: "1", label: "1 custom domain", price: 10, description: "e.g., you@yourcompany.com" },
  { value: "5", label: "Up to 5 domains", price: 20, description: "For all your projects" },
]

export function calculateStorageCost(totalGB: number): number {
  const freeGB = 0.1 // 100MB free
  if (totalGB <= freeGB) return 0

  let cost = 0
  // Tier 1: Up to 10GB total
  if (totalGB <= 10) {
    cost = (totalGB - freeGB) * 1
  }
  // Tier 2: 10GB to 50GB total
  else if (totalGB <= 50) {
    const firstTierCost = (10 - freeGB) * 1
    const secondTierGB = totalGB - 10
    cost = firstTierCost + secondTierGB * 0.8
  }
  // Tier 3: 50GB+ total
  else {
    const firstTierCost = (10 - freeGB) * 1
    const secondTierCost = 40 * 0.8
    const thirdTierGB = totalGB - 50
    cost = firstTierCost + secondTierCost + thirdTierGB * 0.5
  }

  return Number.parseFloat(cost.toFixed(2))
}

export function calculateEmailCost(username: string): { cost: number; length: number } {
  const length = username.length
  if (length === 0) return { cost: 0, length: 0 }
  if (length >= 7) return { cost: 0, length }
  if (length === 6) return { cost: 5, length }
  if (length === 5) return { cost: 10, length }
  if (length >= 4) return { cost: 15, length }
  // Addresses shorter than 4 chars are not offered via this builder
  return { cost: 999, length } // Set a high cost to indicate invalid
}

export const getOptionCost = (options: FeatureOption[], value: string): number => {
  return options.find((opt) => opt.value === value)?.price ?? 0
}
