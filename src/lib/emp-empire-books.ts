export interface EmpEmpireBook {
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

export const empEmpireBooks: EmpEmpireBook[] = [
  {
    num: 1,
    title: 'EMP Empire: An EMP Adventure',
    amazon: 'https://www.amazon.com/gp/product/B0G1TY46KQ',
    asin: 'B0G1TY46KQ',
    isbn13: '979-8274090315',
    published: 'November 11, 2025',
    rating: '4.5',
    ratingCount: '48',
    formats: ['kindle', 'paperback'],
    reviews: [
      {
        author: 'John Hogan',
        date: 'March 1, 2026',
        rating: '5.0',
        title: 'Fabulous read',
        body: "Just when I thought Isherwood was forever stuck in the Frank and gang world (all of which I enjoyed) I read EMP Empire. This book had me reading in bed, reading at the table and under the Christmas tree lights. I couldn't put it down."
      },
      {
        author: 'EchoMirage',
        date: 'December 28, 2025',
        rating: '5.0',
        title: 'Another fun read from E.E., with some sci-fi twists.',
        body: "This definitely has a lot of Mad Max vibes to it, but that's not a bad thing. A teacher goes up to the ISS for a 2 week hitch, EMP goes off, and he's stuck there for 3 years. Comes back to find a very different Earth. Isherwood gives another good, fun read with enough action and realism to keep you in the story."
      }
    ],
    blurb: `Being on a space station during a worldwide EMP event seemed like the perfect escape. But what launches up, must crash down.

Sam Stevens wasn't even a real astronaut. He was a schoolteacher fresh out of college. Punched into orbit as a glorified PR stunt. Now, three years after the EMP, he's the last one alive on the ISS, watching Earth below grow darker by the day.

It isn't totally dark, however. There is one pocket of light deep in the pines of Alabama. A tenacious general has preserved the last square mile of Old America behind a wall of sandbags and good intentions.

The town gives Sam a postage stamp-sized landing target… and one shot at getting back to the ground.

Bindi Dauntless is a woman caught between the light and darkness of the powerless world. She craves the security of those bright walls but knows they can't stay lit forever. In the darkness, she sees Sam as her ticket to something better.

Sam and Bindi both see opportunity in the other. For him, she has the skills he needs to survive in a strange, new world. For her, he might be the ticket to a place far away from the chaos.

However, no one can truly prepare for what's out there. Assassins. United Nations "relief" forces. Militias from Hell. And, worst of all, the source of the EMP keeps repeating.

If they can work together to keep each other alive, and if they can find the cause of the EMP, they might keep the world from teetering that last inch over the brink. If not, the lights might never come on again.

NOTE: EMP Empire is a standalone book with the possibility of a follow-up. This book doesn't end on a cliffhanger, but it does leave room for more.`,
    shortBlurb: `Being on a space station during a worldwide EMP event seemed like the perfect escape. But what launches up, must crash down.`
  },
]