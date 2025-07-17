"use client"

import { useState, useMemo } from "react"
import { calculateStorageCost, calculateEmailCost, getOptionCost, domainOptions } from "@/lib/pricing-builder-data"
import { StorageSlider } from "./storage-slider"
import { FeatureSelector } from "./feature-selector"
import { PricingSummary } from "./pricing-summary"
import { EmailInput } from "./email-input"

export function PricingBuilder() {
  const [storage, setStorage] = useState(1)
  const [username, setUsername] = useState("")
  const [domains, setDomains] = useState("0")

  const costs = useMemo(() => {
    const storageCost = calculateStorageCost(storage)
    const emailInfo = calculateEmailCost(username)
    const domainCost = getOptionCost(domainOptions, domains)

    return {
      storage: { label: "Storage", cost: storageCost, details: `${storage} GB` },
      email: {
        label: "Custom Address",
        cost: emailInfo.cost < 999 ? emailInfo.cost : 0,
        details: username ? `${username}@emay.me` : "",
      },
      domain: { label: "Custom Domains", cost: domainCost, details: `${domains} domain(s)` },
    }
  }, [storage, username, domains])

  const totalAnnualCost = useMemo(() => {
    return Object.values(costs).reduce((acc, item) => acc + item.cost, 0)
  }, [costs])

  return (
    <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
      <div className="space-y-6 lg:col-span-2">
        <StorageSlider value={storage} onChange={setStorage} />
        <EmailInput value={username} onChange={setUsername} />
        <FeatureSelector title="Custom Domains" options={domainOptions} value={domains} onChange={setDomains} />
      </div>
      <div className="lg:col-span-1">
        <PricingSummary
          costs={Object.values(costs).filter((c) => c.cost > 0 || (c.label === "Storage" && storage > 0.1))}
          totalAnnual={totalAnnualCost}
        />
      </div>
    </div>
  )
}
