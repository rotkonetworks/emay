"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, Wallet, Mail, CircleUserRound, ArrowLeft, CheckCircle } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { AuthButton } from "./auth-button"
import type { AuthState } from "@/app/auth/action"
import {
  XIcon,
  BlueskyIcon,
  GoogleIcon,
  AppleIcon,
  TelegramIcon,
  WhatsAppIcon,
  SolanaIcon,
  PolkadotIcon,
} from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const authOptions = {
  email: { icon: <Mail />, text: "Login with Email" },
  github: { icon: <Github />, text: "Login with GitHub" },
  oauth: { icon: <Github />, text: "Login with OAuth" },
  crypto: { icon: <Wallet />, text: "Login with Crypto" },
  telegram: { icon: <TelegramIcon />, text: "Login with Telegram" },
  whatsapp: { icon: <WhatsAppIcon />, text: "Login with WhatsApp" },
  solana: { icon: <SolanaIcon />, text: "Login with Solana" },
  polkadot: { icon: <PolkadotIcon />, text: "Login with Polkadot" },
}

type AuthModalProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  authState: AuthState
}

type AuthView = "main" | "preferred" | "magic_link" | "oauth" | "crypto" | "magic_link_sent"

export function AuthModal({ isOpen, onOpenChange, authState }: AuthModalProps) {
  const [view, setView] = useState<AuthView>("main")
  const [sentTo, setSentTo] = useState("")
  const { flow, email, preferredAuthMethod, isPremium } = authState

  useEffect(() => {
    if (isOpen) {
      setView(flow === "login" ? "preferred" : "main")
    }
  }, [isOpen, flow])

  const handleMagicLinkSend = (provider: string) => {
    setSentTo(provider)
    setView("magic_link_sent")
  }

  const BackButton = ({ to = "main" }: { to?: AuthView }) => (
    <button onClick={() => setView(to)} className="absolute top-4 left-4 text-storm-400 hover:text-black">
      <ArrowLeft />
    </button>
  )

  const renderContent = () => {
    switch (view) {
      case "preferred":
        const preferredOption = preferredAuthMethod ? authOptions[preferredAuthMethod] : null
        return (
          <div className="space-y-3">
            {preferredOption && (
              <AuthButton icon={preferredOption.icon} isPrimary>
                {preferredOption.text}
              </AuthButton>
            )}
            <button onClick={() => setView("main")} className="text-sm text-emay-pink hover:underline">
              Use another method
            </button>
          </div>
        )
      case "magic_link":
        return (
          <div className="space-y-3">
            <BackButton />
            <AuthButton icon={<Mail />} onClick={() => handleMagicLinkSend("Email")}>
              Continue with Email
            </AuthButton>
            <AuthButton icon={<TelegramIcon />} onClick={() => handleMagicLinkSend("Telegram")}>
              Continue with Telegram
            </AuthButton>
            <AuthButton icon={<WhatsAppIcon />} onClick={() => handleMagicLinkSend("WhatsApp")}>
              Continue with WhatsApp
            </AuthButton>
          </div>
        )
      case "oauth":
        return (
          <div className="space-y-3">
            <BackButton />
            <AuthButton icon={<Github />}>Continue with GitHub</AuthButton>
            <AuthButton icon={<GoogleIcon />}>Continue with Google</AuthButton>
            <AuthButton icon={<XIcon />}>Continue with X</AuthButton>
            <AuthButton icon={<BlueskyIcon />}>Continue with Bluesky</AuthButton>
            <AuthButton icon={<AppleIcon />}>Continue with Apple</AuthButton>
          </div>
        )
      case "crypto":
        return (
          <div className="space-y-3">
            <BackButton />
            <AuthButton icon={<Wallet />}>Continue with Ethereum</AuthButton>
            <AuthButton icon={<SolanaIcon />}>Continue with Solana</AuthButton>
            <AuthButton icon={<PolkadotIcon />}>Continue with Polkadot</AuthButton>
          </div>
        )
      case "magic_link_sent":
        return (
          <div className="text-center">
            <BackButton to="magic_link" />
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-emay-pink" />
            </div>
            <h3 className="text-xl font-semibold text-black">Check your {sentTo}</h3>
            <p className="text-storm-700 mt-2 mb-4">We've sent a secure link. You can also enter the code below.</p>
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                className="h-12 text-center text-lg border-2 border-black focus:border-emay-pink focus:ring-0"
              />
              <Button className="h-12 w-full bg-emay-pink text-white border-2 border-black shadow-sharp hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0">
                Verify
              </Button>
            </div>
          </div>
        )
      case "main":
      default:
        return (
          <div className="space-y-3">
            <AuthButton icon={<Mail />} onClick={() => setView("magic_link")}>
              Login with Magic Link
            </AuthButton>
            <AuthButton icon={<Github />} onClick={() => setView("oauth")}>
              Login with OAuth
            </AuthButton>
            <AuthButton icon={<Wallet />} onClick={() => setView("crypto")}>
              Login with Crypto
            </AuthButton>
          </div>
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-2 border-black shadow-sharp">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            <CircleUserRound className="h-8 w-8 text-emay-pink" />
            {flow === "login" ? "Welcome Back" : "Create Your Account"}
          </DialogTitle>
          <DialogDescription>
            {flow === "login"
              ? `Sign in to your account for ${email}.`
              : `Choose a secure, passwordless method to create your account for ${email}.`}
            {isPremium && (
              <span className="block mt-1 font-semibold text-emay-violet">
                This is a premium address, free for 7 days.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4 relative min-h-[18rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, x: view === "main" || view === "preferred" ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
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
}
