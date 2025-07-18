import { createSignal, Show, onMount, onCleanup } from 'solid-js'
import { Portal } from 'solid-js/web'
import { cn } from '@/lib/utils'

export function Dialog(props) {
 return props.children
}

export function DialogContent(props) {
 let dialogRef

 onMount(() => {
 const handleEscape = (e) => {
 if (e.key === 'Escape' && props.onClose) {
 props.onClose()
 }
 }
 document.addEventListener('keydown', handleEscape)
 document.body.style.overflow = 'hidden'

 onCleanup(() => {
 document.removeEventListener('keydown', handleEscape)
 document.body.style.overflow = ''
 })
 })

 return (
 <Show when={props.open}>
 <Portal>
 <div class="fixed inset-0 z-50 flex items-center justify-center">
 <div
 class="fixed inset-0 bg-black/80 animate-in fade-in-0"
 onClick={props.onClose}
 />
 <div
 ref={dialogRef}
 class={cn(
 'fixed z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg',
 props.class
 )}
 >
 {props.children}
 <button
 class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
 onClick={props.onClose}
 >
 <div class="i-lucide-x h-4 w-4" />
 <span class="sr-only">Close</span>
 </button>
 </div>
 </div>
 </Portal>
 </Show>
 )
}

export function DialogHeader(props) {
 return (
 <div class={cn('flex flex-col space-y-1.5 text-center sm:text-left', props.class)}>
 {props.children}
 </div>
 )
}

export function DialogTitle(props) {
 return (
 <h2 class={cn('text-lg font-semibold leading-none tracking-tight', props.class)}>
 {props.children}
 </h2>
 )
}

export function DialogDescription(props) {
 return (
 <p class={cn('text-sm text-muted-foreground', props.class)}>
 {props.children}
 </p>
 )
}
