import { cn } from '@/lib/utils'

export function SharpCard(props) {
  return (
    <div class={cn('sharp-card', props.class)}>
      {props.children}
    </div>
  )
}
