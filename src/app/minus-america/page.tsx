import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Minus America — EE Isherwood',
  description: 'In a flash, the attack reduces every American to a pile of clothes. The few survivors remaining must piece together what happened, and stay alive in a post-apocalyptic disaster zone.',
}

const books = [
  { 
    num: 1, 
    title: 'Minus America', 
    amazon: 'https://www.amazon.com/gp/product/B07VZYHFPL', 
    rating: '4.4',
    ratingCount: '1,670',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `What would the world be like without America?`
  },
  { 
    num: 2, 
    title: 'Empty Cities', 
    amazon: 'https://www.amazon.com/gp/product/B07VVRWKGZ', 
    rating: '4.5',
    ratingCount: '1,172',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `There are no more red or blue states. Just empty states. And empty cities.`
  },
  { 
    num: 3, 
    title: 'Rebel Cause', 
    amazon: 'https://www.amazon.com/gp/product/B07X8R2B7W', 
    rating: '4.6',
    ratingCount: '732',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `America is down. But never count it out.`
  },
  { 
    num: 4, 
    title: 'Two Wolves and a Sheep', 
    amazon: 'https://www.amazon.com/gp/product/B082DL5WCL', 
    rating: '4.6',
    ratingCount: '393',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `The wolves are running loose. And the sheep are learning to bite back.`
  },
  { 
    num: 5, 
    title: 'Hostile Shores', 
    amazon: 'https://www.amazon.com/gp/product/B086SDWJSB', 
    rating: '4.6',
    ratingCount: '385',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    blurb: `The final chapter. The fight for America ends here.`
  },
]

export default function MinusAmericaPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">

      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#d97706' }}>5 Books</p>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Minus America</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
In a flash, the attack reduces every American to a pile of clothes. The few survivors remaining must piece together what happened, and stay alive in a post-apocalyptic disaster zone.
        </p>
        <a href="https://www.amazon.com/Minus-America/dp/B07WG8MZPJ/" target="_blank" rel="noopener noreferrer" 
           className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          Get on Amazon →
        </a>
      </section>

      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold font-serif mb-8">All Books in the Series</h2>
        <div className="space-y-8">
          {books.map((book) => (
            <div key={book.num} id={`book-${book.num}`}
                 className="border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-blue-600/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={`/images/book-ma${book.num}.jpg`} 
                    alt={`${book.title} cover`} 
                    width={300}
                    className="w-48 md:w-[300px] rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#d97706' }}>
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
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary text-blue-600">🌐 German</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary text-blue-600">🌐 French</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-secondary text-blue-600">🌐 Dutch</span>
                  </div>
                  {book.blurb && (
                    <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">{book.blurb}</p>
                  )}
                  {book.num === 1 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-500">★★★★★</span>
                        <p className="text-muted-foreground italic text-sm">"JFK WOULD BE PROUD" — Nomadic Reviewer, November 17, 2019 · <Link href="/minus-america/1#reviews" className="text-blue-600 hover:text-blue-700">Amazon Review</Link></p>
                      </div>
                    </div>
                  )}
                  <a href={book.amazon} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Get on Amazon →
                  </a>
                  <Link href={`/minus-america/${book.num}`}
                     className="inline-flex items-center px-5 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600/10 transition-colors ml-2">
                    Full Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-serif mb-6">What to Expect</h2>
        <p className="text-muted-foreground leading-relaxed">
          A different kind of post-apocalyptic series — a mysterious event, fun characters, and an uplifting mood.
        </p>
      </section>
    </div>
  )
}
