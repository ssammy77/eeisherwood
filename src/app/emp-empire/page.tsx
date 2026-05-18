import type { Metadata } from 'next'
import Link from 'next/link'
import { generateSeriesSchema, generateBreadcrumbSchema, generateJsonLd, canonicalUrl } from '@/lib/schemas'
import { empEmpireBooks } from '@/lib/emp-empire-books'

const SITE_URL = 'https://eeisherwood.com'
const seriesUrl = '/emp-empire'
const seriesColor = '#16a34a'

export const metadata: Metadata = {
  title: 'EMP Empire — EE Isherwood',
  description: 'A standalone EMP thriller. An astronaut stranded on the ISS returns to Earth to find civilization collapsed — and one last pocket of light in Alabama.',
  openGraph: { url: canonicalUrl('/emp-empire'), },
  alternates: { canonical: canonicalUrl('/emp-empire') },
}

const books = empEmpireBooks

const seriesSchema = generateSeriesSchema({
  name: 'EMP Empire',
  description: 'A standalone EMP thriller. An astronaut stranded on the ISS returns to find civilization collapsed.',
  bookCount: 1,
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
  { name: 'EMP Empire', url: canonicalUrl(seriesUrl) },
])

export default function EmpEmpirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(seriesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }} />

      <div className="min-h-screen font-sans antialiased bg-background text-foreground">

        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: seriesColor }}>
            Standalone Book
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            EMP Empire
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Being on a space station during a worldwide EMP event seemed like the perfect escape. But what launches up, must crash down. A schoolteacher-turned-astronaut returns from the ISS to find Earth has gone dark.
          </p>
          <a href="https://www.amazon.com/gp/product/B0G1TY46KQ" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Get on Amazon →
          </a>
        </section>

        <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="px-6 py-6 max-w-5xl mx-auto">
          <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← All Series
          </Link>
        </div>

        <section className="px-6 py-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-serif mb-8">About the Book</h2>
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-green-600/30 transition-colors">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/book-emp-empire1.jpg"
                  alt="EMP Empire cover"
                  width={300}
                  className="w-48 md:w-[300px] rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: seriesColor }}>
                    Standalone
                  </p>
                  {books[0].rating && (
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 font-bold">★ {books[0].rating}</span>
                      <span className="text-muted-foreground text-sm">({books[0].ratingCount} ratings)</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {books[0].formats?.map((format) => (
                    <span key={format} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary">
                      {format === 'kindle' && '📱 '}{format === 'paperback' && '📖 '}
                      {format.charAt(0).toUpperCase() + format.slice(1)}
                    </span>
                  ))}
                </div>
                {books[0].shortBlurb && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{books[0].shortBlurb}</p>
                )}
                <a href={books[0].amazon} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Get on Amazon →
                </a>
                <Link href={`${seriesUrl}/1`}
                   className="inline-flex items-center px-5 py-2 text-sm font-semibold text-green-600 border border-green-600 rounded-lg hover:bg-green-600/10 transition-colors ml-2">
                  Full Details →
                </Link>
              </div>
            </div>
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