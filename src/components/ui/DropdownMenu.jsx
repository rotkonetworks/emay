import { createSignal, Show, onMount, onCleanup } from 'solid-js'
import { Portal } from 'solid-js/web'
import { cn } from '@/lib/utils'

export function DropdownMenu(props) {
 const [isOpen, setIsOpen] = createSignal(false)
 
 return (
 <div class="relative">
 <div onClick={() => setIsOpen(!isOpen())}>
 {props.trigger}
 </div>
 <Show when={isOpen()}>
 <Portal>
 <div
 class="fixed inset-0 z-40"
 onClick={() => setIsOpen(false)}
 />
 <div class="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
 {props.children}
 </div>
 </Portal>
 </Show>
 </div>
 )
}

export function DropdownMenuItem(props) {
 return (
 <div
 class={cn(
 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
 props.class
 )}
 onClick={props.onClick}
 >
 {props.children}
 </div>
 )
}

export function DropdownMenuContent(props) {
 return (
 <div class={cn('bg-white border-2 border-black shadow-sharp w-64 p-2', props.class)}>
 {props.children}
 </div>
 )
}
