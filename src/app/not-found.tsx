import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight">404 — Not Found</h1>
      <p className="mt-2 text-neutral-700">The page you’re looking for doesn’t exist.</p>
      <p className="mt-6"><Link className="text-accent hover:underline" href="/">Go home</Link></p>
    </section>
  )
}


