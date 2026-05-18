import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-center bg-gradient-to-r from-blue-600 to-blue-700">
      <p className="text-white text-sm">
        © {new Date().getFullYear()} EE Isherwood. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-3 text-sm text-blue-100">
        <a href="https://www.amazon.com/author/eeisherwood" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Amazon</a>
        <span>&middot;</span>
        <a href="https://www.facebook.com/sincethesirens" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Facebook</a>
        <span>&middot;</span>
        <a href="https://www.goodreads.com/author/show/57907096.E_E_Isherwood" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Goodreads</a>
        <span>&middot;</span>
        <a href="https://twitter.com/eeisherwood" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">X/Twitter</a>
        <span>&middot;</span>
        <a href="https://www.instagram.com/eeisherwood" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">Instagram</a>
      </div>
    </footer>
  )
}