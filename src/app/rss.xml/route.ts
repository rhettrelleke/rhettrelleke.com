import { NextResponse } from 'next/server'
import { getAllPostsMeta } from '@/lib/mdx'

export async function GET() {
  const site = 'https://rhettrelleke.com'
  const posts = getAllPostsMeta()
  const items = posts
    .map((p) => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${site}/blog/${p.slug}</link>
        <guid>${site}/blog/${p.slug}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        ${p.summary ? `<description><![CDATA[${p.summary}]]></description>` : ''}
      </item>`)
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Rhett Relleke — Blog</title>
      <link>${site}</link>
      <description>Posts from rhettrelleke.com</description>
      <language>en-us</language>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=600, stale-while-revalidate=86400'
    }
  })
}


