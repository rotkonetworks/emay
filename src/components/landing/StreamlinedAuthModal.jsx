import { createSignal, createEffect, Show } from 'solid-js'
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/Dialog'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

export function StreamlinedAuthModal(props) {
  const [view, setView] = createSignal('main')
  const [email, setEmail] = createSignal('')

  createEffect(() => {
    if (props.isOpen) {
      setView('main')
      setEmail('')
    }
  })

  const handleMagicLink = () => {
    setView('magic_link_sent')
  }

  const handleOAuth = () => {
    setTimeout(() => {
      setView('oauth_success')
    }, 1000)
  }

  const handleBackToMain = () => {
    setView('main')
  }

  const handleContinueToInbox = () => {
    props.onOpenChange(false)
  }

  return (
    <DialogContent
      open={props.isOpen}
      onClose={() => props.onOpenChange(false)}
      class="sm:max-w-md bg-card border-2 border-border shadow-sharp"
    >
      <DialogHeader>
        <DialogTitle class="text-2xl flex items-center gap-3 text-foreground">
          <div class="i-lucide-circle-user-round h-8 w-8 text-primary" />
          {props.authState.flow === 'login' ? 'Welcome Back' : 'Create Your Account'}
        </DialogTitle>
        <DialogDescription class="text-muted-foreground">
          {props.authState.flow === 'login'
            ? `Sign in to your account for ${props.authState.email}.`
            : `Create your account for ${props.authState.email}.`}
          {props.authState.isPremium && (
            <span class="block mt-1 font-semibold text-primary">
              This is a premium address, free for 7 days.
            </span>
          )}
        </DialogDescription>
      </DialogHeader>
      
      <div class="pt-4 relative min-h-[16rem]">
        <Show when={view() === 'main'}>
          <div class="space-y-4">
            <Button
              onClick={handleMagicLink}
              class="w-full justify-start h-14 text-base border-2 border-border shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <div class="flex items-center gap-4">
                <div class="i-lucide-mail w-6 h-6" />
                <span class="font-semibold">Continue with Magic Link</span>
              </div>
            </Button>
            <Button
              onClick={handleOAuth}
              class="w-full justify-start h-14 text-base border-2 border-border shadow-sharp transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <div class="flex items-center gap-4">
                <div class="i-lucide-github w-6 h-6" />
                <span class="font-semibold">Continue with GitHub</span>
              </div>
            </Button>
            <div class="text-center text-sm text-muted-foreground mt-4">
              No passwords required. We'll send you a secure link or use OAuth.
            </div>
          </div>
        </Show>
        
        <Show when={view() === 'magic_link_sent'}>
          <div class="text-center">
            <button
              onClick={handleBackToMain}
              class="absolute top-4 left-4 text-muted-foreground hover:text-foreground"
            >
              <div class="i-lucide-arrow-left" />
            </button>
            <div class="flex justify-center mb-4">
              <div class="i-lucide-check-circle h-12 w-12 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-foreground">Check your email</h3>
            <p class="text-muted-foreground mt-2 mb-4">
              We've sent a secure login link to {props.authState.email}
            </p>
            <div class="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                class="h-12 text-center text-lg border-2 border-border focus:border-primary focus:ring-0 bg-background text-foreground"
              />
              <Button class="h-12 w-full bg-primary text-primary-foreground border-2 border-border shadow-sharp hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-primary/90">
                Verify
              </Button>
            </div>
          </div>
        </Show>
        
        <Show when={view() === 'oauth_success'}>
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="i-lucide-check-circle h-12 w-12 text-green-500" />
            </div>
            <h3 class="text-xl font-semibold text-foreground">Welcome to emay.me!</h3>
            <p class="text-muted-foreground mt-2 mb-4">
              Your account has been created successfully.
            </p>
            <Button
              onClick={handleContinueToInbox}
              class="h-12 w-full bg-primary text-primary-foreground border-2 border-border shadow-sharp hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-primary/90"
            >
              Continue to Inbox
            </Button>
          </div>
        </Show>
      </div>
    </DialogContent>
  )
}
