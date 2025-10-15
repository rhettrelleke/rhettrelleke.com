export default function MusicPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">Music</h1>
      <div className="mt-6 grid items-start gap-8 md:grid-cols-[1fr,280px]">
        <div>
          <p className="mt-2 max-w-2xl muted">
            I release music as frizzlord.
          </p>
          <div className="mt-6">
            {/* Spotify artist embed */}
            <div className="rounded-xl border" style={{ borderColor: 'var(--color-border)' }}>
              <iframe
                src="https://open.spotify.com/embed/artist/48Hp0a20sZcBvzrDwDNi6S"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <div className="flex flex-col gap-6">
            <img src="/images/music-portrait-1.jpg" alt="Rhett music portrait 1" className="h-72 w-72 rounded-xl object-cover border" style={{ borderColor: 'var(--color-border)' }} />
            <img src="/images/music-portrait-2.jpg" alt="Rhett music portrait 2" className="h-72 w-72 rounded-xl object-cover border" style={{ borderColor: 'var(--color-border)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}


