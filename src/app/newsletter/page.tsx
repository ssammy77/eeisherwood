import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter — EE Isherwood',
  description: 'Get free book announcements, updates, and exclusive content from NYT bestselling author EE Isherwood.',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      {/* Header */}
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

      <section className="px-6 py-16 md:py-24 max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '1px solid #f59e0b', color: '#92400e' }}>
          📚 Free Books
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Newsletter</h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Get free book announcements, updates, and exclusive content delivered to your inbox.
          No spam, just books.
        </p>

        <div className="border border-border rounded-xl p-8 bg-card text-left">
          <h2 className="text-lg font-bold mb-4 font-serif">Subscribe for Updates</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Enter your email below to join the newsletter and get free book announcements.
          </p>
          <form action="#" method="post" className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/free-books" className="text-blue-600 font-semibold hover:underline">
            ← Back to Free Books
          </Link>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center bg-gradient-to-r from-blue-600 to-blue-700">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} EE Isherwood. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-blue-100">
          <span>·</span>
          <a href="https://www.amazon.com/author/eeisherwood" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Amazon</a>
          <span>·</span>
          <a href="https://www.goodreads.com/author/show/57907096.E_E_Isherwood" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Goodreads</a>
        </div>
      </footer>
    </div>
  )
}