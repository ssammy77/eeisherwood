import type { Metadata } from 'next'
import Link from 'next/link'
import { canonicalUrl } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'All Books by EE Isherwood — Post-Apocalyptic Thrillers',
  description: 'Browse all 50+ books by NYT bestselling author EE Isherwood. 9 complete series from EMP survival to zombie apocalypse to asteroid strikes.',
  openGraph: {
    url: canonicalUrl('/books'),
  },
  alternates: { canonical: canonicalUrl('/books') },
}

const series = [
  {
    slug: 'neighborhood-watch-after-the-emp',
    title: 'Neighborhood Watch: After the EMP',
    color: '#2563eb',
    tag: '10 Books · EMP Bug-in',
    desc: 'When the lights go out, the real neighbors come out. The series that made EE Isherwood a household name in EMP fiction.',
    href: '/neighborhood-watch-after-the-emp'
  },
  {
    slug: 'sirens-of-the-zombie-apocalypse',
    title: 'Sirens of the Zombie Apocalypse',
    color: '#dc2626',
    tag: '8 Books · Zombie',
    desc: 'An apocalyptic adventure of a multi-generational family trying to survive a unique strain of zombies.',
    href: '/sirens-of-the-zombie-apocalypse'
  },
  {
    slug: 'minus-america',
    title: 'Minus America',
    color: '#d97706',
    tag: '5 Books · Superweapon',
    desc: 'When a new weapon erases every American from the continent, it leaves a mystery to solve for any survivors.',
    href: '/minus-america'
  },
  {
    slug: 'end-days',
    title: 'End Days',
    color: '#7c3aed',
    tag: '6 Books · The end of time',
    desc: 'When time begins to unravel, a father and son fight across a collapsing America to find the source, and each other.',
    href: '/end-days'
  },
  {
    slug: 'impact',
    title: 'Impact',
    color: '#0891b2',
    tag: '6 Books · Asteroid strike',
    desc: 'When an asteroid falls to earth and ends the world, some discover it wasn\'t an accident.',
    href: '/impact'
  },
  {
    slug: '1000-miles-of-bad-road',
    title: '1000 Miles of Bad Road',
    color: '#059669',
    tag: '5 Books · EMP on the road',
    desc: '1000 miles of dangerous territory between you and safety. A road trip series where every mile counts.',
    href: '/1000-miles-of-bad-road'
  },
  {
    slug: 'build-a-better-apocalypse',
    title: 'Build a Better Apocalypse',
    color: '#dc2626',
    tag: '3 Books · Rapture',
    desc: "A powerful cabal doesn\'t want people to know when the rapture arrives...",
    href: '/build-a-better-apocalypse'
  },
  {
    slug: 'emp-empire',
    title: 'EMP Empire',
    color: '#7c3aed',
    tag: 'Standalone · ★ 4.5 (48)',
    desc: 'An astronaut comes back to earth after 3 years in space...finds the world has gone back to the dark ages.',
    href: '/emp-empire'
  },
]

export default function BooksPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">

      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">All Books</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          50+ post-apocalyptic thrillers across 7 series. From EMP survival to zombie apocalypse to asteroid strikes — find your next obsession.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {series.map((s) => (
            <Link key={s.slug} href={s.href}
                  className="group border border-border rounded-xl p-6 bg-card hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10 transition-all hover:-translate-y-0.5 block">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: s.color }}>{s.tag}</p>
              <h2 className="text-lg font-bold font-serif mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}