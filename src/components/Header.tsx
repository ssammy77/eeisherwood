import Link from 'next/link'

export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
      <Link href="/" className="font-serif text-2xl font-bold text-foreground">
        EE Isherwood<span className="text-blue-600">.</span>
      </Link>
      <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
        <Link href="/books" className="hover:text-foreground transition-colors">Books</Link>
        <Link href="/newsletter" className="hover:text-foreground transition-colors">Newsletter</Link>
        <Link href="/about/interview" className="hover:text-foreground transition-colors">Interview</Link>
        <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link href="/free-books" className="hover:text-foreground transition-colors">Free Books</Link>
      </nav>
      <button className="md:hidden p-2 text-foreground">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  )
}