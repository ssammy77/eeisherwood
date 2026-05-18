import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, canonicalUrl } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Neighborhood Watch: After the EMP — EE Isherwood',
  description: '10-book EMP survival series following Frank Douglas and his neighbors as they go from suburban life to survival mode when the electrical grid goes down.',
  openGraph: { url: canonicalUrl('/neighborhood-watch-after-the-emp'), },
  alternates: { canonical: canonicalUrl('/neighborhood-watch-after-the-emp') },
}

const books = [
  {
    num: 1,
    title: 'Neighborhood Watch 1',
    amazon: 'https://www.amazon.com/gp/product/B09BG4VPXH',
    rating: '4.5',
    ratingCount: '3,615',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Frank Douglas just bought his dream retirement. Then an EMP erased it in one second.`
  },
  {
    num: 2,
    title: 'Neighborhood Watch 2',
    amazon: 'https://www.amazon.com/gp/product/B09XGWRNK3',
    rating: '4.6',
    ratingCount: '1,919',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Frank held onto one street. The rest of the city was a question mark.`
  },
  {
    num: 3,
    title: 'Neighborhood Watch 3',
    amazon: 'https://www.amazon.com/gp/product/B0BHBXPKNF',
    rating: '4.6',
    ratingCount: '1,490',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `The race to claim what's left starts the moment the EMP hits.`
  },
  {
    num: 4,
    title: 'Neighborhood Watch 4',
    amazon: 'https://www.amazon.com/gp/product/B0BMGD7WSD',
    rating: '4.6',
    ratingCount: '1,483',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `The EMP wasn't the worst of it. Mother Nature is about to make her move.`
  },
  {
    num: 5,
    title: 'Neighborhood Watch 5',
    amazon: 'https://www.amazon.com/gp/product/B0BQGZQYVJ',
    rating: '4.6',
    ratingCount: '1,255',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `The hurricane is gone. What's left behind is its own disaster.`
  },
  {
    num: 6,
    title: 'Neighborhood Watch 6',
    amazon: 'https://www.amazon.com/gp/product/B0BSNWDLR2',
    rating: '4.7',
    ratingCount: '1,138',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Day 7. The factions are drawing lines, and not everyone likes where Frank is standing.`
  },
  {
    num: 7,
    title: 'Neighborhood Watch 7',
    amazon: 'https://www.amazon.com/gp/product/B0BYTDS1DY',
    rating: '4.7',
    ratingCount: '1,077',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Action and reaction — in the apocalypse, consequences multiply fast.`
  },
  {
    num: 8,
    title: 'Neighborhood Watch 8',
    amazon: 'https://www.amazon.com/gp/product/B0C5S45QXW',
    rating: '4.6',
    ratingCount: '919',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Frank always imagined island life. This isn't what he had in mind.`
  },
  {
    num: 9,
    title: 'Neighborhood Watch 9',
    amazon: 'https://www.amazon.com/gp/product/B0CFG4B5F7',
    rating: '4.7',
    ratingCount: '814',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Two weeks in. The world has gone red.`
  },
  {
    num: 10,
    title: 'Neighborhood Watch 10',
    amazon: 'https://www.amazon.com/gp/product/B0CJYK9LZK',
    rating: '4.7',
    ratingCount: '976',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `Frank read all the books about the end of the world. But books can't pull the trigger.`
  },
]

const seriesUrl = '/neighborhood-watch-after-the-emp'

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Books', url: canonicalUrl('/books') },
  { name: 'Neighborhood Watch: After the EMP', url: canonicalUrl('/neighborhood-watch-after-the-emp') },
])

export default function NeighborhoodWatchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen font-sans antialiased bg-background text-foreground">

      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#2563eb' }}>
          ★ NYT & USA Today Bestselling Series · 10 Books
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
          Neighborhood Watch:<br />After the EMP
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
          When the lights go out, the neighbors come calling. This 10-book series follows Frank Douglas 
          as he helps his neighbors survive after the grid goes down. No military, no government rescue, 
          just a neighborhood trying to survive on their own.
        </p>
        <a href="https://www.amazon.com/gp/product/B09BG4VPXH" target="_blank" rel="noopener noreferrer"
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
        <p className="text-muted-foreground mb-8 text-sm">
        </p>

        <div className="space-y-8">
          {books.map((book) => (
            <div key={book.num} id={`book-${book.num}`}
                 className="border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-blue-600/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={`/images/book-nw${book.num}.jpg`}
                    alt={`${book.title} cover`}
                    width={300}
                    className="w-48 md:w-[300px] rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2563eb' }}>
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
                      <span key={format} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary">{format === 'kindle' && '📱 '}{format === 'audiobook' && '🎧 '}{format === 'hardcover' && '🏛 '}{format === 'paperback' && '📖 '}{format.charAt(0).toUpperCase() + format.slice(1)}</span>
                    ))}
                  </div>
                  {book.blurb && (
                    <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">{book.blurb}</p>
                  )}
                  <a href={book.amazon} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Get on Amazon →
                  </a>
                  <Link href={`${seriesUrl}/${book.num}`}
                     className="inline-flex items-center px-5 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600/10 transition-colors ml-2">
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
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Free Download</p>
          <h3 className="text-lg font-bold font-serif mb-2">Neighborhood Watch Beyond Clownfish</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A free bonus story set in the Fort Myers area outside the Clownfish Cove neighborhood.
          </p>
          <a 
            href="https://dl.bookfunnel.com/1hp2t7rxof"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Link to free book
          </a>
        </div>
      </section>
    </div>
    </>
  )
}
