"use client"
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
      className="rounded-md border border-neutral-300 px-2 py-1 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}


