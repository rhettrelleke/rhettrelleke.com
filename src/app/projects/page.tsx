const projects = [
  {
    title: 'GuitarGuide',
    description: 'Interactive guitar learning app.',
    href: 'https://guitarguide.app',
  },
  {
    title: 'Frizzlord / Dorm Mold',
    description: 'Original music & experimental sound.',
    href: 'https://open.spotify.com',
  },
  {
    title: '8 Queen Fitness',
    description: 'Python AI fitness challenge.',
    href: 'https://github.com',
  },
  {
    title: 'Blog',
    description: 'Essays & ideas on tech, music, and life.',
    href: '/blog',
  }
]

export default function ProjectsPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="block rounded-lg border p-6 transition-shadow hover:shadow-md"
            style={{ borderColor: 'var(--color-border)' }}
            target={p.href.startsWith('http') ? '_blank' : undefined}
          >
            <h3 className="font-medium hover-gradient-text">{p.title}</h3>
            <p className="muted mt-2">{p.description}</p>
            <span className="mt-4 inline-block link-accent">Visit →</span>
          </a>
        ))}
      </div>
    </section>
  )
}


