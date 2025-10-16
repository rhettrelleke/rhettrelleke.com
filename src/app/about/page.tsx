export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-semibold tracking-tight hover-gradient-text">About</h1>
      <div className="mt-6 grid items-start gap-8 md:grid-cols-[1fr,280px]">
        <div>
          <p className="mt-2 max-w-2xl muted">
            Growing up on a farm near St. Louis, Missouri, I developed a degree of introversion and a love for plants. 
            <br />
            <br />
            When I was 13, I built my first computer and started messing around with programming various things. I've been hooked ever since.
            <br />
            <br />
            When I was 16, I got my first acoustic guitar and started playing around with it. I've been hooked ever since.
          </p>
          <br></br>
          <h1 className="text-1xl font-semibold tracking-tight hover-gradient-text">My Principles</h1>
          <p className="mt-4 max-w-2xl muted">
            I have a constant curiosity about the world, this curiosity fuels my desire to keep learning and improving myself, a concept known to the Japanese as <a className="link-accent" href="https://en.wikipedia.org/wiki/Kaizen" target="_blank" rel="noopener noreferrer">Kaizen</a>
            . 
            <br></br>
            <br></br>
            Say what you will about astrology, but I myself am a Virgo, meaning I was blessed (<b>and cursed</b>) with an obsessive <a className="link-accent" href="https://en.wikipedia.org/wiki/Perfectionism_(psychology)" target="_blank" rel="noopener noreferrer">perfectionism</a>, which has its pros and cons.
            <br></br>
            <br></br>
            I’m most alive when I’m creating something, whether it be music, apps, plants, you get it.
          </p>
        </div>
        <div className="justify-self-end">
          <img src="/images/about-portrait.jpg" alt="Rhett portrait" className="h-72 w-72 rounded-xl object-cover border" style={{ borderColor: 'var(--color-border)' }} />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-medium">Personality Traits</h2>
          <ul className="mt-2 list-disc pl-5 muted">
            <li>Creativity</li>
            <li>Self Improvement</li>
            <li>Independence</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">My Tools</h2>
          <ul className="mt-2 list-disc pl-5 muted">
            <li>Flutter / Dart</li>
            <li>Next.js</li>
            <li>Mixcraft</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


