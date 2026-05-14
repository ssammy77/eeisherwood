import type { Metadata } from 'next'
import Link from 'next/link'
import { generateSeriesSchema, generateBreadcrumbSchema, generateJsonLd, canonicalUrl } from '@/lib/schemas'
import { sirensBooks } from '@/lib/sirens-books'

const SITE_URL = 'https://eeisherwood.com'

export const metadata: Metadata = {
  title: 'Sirens of the Zombie Apocalypse — EE Isherwood',
  description: '8-book zombie apocalypse series following regular people as civilization collapses. Ground-floor view of the end of the world. Free prequel novella included.',
}

const seriesUrl = '/sirens-of-the-zombie-apocalypse'

const books = sirensBooks

const seriesSchema = generateSeriesSchema({
  name: 'Sirens of the Zombie Apocalypse',
  description: '8-book zombie apocalypse series following regular people as civilization collapses. Starts with a free prequel novella.',
  bookCount: 9,
  url: canonicalUrl('/sirens-of-the-zombie-apocalypse'),
  books: books.map((b) => ({
    name: b.title,
    position: b.num + 1,
    url: `${SITE_URL}/sirens-of-the-zombie-apocalypse#book-${b.num}`,
  })),
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Books', url: canonicalUrl('/books') },
  { name: 'Sirens of the Zombie Apocalypse', url: canonicalUrl('/sirens-of-the-zombie-apocalypse') },
])

export default function SirensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(seriesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }} />
      
      <div className="min-h-screen font-sans antialiased bg-background text-foreground">
        <header className="px-6 py-4 flex justify-between items-center border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            EE Isherwood<span className="text-blue-600">.</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <Link href="/books" className="hover:text-foreground transition-colors">Books</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/free-books" className="hover:text-foreground transition-colors">Free Books</Link>
            
          </nav>
        </header>

        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#dc2626' }}>
            ★ NYT & USA Today Bestselling Author · 8 Books + Free Novella
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Sirens of the Zombie Apocalypse
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The zombie apocalypse — with heart. Two teenagers and their 104-year-old great-grandmother navigate the end of the world. Violence is there, but so is humor, family bonds, and the occasional laugh in the middle of the collapse.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://www.amazon.com/author/eeisherwood" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Get on Amazon →
            </a>
            
          </div>
        </section>

        <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="px-6 py-6 max-w-5xl mx-auto">
          <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← All Series
          </Link>
        </div>

        <section className="px-6 py-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-serif mb-8">All Books in the Series</h2>
          <div className="space-y-8">
            {books.map((book) => (
              <div key={book.num} id={`book-${book.num}`} 
                   className="border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-blue-600/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={`/images/book-sirens${book.num}.jpg`} 
                      alt={`${book.title} cover`} 
                      width={300}
                      className="w-48 md:w-[300px] rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#dc2626' }}>
                        Book {book.num}
                      </p>
                      {book.rating && (
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500 font-bold">★ {book.rating}</span>
                          <span className="text-muted-foreground text-sm">({book.ratingCount?.toLocaleString()} ratings)</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {book.formats?.map((format) => (
                        <span key={format} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary">{format === 'kindle' && '📱 '}{format === 'audiobook' && '🎧 '}{format === 'paperback' && '📖 '}{format === 'hardcover' && '🏛 '}{format.charAt(0).toUpperCase() + format.slice(1)}</span>
                      ))}
                    </div>
                    {book.shortBlurb && (
                      <p className="text-muted-foreground leading-relaxed mb-4">{book.shortBlurb}</p>
                    )}
                    <a href={book.amazon} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                      Get on Amazon →
                    </a>
                    <Link href={`${seriesUrl}/${book.num}`}
                       className="inline-flex items-center px-5 py-2 text-sm font-semibold text-red-600 border border-red-600 rounded-lg hover:bg-red-600/10 transition-colors ml-2">
                      Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="px-6 py-8 text-center">
          <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← View All Series
          </Link>
        </div>

        {/* Free Novella Banner */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">Free Download</p>
            <h3 className="text-lg font-bold font-serif mb-2">World of Zombies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The free introductory novella to the Sirens of the Zombie Apocalypse world.
            </p>
            <a 
              href="https://dl.bookfunnel.com/9tm97bvli7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Link to free book
            </a>
          </div>
        </section>

        <footer className="border-t border-border px-6 py-10 text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} EE Isherwood. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
