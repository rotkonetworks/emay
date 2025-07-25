import { splitProps } from 'solid-js'
import { cn } from '@/lib/utils'

export function Button(props) {
 const [local, others] = splitProps(props, ['class', 'variant', 'size', 'children'])
 
 const variants = {
 default: 'bg-primary text-primary-foreground hover:bg-primary/90',
 outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
 ghost: 'hover:bg-accent hover:text-accent-foreground',
 link: 'text-primary underline-offset-4 hover:underline',
 }

 const sizes = {
 default: 'h-10 px-4 py-2',
 sm: 'h-9 rounded-md px-3',
 lg: 'h-11 rounded-md px-8',
 icon: 'h-10 w-10',
 }

 return (
 <button
 class={cn(
 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
 variants[local.variant || 'default'],
 sizes[local.size || 'default'],
 local.class
 )}
 {...others}
 >
 {local.children}
 </button>
 )
}
