import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rhett Relleke',
  description: 'Rhett Relleke — developer, musician, and maker. Projects, music, writing, and a /now page.',
  metadataBase: new URL('https://rhettrelleke.com')
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


