export interface ThousandMilesBook {
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

export const thousandMilesBooks: ThousandMilesBook[] = [
  {
    num: 1,
    title: '1000 Miles of Bad Road 1: After the EMPs',
    amazon: 'https://www.amazon.com/gp/product/B0CQDJL821',
    asin: 'B0CQDJL821',
    isbn13: '979-8884946682',
    published: 'March 12, 2024',
    rating: '4.8',
    ratingCount: '281',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'Zombies Rock',
        date: 'April 29, 2024',
        rating: '5.0',
        title: 'Great start to a new series',
        body: "I really enjoyed this first book in the After the EMPs series. I fell in love with all of the Clownfish Cove characters and was looking forward to this new book. Now I'm hooked on following Joey, Herb, Kamino and the rest of the cast of characters in this series to see how they survive this high jacking of America and rebuild their lives."
      },
      {
        author: 'LanceR',
        date: 'November 15, 2025',
        rating: '5.0',
        title: '1000 Miles is Just the Beginning',
        body: "A great start to a fast-moving post-apocalyptic series. Likable and relatable characters of all ages and backgrounds. I was sorry to see this part of the ride end."
      }
    ],
    blurb: `The EMPs knock out America's cities in seconds... but her arteries, the highways, take a little longer.

Joey inherits a profitable trucking company from his retiring uncle. At 35, after a life driving wreckers and tow-trucks, struggling through night schools, and working toward his dreams — he finally has everything.

He hops in his classic Mustang, points it west, and savors the freedom of the open road…

When he finally comes to a stop, it isn't because he reached a destination. Every car, truck, big rig, and tour bus rolls to a halt with him. Phones are dead. Planes are falling from the sky.

He knows what caused it. He knows what it means for his safety. He also knows he has the only working vehicle in the traffic jam.

Suddenly, the same highways that gave him freedom now have him trapped. To get home, he'll have to cut through a thousand miles of bad road.

This is the first book in a new EMP collapse series set in EE Isherwood's Neighborhood Watch universe. This series takes place at the same time, but in different locations — and the characters will eventually cross paths.`,
    shortBlurb: `The EMPs knock out America's cities in seconds... but her arteries, the highways, take a little longer.`
  },
  {
    num: 2,
    title: '1000 Miles of Bad Road 2: After the EMPs',
    amazon: 'https://www.amazon.com/gp/product/B0CWZYGG1L',
    asin: 'B0CWZYGG1L',
    isbn13: '979-8332577819',
    published: 'May 14, 2024',
    rating: '4.8',
    ratingCount: '163',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'david@americanshomer',
        date: 'July 9, 2025',
        rating: '5.0',
        title: 'Really Good Storytelling!',
        body: "Yes, we have an excellent author weaving a second great series after his classic Neighborhood Watch. You'll love poring through the pages of this series. Can't wait for more!"
      },
      {
        author: 'Amazon Customer',
        date: 'December 19, 2024',
        rating: '5.0',
        title: 'Another great book.',
        body: "I am really getting into these books. Isherwood has done it again. I have been blazing through his series of books for a few weeks now and do not want to stop."
      }
    ],
    blurb: `The drumbeat of chaos is getting louder. Nowhere, no matter how remote, can escape the sound.

Joey heads east with his new friends, anxious to get far from the devastation in Denver and the rogue Americans who caused it. However, he is at a serious disadvantage without his eighteen-wheeler.

A game of cat and mouse begins…

Far away, in Fort Myers, Florida, the unlikely teen trio of Kamino, Liam, and Garth try to wait out the EMP inside an abandoned high school. Unfortunately, the rules have changed, and the new rules are written in blood.

And in New York City, Herb and Mildred must choose between staying on an island with a million hungry residents or making a run for it through one of the dark tunnels.

It is only the second day after the EMPs, but the people who launched them have been prepping for the chaos for a very long time. Can ordinary Americans organize faster than their enemies?

This is the second book in a new EMP collapse series set in EE Isherwood's Neighborhood Watch universe.`,
    shortBlurb: `The drumbeat of chaos is getting louder. Nowhere, no matter how remote, can escape the sound.`
  },
  {
    num: 3,
    title: '1000 Miles of Bad Road 3: After the EMPs',
    amazon: 'https://www.amazon.com/gp/product/B0D3JWFDR9',
    asin: 'B0D3JWFDR9',
    isbn13: '979-8338524664',
    published: 'July 25, 2024',
    rating: '4.8',
    ratingCount: '116',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'Katie English',
        date: 'February 1, 2025',
        rating: '5.0',
        title: 'Great read',
        body: "I stayed up all night reading, haven't done that in awhile. Great series so far and I hope its long."
      },
      {
        author: 'Sue',
        date: 'September 5, 2024',
        rating: '5.0',
        title: 'This book is so good I couldn\'t put it down!',
        body: "I had keep reading it until I got to the end. I can't wait for the next book to be out. This author's books are always wonderful It doesn't matter which series you are reading they are all great."
      }
    ],
    blurb: `Start your engines... Day 3 after the EMPs begins.

After days of delays, Joey intends to put some serious miles on his Mustang, desperate to cover some distance toward Chicago before the whole state of Kansas falls into chaos.

In Florida, Kamino and her two new friends are stuck babysitting the abandoned children, but the lawless gangs are coiling around them, getting ever closer. Is help on the way?

In New York City, Herb and Mildred, both in their eighties, come to terms with their fate in the giant urban jungle...

This is the third book in a new EMP collapse series set in EE Isherwood's Neighborhood Watch universe.`,
    shortBlurb: `Start your engines... Day 3 after the EMPs begins.`
  },
  {
    num: 4,
    title: '1000 Miles of Bad Road 4: After the EMPs',
    amazon: 'https://www.amazon.com/gp/product/B0D9HMB9WD',
    asin: 'B0D9HMB9WD',
    isbn13: '979-8339256496',
    published: 'September 19, 2024',
    rating: '4.8',
    ratingCount: '109',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'bpaschal',
        date: 'October 18, 2024',
        rating: '5.0',
        title: 'Page Turner of a series!',
        body: "I first read the Neighborhood Watch series and loved it! I was so glad to find this series that is in the same universe/time-line. I really enjoy the connection to those characters."
      },
      {
        author: 'Ami A.',
        date: 'September 24, 2024',
        rating: '5.0',
        title: 'Excellent apocalyptic thriller!',
        body: "1000 Miles of Bad Road 4 is an incredible flight across America by three separate groups! I love the intensity of the events that the main characters have to endure."
      }
    ],
    blurb: `As the days wear on... the American roads only get worse.

Joey manages to escape Hays, Kansas with Libby and Victoria, but he is no longer driving to get home. He now knows his Uncle Frank is in extreme danger from bad actors closer to Florida.

Instead of heading north to Chicago, he's going south to Florida.

But he's low on fuel, money, and supplies. When he gets to the beach, he won't find girls in bikinis, sand volleyball, or kegs of beer. Instead, it will likely be chaos and worse.

Florida or bust. Fort Myers, here we come.

This is the fourth book in a new EMP collapse series set in EE Isherwood's Neighborhood Watch universe.`,
    shortBlurb: `As the days wear on... the American roads only get worse.`
  },
  {
    num: 5,
    title: '1000 Miles of Bad Road 5: After the EMPs',
    amazon: 'https://www.amazon.com/gp/product/B0DHD6DN1R',
    asin: 'B0DHD6DN1R',
    isbn13: '979-8304692052',
    published: 'December 19, 2024',
    rating: '4.8',
    ratingCount: '96',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'Ami A.',
        date: 'December 25, 2024',
        rating: '5.0',
        title: 'Excellent apocalyptic thriller!',
        body: "1000 Miles of Bad Road 5 is an incredible culmination of three separate groups that have endured much while traveling to and in Florida! I love the intensity of the events."
      },
      {
        author: 'KB in MN',
        date: 'January 22, 2025',
        rating: '5.0',
        title: 'Long Live Clownfish Cove',
        body: "Wow! I've thoroughly enjoyed reading the Neighborhood Watch and 1000 Miles of Bad Road series. They have kept me engaged and on the edge of my seat many nights."
      }
    ],
    blurb: `The end... after THE END.

It has now been two weeks since the EMPs turned off the lights of America. Joey and Libby have crossed several more states and are close to Fort Myers, a few short miles from their destination.

Behind them, a Legion officer continues to close in on them...

Herb and Mildred are in the sunshine state, too, after their own perilous journey. Their home is so close, yet so far away.

Kamino and company are already in Florida, living inside the warring subdivisions. Decisions they make might decide whether Herb will make it back to his own home.

All three threads weave together in this final book of the 1000 Miles series.

This is the fifth and final book in the EMP collapse series set in EE Isherwood's Neighborhood Watch universe.`,
    shortBlurb: `The end... after THE END.`
  },
]