export interface ReviewEntry {
  author: string
  date: string
  title: string
  body: string
  rating: number
}

export interface BookEntry {
  num: number
  title: string
  amazon: string
  asin?: string
  isbn10?: string
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
}

export const minusAmericaBooks: BookEntry[] = [
  { 
    num: 1, 
    title: 'Minus America', 
    amazon: 'https://www.amazon.com/gp/product/B07VZYHFPL', 
    asin: 'B07VZYHFPL',
    isbn10: '1077692463',
    isbn13: '978-1077692466',
    published: 'August 1, 2019',
    wordCount: 71000,
    rating: '4.4',
    ratingCount: '1,670',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    languages: ['German', 'French', 'Dutch'],
    reviews: [
      {
        author: 'Nomadic Reviewer',
        date: 'November 17, 2019',
        title: 'JFK WOULD BE PROUD',
        body: "I enjoyed reading this story, it's well written and edited. I'm Navy, so any books about swabbies gets my juices flowing. I'm hoping in the next installment the readers find out how a corrections officer, prisoners, a nun and 4 teens manage to survive, come together and meet up with the pilot, geek programmer and the VPOTUS. It'll be interesting and that's what counts. I'm also thrilled that the story line isn't typical apoc — where disasters is from EMP's or zombie viruses wiping out the population, it's a new take on a highly prolific subject in an increasingly high volume market. I'm curious... very curious.",
        rating: 5,
      },
      {
        author: 'F.R.',
        date: 'November 16, 2020',
        title: 'Interesting apocalyptic take; believable characters',
        body: "So I'm deployed now and been reading quite a bit. Have gone through about half a dozen of these modern post-apocalyptic books. Plenty of similarities, but this one does stand out with the writer's style and the disparate stories that presumably come together. I look forward to the second book.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: 'Do I need to read the Minus America series in order?',
        a: 'Yes — each book continues the same story. Book 1 is the starting point.',
      },
      {
        q: 'What makes Minus America different from other post-apocalyptic books?',
        a: "Instead of EMPs, zombies, or pandemics, America faces a mysterious superweapon that erases its citizens in minutes. It's a fresh and terrifying premise you won't see coming.",
      },
      {
        q: 'Who should read this book?',
        a: "Readers who loved One Second After (for the character building), the Silo series (for the mystery-driven world-ending event), or any EMP/apocalyptic fiction (for the continuity after THE END). It's a non-political, character-driven thriller with military action, multiple storylines, and a uniquely unsettling premise — no current-events anxiety, minimal bad language.",
      },
    ],
    blurb: `What would the world be like without America?\n\nThe attack takes minutes. Sweeps from coast to coast. When the dust settles, nearly everyone on mainland USA is gone. Every policeman. Every housewife. Every trucker. A continent free for the taking.\n\nTed MacInnis is a backup pilot on Air Force Two when it happens — over the Atlantic, listening to his homeland's radio signals go dark one by one. But a last call to his niece convinces him some survived. She might be one of them.\n\nHis mission: find her. His first priority: protect Vice President Emily Williams, who might already be the leader of America's survivors.\n\nFor some, the fight means firepower and rebellion against an unseen enemy. For others, just surviving in the empty cities is challenge enough. Ted and warriors like him are about to become part of the most desperate fight America has ever seen.\n\nThis is Day One.`
  },
  { 
    num: 2, 
    title: 'Empty Cities', 
    amazon: 'https://www.amazon.com/gp/product/B07VVRWKGZ', 
    asin: 'B07VVRWKGZ',
    isbn10: '1691444707',
    isbn13: '978-1691444700',
    published: 'September 12, 2019',
    wordCount: 69000,
    rating: '4.5',
    ratingCount: '1,172',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    languages: ['German', 'French', 'Dutch'],
    reviews: [
      {
        author: 'Amazon Customer',
        date: 'November 26, 2019',
        title: 'Interesting and terrifying read...but a MUST READ!',
        body: "Just finished book two of the Minus America series the same day I started book one. Yeah it's that kind of enthrallingly dangerous read. Lost all sense of time and space until I finished just now and saw book three hasn't released yet! The storylines cross over and intertwine perfectly, the characters have you rooting for some and worrying what next with the others. The concept as an American — well I have to be honest — made me mad, made my throat tight and my heart hurt with just reading it. Details and character and geographic description is spot on and he truly captures you in the story! Awesome job sir, and thank you for your contribution to my collection of new favorites!",
        rating: 5,
      },
      {
        author: 'Bobbi',
        date: 'October 29, 2019',
        title: 'More is revealed in this book',
        body: "I enjoyed this book very much. The characters have developed nicely as has the story. I think this is a great post-apocalyptic book. This is different from the norm, pandemics, zombies, EMPs, etc. A refreshing change. This book is less about survival of a few, but tackles the who, what, why of the attack on America. No huge cliffhangers but can't wait for the next book and hopefully more after that to see what happens to our characters and find out the big HOW. I highly recommend this book!",
        rating: 5,
      },
    ],
    blurb: `There are no more red or blue states. Just empty states. And empty cities.\n\nBut a few Americans survived — and they're fighting to stay alive.\n\nTed the pilot is still protecting Vice President Emily Williams, still holding onto hope of finding his niece. But enemy forces are closing in on their position.\n\nTabby the tour guide is stuck with three young teens, searching for her parents. Entire cities are theirs to explore — empty, echoing, dangerous.\n\nDwight the homeless man talks to an invisible parrot. He might also be the only witness to the first wave of the invasion force.\n\nThree characters. Three journeys. A nation burning out of control, unmanned power grids shutting down city by city, and the terrorists preparing their next move.\n\nThe attack wasn't the end. It was just the beginning.`
  },
  { 
    num: 3, 
    title: 'Rebel Cause', 
    amazon: 'https://www.amazon.com/gp/product/B07X8R2B7W', 
    asin: 'B07X8R2B7W',
    isbn10: '1675162662',
    isbn13: '978-1675162668',
    published: 'December 17, 2019',
    wordCount: 79000,
    rating: '4.6',
    ratingCount: '732',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    languages: ['German', 'French', 'Dutch'],
    reviews: [
      {
        author: 'Robert R. Buschbom',
        date: 'November 3, 2024',
        title: 'Hooked',
        body: "Well he certainly knows how to keep the interest going. This is another survival series though with a different angle. I like the fact that we don't have a Special Forces good guy taking on the whole axis of evil. I do appreciate the return of characters from another series. These are good reads.",
        rating: 5,
      },
      {
        author: 'Linda - Crawfordville, FL',
        date: 'June 7, 2023',
        title: 'Keeps me going',
        body: "I am thoroughly engaged with this series! Isherwood has a very good writing style and develops the story with interesting and very believable characters. The weapon 'David' used is scary as hell! There's more to learn that was just hinted at by the end of this episode... so — off to read the next book. I'm not getting much done around the house, good thing I'm not working ;)",
        rating: 5,
      },
    ],
    blurb: `America is down. But never count it out.\n\nIt's been said America is impossible to conquer because there are guns behind every blade of grass. But what if no one was left to pull the triggers?\n\nTed and Emily are still running from the enemy, but the noose keeps tightening. Then Ted makes contact with his niece — and catches a lead on the nuclear briefcase stolen from him on day one. Hard choices ahead.\n\nTabby accepts her family is gone, but she won't give up her home. Does she have what it takes to fight back against an enemy with technological superiority?\n\nDwight finds himself at the tip of the spear of the invasion — powerless to stop it, but maybe able to slow it down.\n\nThe last few Americans explore what's left of their homeland, avoid the spreading invasion, and take the first steps toward rebellion. No allies. No reinforcements. Just whatever they're made of.`
  },
  { 
    num: 4, 
    title: 'Two Wolves and a Sheep', 
    amazon: 'https://www.amazon.com/gp/product/B082DL5WCL', 
    asin: 'B082DL5WCL',
    isbn13: '979-8644090907',
    published: 'June 11, 2020',
    wordCount: 78000,
    rating: '4.6',
    ratingCount: '393',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    languages: ['German', 'French', 'Dutch'],
    reviews: [
      {
        author: 'Pat',
        date: 'November 28, 2021',
        title: 'It finally happened',
        body: "Out of today's news this is a reality. Would it be a nuclear strike or a bio weapon that takes down America? Not what you would think and it appears that not everyone is gone and there's hell to pay. Someone did this and it's gonna hurt when the lady Americans find them.",
        rating: 5,
      },
      {
        author: 'pclayking',
        date: 'July 22, 2020',
        title: 'Fantastic series',
        body: "Anxiously awaiting next one. The characters are so vivid and the story line is very scary. Not scary in the sense of monsters, unless you mean human monsters. Unlike other post apocalyptic fiction, there are plenty of good and running vehicles. Food is not a problem. Lack of people is the problem. Recommend.",
        rating: 5,
      },
    ],
    blurb: `The wolves are running loose. And the sheep are learning to bite back.\n\nThe American homeland is being devoured by a relentless enemy. The resistance is dwindling. But all is not lost.\n\nTed and Emily have joined up with survivors the initial attack missed. After scoring a minor victory for the fledgling rebellion, they face a withering prospect: assaulting the invader's main base.\n\nTabby is already there — captured. What she does after learning the enemy leader's objectives will determine whether she lives to see another day.\n\nAnd Deogee? She's just happy to be with her Black Labrador friend, Biscuit. But these two might have stumbled onto the terrorist's greatest secret.\n\nToday, all roads lead to NORAD.`
  },
  { 
    num: 5, 
    title: 'Hostile Shores', 
    amazon: 'https://www.amazon.com/gp/product/B086SDWJSB', 
    asin: 'B086SDWJSB',
    isbn13: '979-8693116252',
    published: 'September 30, 2020',
    wordCount: 84000,
    rating: '4.6',
    ratingCount: '385',
    formats: ['kindle', 'audiobook', 'hardcover', 'paperback'],
    languages: ['German', 'French', 'Dutch'],
    reviews: [
      {
        author: 'CindyB',
        date: 'December 28, 2021',
        title: 'A fast-paced thrill ride!',
        body: "I really enjoyed this series. The characters were well developed and that is key to hooking the reader. Bear in mind, none of the books is a stand-alone. For that reason I didn't review or star the first 4. The series reads well. The action is intense, but yet there's time to connect with each character. By the way, Mr. Isherwood, if you read this... Thanks for Dwight! I have 8 parrots, so I really connected with him. Makes me want to get a 9th and call her Poppy! Dwight also, sadly reminded me of my late brother. Anyway, wonderful series. Scary scenario, but ends well.",
        rating: 5,
      },
      {
        author: 'SciFiFan',
        date: 'December 20, 2021',
        title: 'Great series',
        body: "Loved the characters and the world building. A new and different way of bringing on the apocalypse. This series was full of action and long sections during which I could not put these books down. I loved all the characters, especially Emily and Ted. Their romance was cute and quirky! Dwight was especially fascinating, through the end reveal. Good work all the way through. Editing was well done so no stumbling over typos or bad grammar. Well done from start to finish!",
        rating: 5,
      },
    ],
    blurb: `The final chapter. The fight for America ends here.\n\nThe enemy demands all Americans be expelled from every nation — Germany, England, France. Every US citizen must leave. The high seas are their only refuge.\n\nTed and Emily crash into the middle of the enemy camp, betrayed by David and his Legion. They were the first to fall — but the enemy leader has his sights set on a much larger target.\n\nTabby thinks she's rescued her friends, but they emerge from a tunnel into a strange new landscape. Always proud of her tour guide roots, she might end up leading a tour through a different apocalypse than the one she started in.\n\nThe enemy reveals their superweapon for one final attack. Have the remnants of the United States learned enough to recognize what it is — and where it is?\n\nHostile Shores is the final chapter of the Minus America series.`
  },
]

export const allSeriesBooks: Record<string, BookEntry[]> = {
  'minus-america': minusAmericaBooks,
}
