"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, Mail, CircleUserRound, CheckCircle, ArrowLeft } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import type { AuthState } from "@/app/auth/action"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

type StreamlinedAuthModalProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  authState: AuthState
}

type AuthView = "main" | "magic_link_sent" | "oauth_success"

export const StreamlinedAuthModal = React.memo(function StreamlinedAuthModal({
  isOpen,
  onOpenChange,
  authState,
}: StreamlinedAuthModalProps) {
  const { t } = useI18n()
  const [view, setView] = useState<AuthView>("main")
  const [email, setEmail] = useState("")
  const { flow, email: userEmail, isPremium } = authState

  useEffect(() => {
    if (isOpen) {
      setView("main")
      setEmail("")
    }
  }, [isOpen])

  const handleMagicLink = useCallback(() => {
    setView("magic_link_sent")
  }, [])

  const handleOAuth = useCallback(() => {
    setTimeout(() => {
      setView("oauth_success")
    }, 1000)
  }, [])

  const handleBackToMain = useCallback(() => {
    setView("main")
  }, [])

  const handleContinueToInbox = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  const renderContent = () => {
    switch (view) {
      case "magic_link_sent":
        return (
          <div className="text-center">
            <button
              onClick={handleBackToMain}
              className="absolute top-4 left-4 text-storm-400 hover:text-black dark:hover:text-white"
            >
              <ArrowLeft />
            </button>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-emay-pink" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white">{t("auth.checkEmail")}</h3>
            <p className="text-storm-700 dark:text-gray-300 mt-2 mb-4">We've sent a secure login link to {userEmail}</p>
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder={t("auth.verifyCode")}
                className="h-12 text-center text-lg border-2 border-black dark:border-gray-700 focus:border-emay-pink focus:ring-0 bg-white dark:bg-dark-green-field text-black dark:text-white"
              />
              <Button className="h-12 w-full bg-emay-pink text-white border-2 border-black shadow-sharp hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 hover:bg-emay-pink/90">
                {t("auth.verifyCode")}
              </Button>
            </div>
          </div>
        )

      case "oauth_success":
        return (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white">Welcome to emay.me!</h3>
            <p className="text-storm-700 dark:text-gray-300 mt-2 mb-4">Your account has been created successfully.</p>
            <Button
              onClick={handleContinueToInbox}
              className="h-12 w-full bg-emay-pink text-white border-2 border-black shadow-sharp hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-emay-pink/90"
            >
              {t("auth.continueToInbox")}
            </Button>
          </div>
        )

      case "main":
      default:
        return (
          <div className="space-y-4">
            <Button
              onClick={handleMagicLink}
              className="w-full justify-start h-14 text-base border-2 border-black dark:border-gray-700 shadow-sharp dark:shadow-sharp-dark transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-white dark:bg-dark-green-button text-black dark:text-white hover:bg-emay-pink hover:text-white"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">{t("auth.magicLink")}</span>
              </div>
            </Button>

            <Button
              onClick={handleOAuth}
              className="w-full justify-start h-14 text-base border-2 border-black dark:border-gray-700 shadow-sharp dark:shadow-sharp-dark transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-white dark:bg-dark-green-button text-black dark:text-white hover:bg-emay-pink hover:text-white"
            >
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6" />
                <span className="font-semibold">{t("auth.github")}</span>
              </div>
            </Button>

            <div className="text-center text-sm text-storm-700 dark:text-gray-300 mt-4">
              No passwords required. We'll send you a secure link or use OAuth.
            </div>
          </div>
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-card border-2 border-black shadow-sharp">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3 text-black dark:text-white">
            <CircleUserRound className="h-8 w-8 text-emay-pink" />
            {flow === "login" ? t("auth.welcomeBack") : t("auth.createAccount")}
          </DialogTitle>
          <DialogDescription className="text-storm-700 dark:text-gray-300">
            {flow === "login" ? `Sign in to your account for ${userEmail}.` : `Create your account for ${userEmail}.`}
            {isPremium && (
              <span className="block mt-1 font-semibold text-emay-violet">
                This is a premium address, free for 7 days.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4 relative min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
})
