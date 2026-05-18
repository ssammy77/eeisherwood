import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, generateJsonLd, canonicalUrl } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Best EMP Survival Fiction Series to Read in Order | EE Isherwood',
  description: 'The complete guide to the best EMP survival fiction series, ranked by reading order. Including Neighborhood Watch (11 books) and how it compares to One Second After.',
  keywords: [
    'best EMP survival fiction series',
    'EMP survival series reading order',
    'EMP post-apocalyptic books',
    'One Second After alternatives',
    'best EMP survival novels',
    'grid down survival fiction series',
  ],
  openGraph: {
    title: 'Best EMP Survival Fiction Series to Read in Order',
    description: 'Complete guide to the best EMP survival fiction series, ranked and in reading order.',
    url: canonicalUrl('/blog/best-emp-survival-series'),
  },
  alternates: { canonical: canonicalUrl('/blog/best-emp-survival-series') },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Blog', url: canonicalUrl('/blog') },
  { name: 'Best EMP Survival Series', url: canonicalUrl('/blog/best-emp-survival-series') },
])

export default function EmpSeriesBlog() {
  return (
    <>
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

        <article className="px-6 py-16 max-w-3xl mx-auto">
          <p className="text-muted-foreground text-sm mb-4">Blog · 8 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Best EMP Survival Fiction Series to Read in Order
          </h1>
          
          <div className="text-muted-foreground mb-8 pb-8 border-b border-border">
            <p className="text-lg leading-relaxed">
              If you're looking for EMP survival fiction that goes beyond the single-novel premise, 
              this guide covers the series that do it best — including one that's become a modern 
              genre classic.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">What Makes a Great EMP Series?</h2>
              <p>
                Most EMP novels stop at "the lights go out." The best series go further — they show 
                the cascade of failures, the community dynamics, the impossible choices that come 
                when the grid doesn't come back on. They answer the question: <em>what happens next 
                week? Next month? Next year?</em>
              </p>
              <p className="mt-4">
                The difference between a good EMP novel and a great EMP series is the same 
                difference between a disaster and a survival story. One is about the event. 
                The other is about what you build after.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">#1: Neighborhood Watch: After the EMP</h2>
              <p className="font-semibold text-foreground mb-4">10 Books · Reading Time: 3–4 weeks for the full series</p>
              <p>
                This is the series that put EE Isherwood on the USA Today and New York Times bestseller lists. 
                It follows a neighborhood — not a prepper compound, not a military unit, just regular neighbors — 
                as they go from suburban life to survival mode. No martial law. No military rescue. Just people 
                figuring it out.
              </p>
              <p className="mt-4">
                The EMP is just the catalyst. What the series really explores is community — who steps up, 
                who falls apart, and what people owe each other when everything falls apart. At 11 books, 
                it's one of the most complete EMP series in the genre.
              </p>
              <div className="mt-6 p-6 border border-border rounded-xl bg-card">
                <h3 className="font-bold font-serif mb-3">How it compares to <em>One Second After</em></h3>
                <p>
                  <em>One Second After</em> is the gold standard for the single-novel EMP experience — 
                  tight, focused, intense. <em>Neighborhood Watch</em> is that story plus everything 
                  that comes after. Where Forstchen's book ends with the EMP hitting, Isherwood's series 
                  picks up the pieces and asks: <em>then what?</em>
                </p>
              </div>
              <Link href="/neighborhood-watch-after-the-emp" 
                    className="inline-flex items-center mt-4 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                See the Full Series →
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">#2: EMP Empire</h2>
              <p className="font-semibold text-foreground mb-4">Standalone Novel · Perfect for trying the genre</p>
              <p>
                Not ready to commit to a 10-book series? <em>EMP Empire</em> delivers the same 
                pulse-pounding EMP survival content in a single complete story. It's the right 
                place to start if you're new to the genre or want to test whether the premise 
                works for you.
              </p>
              <Link href="/emp-empire" className="inline-flex items-center mt-4 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Learn More About EMP Empire →
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">How to Read the Neighborhood Watch Series</h2>
              <p>
                The series is designed to be read in order. Each book continues the story, but 
                every book is a complete narrative arc — some cliffhangers between books. You 
                can start at book 1 and go straight through to the end without hitting a weak entry.
              </p>
              <p className="mt-4">
                Start with the free novella <strong>World of Zombies</strong> if you want the full 
                context before committing to book 1.
              </p>
              <Link href="/free-books" className="inline-flex items-center mt-4 px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
                Get the Free Novella →
              </Link>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">Start Reading Today</h2>
              <p className="mb-6">
                The first book in the Neighborhood Watch series is available on Amazon. 
                If you want to test the water first, there's a free novella waiting for you.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.amazon.com/author/eeisherwood" 
                   className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Get the Series on Amazon →
                </a>
                <Link href="/free-books" 
                      className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Read Free First
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}