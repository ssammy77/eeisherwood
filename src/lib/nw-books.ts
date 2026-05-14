export interface ReviewEntry {
  author: string
  date: string
  title: string
  body: string
  rating: string
}

export interface BookEntry {
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
  languages?: string[]
  reviews?: ReviewEntry[]
  faqs?: { q: string; a: string }[]
  blurb: string
  shortBlurb?: string
}

export const neighborhoodWatchBooks: BookEntry[] = [
  {
    num: 1,
    title: 'Neighborhood Watch 1',
    amazon: 'https://www.amazon.com/gp/product/B09BG4VPXH',
    asin: 'B09BG4VPXH',
    isbn13: '979-8773147008',
    published: 'July 29, 2021',
    wordCount: 99000,
    rating: '4.5',
    ratingCount: '3,615',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'R.MacLean',
        date: 'November 19, 2023',
        rating: '5.0',
        title: 'Good Story, Well Told -- a fresher and more nuanced post-apocalyptic tale',
        body: "This book begins the story of a newly-retired businessman facing the aftermath of an EMP on his first day in a new neighborhood. His life as a trucker and business-owner, and his passion for post-apocalyptic fiction have prepared him well - or maybe not - for the growing chaos. Somehow, his not-always-expected approach to the dangers and challenges of the new environment are both fascinating and enlightening. As a voracious consumer of this genre, I found this book both refreshing and compelling."
      },
      {
        author: 'KikiC',
        date: 'November 19, 2025',
        rating: '5.0',
        title: "I'm hooked!",
        body: "I have a problem! I am hooked! Love the characters, love the plot. On book 3 now and will have to start buying 2 at a time until the end, because I am devouring them so fast!"
      }
    ],
    blurb: `Frank Douglas just bought his dream retirement. Then an EMP erased it in one second.

A new house. A new car. A new life — all gone when the lights went out.

Frank's neighbors are completely unprepared. Food runs out fast when the grocery stores don't reopen. Water stops flowing. And the power? Maybe tomorrow. Maybe never.

Frank isn't a prepper or a former special-ops soldier. He's a retired truck driver who happens to have read a lot of books about how the world ends. Now he's the most prepared person on his street, and his neighbors are looking to him to keep them alive.

Rallying a group of strangers to work together should be the hard part. But the streets are getting dangerous. And someone has to be ready for that.

One second. That's all it took for everything to change. What comes next will test whether Frank's reading was enough — or if he'll have to write the ending himself.`,
    shortBlurb: `Frank Douglas just bought his dream retirement. Then an EMP erased it in one second.`
  },
  {
    num: 2,
    title: 'Neighborhood Watch 2',
    amazon: 'https://www.amazon.com/gp/product/B09XGWRNK3',
    asin: 'B09XGWRNK3',
    isbn13: '979-8352366868',
    published: 'April 7, 2022',
    wordCount: 81000,
    rating: '4.6',
    ratingCount: '1,919',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Liz',
        date: 'December 28, 2023',
        rating: '5.0',
        title: 'A 5-star series',
        body: 'I highly recommend this series. The story plot is creative, entertaining and action packed. The characters are perfect for this kind of situation. I am on book 3 and love every minute of it!'
      },
      {
        author: 'Ami A.',
        date: 'May 15, 2022',
        rating: '5.0',
        title: 'Excellent apocalyptic tale!',
        body: "This is the second in what I HOPE will turn into a series of at least 10 books! Excellent characters give us near non-stop action."
      }
    ],
    blurb: `Frank held onto one street. The rest of the city was a question mark.

After the EMP, Frank's managed to keep his small group alive — barely. But there's only so much you can do with no power, no supplies, and a growing list of people who need food they can't find.

When he discovers neighbors two blocks over have a working vehicle — an old hot rod that somehow survived the electromagnetic pulse — Frank sees a chance to break out of his Rut. More wheels means more range. More range means more supplies.

But the roads are changing. Other groups are forming. And some of them don't play nice.

Going out could get him everything he needs to keep his people alive through winter. Or it could get them all killed.`,
    shortBlurb: `Frank held onto one street. The rest of the city was a question mark.`
  },
  {
    num: 3,
    title: 'Neighborhood Watch 3',
    amazon: 'https://www.amazon.com/gp/product/B0BHBXPKNF',
    asin: 'B0BHBXPKNF',
    isbn13: '979-8356460715',
    published: 'October 4, 2022',
    wordCount: 97000,
    rating: '4.6',
    ratingCount: '1,490',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Kindle Customer',
        date: 'August 13, 2024',
        rating: '5.0',
        title: 'Neighborhood watch',
        body: "Wow! I'm loving this series! A great story line, well rounded characters. A neighborhood pulls together after an EMP, becoming a tight-knit community, led by one man who has prepared. Jump in! The reading's fantastic!"
      },
      {
        author: 'Taylor',
        date: 'May 15, 2024',
        rating: '5.0',
        title: 'Excellent read',
        body: 'I have been reading Post-Apocalyptical books for many years. This series really gets you thinking and living vicariously through the pages.'
      }
    ],
    blurb: `The race to claim what's left starts the moment the EMP hits — food, supplies, people. Everyone wants something, and the only way to get it is to take it.

Frank's first expedition went well. He found resources, made contacts, and came home alive. But one trip isn't enough. His people need more — more food, more medicine, more of everything.

So Frank goes out again. And again. Each time further from home, deeper into a city that's getting more dangerous by the day.

He finds abandoned military roadblocks. Teenagers holed up at the high school. A group of survivors that'll take what he has if they can.

And somewhere out there, someone's been watching Clownfish Cove. Someone who knows what Frank's building — and wants it gone.`,
    shortBlurb: `The race to claim what's left starts the moment the EMP hits.`
  },
  {
    num: 4,
    title: 'Neighborhood Watch 4',
    amazon: 'https://www.amazon.com/gp/product/B0BMGD7WSD',
    asin: 'B0BMGD7WSD',
    isbn13: '979-8366365383',
    published: 'November 15, 2022',
    wordCount: 99000,
    rating: '4.6',
    ratingCount: '1,483',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'MMIrish1371',
        date: 'February 8, 2025',
        rating: '5.0',
        title: "four books in and I can't get enough",
        body: "Likable characters and fantastic storyline with great twist. A standup in the genre. I have no doubt that not only will I finish this series, I'll read everything by this author."
      },
      {
        author: 'linda moses',
        date: 'February 17, 2025',
        rating: '5.0',
        title: 'Neighborhood Hood Watch/1000 Miles of Bad Road',
        body: "Just started Book 5, and have finished 1000 Miles Of Bad Road. Should've started with Neighborhood Watch but no regrets. Both series keep you wanting more."
      }
    ],
    blurb: `The EMP wasn't the worst of it. Mother Nature is about to make her move.

Frank's kept his neighborhood together through sheer will and smart decisions — but most of his headaches have come from other people. Now the weather's turning, and there's no app notification to warn him. No weather report. No TV. Just a sky going dark over the Gulf.

The storm changes things. The roads clear out, which means he can finally move — and he does, in his newly acquired Mercedes Unimog 416. He heads into North Pointe looking for allies who went missing. What he finds instead: a troubled trailer park full of new enemies.

But the real problem isn't the people. It's time. There aren't enough hours in the day to organize newcomers, expand his territory, and fortify against what's coming. That's exactly the opening a group of militia-types needs — ones who've already ditched the old laws.

No weather reports. No warnings. Just the clock running down and a hurricane that doesn't care about any of Frank's preparations.

This time, the ocean itself is the enemy.`,
    shortBlurb: `The EMP wasn't the worst of it. Mother Nature is about to make her move.`
  },
  {
    num: 5,
    title: 'Neighborhood Watch 5',
    amazon: 'https://www.amazon.com/gp/product/B0BQGZQYVJ',
    asin: 'B0BQGZQYVJ',
    isbn13: '979-8376057308',
    published: 'January 30, 2023',
    wordCount: 77000,
    rating: '4.6',
    ratingCount: '1,255',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Del Hicks',
        date: 'January 28, 2026',
        rating: '5.0',
        title: 'Adrenaline rush',
        body: "This series is nonstop action. Good characters, not your typical lead action hero. It's entertaining and fun to read. I highly recommend it."
      },
      {
        author: 'zedlivesay',
        date: 'February 5, 2023',
        rating: '5.0',
        title: 'This Series Just Gets Better and Better',
        body: "I am so hooked on this series. I definitely want to be in Frank's neighborhood if things go off the rails. I see myself in their community and wish I had been more prepared."
      }
    ],
    blurb: `The hurricane is gone. What's left behind is its own disaster.

Frank wakes up each morning to find his problems have multiplied overnight. The floodwaters are receding, which means residents are coming back to claim their homes — and squatters are moving in behind them. Criminals slipping through unguarded doors. Chaos stacking on chaos. No police. No fire trucks. No rescue coming.

The neighborhoods are sorting themselves into territories. Gun battles to the south. North Pointe consolidating power to the north with new allies in the suburbs. And out west, a beached container ship washes ashore with an unknown load.

Then Frank spots something hopeful: a crashed plane in the forest, carrying something that might actually get the power back on. But between him and that prize: armed strangers, criminal teenagers, and a drive through unmapped territory on day 6 after the EMP.

He's living the retirement dream.`,
    shortBlurb: `The hurricane is gone. What's left behind is its own disaster.`
  },
  {
    num: 6,
    title: 'Neighborhood Watch 6',
    amazon: 'https://www.amazon.com/gp/product/B0BSNWDLR2',
    asin: 'B0BSNWDLR2',
    isbn13: '979-8387173479',
    published: 'March 24, 2023',
    wordCount: 86000,
    rating: '4.7',
    ratingCount: '1,138',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Sandra Fortenberry',
        date: 'March 31, 2023',
        rating: '5.0',
        title: 'This is why I read apocalypse books',
        body: "I live these books all of them. Regular people trying to survive without losing their human dignity. People coming together as a community. This author writes like I would want to be able to prepare if I could."
      },
      {
        author: 'Ellen Clason',
        date: 'April 8, 2023',
        rating: '5.0',
        title: 'And the story gets better with each new book',
        body: "Each book starts at the end of the last book. No second guessing but it does not give a cut and copy of what happens in the previous book. Just when I think this author cannot top the last book, the next one proves me wrong."
      }
    ],
    blurb: `Day 7. The factions are drawing lines, and not everyone likes where Frank is standing.

His brand of diplomatic cooperation doesn't sit well with everyone in Fort Myers. Some have been watching Clownfish Cove — studying the weak points, remembering the earlier attacks. Frank's people have been fortifying since those assaults, but there's only so much you can fix in a week.

Then an intruder breaches the perimeter and suddenly Frank's life is on the line.

As night falls, he boards the beached cargo ship with his people, looking for food, weapons, and answers. What they find instead: enemies waiting in the dark.

One more day. That's all he needs. But getting to sunrise might take everything he has.`,
    shortBlurb: `Day 7. The factions are drawing lines, and not everyone likes where Frank is standing.`
  },
  {
    num: 7,
    title: 'Neighborhood Watch 7',
    amazon: 'https://www.amazon.com/gp/product/B0BYTDS1DY',
    asin: 'B0BYTDS1DY',
    isbn13: '979-8396032743',
    published: 'May 24, 2023',
    wordCount: 86000,
    rating: '4.7',
    ratingCount: '1,077',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Rallie',
        date: 'June 5, 2023',
        rating: '5.0',
        title: 'LOVE THIS SERIES!',
        body: "This is one of my favorite series of all time! Great story line and character development has you invested by the first chapter. Cannot wait for the next one!"
      },
      {
        author: 'Steve Martin',
        date: 'July 25, 2023',
        rating: '5.0',
        title: 'A Great Read',
        body: "I read apocalyptic books all the time. I'm a Prepper in Alaska. This series is the most realistic I've read. I love the characters and the story keeps you guessing."
      }
    ],
    blurb: `Action and reaction — in the apocalypse, consequences multiply fast.

Frank spots an aerial drone and it spooks his crew. The voice behind it knows too much about their people, but also knows things about the enemies surrounding Clownfish Cove that could give them a real edge. Question is: can he trust it?

Before he can answer that, the sheriff throws a curveball. Frank ends up on a desperate rescue mission — family of someone thinking about joining their neighborhood. That's when he realizes something he set in motion on day 1 is now putting teenagers in danger a week later.

He fights through another night to save everyone he can. But exhaustion is mounting. The real question: is that what finally brings him down?`,
    shortBlurb: `Action and reaction — in the apocalypse, consequences multiply fast.`
  },
  {
    num: 8,
    title: 'Neighborhood Watch 8',
    amazon: 'https://www.amazon.com/gp/product/B0C5S45QXW',
    asin: 'B0C5S45QXW',
    isbn13: '979-8858380030',
    published: 'August 19, 2023',
    wordCount: 92000,
    rating: '4.6',
    ratingCount: '919',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Walt',
        date: 'June 21, 2025',
        rating: '5.0',
        title: 'Eight',
        body: 'Excellent adventure series with the full blown changes a fictional story can utilize in its telling. The pace is constant and the characters are real. This series is a must read for anyone who enjoys the genre.'
      },
      {
        author: 'Cindy Clark',
        date: 'August 29, 2023',
        rating: '5.0',
        title: 'Favorite author ever!!!',
        body: "As always, this book did not disappoint. Totally engaging from the first word to the last. I don't dare even open one of these unless I have at least three days off because I won't put it down!"
      }
    ],
    blurb: `Frank always imagined island life. This isn't what he had in mind.

The drone operator has been a thorn in his side for days — Frank can't trust a word out of the guy. But when one of his people gets captured, the mysterious operator claims to know where they are. All Frank has to do is meet him in the middle of the night.

Before that meeting happens, Frank gets tangled up in something bigger: people high up in the government, very high up. And a trip west into the Florida island chain reveals the fate of survivors along the coast.

The walls are closing in on Clownfish Cove from every direction. New threats from the drone operator. Old threats consolidating. Can Frank hold everything together?

Or is the final collapse already on its way?`,
    shortBlurb: `Frank always imagined island life. This isn't what he had in mind.`
  },
  {
    num: 9,
    title: 'Neighborhood Watch 9',
    amazon: 'https://www.amazon.com/gp/product/B0CFG4B5F7',
    asin: 'B0CFG4B5F7',
    isbn13: '979-8863375137',
    published: 'October 4, 2023',
    wordCount: 82000,
    rating: '4.7',
    ratingCount: '814',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Christopher Haught',
        date: 'October 13, 2023',
        rating: '5.0',
        title: 'Wow is all I can say!',
        body: "Another great book in the series! It's building up to the grand finale. Excitement, twists and turns and action galore! Can't wait for the final book to see what happens to Frank and his neighborhood watch!"
      },
      {
        author: 'Jesse R.',
        date: 'July 18, 2024',
        rating: '5.0',
        title: 'Great entertainment!',
        body: "Most other post-apocalyptic stories are centered around some ex delta or special operations type character. It's so refreshing to read about an average Joe just using his wits to get by! I'm about to start the final book in the series."
      }
    ],
    blurb: `Two weeks in. The world has gone red.

The power isn't coming back. The last holdouts are finally leaving their homes, realizing they've missed their chance to prep. Desperation is everywhere.

Cities burning. Ash turning the sky orange. Libraries torched. Grocery stores picked clean. Every abandoned car stripped down to the frame.

Frank starts his day in the heart of this disaster, far from his street. But he has to get back — every piece of intel he's gathered points to the same truth: forces of darkness have their eyes on the last refuge in the region. Clownfish Cove. The last piece of old America left standing.

They want it. And they're coming.`,
    shortBlurb: `Two weeks in. The world has gone red.`
  },
  {
    num: 10,
    title: 'Neighborhood Watch 10',
    amazon: 'https://www.amazon.com/gp/product/B0CJYK9LZK',
    asin: 'B0CJYK9LZK',
    isbn13: '979-8873731367',
    published: 'December 19, 2023',
    wordCount: 105000,
    rating: '4.7',
    ratingCount: '976',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    reviews: [
      {
        author: 'Gerald',
        date: 'April 24, 2024',
        rating: '5.0',
        title: 'I read every book and they all get 5 stars!',
        body: "I did in fact read all the books in this series. It was done in Florida where I was raised and as far as accurate goes, it's spot on research. The story was very well written and super entertaining. I enjoyed every minute with Clownfish Cove crew. This series will not let you down, read it, enjoy all of it."
      },
      {
        author: 'Robert P. Rockhill',
        date: 'July 25, 2024',
        rating: '5.0',
        title: 'Wonderful Read',
        body: "This is my favorite genre to read and this is probably my favorite series I've read. It's exciting and realistic and it's unique. It's the only one I've read that is about the suburbs most of us live in."
      }
    ],
    blurb: `Frank read all the books about the end of the world. But books can't pull the trigger.

He's tried diplomacy. He's tried talking his way out. And somehow he still ended up with a body count that would make a warlord flinch.

The hard truth: words don't fill stomachs. The neighborhood watch controls the only stable ground for miles — food, fresh water, a little hope. A slice of old America. And everyone else is working together to take it from them.

Two weeks. Every challenge Frank has faced, every decision made, every ally and enemy created — it all comes down to this.

Neighborhood Watch 10 is the epic conclusion to the After the EMP series.`,
    shortBlurb: `Frank read all the books about the end of the world. But books can't pull the trigger.`
  },
]