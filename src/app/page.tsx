import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, generateJsonLd, canonicalUrl } from '@/lib/schemas'

export const metadata: Metadata = {
  metadataBase: new URL('https://eeisherwood.com'),
  title: 'EE Isherwood — NYT Bestselling Post-Apocalyptic Thriller Author',
  description: '50+ post-apocalyptic thrillers including the Neighborhood Watch EMP series and Sirens zombie apocalypse series. Start with a free book. "Binge-worthy." — Reader reviews',
  keywords: [
    'post-apocalyptic thriller',
    'EMP survival fiction series',
    'zombie apocalypse series',
    'post-apocalyptic series to binge read',
    'post-apocalyptic books like One Second After',
    'NYT bestselling author',
    'indie post-apocalyptic author',
    'survival fiction series',
    'post-apocalyptic series in order',
  ],
  authors: [{ name: 'EE Isherwood', url: 'https://eeisherwood.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: canonicalUrl('/'),
    siteName: 'EE Isherwood',
    title: 'EE Isherwood — NYT Bestselling Post-Apocalyptic Thriller Author',
    description: '50+ post-apocalyptic thrillers. Start with a free book. Binge-worthy series from the USA Today bestselling author.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EE Isherwood' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EE Isherwood — Post-Apocalyptic Thriller Author',
    description: '50+ post-apocalyptic thrillers. Start with a free book.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: canonicalUrl('/') },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
])

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }} />
      
      <div className="min-h-screen font-sans antialiased bg-background text-foreground">
        {/* Header */}

        {/* Hero */}
        <section className="hero-bg px-6 py-16 md:py-24 text-center w-full relative">
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '1px solid #f59e0b', color: '#92400e' }}>
              ★ NYT & USA Today Bestselling Author
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '1px solid #f59e0b', color: '#92400e' }}>
              📚 50+ Novels
            </span>
            
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight text-white">
            Post-Apocalyptic Thrillers<br className="hidden md:block" /> That Don't Pull Punches
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            From EMP survival to zombie apocalypse to asteroid impacts — 
            50+ novels exploring what really happens when civilization falls apart. 
            Start with a free book, or find your next obsession.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/books" className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Explore the Books →
            </Link>
            <Link href="/free-books" className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-blue-700 bg-white hover:bg-blue-50 transition-colors">
              Free Books
            </Link>
          </div>
        </section>

        <div className="h-px max-w-2xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Featured Series */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Popular Series</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <Link href="/sirens-of-the-zombie-apocalypse" className="group border border-border rounded-xl p-8 bg-card hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10 transition-all hover:-translate-y-0.5 block">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#dc2626' }}>
                8 Books · Zombie Apocalypse
              </p>
              <h3 className="text-xl font-bold mb-3 font-serif">Sirens of the Zombie Apocalypse</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                The zombie apocalypse told from the ground floor. No military hero saves the world — 
                just regular people making impossible choices as civilization collapses around them.
              </p>
              <span className="text-blue-600 font-semibold text-sm">Read in Order →</span>
            </Link>

            <Link href="/neighborhood-watch-after-the-emp" className="group border border-border rounded-xl p-8 bg-card hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10 transition-all hover:-translate-y-0.5 block">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#2563eb' }}>
                11 Books · Flagship Series
              </p>
              <h3 className="text-xl font-bold mb-3 font-serif">Neighborhood Watch: After the EMP</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                When the lights go out, the real neighbors come out. A complete EMP survival series 
                that shows what really happens when the grid goes down.
              </p>
              <span className="text-blue-600 font-semibold text-sm">Read in Order →</span>
            </Link>

            <Link href="/minus-america" className="group border border-border rounded-xl p-8 bg-card hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10 transition-all hover:-translate-y-0.5 block">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d97706' }}>
                5 Books
              </p>
              <h3 className="text-xl font-bold mb-3 font-serif">Minus America</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                America has been erased from the map — literally. Survivors navigate a world where 
                their country no longer exists and every day is a fight to reclaim identity.
              </p>
              <span className="text-blue-600 font-semibold text-sm">Read in Order →</span>
            </Link>

          </div>

          <div className="text-center mt-10">
            <Link href="/books" className="text-blue-600 font-semibold hover:underline">
              See All 7 Series →
            </Link>
          </div>
        </section>

        <div className="h-px max-w-2xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Author Section */}
        <section className="px-6 py-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">About EE Isherwood</h2>
          <div className="flex flex-col items-center gap-6 mb-8">
            <img 
              src="/images/author-photo.jpg" 
              alt="EE Isherwood" 
              width={300}
              className="rounded-2xl shadow-lg"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">EE Isherwood</strong> is a USA Today and New York Times bestselling author 
              who writes post-apocalyptic thrillers.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            His 50+ book catalog covers multiple subgenres — EMP survival, zombie apocalypse, asteroid impacts, 
            economic collapse, government failure, and more. He writes because he believes stories matter, 
            particularly in a world where critical thinking and self-reliance are fading commodities.
          </p>
          <Link href="/about" className="text-blue-600 font-semibold hover:underline">
            More About EE →
          </Link>
        </section>

        {/* Footer */}
      </div>
    </>
  )
}