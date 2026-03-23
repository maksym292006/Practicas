import React from 'react'
import { cn } from '@/lib/utils'

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: React.ReactNode
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    { title, subtitle, backgroundImage, children, className, ...props },
    ref
  ) => (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      ref={ref}
      {...props}
    >
      {/* Background image layer */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          aria-hidden="true"
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          'relative z-10 flex flex-col items-center justify-center gap-4 px-4 py-12 text-center md:py-20 lg:py-28',
          !backgroundImage && 'bg-gradient-to-b from-secondary to-secondary/80'
        )}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  )
)

Hero.displayName = 'Hero'

export { Hero }
