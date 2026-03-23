'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from './Button'

export interface NavLink {
  label: string
  href: string
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo: string
  links: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    { logo, links, ctaLabel = 'Order Now', ctaHref = '/order', className, ...props },
    ref
  ) => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
      <nav
        className={cn(
          'sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              {logo}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link href={ctaHref}>
                <Button variant="accent" size="md">
                  {ctaLabel}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                className="block"
                onClick={() => setMobileOpen(false)}
              >
                <Button variant="accent" size="md" className="w-full">
                  {ctaLabel}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    )
  }
)

Navbar.displayName = 'Navbar'

export { Navbar }
