import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When the Music Stops — EE Isherwood',
  description: 'Standalone post-apocalyptic novel. A world where the music finally stopped.',
}

export default function MusicStopsPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      <header className="px-6 py-4 flex justify-between items-center border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <Link href="/" className="font-serif text-2xl font-bold text-foreground">EE Isherwood<span className="text-blue-600">.</span></Link>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <Link href="/books" className="hover:text-foreground transition-colors">Books</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/free-books" className="hover:text-foreground transition-colors">Free Books</Link>
          
        </nav>
      </header>

      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#be185d' }}>Standalone Novel</p>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">When the Music Stops</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          A world where the music finally stopped. One family's journey through the silence that follows.
        </p>
        <a href="https://www.amazon.com/author/eeisherwood" target="_blank" rel="noopener noreferrer" 
           className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          Get on Amazon →
        </a>
      </section>

      <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-serif mb-6">About the Book</h2>
        <p className="text-muted-foreground leading-relaxed">
          A standalone post-apocalyptic novel that explores what happens when everything goes quiet. 
          Character-driven, emotional, and deeply immersive.
        </p>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} EE Isherwood. All rights reserved.</p>
      </footer>
    </div>
  )
}