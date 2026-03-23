import React from 'react'
import { cn } from '@/lib/utils'

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  href?: string
  isClickable?: boolean
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    { icon, title, description, href, isClickable = false, className, ...props },
    ref
  ) => {
    const content = (
      <div
        className={cn(
          'flex flex-col items-center gap-4 p-6 rounded-lg border-2 border-border bg-card text-card-foreground transition-all duration-200',
          isClickable && 'hover:border-primary hover:shadow-lg active:scale-95',
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && (
          <div className="text-4xl" role="img" aria-hidden="true">
            {icon}
          </div>
        )}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    )

    if (href) {
      return (
        <a
          href={href}
          className="no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        >
          {content}
        </a>
      )
    }

    return content
  }
)

ServiceCard.displayName = 'ServiceCard'

export { ServiceCard }
