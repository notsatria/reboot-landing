import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Download', href: '#download' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-surface-dark/80 backdrop-blur-lg transition-[padding] duration-200 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav className="page-wrap flex items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-text-primary no-underline"
        >
          <span className="inline-block h-8 w-8 rounded-lg bg-streak-orange" />
          Reboot
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="hidden rounded-full bg-streak-orange px-5 py-2 text-sm font-semibold text-white no-underline transition hover:bg-streak-orange-alt md:inline-block"
        >
          Download on Play Store
        </a>

        {/* Mobile hamburger */}
        <button
          className="text-text-primary md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface-dark/95 backdrop-blur-lg md:hidden">
          <div className="page-wrap flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 inline-block rounded-full bg-streak-orange px-5 py-2.5 text-center text-sm font-semibold text-white no-underline transition hover:bg-streak-orange-alt"
              onClick={() => setMobileOpen(false)}
            >
              Download on Play Store
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
