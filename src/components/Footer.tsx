import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <p className="text-sm muted">© {new Date().getFullYear()} Rhett Relleke</p>
        <div className="flex items-center gap-4 text-sm">
          <Link className="hover:text-accent" href="/now">/now</Link>
          <Link className="hover:text-accent" href="/privacy">Privacy</Link>
          <a className="hover:text-accent" href="mailto:hello@rhettrelleke.com">hello@rhettrelleke.com</a>
        </div>
        <div className="md:hidden mt-2">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}


