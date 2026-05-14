export interface BABook {
  num: number
  title: string
  amazon: string
  asin?: string
  isbn13?: string
  published?: string
  wordCount?: number
  rating: string
  ratingCount: string
  formats: string[]
  reviews?: { author: string; date: string; rating: string; title: string; body: string }[]
  blurb: string
  shortBlurb: string
}

export const buildBetterApocalypseBooks: BABook[] = [
  {
    num: 1,
    title: 'Build A Better Apocalypse: Beyond the EMP',
    amazon: 'https://www.amazon.com/gp/product/B0F2SJ2SRJ',
    asin: 'B0F2SJ2SRJ',
    isbn13: '979-8281782722',
    published: 'April 24, 2025',
    wordCount: 76000,
    rating: '5.0',
    ratingCount: '6',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'william j cunningham',
        date: 'July 3, 2025',
        rating: '5.0',
        title: 'favorite characters',
        body: "I read the neighborhood watch series and its companion about the lead characters nephew and his journeys. This author writes my favorite apocalyptic adventure books. Keep them coming!"
      },
      {
        author: 'Christopher Haught',
        date: 'June 7, 2025',
        rating: '5.0',
        title: 'A great start to a new series!',
        body: "I was so excited for the series to start. Loved the neighborhood watch series. This is a really cool and different take on the neighborhood watch world."
      }
    ],
    blurb: `You can plan for any Apocalypse. But can you plan for all of them?

Frank has prepared for the end of the world his whole life. He's read the books. Prepped his gear. He knows what kind of team to put together.

So when this new weapon zaps his neighbors into nothing but piles of clothes, it destroys the American spirit of cooperation, and it cancels all his best-laid plans.

Most everybody is gone, but he is not alone. Stragglers come together like atoms in space. Some survived the attack, same as him, but some are part of something else entirely.

The next challenge is to survive even more apocalyptic strikes... for it might not just be the end of his street, but the entire planet.

Build A Better Apocalypse is a standalone book series and you don't have to read any previous novels by EE Isherwood to enjoy and understand it. This series takes place in an alternate universe to EE Isherwood's Neighborhood Watch series.`,
    shortBlurb: `You can plan for any Apocalypse. But can you plan for all of them?`
  },
  {
    num: 2,
    title: 'Build A Better Apocalypse 2: Beyond the EMP',
    amazon: 'https://www.amazon.com/gp/product/B0F79L7RXS',
    asin: 'B0F79L7RXS',
    isbn13: '979-8292626947',
    published: 'June 26, 2025',
    wordCount: 79000,
    rating: '5.0',
    ratingCount: '6',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'Amazon Customer',
        date: 'January 6, 2026',
        rating: '5.0',
        title: 'Twists and turns Galore',
        body: "I wasn't sure if I wanted to continue reading this series. Boy am I glad I did! There are so many twists and turns. This is definitely not your ordinary post-apocalyptic thriller."
      },
      {
        author: 'Ami A.',
        date: 'June 27, 2025',
        rating: '5.0',
        title: 'Awesome apocalyptic thriller!',
        body: "As with all of the great books by EE Isherwood, Build a Better Apocalypse is an incredibly engaging story. I'm amazed at how the Neighborhood Watch series continues to surprise and delight readers."
      }
    ],
    blurb: `What if all the conspiracies were true? 'They' are working to end the world...

Frank survives the shock of witnessing the disappearance of his neighbors, and has built a small group of survivors around him, but the search for Carter — his friend who knows too much — continues.

The terrorists who ended the world have been planning it for a very long time. They have been manipulating our leaders to do their bidding, including to allow the attacks to happen.

More attacks are coming, according to the plan... can Frank gather enough allies to survive whatever comes next?

Build A Better Apocalypse is a standalone book series and you don't have to read any previous novels by EE Isherwood to enjoy and understand it.`,
    shortBlurb: `What if all the conspiracies were true? 'They' are working to end the world...`
  },
  {
    num: 3,
    title: 'Build A Better Apocalypse 3: Beyond the EMP',
    amazon: 'https://www.amazon.com/gp/product/B0FF2JC96S',
    asin: 'B0FF2JC96S',
    isbn13: '979-8265749932',
    published: 'September 18, 2025',
    wordCount: 78000,
    rating: '5.0',
    ratingCount: '6',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'EchoMirage',
        date: 'October 16, 2025',
        rating: '5.0',
        title: 'New, different, and exciting take on the apoc',
        body: "It may seem weird or hard to follow for some, but the new arc is like a breath of fresh air in the genre of post-apoc fiction. I really like the aspect of different storylines."
      },
      {
        author: 'Wm Todd Phoenix',
        date: 'October 8, 2025',
        rating: '5.0',
        title: 'Best series from Isherwood yet!',
        body: "I've really enjoyed all of E.E. Isherwood's books and these just keep getting better. I love that they've taken on a religious overtone and spliced threads of all their other series together."
      }
    ],
    blurb: `The first post-apocalyptic book... holds the key to surviving this disaster.

Frank is now on the other side of a "vision" that revealed everything about the type of apocalypse heading his way. A quantum computer simulation run by the enemy predicted every possible outcome — except one.

Now guided by what he saw in the simulation, he knows where to find the enemy and where to find his friends. His first challenge is to organize residents of a nearby town. The first is Buck Meadows, long haul truck driver. But to find him, he must travel into an abandoned part of the city where no survivor remains...

The enemy wants the brothers, too, and while Frank is collecting allies, his opponents are eliminating them. But killing the Kingston brothers is no easy task.

Build A Better Apocalypse takes place in an alternate universe to EE Isherwood's Neighborhood Watch series. Frank Douglas lives on the same street, with the same neighbors — but in a different reality.`,
    shortBlurb: `The first post-apocalyptic book... holds the key to surviving this disaster.`
  },
]