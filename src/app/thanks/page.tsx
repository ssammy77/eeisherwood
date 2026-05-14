import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — EE Isherwood',
  description: 'Thanks for subscribing to EE Isherwood\'s newsletter.',
}

export default function ThanksPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <Link href="/" className="font-serif text-2xl font-bold text-foreground">
          EE Isherwood<span className="text-blue-600">.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <Link href="/books" className="hover:text-foreground transition-colors">Books</Link>
          <Link href="/newsletter" className="hover:text-foreground transition-colors">Newsletter</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/free-books" className="hover:text-foreground transition-colors">Free Books</Link>
        </nav>
      </header>

      <section className="px-6 py-16 md:py-24 max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-6xl">🎉</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">You&apos;re In!</h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Thanks for subscribing. Check your inbox for a confirmation email, then you&apos;re all set to receive book announcements and updates.
        </p>

        <div className="border border-border rounded-xl p-8 bg-card mb-10">
          <h2 className="text-lg font-bold mb-4 font-serif">What&apos;s Next?</h2>
          <ul className="text-left text-muted-foreground space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">01.</span>
              <span>Check your email for a confirmation from MailerLite</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">02.</span>
              <span>Confirm your subscription to start receiving updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">03.</span>
              <span>Grab your first free book and start reading</span>
            </li>
          </ul>
        </div>

        <Link href="/free-books" className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          Get Your Free Book →
        </Link>

        <div className="mt-10">
          <Link href="/books" className="text-blue-600 font-semibold hover:underline">
            Browse All Books →
          </Link>
        </div>
      </section>
    </div>
  )
}