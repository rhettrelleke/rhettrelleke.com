import Link from 'next/link'
import clsx from 'clsx'

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
    <header className="border-b border-neutral-200">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Rhett Relleke
        </Link>
        <ul className="flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'transition-colors hover:text-accent'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


