export default function NowPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight">Now</h1>
      <p className="mt-2 text-neutral-700">What I’m focused on right now.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="font-medium">Currently</h2>
          <ul className="mt-2 list-disc pl-5 text-neutral-700">
            <li>Finishing GuitarGuide MVP</li>
            <li>Recording new track</li>
            <li>Reading something interesting</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Next up</h2>
          <ul className="mt-2 list-disc pl-5 text-neutral-700">
            <li>Prep for festival set</li>
            <li>Launch beta</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-sm text-neutral-600">
        Inspired by Derek Sivers — submit your /now page to nownownow.com
      </p>
    </section>
  )
}


