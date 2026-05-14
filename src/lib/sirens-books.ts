export interface SirensBook {
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
  reviews?: { author: string; date: string; rating: string; title: string; body: string }[]
  blurb: string
}

export const sirensBooks: SirensBook[] = [
  {
    num: 1,
    title: 'Since the Sirens',
    amazon: 'https://www.amazon.com/gp/product/B018H82ZYU',
    rating: '4.4',
    ratingCount: '1,271',
    formats: ['kindle', 'audiobook', 'paperback'],
    blurb: `A hundred years ago, the Spanish Flu gave humanity an unexpected gift — immunity to the zombie apocalypse. A century later, that immunity is dying off with everyone over 100.\n\nLiam Peters is seventeen, addicted to video games, and deep in the doghouse with his parents. They're shipping him off to his great-grandmother's house for the summer to clean up his act.\n\nMarty Peters is 104 years old, fiercely independent, and one of the few who remembers the Spanish Flu. When the tornado sirens sound and the outbreak begins, she knows exactly how bad this is going to get — and she knows Liam will have to choose between keeping her alive and making it out himself.\n\nHe chooses her. Every decision that follows will determine whether they survive — and whether humanity has a future.\n\nA fresh twist on the zombie genre, told through the eyes of a teenager who never expected the apocalypse to come with an old lady in tow.`,
    shortBlurb: `A hundred years ago, the Spanish Flu gave humanity an unexpected gift — immunity to the zombie apocalypse.`
  },
  {
    num: 2,
    title: 'Siren Songs',
    amazon: 'https://www.amazon.com/gp/product/B019AJC8K6',
    rating: '4.5',
    ratingCount: '341',
    formats: ['kindle', 'paperback'],
    blurb: `The apocalypse is in full swing. Not everyone makes it.\n\nLiam and Victoria have gotten Marty out of St. Louis, and the finish line is almost in sight. Once Liam gets his grandmother settled with his parents, he can finally breathe. Maybe help Victoria get back to Colorado. Maybe figure out why he can't stop thinking about her.\n\nBut Liam's read enough zombie books to know nothing is ever simple. The horde is gaining on them, and it's not just in the city — the countryside is just as dangerous. Then someone he trusted threatens Victoria's life, and his resolve snaps.\n\nIn the hills and forests outside the city, he discovers something worse than zombies: someone is using humans as test subjects in a hunt for a cure. And when he stumbles on a mass grave, he understands the threat isn't abstract — it's heading straight for his grandmother.\n\nSometimes the apocalypse is personal.`,
    shortBlurb: `The apocalypse is in full swing. Not everyone makes it.`
  },
  {
    num: 3,
    title: 'Stop the Sirens',
    amazon: 'https://www.amazon.com/gp/product/B019AJC78O',
    rating: '4.5',
    ratingCount: '293',
    formats: ['kindle', 'paperback'],
    blurb: `What if the elderly held the cure to the apocalypse?\n\nLiam starts his morning in a muddy creek, having barely escaped the Air Force bombing his subdivision off the map. His house is Swiss cheese. His grandmother was kidnapped minutes ago — taken to a secret facility that only accepts elderly survivors.\n\nHe's been through looters, refugees, and zombie hordes. Without Grandma, he feels defeated — even with Victoria at his side.\n\nBut hope surfaces at the Beaumont Boy Scout Reservation, an enclave of order inside the chaos swallowing St. Louis. A place to regroup. A base to search from.\n\nBefore Book 3 ends, Liam will learn the origin of the plague, the fate of Grandma Marty, and whether two teenagers can actually help save the world — or if they're just collateral damage in someone else's war.`,
    shortBlurb: `What if the elderly held the cure to the apocalypse?`
  },
  {
    num: 4,
    title: 'Last Fight of the Valkyries',
    amazon: 'https://www.amazon.com/gp/product/B01BVUPRP0',
    rating: '4.6',
    ratingCount: '201',
    formats: ['kindle', 'paperback'],
    blurb: `The race to save civilization begins now.\n\nLiam, Victoria, and Grandma Marty finally catch a break — Cairo, Illinois, a fortified refuge. For the first time since the sirens, there's a place to rest.\n\nBut Liam made a promise to a dying man: he'd document who created the zombies and why. A tell-all book. History needs to know. That means going back outside the wire.\n\nHe and Victoria head upriver toward an old pit mine — the one place that might hold answers about the plague. A young woman Liam rescued wants to come along. She seems harmless at first. But as they reach the mine and discover what's inside, her loyalties become harder to trust.\n\nGrandma Marty isn't sure she can trust her own mind anymore. But she's certain she's seen that girl before. In her dreams.`,
    shortBlurb: `The race to save civilization begins now.`
  },
  {
    num: 5,
    title: 'Zombies vs. Polar Bears',
    amazon: 'https://www.amazon.com/gp/product/B01ESK2X2K',
    rating: '4.5',
    ratingCount: '177',
    formats: ['kindle', 'paperback'],
    blurb: `The zombies are evolving. The rules are changing.\n\nLiam heads back to Cairo to reunite with Grandma Marty and save whoever he can from his own family. But the apocalypse has leveled up — new kind of zombie, new nightmares. After a detour, he finds survivors holding on in a St. Louis park. A brief place to breathe.\n\nVictoria makes it to her old dorm room and it stirs up more than she expected.\n\nLiam and his mother get pulled into something bigger — crumbling government agencies, shadow organizations, and a militia group called the Polar Bears who answer to no one. Just as Liam figures out who's worth trusting, he realizes there's only one thing actually worth fighting for.\n\nGrandma Marty, waiting for them back in Cairo, catches the attention of the general in charge. The town will be tested soon enough — a horde is coming for the last safe place they have.`,
    shortBlurb: `The zombies are evolving. The rules are changing.`
  },
  {
    num: 6,
    title: 'Zombies Ever After',
    amazon: 'https://www.amazon.com/gp/product/B01HFJ3NS4',
    rating: '4.6',
    ratingCount: '179',
    formats: ['kindle', 'paperback'],
    blurb: `Three weeks in. The revelations are arriving.\n\nLiam has stumbled to the center of multiple conspiracies — all because he knows one of the oldest women in America. The government is corrupt. The Polar Bears are too few. The cure he's chasing keeps getting further away as the zombie population diversifies. Arizonas. Dreamers. Runners. Over fifty kinds of walkers, and they never stop.\n\nIt would drive anyone mad. Liam copes by thinking about Victoria. Then he takes off running down the middle of the street like the invincible sixteen-year-old he wishes he still was.\n\nVictoria, waiting for him, doesn't sit idle. She volunteers at the last operating research lab at her old university and gets a grim vision of her future. Soon, she's running too.\n\nAll roads lead back to Grandma Marty. It wasn't coincidence that Liam and his family were targeted the moment the sirens sounded. They're about to find out why — and whether there's any such thing as a storybook ending in the zombie apocalypse.`,
    shortBlurb: `Three weeks in. The revelations are arriving.`
  },
  {
    num: 7,
    title: 'Zombie Escape',
    amazon: 'https://www.amazon.com/gp/product/B07FN43G85',
    rating: '4.7',
    ratingCount: '138',
    formats: ['kindle', 'paperback'],
    blurb: `Death walks on a billion legs. The cure is three states away.\n\nLiam and Victoria surface from twenty days in the zombie apocalypse. Their adventures searching for a cure could fill a book — but right now, only one thing matters: escaping the horde.\n\nGrandma Marty is on the run too, but something worse is chasing her. Not a crowd of zombies. Just one. It also happens to be her son — turned.\n\nLiam and Marty are both carrying pieces of the biometric puzzle that unlocks the cure. They need each other. But salvation is three states over, through cities overrun with the dead.\n\nLet the escape begin.`,
    shortBlurb: `Death walks on a billion legs. The cure is three states away.`
  },
  {
    num: 8,
    title: 'The Last Siren',
    amazon: 'https://www.amazon.com/gp/product/B0BRGL3985',
    rating: '4.2',
    ratingCount: '65',
    formats: ['kindle', 'paperback'],
    blurb: `The epic conclusion. It's always been about the sirens.\n\nLiam and Victoria save Grandma Marty from a horde of undead at one of the last functioning gas stations in America. But that's just the beginning.\n\nA signal has been broadcasting inside the civil defense sirens from day one — and it's still going out on a critical frequency. What is it? Where is it coming from? Who created it?\n\nEight books. One answer. The story that started with a tornado siren ends with the truth behind them all.\n\nNote: This final book is shorter than the previous seven and is my way of providing an ending rather than leaving the story hanging forever.`,
    shortBlurb: `The epic conclusion. It's always been about the sirens.`
  },
]