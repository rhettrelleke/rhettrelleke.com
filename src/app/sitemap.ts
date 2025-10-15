import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rhettrelleke.com'
  const routes = ['', '/about', '/projects', '/now', '/blog', '/music', '/contact', '/privacy']
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }))
}


