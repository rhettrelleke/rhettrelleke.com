export default function MusicPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">Music</h1>
      <p className="mt-2 max-w-2xl muted">
        I release music as Frizzlord and Dorm Mold.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 p-6">
          <h3 className="font-medium">Frizzlord</h3>
          <a className="mt-2 inline-block text-accent hover:underline" href="https://open.spotify.com" target="_blank">Listen on Spotify</a>
        </div>
        <div className="rounded-lg border border-neutral-200 p-6">
          <h3 className="font-medium">Dorm Mold</h3>
          <a className="mt-2 inline-block text-accent hover:underline" href="https://bandcamp.com" target="_blank">Listen on Bandcamp</a>
        </div>
      </div>
    </section>
  )
}


