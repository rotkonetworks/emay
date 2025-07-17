"use client"

import React from "react"
import { motion, type Variants } from "framer-motion"

type MotionWrapperProps = {
  children: React.ReactNode
  className?: string
  variants: Variants
  tag?: keyof typeof motion
  initial?: string
  whileInView?: string
  viewport?: object
}

export const MotionWrapper = React.memo(function MotionWrapper({
  children,
  className,
  variants,
  tag = "div",
  initial = "initial",
  whileInView = "animate",
  viewport = { once: true, amount: 0.2 },
}: MotionWrapperProps) {
  const MotionComponent = motion[tag]

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </MotionComponent>
  )
})
