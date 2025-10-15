export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">About</h1>
      <div className="mt-6 grid items-start gap-8 md:grid-cols-[1fr,280px]">
        <div>
          <p className="mt-2 max-w-2xl muted">
            I grew up close to the land and learned to value focus, patience, and hard work. Today I channel that into building
            useful tools and making music — keeping things practical, honest, and a little weird.
          </p>
          <p className="mt-4 max-w-2xl muted">
            My principles: curiosity (keep learning), craftsmanship (sweat the details), and autonomy (own the work). I’m most
            alive when I’m shipping, improving, and sharing what I learn along the way.
          </p>
        </div>
        <div className="justify-self-end">
          <img src="/images/about-portrait.jpg" alt="Rhett portrait" className="h-72 w-72 rounded-xl object-cover border" style={{ borderColor: 'var(--color-border)' }} />
        </div>
      </div>
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


