import type { Metadata } from 'next'
import Link from 'next/link'
import { generateSeriesSchema, generateBreadcrumbSchema, generateJsonLd, canonicalUrl } from '@/lib/schemas'
import { endDaysBooks } from '@/lib/end-days-books'

const SITE_URL = 'https://eeisherwood.com'
const seriesUrl = '/end-days'
const seriesColor = '#7c3aed'

export const metadata: Metadata = {
  title: 'End Days — EE Isherwood',
  description: '6-book post-apocalyptic series co-written with Craig Martelle. A father and son fight to find each other across a world that keeps ending.',
  openGraph: { url: canonicalUrl('/end-days'), },
  alternates: { canonical: canonicalUrl('/end-days') },
}

const books = endDaysBooks

const seriesSchema = generateSeriesSchema({
  name: 'End Days',
  description: '6-book post-apocalyptic series co-written with Craig Martelle. A father and son fight to find each other across a world that keeps ending.',
  bookCount: 6,
  url: canonicalUrl(seriesUrl),
  books: books.map((b) => ({
    name: b.title,
    position: b.num,
    url: `${SITE_URL}${seriesUrl}#book-${b.num}`,
  })),
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Books', url: canonicalUrl('/books') },
  { name: 'End Days', url: canonicalUrl(seriesUrl) },
])

export default function EndDaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(seriesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }} />

      <div className="min-h-screen font-sans antialiased bg-background text-foreground">

        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: seriesColor }}>
            6 Books · Co-written with Craig Martelle
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            End Days
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            A father and son fight to find each other across a world that keeps ending. Six books of post-apocalyptic fiction with time-bending twists, co-written with Craig Martelle.
          </p>
          <a href="https://www.amazon.com/gp/product/B07MYQ1MQQ" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Get Book 1 on Amazon →
          </a>
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
                   className="border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-purple-600/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={`/images/book-ed${book.num}.jpg`}
                      alt={`${book.title} cover`}
                      width={300}
                      className="w-48 md:w-[300px] rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <p className="text-xs font-bold tracking-widest uppercase" style={{ color: seriesColor }}>
                        Book {book.num}
                      </p>
                      {book.rating && (
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500 font-bold">★ {book.rating}</span>
                          <span className="text-muted-foreground text-sm">({book.ratingCount} ratings)</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {book.formats?.map((format) => (
                        <span key={format} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary">
                          {format === 'kindle' && '📱 '}{format === 'audiobook' && '🎧 '}{format === 'paperback' && '📖 '}{format === 'audio_cd' && '💿 '}
                          {format.charAt(0).toUpperCase() + format.slice(1)}
                        </span>
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
                       className="inline-flex items-center px-5 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600/10 transition-colors ml-2">
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
      </div>
    </>
  )
}