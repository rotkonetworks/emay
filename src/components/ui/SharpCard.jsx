import { cn } from '@/lib/utils'

export function SharpCard(props) {
 return (
 <div class={cn(
 'bg-card p-6 border-2 border-border shadow-sharp',
 props.class
 )}>
 {props.children}
 </div>
 )
}
