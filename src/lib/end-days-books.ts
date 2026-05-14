export interface EndDaysBook {
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

export const endDaysBooks: EndDaysBook[] = [
  {
    num: 1,
    title: 'Blue Apocalypse',
    amazon: 'https://www.amazon.com/gp/product/B07MYQ1MQQ',
    asin: 'B07MYQ1MQQ',
    isbn13: '978-1797413174',
    published: 'January 21, 2019',
    rating: '4.4',
    ratingCount: '895',
    formats: ['kindle', 'audiobook', 'paperback', 'audio_cd'],
    reviews: [
      {
        author: 'Georgia McNabb',
        date: 'June 25, 2025',
        rating: '5.0',
        title: 'Great Book, Great Story',
        body: "I have read and listen to several end of days series and I have to say this first book in this series and the different approach has got me hooked."
      },
      {
        author: 'Saylor',
        date: 'February 6, 2024',
        rating: '5.0',
        title: 'Get ready for the fastest rollercoaster ride',
        body: "You have ever ridden in 'Blue Apocalypse'. Just when you think that you know what's happening, the book takes and twists everything into a something you didn't see coming."
      }
    ],
    blurb: `A father and his son. 2,500 miles apart. A blue ribbon crosses the sky. The world starts to unravel.\n\nBuck is running his big rig from the west coast. Garth is trapped in New York City with his high school friend. No one knows what's happening, but everyone is trying to find out.\n\nWith Marine training and an eighteen-wheeler, Buck heads east. With no training and no way to reach his father, Garth fights just to escape New York.\n\nThe Hadron collider at CERN. Its twin south of Denver. The Australian outback. Something connects them — and those who might be able to fix things are trying to figure it out. But Buck doesn't care about any of that. He's on a mission to find his son.\n\nIs time the enemy of humanity?\n\nThe first book in the End Days series.`,
    shortBlurb: `A father and his son. 2,500 miles apart. A blue ribbon crosses the sky. The world starts to unravel.`
  },
  {
    num: 2,
    title: 'Broken Arrow',
    amazon: 'https://www.amazon.com/gp/product/B07NV2XC7X',
    asin: 'B07NV2XC7X',
    isbn13: '978-1797427751',
    published: 'February 18, 2019',
    rating: '4.6',
    ratingCount: '493',
    formats: ['kindle', 'audiobook', 'paperback', 'audio_cd'],
    reviews: [
      {
        author: 'Rusty V.',
        date: 'April 23, 2026',
        rating: '5.0',
        title: 'Another great book in this series',
        body: "Wow. Another great, intense book in this series. Can't wait to read book 3. And I love these authors too."
      },
      {
        author: 'Christine 1655',
        date: 'July 13, 2020',
        rating: '5.0',
        title: 'Wow. Kept me up past midnight so I could finish this book',
        body: "I'm like a fish on the hook waiting to see what happens next. This is quite different from most of the other books I've read about worldwide chaos. So glad I found these authors!"
      }
    ],
    blurb: `A father and his son, a country apart. Time swirls and strange is the new normal.\n\nBuck is driving for his life. Garth is too. Nowhere is safe as the dangers mount.\n\nMust get moving — unless staying is better. Does anyone know the best choice? Make it up as you go, because no one has gone through this before.\n\nThe world becomes more and more hostile. But Buck and Garth aren't going to take it lying down.\n\nBook 2 of the End Days series.`,
    shortBlurb: `A father and his son, a country apart. Time swirls and strange is the new normal.`
  },
  {
    num: 3,
    title: 'Broad America',
    amazon: 'https://www.amazon.com/gp/product/B07PNZ5589',
    asin: 'B07PNZ5589',
    isbn13: '978-1091248809',
    published: 'March 17, 2019',
    rating: '4.5',
    ratingCount: '358',
    formats: ['kindle', 'audiobook', 'paperback'],
    reviews: [
      {
        author: 'Angie',
        date: 'February 15, 2024',
        rating: '5.0',
        title: 'Great series',
        body: "This series is getting better and better. Between time and space a father is desperate to reach his son. How can time be so off? I love this series."
      },
      {
        author: 'mjoyingAZ',
        date: 'November 24, 2019',
        rating: '5.0',
        title: 'Just as good as the first two.',
        body: "I downloaded the first in this series for free on Kindle. This is the third book of this series and I usually don't purchase them if the first two weren't good. This is not the case here."
      }
    ],
    blurb: `The world splits again. Buck and Garth have to cross it.\n\nTime has fractured for everyone, but for Buck and Garth it's different. They have a connection to the original event — and to each other. The connection spans continents and pulls them toward something neither understands.\n\nBuck makes his way across a changed America. Garth is deep in South America, looking for answers to questions he didn't know existed. The more they travel, the more they realize that the plan isn't just about them — it's about everyone.\n\nBook 3 of the End Days series.`,
    shortBlurb: `The world splits again. Buck and Garth have to cross it.`
  },
  {
    num: 4,
    title: 'Begin Again',
    amazon: 'https://www.amazon.com/gp/product/B07QZNF4GG',
    asin: 'B07QZNF4GG',
    isbn13: '978-1095217269',
    published: 'April 21, 2019',
    rating: '4.6',
    ratingCount: '281',
    formats: ['kindle', 'audiobook', 'paperback'],
    reviews: [
      {
        author: 'Raeosunshine59',
        date: 'September 25, 2021',
        rating: '5.0',
        title: 'please continue!',
        body: "Love the story line and the characters -- will forgive the physics and believe the sci-fi aspect of it all. I'm hoping you create continuity over the planet!"
      },
      {
        author: 'I read for Sanity',
        date: 'July 24, 2021',
        rating: '5.0',
        title: 'Best Post-apocalyptic book (series) I\'ve read in a few years!',
        body: "I read all four books, one after the other over a week. I'm a homesteaders and that got in the way of a lot of things. I would have liked to have read a little more military involvement in the storyline."
      }
    ],
    blurb: `The rules keep changing. Survival means keeping up.\n\nBuck and Garth are on the move again — but the rules aren't the same. Where they could drive before, now they walk. Where there was one enemy, now there are dozens. The world has shifted, and they're trying to figure out the new rules.\n\nThe one constant: each other. Buck needs to find Garth. Garth needs to find Buck. Everything else is negotiable.\n\nBook 4 of the End Days series.`,
    shortBlurb: `The rules keep changing. Survival means keeping up.`
  },
  {
    num: 5,
    title: 'Beyond Alpha',
    amazon: 'https://www.amazon.com/gp/product/B09GBCMGD8',
    asin: 'B09GBCMGD8',
    isbn13: '978-1953062222',
    published: 'October 11, 2021',
    rating: '4.7',
    ratingCount: '224',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'molly jan',
        date: 'October 19, 2021',
        rating: '5.0',
        title: 'New world',
        body: "Wow these 5 books were fantastic. I've never read a world ending story like this. I really love it. I was sitting on the edge of my seat at all the action."
      },
      {
        author: 'Ami A.',
        date: 'November 26, 2021',
        rating: '5.0',
        title: 'Awesome book in a terrific series!',
        body: "I was elated to discover book 5 of End Days had been published! Isherwood and Martelle are on my favorite author list so its no surprise their collaboration continues to deliver."
      }
    ],
    blurb: `The apocalypse isn't one event — it's a chain reaction. And the chain isn't finished.\n\nBuck and Garth have made it further than most. They've survived multiple world-ending events, crossed a fractured country, and found each other again. But the people who started this are still out there — and they have one more plan.\n\nThe final move of the original event. The one that will settle everything. If Buck and Garth can stop it, they might actually have a future.\n\nBook 5 of the End Days series.`,
    shortBlurb: `The apocalypse isn't one event — it's a chain reaction. And the chain isn't finished.`
  },
  {
    num: 6,
    title: 'Bold Action',
    amazon: 'https://www.amazon.com/gp/product/B09WXQDP5W',
    asin: 'B09WXQDP5W',
    isbn13: '978-1953062390',
    published: 'April 30, 2022',
    rating: '4.7',
    ratingCount: '222',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'Angie',
        date: 'October 26, 2024',
        rating: '5.0',
        title: 'Wow',
        body: "The story line you never want to end. The characters you wish were real and a world that will make you strain your shorts. That is this series."
      },
      {
        author: 'Marti Show',
        date: 'August 11, 2022',
        rating: '5.0',
        title: 'End of Days, Beginning of Days',
        body: "After having read (and reviewed) this Series, I heartily recommend it to all as an example of the 'honor, courage, and commitment' indicative of the best of the human spirit."
      }
    ],
    blurb: `The end was just the beginning of the next phase. Time to choose sides.\n\nBuck and Garth have survived everything. They've found their way back to each other, assembled a group of allies, and figured out who was behind it all. But knowing who the enemy is and defeating them are two different things.\n\nThe final battle is coming. Everything they've learned, every lesson from every apocalypse — it all comes down to one moment. Bold action might be the only thing that saves them.\n\nBook 6 of the End Days series.`,
    shortBlurb: `The end was just the beginning of the next phase. Time to choose sides.`
  },
]