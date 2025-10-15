// Minimal MDX content utilities for blog
// Uses FS at build time only (Next.js App Router server components)

// @ts-ignore - Node typings not declared in tsconfig for this environment
import fs from 'fs'
// @ts-ignore
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import Callout from '@/components/mdx/Callout'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary?: string
  tags?: string[]
  published?: boolean
}

export const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f: string) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f: string) => f.replace(/\.(md|mdx)$/i, ''))
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getAllPostSlugs()
  const metas: PostMeta[] = slugs
    .map((slug) => {
      const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`)
      const altPath = path.join(CONTENT_DIR, `${slug}.md`)
      const filePath = fs.existsSync(fullPath) ? fullPath : altPath
      if (!fs.existsSync(filePath)) return null
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(raw)
      const meta: PostMeta = {
        slug,
        title: data.title ?? slug,
        date: data.date ?? new Date().toISOString(),
        summary: data.summary ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        published: data.published !== false
      }
      return meta
    })
    .filter(Boolean) as PostMeta[]

  return metas
    .filter((m) => m.published !== false)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string) {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath
  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  const mdx = await compileMDX<{ title: string; date: string; summary?: string; tags?: string[]; published?: boolean }>({
    source: content,
    options: {
      parseFrontmatter: false
    },
    components: { Callout },
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
    }
  })

  return {
    slug,
    meta: {
      slug,
      title: (data as any).title ?? slug,
      date: (data as any).date ?? new Date().toISOString(),
      summary: (data as any).summary ?? '',
      tags: Array.isArray((data as any).tags) ? (data as any).tags : [],
      published: (data as any).published !== false
    } as PostMeta,
    content: mdx.content
  }
}


