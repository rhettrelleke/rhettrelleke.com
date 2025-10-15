export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">About</h1>
      <p className="mt-4 max-w-2xl muted">
        Write your story here — farm roots, curiosity, and how you blend code and music.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-medium">What I Value</h2>
          <ul className="mt-2 list-disc pl-5 muted">
            <li>Curiosity</li>
            <li>Craftsmanship</li>
            <li>Autonomy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">My Tools</h2>
          <ul className="mt-2 list-disc pl-5 muted">
            <li>Flutter / Dart</li>
            <li>Python</li>
            <li>Music production tools</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


