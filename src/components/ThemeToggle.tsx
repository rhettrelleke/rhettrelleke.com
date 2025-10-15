"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const next = theme === 'dark' ? 'light' : 'dark'

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-md border border-neutral-300 px-2 py-1 text-sm opacity-70 dark:border-neutral-600"
        disabled
      >
        Theme
      </button>
    )
  }

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


