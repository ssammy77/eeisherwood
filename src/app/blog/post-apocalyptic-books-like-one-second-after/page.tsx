import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, generateJsonLd, canonicalUrl } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Post-Apocalyptic Books Like One Second After | EE Isherwood',
  description: 'If you loved One Second After, these post-apocalyptic books will keep you reading all night. The complete guide to what to read next after Forstchen.',
  keywords: [
    'post-apocalyptic books like One Second After',
    'One Second After alternatives',
    'books similar to One Second After',
    'EMP survival fiction like One Second After',
    'post-apocalyptic thriller similar books',
    'what to read after One Second After',
  ],
  openGraph: {
    title: 'Post-Apocalyptic Books Like One Second After',
    description: 'The complete guide to what to read after One Second After. EMP survival, zombie apocalypse, and more.',
    url: canonicalUrl('/blog/post-apocalyptic-books-like-one-second-after'),
  },
  alternates: { canonical: canonicalUrl('/blog/post-apocalyptic-books-like-one-second-after') },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'Blog', url: canonicalUrl('/blog') },
  { name: 'Post-Apocalyptic Books Like One Second After', url: canonicalUrl('/blog/post-apocalyptic-books-like-one-second-after') },
])

export default function SimilarBooksBlog() {
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
          <p className="text-muted-foreground text-sm mb-4">Blog · 6 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Post-Apocalyptic Books Like One Second After
          </h1>
          
          <div className="text-muted-foreground mb-8 pb-8 border-b border-border">
            <p className="text-lg leading-relaxed">
              You finished <em>One Second After</em>. The EMP hit, the lights went out, and you spent 
              three days reading until 3 AM. Now you're looking for what to read next — something 
              that gives you that same feeling of urgency and realism.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">What Made One Second After Work</h2>
              <p>
                <em>One Second After</em> succeeds because it's specific. It's not "a disaster happens" — 
                it's an EMP specifically, and it hits the specific vulnerabilities of modern infrastructure. 
                It's realistic, not sensational. And it follows people you'd actually recognize — not 
                military operators or prepper geniuses, just regular folks figuring it out.
              </p>
              <p className="mt-4">
                The best post-apocalyptic fiction has that same quality: it could happen, and the 
                horror comes from realizing how unprepared we all are. So what else gives you that?
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">If You Loved the EMP Focus: Neighborhood Watch</h2>
              <p className="font-semibold text-foreground mb-4">11 Books · EE Isherwood · Flagship series</p>
              <p>
                <em>Neighborhood Watch: After the EMP</em> is the most complete EMP series in post-apocalyptic 
                fiction. Where <em>One Second After</em> covers the first days and weeks, this series goes 
                months and years — showing the full arc of a community collapse and rebuild.
              </p>
              <p className="mt-4">
                It's the series Forstchen's book could have been if it was written as a multi-book arc 
                instead of a standalone. No cliffhangers, no filler — just 11 books of the most 
                realistic EMP survival fiction in the genre.
              </p>
              <Link href="/neighborhood-watch-after-the-emp" 
                    className="inline-flex items-center mt-4 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Explore the Series →
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">If You Loved the Zombie Element: Sirens of the Zombie Apocalypse</h2>
              <p className="font-semibold text-foreground mb-4">8 Books + Free Novella · EE Isherwood</p>
              <p>
                If <em>One Second After</em> made you paranoid about infrastructure, the Sirens series 
                makes you paranoid about people. This zombie apocalypse series takes the "ground floor" 
                approach — no military hero, no government rescue, no safe zones. Just regular people 
                in the first hours of the outbreak.
              </p>
              <p className="mt-4">
                Start with the free novella <em>World of Zombies</em> — it's the prequel that sets up 
                the entire series.
              </p>
              <Link href="/sirens-of-the-zombie-apocalypse" 
                    className="inline-flex items-center mt-4 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Start the Series →
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">The Common Thread: Realism</h2>
              <p>
                The books that survive <em>One Second After</em> readers share one quality: they take 
                the premise seriously. They don't hand-wave the logistics. They show what happens 
                when food runs out, when people get desperate, when the social contract breaks down.
              </p>
              <p className="mt-4">
                EE Isherwood's work specifically focuses on the community-level response — not 
                "the government fixes it" or "the military saves everyone" but "neighbors become 
                everything, and the kind of neighbor you are matters."
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">Start Free, Decide Later</h2>
              <p className="mb-6">
                If you want to test the quality before committing to a series, both the Sirens and 
                Neighborhood Watch series have free novellas that give you the full experience 
                at no cost.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/free-books" 
                      className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Get Free Books →
                </Link>
                <Link href="/books" 
                      className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Browse All Series
                </Link>
              </div>
            </section>
          </div>
        </article>

        <footer className="border-t border-border px-6 py-10 text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} EE Isherwood. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}