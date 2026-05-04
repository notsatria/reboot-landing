import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-dark/80 px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-text-primary no-underline">
          <span className="inline-block h-8 w-8 rounded-lg bg-streak-orange" />
          Reboot
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex">
          <a href="#features" className="transition hover:text-text-primary">Features</a>
          <a href="#screenshots" className="transition hover:text-text-primary">Screenshots</a>
          <a href="#download" className="transition hover:text-text-primary">Download</a>
        </div>
        <a
          href="#download"
          className="hidden rounded-full bg-streak-orange px-5 py-2 text-sm font-semibold text-white no-underline transition hover:bg-streak-orange-alt md:inline-block"
        >
          Download on Play Store
        </a>
        <button className="text-text-primary md:hidden" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
