"use server"

import { z } from "zod"

type PreferredAuthMethod = "magic_link" | "oauth_github" | "crypto_ethereum"

// Simulate a database of existing users
const existingUsers: { email: string; preferredAuthMethod: PreferredAuthMethod }[] = [
  { email: "test@emay.me", preferredAuthMethod: "magic_link" },
  { email: "user@emay.me", preferredAuthMethod: "oauth_github" },
  { email: "demo@emay.me", preferredAuthMethod: "crypto_ethereum" },
]

export type AuthState = {
  status: "initial" | "success" | "error"
  message: string
  flow: "login" | "register"
  email?: string
  preferredAuthMethod?: PreferredAuthMethod
  isPremium?: boolean
}

const usernameSchema = z
  .string()
  .min(4, { message: "Username must be at least 4 characters long." })
  .max(20, { message: "Username cannot be longer than 20 characters." })
  .regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/, {
    message: "Username can only contain letters, numbers, and . _ -",
  })

const calculateEmailCost = (username: string): number => {
  const length = username.length
  if (length >= 7) return 0
  if (length === 6) return 5
  if (length === 5) return 10
  if (length >= 4) return 15
  return 999 // Invalid
}

export async function checkEmailStatus(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const username = formData.get("username") as string

  const validation = usernameSchema.safeParse(username)
  if (!validation.success) {
    return { ...prevState, status: "error", message: validation.error.errors[0].message, email: undefined }
  }

  const fullEmail = `${username.toLowerCase()}@emay.me`

  await new Promise((resolve) => setTimeout(resolve, 500))

  const existingUser = existingUsers.find((user) => user.email === fullEmail)

  if (existingUser) {
    // User exists, this is a login flow
    return {
      status: "success",
      message: "User found. Proceeding to login.",
      flow: "login",
      email: existingUser.email,
      preferredAuthMethod: existingUser.preferredAuthMethod,
      isPremium: calculateEmailCost(username) > 0,
    }
  } else {
    // User does not exist, this is a registration flow
    return {
      status: "success",
      message: "New user. Proceeding to registration.",
      flow: "register",
      email: fullEmail,
      isPremium: calculateEmailCost(username) > 0,
    }
  }
}
