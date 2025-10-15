import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rhett Relleke',
  description: 'Rhett Relleke — developer, musician, and maker. Projects, music, writing, and a /now page.',
  metadataBase: new URL('https://rhettrelleke.com'),
  openGraph: {
    title: 'Rhett Relleke',
    description: 'Developer, musician, and maker. Projects, music, writing.',
    url: 'https://rhettrelleke.com',
    siteName: 'rhettrelleke.com',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Rhett Relleke' }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhett Relleke',
    description: 'Developer, musician, and maker.',
    images: ['/og.png']
  },
  alternates: {
    types: { 'application/rss+xml': 'https://rhettrelleke.com/rss.xml' }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


