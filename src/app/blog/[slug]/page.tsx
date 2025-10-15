import type { Metadata } from 'next'
import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx'

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostsMeta().map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Not found' }
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      url: `https://rhettrelleke.com/blog/${post.meta.slug}`,
      type: 'article',
      images: post.meta.image ? [{ url: post.meta.image }] : [{ url: '/og.png' }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.summary,
      images: [post.meta.image ?? '/og.png']
    },
    alternates: {
      canonical: `https://rhettrelleke.com/blog/${post.meta.slug}`
    }
  }
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug)
  if (!post) return null

  return (
    <article className="section">
      <h1 className="text-3xl font-semibold tracking-tight hover-gradient-text">{post.meta.title}</h1>
      <p className="mt-2 text-sm muted">{new Date(post.meta.date).toLocaleDateString()}</p>
      <div className="mt-8 prose prose-neutral max-w-none">
        {post.content}
      </div>
    </article>
  )
}


