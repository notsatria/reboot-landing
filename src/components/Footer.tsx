import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-deeper px-4 pb-10 pt-12 text-text-secondary">
      <div className="page-wrap">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-text-primary">
              <span className="inline-block h-8 w-8 rounded-lg bg-streak-orange" />
              Reboot: Stop PMO
            </div>
            <p className="mt-2 max-w-xs text-sm">
              Your private companion for recovery. Track, reflect, and reclaim your life.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-text-primary">Navigation</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#features" className="transition hover:text-text-primary">Features</a>
                <a href="#screenshots" className="transition hover:text-text-primary">Screenshots</a>
                <a href="#download" className="transition hover:text-text-primary">Download</a>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-text-primary">Legal</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/privacy-policy" className="transition hover:text-text-primary">Privacy Policy</Link>
                <Link to="/terms-of-service" className="transition hover:text-text-primary">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs">
          &copy; {year} Reboot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
