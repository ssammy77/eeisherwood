import type { Metadata } from 'next'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { authorSchema, websiteSchema, generateJsonLd } from '@/lib/schemas'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://eeisherwood.com'),
  title: {
    default: 'EE Isherwood — Post-Apocalyptic Thriller Author',
    template: '%s | EE Isherwood',
  },
  description: 'NYT bestselling indie author of 50+ post-apocalyptic thrillers. EMP survival, zombie apocalypse, and sci-fi series. Start reading free today.',
  keywords: [
    'EMP survival fiction',
    'zombie apocalypse series',
    'post-apocalyptic books',
    'post-apocalyptic series to binge read',
    'One Second After alternatives',
    'EMP survival series',
    'post-apocalyptic thriller',
    'indie author',
  ],
  authors: [{ name: 'EE Isherwood', url: 'https://eeisherwood.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eeisherwood.com',
    siteName: 'EE Isherwood',
    title: 'EE Isherwood — Post-Apocalyptic Thriller Author',
    description: 'NYT bestselling indie author of 50+ post-apocalyptic thrillers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EE Isherwood Author',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EE Isherwood — Post-Apocalyptic Thriller Author',
    description: 'NYT bestselling indie author of 50+ post-apocalyptic thrillers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://eeisherwood.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJsonLd(authorSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJsonLd(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}