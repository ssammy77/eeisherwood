import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, generateJsonLd, authorSchema, canonicalUrl } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'About EE Isherwood — NYT Bestselling Post-Apocalyptic Thriller Author',
  description: 'EE Isherwood is a USA Today and New York Times bestselling author of 50+ post-apocalyptic thrillers.',
  keywords: [
    'EE Isherwood author',
    'post-apocalyptic thriller author',
    'NYT bestselling author',
    'EMP survival fiction author',
    'zombie apocalypse author',
    'indie author bio',
  ],
  openGraph: {
    title: 'About EE Isherwood',
    description: 'USA Today and NYT bestselling author of 50+ post-apocalyptic thrillers.',
    url: canonicalUrl('/about'),
  },
  alternates: { canonical: canonicalUrl('/about') },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'About', url: canonicalUrl('/about') },
])

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }} />
      
      <div className="min-h-screen font-sans antialiased bg-background text-foreground">

        <section className="px-6 py-16 md:py-24 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">About EE Isherwood</h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              <strong className="text-foreground">EE Isherwood</strong> is a USA Today and New York Times 
              bestselling author of post-apocalyptic thrillers.
            </p>

            <p>
              His catalog spans 50+ novels across nine distinct series — from EMP survival fiction 
              (<em>Neighborhood Watch</em>, <em>EMP Empire</em>) to zombie apocalypse 
              (<em>Sirens of the Zombie Apocalypse</em>) to economic collapse and more.. 
              Each series is designed to be read in order, with complete narrative arcs and some cliffhangers between books.
            </p>

            <p>
              He writes because he believes stories matter — particularly in a world where critical 
              thinking and self-reliance are fading commodities. His fiction explores what happens 
              when the infrastructure we take for granted disappears, and what people are really 
              made of when everything falls apart.
            </p>

            <div className="py-8 border-y border-border my-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <img 
          src="/images/author-photo.jpg" 
          alt="EE Isherwood" 
          width={250}
          className="rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">Credentials</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">★</span>
                  <span><strong>New York Times</strong> bestselling author</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">★</span>
                  <span><strong>USA Today</strong> bestselling author</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">📚</span>
                  <span><strong>50+ novels</strong> published</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">★</span>
                  <span><strong>30,000+</strong> reviews and ratings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">✍️</span>
                  <span><strong>10+ years</strong> as self-published author</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">🌐</span>
                  <span>Available in <strong>multiple languages</strong></span>
                </li>
              </ul>
                </div>
              </div>
            </div>

            <p>
              Before writing full-time, he worked in a field that gave him firsthand insight into 
              infrastructure dependencies, supply chain vulnerabilities, and the cascading failures 
              that happen when systems designed for efficiency meet the reality of human nature. 
              That background shows up in every book.
            </p>

            <p>
              He currently lives in St. Louis, Missouri and plans to write for another ten years...or more.
              His work is available in ebook, paperback, and audiobook formats 
              through Amazon and other retailers.
            </p>
            <p className="text-muted-foreground">
              Contact Mr. Isherwood at ee (at) eeisherwood.com.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <Link href="/about/interview"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
              Read the Author Interview →
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold font-serif mb-6">Find the Books</h2>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.amazon.com/author/eeisherwood" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Amazon Author Page →
              </a>
              <Link href="/books"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
                Browse All Series
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}