import type { Metadata } from 'next'
import Link from 'next/link'
import { canonicalUrl } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Free Books — EE Isherwood',
  description: 'Download free ebooks by EE Isherwood, including Neighborhood Watch Beyond Clownfish and other free stories from the post-apocalyptic worlds.',
  openGraph: {
    url: canonicalUrl('/free-books'),
  },
  alternates: { canonical: canonicalUrl('/free-books') },
}

export default function FreeBooksPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-center">
          Free Books
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Start reading EE Isherwood&apos;s post-apocalyptic thrillers for free. Download free ebooks including bonus stories from the Neighborhood Watch universe.
        </p>

        {/* Free Book */}
        <section className="max-w-[900px] mx-auto pb-16">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/images/book-bf-nw-beyond.jpg"
                alt="Neighborhood Watch Beyond Clownfish cover"
                width={180}
                className="w-[180px] rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">
                  Free Book — Neighborhood Watch: After the EMP World
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Neighborhood Watch Beyond Clownfish</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A bonus story from the Neighborhood Watch universe. When the EMP hits, neighbors become everything — or nothing at all. This free short story gives readers a glimpse into the Fort Myers area outside the Clownfish Cove neighborhood.
                </p>
                <a 
                  href="https://dl.bookfunnel.com/1hp2t7rxof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Link to free book
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Free Book 2 - World of Zombies */}
        <section className="max-w-[900px] mx-auto pb-12">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/images/book-nw-beyond-clownfish.jpg"
                alt="World of Zombies cover"
                width={180}
                className="w-[180px] rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2">
                  Free Book — Sirens of the Zombie Apocalypse World
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">World of Zombies</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The free introductory novella to the Sirens of the Zombie Apocalypse world. A view of the zombie apocalypse deep inside Russia..
                </p>
                <a 
                  href="https://dl.bookfunnel.com/9tm97bvli7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Link to free book
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-4">Want more free books and author updates?</p>
          <Link href="/newsletter" className="text-blue-600 font-semibold hover:underline">
            Join the newsletter for free book announcements →
          </Link>
        </div>
      </main>
    </div>
  )
}