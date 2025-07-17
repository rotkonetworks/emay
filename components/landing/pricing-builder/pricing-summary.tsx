"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

type CostItem = {
  label: string
  cost: number
  details?: string
}

type PricingSummaryProps = {
  costs: CostItem[]
  totalAnnual: number
}

export function PricingSummary({ costs, totalAnnual }: PricingSummaryProps) {
  const totalMonthly = totalAnnual > 0 ? (totalAnnual / 12).toFixed(2) : "0.00"
  const isPaidPlan = totalAnnual > 0

  return (
    <Card className="sticky top-24 shadow-xl">
      <CardHeader>
        <CardTitle>Your Custom Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3 min-h-[6rem]">
          {costs.length > 0 ? (
            costs.map(
              (item) =>
                item.cost > 0 && (
                  <li key={item.label} className="flex justify-between text-sm">
                    <span className="text-storm-700">
                      {item.label} {item.details && `(${item.details})`}
                    </span>
                    <span className="font-medium text-black">${item.cost.toFixed(2)}</span>
                  </li>
                ),
            )
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-center text-sm text-storm-700">Your plan is currently free.</p>
            </div>
          )}
        </ul>
        <div className="border-t pt-4 space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-lg font-semibold text-black">Total Annual Cost</span>
            <div className="flex items-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={totalAnnual}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl font-bold text-emay-pink"
                >
                  ${totalAnnual.toFixed(2)}
                </motion.span>
              </AnimatePresence>
              <span className="text-storm-700">/year</span>
            </div>
          </div>
          <div className="text-right text-sm text-storm-700">
            or <strong>${totalMonthly}</strong>/month
          </div>
        </div>
        <div className="space-y-3">
          {isPaidPlan ? (
            <Button size="lg" className="w-full bg-emay-pink text-white hover:bg-emay-pink/90">
              Upgrade Now
            </Button>
          ) : (
            <Button size="lg" className="w-full bg-emay-pink text-white hover:bg-emay-pink/90">
              Start Free
            </Button>
          )}
          <Button size="lg" variant="outline" className="w-full bg-transparent">
            Save Configuration
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
