import { createSignal, createContext, useContext, Show } from 'solid-js'
import { cn } from '@/lib/utils'

const AccordionContext = createContext()

export function Accordion(props) {
 const [openItems, setOpenItems] = createSignal(new Set())

 const toggle = (value) => {
 setOpenItems(prev => {
 const newSet = new Set(prev)
 if (newSet.has(value)) {
 newSet.delete(value)
 } else {
 if (props.type === 'single') {
 newSet.clear()
 }
 newSet.add(value)
 }
 return newSet
 })
 }

 return (
 <AccordionContext.Provider value={{ openItems, toggle }}>
 <div class={cn('w-full', props.class)}>
 {props.children}
 </div>
 </AccordionContext.Provider>
 )
}

export function AccordionItem(props) {
 return (
 <div class={cn('border-b', props.class)}>
 {props.children}
 </div>
 )
}

export function AccordionTrigger(props) {
 const { openItems, toggle } = useContext(AccordionContext)
 const isOpen = () => openItems().has(props.value)

 return (
 <button
 class={cn(
 'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left',
 props.class
 )}
 onClick={() => toggle(props.value)}
 >
 {props.children}
 <div
 class={cn(
 'i-lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200',
 isOpen() && 'rotate-180'
 )}
 />
 </button>
 )
}

export function AccordionContent(props) {
 const { openItems } = useContext(AccordionContext)
 const isOpen = () => openItems().has(props.value)

 return (
 <Show when={isOpen()}>
 <div class={cn('overflow-hidden text-sm transition-all', props.class)}>
 <div class="pb-4 pt-0">
 {props.children}
 </div>
 </div>
 </Show>
 )
}
