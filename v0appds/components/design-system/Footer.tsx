import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface FooterColumn {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  bakeryName: string
  tagline: string
  columns: FooterColumn[]
  address?: string
  phone?: string
  email?: string
}


const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      bakeryName,
      tagline,
      columns = [] ,
      address,
      phone,
      email,
      className,
      ...props
    },
    ref
  ) => (
    <footer
      className={cn('bg-primary text-primary-foreground', className)}
      ref={ref}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground">
              {bakeryName}
            </h3>
            <p className="text-sm text-primary-foreground/80">{tagline}</p>
            {(address || phone || email) && (
              <div className="space-y-2 text-sm text-primary-foreground/80">
                {address && <p>{address}</p>}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {phone}
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {email}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {columns.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-semibold text-primary-foreground">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} {bakeryName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
)

Footer.displayName = 'Footer'

export { Footer }
