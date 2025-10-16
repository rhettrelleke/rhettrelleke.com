export default function NowPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">Now</h1>
      <p className="mt-2 muted">What I’m focused on right now.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="font-medium accent-outline">Currently</h2>
          <ul className="mt-2 list-disc pl-5 muted">
            <li>Finishing GuitarGuide version 1.0</li>
            <li>Working on my personal website :)</li>
            <li>Experimenting with different half-caff coffee recipes</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium accent-outline">Next up <span className="dots"><span></span><span></span><span></span></span></h2>
          <ul className="mt-2 list-disc pl-5 muted">
            <li>Launch GuitarGuide closed beta</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-medium accent-outline">What I’m reading</h2>
        <ul className="mt-2 list-disc pl-5 muted">
          <li>
            <a> Life in Code: A Personal History of Technology by Ellen Ullman</a>
          </li>
        </ul>
      </div>

      <p className="mt-10 text-sm muted">
        Inspired by Derek Sivers — submit your /now page to nownownow.com
      </p>
    </section>
  )
}


