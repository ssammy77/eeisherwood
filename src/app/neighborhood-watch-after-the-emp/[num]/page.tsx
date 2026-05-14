import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { neighborhoodWatchBooks } from '@/lib/nw-books'
import { generateBookSchema, generateBreadcrumbSchema, generateReviewSchema, generateFAQSchema } from '@/lib/schemas'

interface Props {
  params: Promise<{ num: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { num } = await params
  const bookNum = parseInt(num)
  const book = neighborhoodWatchBooks.find(b => b.num === bookNum)

  if (!book) return { title: 'Book Not Found' }

  return {
    title: `${book.title} — EE Isherwood`,
    description: book.blurb.split('\n')[0],
  }
}

export async function generateStaticParams() {
  return neighborhoodWatchBooks.map(book => ({ num: String(book.num) }))
}

export default async function NWBookPage({ params }: Props) {
  const { num } = await params
  const bookNum = parseInt(num)
  const book = neighborhoodWatchBooks.find(b => b.num === bookNum)

  if (!book) notFound()

  const seriesColor = '#2563eb'
  const bookIndex = neighborhoodWatchBooks.findIndex(b => b.num === bookNum)
  const prevBook = bookIndex > 0 ? neighborhoodWatchBooks[bookIndex - 1] : null
  const nextBook = bookIndex < neighborhoodWatchBooks.length - 1 ? neighborhoodWatchBooks[bookIndex + 1] : null
  const seriesUrl = `/neighborhood-watch-after-the-emp`

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBookSchema({
          title: book.title,
          description: book.blurb,
          isbn13: book.isbn13,
          asin: book.asin,
          url: `https://eeisherwood.com${seriesUrl}/${book.num}`,
          datePublished: book.published,
          image: `/images/book-nw${book.num}.jpg`,
          author: 'EE Isherwood',
          aggregateRating: { ratingValue: book.rating, ratingCount: book.ratingCount },
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
          { name: 'Home', url: 'https://eeisherwood.com' },
          { name: 'Books', url: 'https://eeisherwood.com/books' },
          { name: 'Neighborhood Watch: After the EMP', url: `https://eeisherwood.com${seriesUrl}` },
          { name: book.title, url: `https://eeisherwood.com${seriesUrl}/${book.num}` },
        ])) }}
      />
      {book.reviews?.map((review, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema({
            author: review.author,
            datePublished: review.date,
            reviewBody: review.body,
            reviewRating: review.rating,
            itemReviewed: book.title,
          })) }}
        />
      ))}
      {book.faqs && book.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(book.faqs)) }}
        />
      )}

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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
          <Link href="/books" className="hover:text-foreground transition-colors">All Series</Link>
          <span>›</span>
          <Link href={seriesUrl} className="hover:text-foreground transition-colors">Neighborhood Watch</Link>
          <span>›</span>
          <span className="text-foreground">{book.title}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-shrink-0">
            <img 
              src={`/images/book-nw${book.num}.jpg`} 
              alt={`${book.title} cover`} 
              width={300}
              className="w-64 md:w-[300px] rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: seriesColor }}>
                Book {book.num}
              </span>
              <span className="text-border">·</span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: seriesColor }}>
                Neighborhood Watch
              </span>
            </div>

            <h1 className="text-4xl font-bold font-serif mb-4">{book.title}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-500 font-bold text-lg">★ {book.rating}</span>
              <span className="text-muted-foreground text-sm">({book.ratingCount} ratings)</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {book.formats.map(format => (
                <span key={format} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-secondary">
                  {format === 'kindle' && '📱 '}{format === 'audiobook' && '🎧 '}{format === 'hardcover' && '🏛 '}{format === 'paperback' && '📖 '}
                  {format.charAt(0).toUpperCase() + format.slice(1)}
                </span>
              ))}
              {book.languages?.map(lang => (
                <span key={lang} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-secondary text-blue-600">
                  🌐 {lang}
                </span>
              ))}
            </div>
            {(book.isbn13 || book.published || book.wordCount) && (
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                {book.isbn13 && <span>ISBN-13: {book.isbn13}</span>}
                {book.published && <span>Published: {book.published}</span>}
                {book.wordCount && <span>~{Math.ceil(book.wordCount / 250)} min read</span>}
              </div>
            )}

            <a 
              href={book.amazon} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors mb-10"
            >
              Get on Amazon →
            </a>
          </div>
        </div>

        <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-10" />

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold font-serif mb-6">About This Book</h2>
          <div className="space-y-4">
            {book.blurb.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-lg">{para}</p>
            ))}
          </div>
        </div>

        <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-10" />

        <div className="max-w-3xl">
          <h2 id="reviews" className="text-2xl font-bold font-serif mb-6">What Readers Are Saying</h2>
          {book.reviews && book.reviews.length > 0 ? (
            <div className="space-y-6">
              {book.reviews.map((review, i) => (
                <div key={i} className="border border-border rounded-2xl p-6 md:p-8 bg-card">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex gap-1 text-yellow-500 text-lg">
                      {'★'.repeat(review.rating)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{review.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.author} · {review.date} · <span className="text-green-600 font-medium">Amazon Review</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">&ldquo;{review.body}&rdquo;</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Reviews coming soon.</p>
          )}
        </div>

        {book.faqs && book.faqs.length > 0 && (
          <>
            <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-10" />
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold font-serif mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {book.faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-2xl p-6 md:p-8 bg-card">
                    <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent my-10" />

        <div className="flex justify-between items-center">
          {prevBook ? (
            <Link 
              href={`${seriesUrl}/${prevBook.num}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-blue-600/50 transition-colors"
            >
              ← Book {prevBook.num}: {prevBook.title}
            </Link>
          ) : <div />}
          {nextBook ? (
            <Link 
              href={`${seriesUrl}/${nextBook.num}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-blue-600/50 transition-colors"
            >
              Book {nextBook.num}: {nextBook.title} →
            </Link>
          ) : <div />}
        </div>
      </main>

      <footer className="border-t border-border px-6 py-10 text-center">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} EE Isherwood. All rights reserved.</p>
      </footer>
    </div>
  )
}
