import type { Metadata } from 'next'
import { WebSite, Person, Book, BreadcrumbList, Organization } from 'schema-dts'
import { trim } from 'lodash'

const SITE_URL = 'https://eeisherwood.com'
const AUTHOR_NAME = 'EE Isherwood'

export const authorSchema: Person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#/schema/person`,
  name: AUTHOR_NAME,
  url: SITE_URL,
  sameAs: [
    'https://www.amazon.com/author/eeisherwood',
    'https://www.goodreads.com/author/show/57907096.E_E_Isherwood',
    'https://www.facebook.com/sincethesirens',
    'https://www.instagram.com/eeisherwood',
    'https://twitter.com/eeisherwood',
  ],
  jobTitle: 'Post-Apocalyptic Thriller Author',
  knowsAbout: [
    'EMP Survival Fiction',
    'Zombie Apocalypse',
    'Post-Apocalyptic Thrillers',
    'Self-Reliance',
    'Survivalism',
  ],
}

export const websiteSchema: WebSite = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#/schema/website`,
  name: 'EE Isherwood — Post-Apocalyptic Thriller Author',
  url: SITE_URL,
  description: 'NYT bestselling indie author of 50+ post-apocalyptic thrillers. EMP survival, zombie apocalypse, and sci-fi series.',
  publisher: { '@id': `${SITE_URL}/#/schema/person` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export const organizationSchema: Organization = {
  '@type': 'Organization',
  name: 'EE Isherwood',
  url: SITE_URL,
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as BreadcrumbList
}

export function generateSeriesSchema(opts: {
  name: string
  description: string
  bookCount: number
  url: string
  books: { name: string; position: number; url: string }[]
}) {
  return {
    '@type': 'BookSeries',
    name: opts.name,
    description: opts.description,
    numberOfBooks: opts.bookCount,
    url: opts.url,
    author: { '@id': `${SITE_URL}/#/schema/person` },
    book: opts.books.map((book) => ({
      '@type': 'Book',
      name: book.name,
      position: book.position,
      url: book.url,
      author: { '@id': `${SITE_URL}/#/schema/person` },
    })),
  }
}

export function generateBookSchema(opts: {
  title: string
  description: string
  isbn13?: string
  asin?: string
  url: string
  datePublished?: string
  position?: number
  image?: string
  author?: string
  aggregateRating?: { ratingValue: string; ratingCount: string }
}) {
  return {
    '@type': 'Book',
    name: opts.title,
    description: opts.description,
    isbn13: opts.isbn13,
    asin: opts.asin,
    url: opts.url,
    position: opts.position,
    datePublished: opts.datePublished,
    image: opts.image,
    author: { '@id': `${SITE_URL}/#/schema/person` },
    publisher: { '@id': `${SITE_URL}/#/schema/person` },
    aggregateRating: opts.aggregateRating ? {
      '@type': 'AggregateRating',
      ratingValue: opts.aggregateRating.ratingValue,
      ratingCount: opts.aggregateRating.ratingCount,
    } : undefined,
  } as Book
}

export function generateReviewSchema(opts: {
  author: string
  datePublished: string
  reviewBody: string
  reviewRating: number
  itemReviewed: string
}) {
  return {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: opts.reviewRating,
    },
    author: {
      '@type': 'Person',
      name: opts.author,
    },
    datePublished: opts.datePublished,
    reviewBody: opts.reviewBody,
    itemReviewed: {
      '@type': 'Book',
      name: opts.itemReviewed,
    },
  }
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function generateJsonLd(schema: object) {
  return JSON.stringify(schema)
}

// Canonical URL helper
export function canonicalUrl(path: string) {
  return `${SITE_URL}${path}`
}