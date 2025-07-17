"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { checkEmailStatus, type AuthState } from "@/app/auth/action"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { StreamlinedAuthModal } from "./auth/streamlined-auth-modal"

const initialState: AuthState = {
  status: "initial",
  message: "",
  flow: "register",
}

export const HeroForm = React.memo(function HeroForm() {
  const [state, setState] = useState<AuthState>(initialState)
  const [isPending, setIsPending] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (state.status === "success" && state.email) {
      setIsModalOpen(true)
    }
  }, [state.status, state.email])

  const handleSubmit = useCallback(async (formData: FormData) => {
    setIsPending(true)
    try {
      const result = await checkEmailStatus(initialState, formData)
      setState(result)
    } catch (error) {
      setState({
        status: "error",
        message: "An error occurred. Please try again.",
        flow: "register",
      })
    } finally {
      setIsPending(false)
    }
  }, [])

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      handleSubmit(formData)
    },
    [handleSubmit],
  )

  const handleModalClose = useCallback((open: boolean) => {
    setIsModalOpen(open)
  }, [])

  const buttonIcon = useMemo(
    () => (isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowRight className="h-5 w-5" />),
    [isPending],
  )

  const errorMessage = useMemo(() => {
    if (state.status === "error" && state.message) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-3 flex items-start gap-2 p-3 text-sm bg-emay-pink/10 text-emay-pink border-2 border-emay-pink"
        >
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="flex-1">{state.message}</p>
        </motion.div>
      )
    }
    return null
  }, [state.status, state.message])

  return (
    <div className="w-full max-w-lg">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center gap-0 bg-white dark:bg-dark-green-field p-0 border-2 border-black shadow-sharp"
      >
        <div className="relative flex-grow">
          <Input
            type="text"
            name="username"
            placeholder="your.name"
            required
            className="h-12 w-full border-none bg-transparent pl-3 text-base focus-visible:ring-0 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300"
            aria-label="Enter your desired username"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-storm-400 dark:text-gray-300">@emay.me</span>
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-12 flex-shrink-0 rounded-none px-6 text-base font-semibold text-white bg-emay-pink border-l-2 border-black shadow-none transition-colors hover:bg-emay-pink/90"
          disabled={isPending}
        >
          {buttonIcon}
        </Button>
      </form>

      <AnimatePresence>{errorMessage}</AnimatePresence>

      <StreamlinedAuthModal isOpen={isModalOpen} onOpenChange={handleModalClose} authState={state} />
    </div>
  )
})
