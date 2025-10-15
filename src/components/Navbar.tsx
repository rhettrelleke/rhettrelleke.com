import Link from 'next/link'
import clsx from 'clsx'
import ThemeToggle from './ThemeToggle'

const navItems: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
  { href: '/blog', label: 'Blog' },
  { href: '/music', label: 'Music' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  return (
    <header className="border-b" style={{ borderColor: 'var(--color-border)' }}>
      <nav className="container-page grid h-16 grid-cols-3 items-center">
        <div>
          <Link href="/" className="hidden md:inline-block font-semibold tracking-tight hover-gradient-text">
            Rhett Relleke
          </Link>
        </div>
        <div className="justify-self-center pr-12 md:pr-0 overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-3 md:gap-5 text-sm whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx('transition-colors hover-gradient-text')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="justify-self-end hidden md:block">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}


