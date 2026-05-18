import { MetadataRoute } from 'next'
import { neighborhoodWatchBooks } from '@/lib/nw-books'
import { sirensBooks } from '@/lib/sirens-books'
import { endDaysBooks } from '@/lib/end-days-books'
import { impactBooks } from '@/lib/impact-books'
import { thousandMilesBooks } from '@/lib/1000-miles-books'
import { buildBetterApocalypseBooks } from '@/lib/build-better-apocalypse-books'
import { empEmpireBooks } from '@/lib/emp-empire-books'

const BASE_URL = 'https://eeisherwood.com'

const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/books', priority: 0.9, changefreq: 'weekly' },
  { url: '/free-books', priority: 0.8, changefreq: 'monthly' },
  { url: '/about', priority: 0.7, changefreq: 'monthly' },
  { url: '/about/interview', priority: 0.6, changefreq: 'monthly' },
  { url: '/newsletter', priority: 0.5, changefreq: 'yearly' },
  { url: '/thanks', priority: 0.3, changefreq: 'yearly' },
]

const seriesPages = [
  { url: '/neighborhood-watch-after-the-emp', priority: 0.9, changefreq: 'weekly' },
  { url: '/sirens-of-the-zombie-apocalypse', priority: 0.9, changefreq: 'weekly' },
  { url: '/minus-america', priority: 0.8, changefreq: 'weekly' },
  { url: '/end-days', priority: 0.8, changefreq: 'weekly' },
  { url: '/impact', priority: 0.8, changefreq: 'weekly' },
  { url: '/1000-miles-of-bad-road', priority: 0.8, changefreq: 'weekly' },
  { url: '/build-a-better-apocalypse', priority: 0.8, changefreq: 'weekly' },
  { url: '/emp-empire', priority: 0.7, changefreq: 'weekly' },
  { url: '/when-the-music-stops', priority: 0.6, changefreq: 'monthly' },
]

const bookPages: { url: string; priority: number; changefreq: string }[] = []

// NW books
neighborhoodWatchBooks.forEach((b, i) => {
  bookPages.push({ url: `/neighborhood-watch-after-the-emp/${b.num}`, priority: 0.8 - i * 0.01, changefreq: 'monthly' })
})

// Sirens books
sirensBooks.forEach((b, i) => {
  bookPages.push({ url: `/sirens-of-the-zombie-apocalypse/${b.num}`, priority: 0.8 - i * 0.01, changefreq: 'monthly' })
})

// End Days books
endDaysBooks.forEach((b, i) => {
  bookPages.push({ url: `/end-days/${b.num}`, priority: 0.7 - i * 0.01, changefreq: 'monthly' })
})

// Impact books
impactBooks.forEach((b, i) => {
  bookPages.push({ url: `/impact/${b.num}`, priority: 0.7 - i * 0.01, changefreq: 'monthly' })
})

// 1000 Miles books
thousandMilesBooks.forEach((b, i) => {
  bookPages.push({ url: `/1000-miles-of-bad-road/${b.num}`, priority: 0.7 - i * 0.01, changefreq: 'monthly' })
})

// Build Better Apocalypse books
buildBetterApocalypseBooks.forEach((b, i) => {
  bookPages.push({ url: `/build-a-better-apocalypse/${b.num}`, priority: 0.7 - i * 0.01, changefreq: 'monthly' })
})

// EMP Empire books
empEmpireBooks.forEach((b, i) => {
  bookPages.push({ url: `/emp-empire/${b.num}`, priority: 0.6 - i * 0.01, changefreq: 'monthly' })
})

export default function sitemap(): MetadataRoute.Sitemap {
  const allPages = [
    ...staticPages.map(p => ({ ...p, lastmod: new Date() })),
    ...seriesPages.map(p => ({ ...p, lastmod: new Date() })),
    ...bookPages.map(p => ({ ...p, lastmod: new Date() })),
  ]

  return allPages.map(page => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastmod,
    changeFrequency: page.changefreq as any,
    priority: page.priority,
  }))
}