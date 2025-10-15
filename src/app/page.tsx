export default function HomePage() {
  return (
    <>
      <section className="section">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight hover-gradient-text">I like to build things, make noise, and chase ideas.</h1>
        <p className="mt-4 max-w-2xl text-lg muted">
          Solo app developer, musician, and explorer of ideas.
        </p>
        <div className="mt-6 cta">
          <a
            href="/projects"
            className="inline-flex items-center rounded-md px-4 py-2 text-white shadow-sm transition-opacity hover:opacity-90 accent-gradient focus:shadow-[0_0_0_6px_rgba(99,102,241,0.15)] hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.25)]"
          >
            View My Work
          </a>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="font-medium">GuitarGuide</h3>
            <p className="muted mt-2">Interactive guitar learning app.</p>
            <a className="mt-4 inline-block text-accent hover:underline" href="https://guitarguide.app" target="_blank">guitarguide.app</a>
          </div>
          <div className="rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="font-medium">Frizzlord / Dorm Mold</h3>
            <p className="muted mt-2">Original music, production, and songwriting.</p>
            <a className="mt-4 inline-block text-accent hover:underline" href="https://open.spotify.com" target="_blank">Spotify</a>
          </div>
          <div className="rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="font-medium">Blog</h3>
            <p className="muted mt-2">Notes on building, music, and life experiments.</p>
            <a className="mt-4 inline-block text-accent hover:underline" href="/blog">Read the blog →</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-wrap items-center gap-3">
          <a href="/projects" className="rounded-full border px-3 py-1 text-sm hover-gradient-text" style={{ borderColor: 'var(--color-border)' }}>
            🎸 GuitarGuide
          </a>
          <a href="/music" className="rounded-full border px-3 py-1 text-sm hover-gradient-text" style={{ borderColor: 'var(--color-border)' }}>
            🎵 Frizzlord
          </a>
          <a href="/blog" className="rounded-full border px-3 py-1 text-sm hover-gradient-text" style={{ borderColor: 'var(--color-border)' }}>
            📝 Blog
          </a>
        </div>
      </section>
    </>
  )
}


