export interface ImpactBook {
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

export const impactBooks: ImpactBook[] = [
  {
    num: 1,
    title: 'Inbound',
    amazon: 'https://www.amazon.com/gp/product/B0C66J5ZQM',
    asin: 'B0C66J5ZQM',
    published: 'June 27, 2023',
    rating: '4.6',
    ratingCount: '93',
    formats: ['kindle'],
    reviews: [
      {
        author: 'Kindle Customer',
        date: 'November 22, 2023',
        rating: '5.0',
        title: 'Excellent!',
        body: "I just discovered this author and I'm currently getting ready to start book 4. I just had to come back to do a rating. This author finishes not just every chapter with a cliff hanger, he finishes every paragraph with a hook."
      },
      {
        author: 'Jackgjr66',
        date: 'September 17, 2023',
        rating: '5.0',
        title: 'Excellent!',
        body: "Boy, was I shocked when I finished this book! Like In a fabulous way! I loved it, Finished it within a few hours, and after dinner, I am going back for more! This is the first book of a new favorite author."
      }
    ],
    blurb: `Asteroid mining sounds like a great idea... until a trillion dollars falls from space onto western Kentucky.

Ezra is enjoying his last day on the lake, before leaving his home to be closer to his daughter. His whole life takes a hard left when a wayward asteroid crashes into the nearby city.

Across the country, in Yellowstone National Park, his daughter is giving her first campfire talk as a park ranger. Pieces of the asteroid come down on top of her, too. Not only must she survive the impact, but she has to protect the tourists she's responsible for.

Meanwhile, middle America is in full-bore societal collapse under the weight of multiple catastrophic impacts.`,
    shortBlurb: `Asteroid mining sounds like a great idea... until a trillion dollars falls from space onto western Kentucky.`
  },
  {
    num: 2,
    title: 'Bounce',
    amazon: 'https://www.amazon.com/gp/product/B0C66MHNYF',
    asin: 'B0C66MHNYF',
    published: 'July 12, 2023',
    rating: '4.6',
    ratingCount: '71',
    formats: ['kindle'],
    reviews: [
      {
        author: 'Christopher Haught',
        date: 'July 29, 2023',
        rating: '5.0',
        title: 'Another Great Read!',
        body: "Book 2 of the impact series definitely delivers. I can't wait to read the next one. EE Isherwood really nails the character development and the story lines just keeps you reading all night long!"
      },
      {
        author: 'Jackgjr66',
        date: 'September 18, 2023',
        rating: '5.0',
        title: "can't wait!",
        body: "Just finished Bounce, book two of the impact series. OMGosh! So good! It's pretty late here, but I'm pretty sure I'm gonna be up for a while longer with book 3! Again, excellent story!"
      }
    ],
    blurb: `The first impact blew them back into the 1800s... but what about the second?

Ezra's only mission is to get to his daughter, but she is a thousand miles away, and he can't even drive off his street. He'll need allies, bicycles, and a clear route. Will he find her before the next asteroid hits?

Yellowstone is on fire. After the local impacts, Grace has to evacuate tourists from the devastated park. To do it, she'll need to take them over the storm-swept pass. The ashy snow blindness is only the first obstacle.

Far from any danger, the perpetrators of the disaster plan how to cash in... and silence those who know the truth.

This series was originally published in 2019-2020 in partnership with Mike Kraus. Now published solely under the EE Isherwood brand.`,
    shortBlurb: `The first impact blew them back into the 1800s... but what about the second?`
  },
  {
    num: 3,
    title: 'Adrift',
    amazon: 'https://www.amazon.com/gp/product/B0C678VWCV',
    asin: 'B0C678VWCV',
    published: 'July 27, 2023',
    rating: '4.7',
    ratingCount: '54',
    formats: ['kindle'],
    reviews: [
      {
        author: 'Christopher Haught',
        date: 'August 1, 2023',
        rating: '5.0',
        title: 'It just keeps getting better!',
        body: "I love this guys writing style. Lots of humor and great character development. Great plots and lots of twists and turns. I can't put it down!!"
      },
      {
        author: 'Lori Zenahlik',
        date: 'April 10, 2026',
        rating: '5.0',
        title: "can't put down!",
        body: "This is a great series after three books. I enjoy the back and forth checking in with each group and location. So well written as are all of his books. This isn't my first read and it won't be my last."
      }
    ],
    blurb: `The valuable rocks have been found. The rest of the county is collateral damage.

Ezra and his friend Butch have to travel up the Mississippi River in a pontoon boat. It has become a lawless stretch of water deep within the apocalypse.

Grace and Asher are alive in Montana. New allies and old enemies emerge as they try to stay in front of the wave of chaos breaking out everywhere.

The architect of the disaster enlists the help of a willing media to smooth over his role.

This series was originally published in 2019-2020 in partnership with Mike Kraus. Now published solely under the EE Isherwood brand.`,
    shortBlurb: `The valuable rocks have been found. The rest of the county is collateral damage.`
  },
  {
    num: 4,
    title: 'Crush',
    amazon: 'https://www.amazon.com/gp/product/B0C679L4CX',
    asin: 'B0C679L4CX',
    published: 'August 11, 2023',
    rating: '4.7',
    ratingCount: '54',
    formats: ['kindle'],
    reviews: [
      {
        author: 'David M. Cunningham',
        date: 'January 12, 2024',
        rating: '5.0',
        title: 'Quick read and the story is getting better',
        body: "An interesting scenario and the expected bad guys and politicians that suck. Citizens rallying to stand up for America! Great combo!"
      },
      {
        author: 'Christopher Haught',
        date: 'August 28, 2023',
        rating: '5.0',
        title: 'EE does it Again!',
        body: "Another great book in the impact series. Awesome characters. Awesome plot. Twists and turns galore! Great Read!! I highly recommend!"
      }
    ],
    blurb: `Two cross-country treks. Two apocalyptic landscapes.

Ezra has reached St. Charles, Missouri, but they have a long way to go. Getting supplies turns into a fight for survival as representatives of the mining company show up to quell the survivors.

In the west, Grace and Asher head into Denver, where one of the asteroids came to rest. While the mining company works feverishly to extract the ore in front of the whole world, she realizes the clock is ticking on a bigger disaster.

Above it all, a political game is played to assign blame for the destruction of the country.

This series was originally published in 2019-2020 in partnership with Mike Kraus. Now published solely under the EE Isherwood brand.`,
    shortBlurb: `Two cross-country treks. Two apocalyptic landscapes.`
  },
  {
    num: 5,
    title: 'Black',
    amazon: 'https://www.amazon.com/gp/product/B0C683NVJS',
    asin: 'B0C683NVJS',
    published: 'August 26, 2023',
    rating: '4.7',
    ratingCount: '49',
    formats: ['kindle'],
    reviews: [
      {
        author: 'Zombies Rock',
        date: 'May 16, 2024',
        rating: '5.0',
        title: 'Review of entire 6 book series',
        body: "Having previously read newer book series Mr. Isherwood had written, I found this earlier series, Impact books 1-6 to be just as good. He has a gift for creating relatable characters and pulling you into the story. I highly recommend this series."
      },
      {
        author: 'Lori Zenahlik',
        date: 'April 22, 2026',
        rating: '5.0',
        title: 'Ending',
        body: "Great ending for a great series! Exciting from start to finish. Over the past two weeks I've put everything aside because I wanted to get back to reading. So...thanks to you and your writing!"
      }
    ],
    blurb: `New hazards around every corner. On the river and by rail.

Ezra and his friends travel up the Missouri River on their pontoon boat, but Kansas City might be the end of the line for them.

Grace and Asher become tangled in the intrigue of the company men sent to retrieve them, even as they formulate a plan for where to find refuge. Members of the Crow Nation prove invaluable in the fight against the mining company.

Denver falls apart while the mining company retreats, but there is an even bigger asteroid waiting for them near Yellowstone...

This series was originally published in 2019-2020 in partnership with Mike Kraus. Now published solely under the EE Isherwood brand.`,
    shortBlurb: `New hazards around every corner. On the river and by rail.`
  },
  {
    num: 6,
    title: 'Dig',
    amazon: 'https://www.amazon.com/gp/product/B0C68G69JQ',
    asin: 'B0C68G69JQ',
    published: 'September 10, 2023',
    rating: '4.7',
    ratingCount: '58',
    formats: ['kindle'],
    reviews: [
      {
        author: 'Zombies Rock',
        date: 'May 16, 2024',
        rating: '5.0',
        title: 'Review of entire 6 book series',
        body: "Having previously read newer book series Mr. Isherwood had written, I found this earlier series, Impact books 1-6 to be just as good. He has a gift for creating relatable characters and pulling you into the story. I highly recommend this series."
      },
      {
        author: 'Lori Zenahlik',
        date: 'April 22, 2026',
        rating: '5.0',
        title: 'Ending',
        body: "Great ending for a great series! Exciting from start to finish. Over the past two weeks I've put everything aside because I wanted to get back to reading. So...thanks to you and your writing!"
      }
    ],
    blurb: `The journey ends... with a bang?

Ezra reaches the Yellowstone dig site and searches for his daughter, while infiltrating the mining company that wants her dead.

Grace finds herself deep in the enemy camp, though help shows up in the most unlikely places.

If father and daughter can survive and join forces, they have a shot at taking down the man responsible for almost ending the world. But that man has one last surprise for them...

This is the final book in the Impact series. Thank you for reading!`,
    shortBlurb: `The journey ends... with a bang?`
  },
]