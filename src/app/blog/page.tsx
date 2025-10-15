import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'

export default function BlogIndexPage() {
  const posts = getAllPostsMeta()
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight hover-gradient-text">Blog</h1>
      <div className="mt-8 space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="border-b border-neutral-200 pb-6">
            <h2 className="text-lg font-medium">
              <Link className="hover-gradient-text" href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-1 text-sm muted">{new Date(p.date).toLocaleDateString()}</p>
            {p.summary ? <p className="mt-2 muted">{p.summary}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}


