import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBreadcrumbSchema, generateJsonLd, canonicalUrl, generateFAQSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Author Interview — EE Isherwood on Writing, Survival Fiction, and the Apocalypse',
  description: 'An in-depth interview with NYT bestselling post-apocalyptic thriller author EE Isherwood. Learn about his writing process, inspiration, and survival tips.',
  keywords: [
    'EE Isherwood interview',
    'author interview post-apocalyptic fiction',
    'EMP fiction author interview',
    'survival fiction writer process',
    'EE Isherwood writing advice',
  ],
  openGraph: {
    title: 'Author Interview: EE Isherwood',
    description: 'Inside the mind of the NYT bestselling author of 50+ post-apocalyptic thrillers.',
    url: canonicalUrl('/about/interview'),
  },
  alternates: { canonical: canonicalUrl('/about/interview') },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: canonicalUrl('/') },
  { name: 'About', url: canonicalUrl('/about') },
  { name: 'Interview', url: canonicalUrl('/about/interview') },
])

const faqSchema = generateFAQSchema([
  {
    q: 'What inspired you to write about the apocalypse?',
    a: 'The main inspiration is that there are virtually no rules in the apocalypse. As a writer, the only limits are those of imagination. One of my series breaks time (End Days), allowing scenes with cruise ships and dinosaurs at the same time. I love exploring new and creative ways to break apart society and see who picks up the pieces.',
  },
  {
    q: 'What themes do you explore in your works?',
    a: 'One theme I\'m known for is having an upbeat, positive mindset in my characters. Zombies, societal collapse, and lawless cities can be the worst of the worst to live in day after day. I\'ve chosen to keep my books intentionally lighter, even in the darkest times. Many reviewers appreciate that my books don\'t focus on brutality, violence to women and children, or abject terrorism.',
  },
  {
    q: 'What is it about the apocalyptic genre that you love?',
    a: 'I read these books because I like to watch characters face the types of adversity we all might face one day. Since the apocalypse will be unforgiving, with few second chances, it is nice to plan ahead and imagine what might happen in various scenarios. We read about the mistakes these characters make so we can avoid them when our time comes.',
  },
  {
    q: 'How prepared are you for the apocalypse?',
    a: 'If the lights went out on society today, I\'d gather all my neighbors and tell them what\'s coming and why our lives depend on working together. Being an author of post-apocalyptic books might give me some credibility and it might be my greatest asset over the long-term. I\'d rate myself a 5 out of 10 — I keep extra food, a bug-out bag, and I stay informed, but I don\'t own a remote cabin, pre-1980 vehicle, or belong to a militia.',
  },
  {
    q: 'What is your top tip for surviving the apocalypse?',
    a: 'Buy and become proficient with firearms. If you live somewhere where guns aren\'t allowed, become proficient with some type of ranged weapon. A close second is being in a trusted group of survivors. With few exceptions, none of us are going to make it through the apocalypse alone. Organized resistance is the only way for groups of people to endure a larger chaos.',
  },
])

export default function InterviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd(faqSchema) }} />

      <div className="min-h-screen font-sans antialiased bg-background text-foreground">

        <article className="px-6 py-16 max-w-3xl mx-auto">
          <p className="text-muted-foreground text-sm mb-4">Interview · 10 min read</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            An Interview with EE Isherwood
          </h1>

          <div className="text-muted-foreground mb-8 pb-8 border-b border-border">
            <p className="text-lg leading-relaxed">
              We sat down with post-apocalyptic thriller author EE Isherwood to talk about 
              his writing process, what draws him to the apocalypse genre, and his top 
              survival tips. Isherwood is a New York Times and USA Today bestselling author 
              with 50+ novels and 3 million words written.
            </p>
          </div>

          <div className="space-y-12">
            {/* Q1 */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                Tell us a little bit about yourself.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Before I became an author, I used to think writers were exciting people with 
                  eccentric hobbies and life experiences involving aliens, hidden lore, and 
                  smoking jackets. However, I now know that isn&apos;t all true, since my life is 
                  anything but exciting.
                </p>
                <p>
                  My degree was a Masters in Geography, which led me to a twenty-year career 
                  in IT, followed by a seven-year (so far) second career as a professional 
                  author. I live in Missouri, but I&apos;ve travelled to 45 states, so many of 
                  my books are set in places I&apos;ve visited. So far, there have been no aliens 
                  found, no hidden lore discovered, and I don&apos;t own any smoking jackets. 
                  But there is still time&hellip;
                </p>
              </div>
            </section>

            {/* Q2 */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                Tell us about your books and what you&apos;re working on right now.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My first book series, <em>Sirens of the Zombie Apocalypse</em>, was about 
                  zombies. I tried to write something different than anything else out there, 
                  and my universe is constructed so the only people immune to the zombie plague 
                  are those over 100 years old. Obviously, those are the first to die when the 
                  running starts and the bullets begin flying, but that&apos;s what makes it so 
                  much fun to write. My teen heroes have to work overtime to keep a 104-year-old 
                  great grandma alive&hellip; in case she holds the key to the whole cure. 
                  Will she? Won&apos;t she? You&apos;ve got to read all eight books for the answer.
                </p>
                <p>
                  My current series, <em>Neighborhood Watch</em>, is set in a world where an 
                  EMP destroys the power grid. My hero is a 50-something guy who moves to 
                  Florida for a sunny retirement of beaches, music, and books, but the EMP 
                  destroys all those fancy plans. His new job is saving people in his suburban 
                  neighborhood, since they have no idea what to do in survival situations 
                  like EMPs. The first novel in the 8-book (so far) series has 2500 reviews 
                  and they have grown my audience like I never could have imagined.
                </p>
              </div>
            </section>

            {/* Q3 */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                What inspired you to write about the apocalypse?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I think the main inspiration is that there are virtually no rules in the 
                  apocalypse. As a writer, the only limits I have are those of my imagination. 
                  One of my book series even breaks time (End Days), allowing me to have 
                  scenes with cruise ships and dinosaurs at the same time. I&apos;ve also written 
                  about superweapons that zapped away every American in a flash (Minus America).
                </p>
                <p>
                  I love to explore new and creative ways to break apart society, and see who 
                  picks up the pieces. Likewise, as society falls apart, there are no laws to 
                  bind people together. This allows me to write about the natural inclinations 
                  of humanity and I&apos;m constantly trying to answer the big questions, like 
                  whether humans are inherently good or evil. I go back and forth on that&hellip;
                </p>
              </div>
            </section>

            {/* Q4 */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                What themes do you explore in your works?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  One theme I&apos;m known for is having an upbeat, positive mindset in my 
                  characters. It helps me, too, since I have to live day after day in these 
                  dark worlds while I&apos;m writing them. Zombies. Societal collapse. Lawless 
                  cities. It can be the worst of the worst.
                </p>
                <p>
                  Therefore, I&apos;ve chosen to keep my books intentionally lighter, even in the 
                  darkest times. I think I&apos;ve done well with this choice, as I&apos;ve had many 
                  reviewers who appreciated that my books don&apos;t focus on brutality, violence 
                  to women and children, and abject terrorism one might find at the most 
                  desperate times of humanity. That isn&apos;t to say my characters don&apos;t know 
                  about such extreme violence, but I don&apos;t make entire books about them.
                </p>
              </div>
            </section>

            {/* Q5 - Genre */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                What is it about the apocalyptic genre that you love?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I read these books because I like to watch characters face the types of 
                  adversity we all might face one day. Since the apocalypse will be unforgiving, 
                  with few second chances, it is nice to plan ahead and imagine what might 
                  happen in various scenarios. We read about the mistakes these characters make, 
                  so we can avoid them when our time comes&hellip; I also think apocalyptic 
                  books are where true human nature is on full display.
                </p>
                <p>
                  With no law enforcement around, people are free to do absolutely anything 
                  they want. I like to see how characters handle that freedom, for better 
                  or for worse.
                </p>
              </div>
            </section>

            {/* Q6 */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                What are you reading right now?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m reading the <em>Desperate Age</em> series by T.L. Payne, the <em>Still 
                  Surviving</em> series by Boyd Craven, and the <em>Return of the Wild West</em> 
                  series by Grace Hamilton.
                </p>
              </div>
            </section>

            {/* Q8 (skipping Q7) */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                How prepared are you for the apocalypse?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If the lights went out on society today, I&apos;d gather all my neighbors and 
                  tell them what&apos;s coming and why our lives depend on working together. Being 
                  an author of post-apocalyptic books might give me some credibility and it 
                  might be my greatest asset over the long-term.
                </p>
                <p>
                  However, I don&apos;t own key items that would help in special cases. For example, 
                  I don&apos;t have a remote cabin, a pre-1980 vehicle, nor am I a member of a 
                  militia group. I do keep a little extra food, I have a bug-out bag ready to 
                  go, and I keep my eye on the news, so I won&apos;t be totally surprised by a 
                  big collapse. I guess on a scale of 1-10, with 10 being the most prepared, 
                  I&apos;d rate myself a <strong>5</strong>.
                </p>
              </div>
            </section>

            {/* Q10 */}
            <section>
              <h2 className="text-xl font-bold font-serif mb-4 text-foreground">
                Where can we find out more about you and your books?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Find me at <strong>EEISHERWOOD.COM</strong>, by searching for EE Isherwood on 
                  Amazon, or you can grab my free book called <em>Neighborhood Watch, Before 
                  Clownfish</em>. I call it a side-quel to my main Neighborhood Watch series.
                </p>
                <div className="mt-6 flex gap-4 flex-wrap">
                  <a href="https://www.amazon.com/author/eeisherwood" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                    Amazon Author Page →
                  </a>
                  <Link href="/free-books"
                        className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
                    Get Free Book
                  </Link>
                </div>
              </div>
            </section>

            {/* Extra Questions */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-bold font-serif mb-6 text-foreground">
                Bonus Q&A
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">What was your first book? Why did you write it?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I wrote my first book in 2014 as part of Nanowrimo, National novel writing month. 
                    I got the idea for a zombie book by writing a short story about my grandma, who 
                    was 104 at the time. I thought it would be interesting to see what would happen 
                    if the zombies came and tried to attack my sweet lil old grandma. I gave her a 
                    teen grandson to protect her, and the short story became a book, which became an 
                    8-book series. I wrote the final book last month, 9 years later. In total, 
                    I&apos;ve written about 45 books. 3 million words.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">How do you come up with a series of books?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    There are several reasons to write a book. I wanted to write about a topic on 
                    my own, no matter if it will make money. I wanted to make money from a topic. 
                    Most of mine are the second, which means I have to pick subjects that are 
                    selling on Amazon.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">How do you keep the action flowing?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Basic concept is to always end with an open loop. A piece of action that is a 
                    mini-cliffhanger, resolved at the start of the next chapter. Gets people to 
                    read &ldquo;one more chapter&rdquo; before bed. For example, if you are writing an 
                    action scene on a race track, your story might find the driver coming around 
                    the final turn of a race, he&apos;s trying to pass the leader, but, surprise, a 
                    crash is blocking his path&hellip; will this be the end of our hero?
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">How do you research places you&apos;ve never been?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For places, use Google Maps down to street view and move around the area you 
                    want to write about. This gives you a feeling of being there, and you can say 
                    things like &ldquo;As I stood on the beach, I could see the mountain.&rdquo; You might 
                    not know this if you were looking at a general map from top-down view.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Do you have a publisher?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m an indie author, which means I don&apos;t have a publisher. Typically, a 
                    publisher provides an editor, a schedule, pays for advertising and marketing, 
                    and gets your books into online and physical stores. I have to do all that 
                    myself. It seems like a hassle, but the upside is I get to keep all the money. 
                    A second reason I don&apos;t have a publisher is I don&apos;t like asking for permission. 
                    I don&apos;t want to give anyone the power to tell me my books aren&apos;t good, they 
                    can&apos;t make money, or they don&apos;t conform to their rules.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">What is the process to write and publish a book?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    First, I come up with the idea. Then, I make an outline. I begin writing chapter 
                    by chapter. At the same time, I give my book cover designer an idea for the book, 
                    so the cover is ready for pre-orders as I still write it. I write each chapter 
                    then go back and do a quick edit. Once I have all the chapters done, I edit the 
                    book by listening to it using text-to-speech. This eliminates a lot of typos and 
                    grammar errors since your brain processes sound different than reading text. 
                    Once complete, I send the manuscript to my professional editor. I send about ten 
                    copies to test readers, and they make sure there are no lingering errors and they 
                    also make sure the story is good. By this point I have the cover and the sales 
                    page on Amazon is already done. I upload it, usually having a week or two left 
                    for final corrections. It goes live at the appointed time.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">What is the number one piece of advice for aspiring writers?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Write as much as you can. I didn&apos;t feel like my stories were that good until 
                    after I&apos;d written for a few years, and had about a million words on paper. 
                    You need this time to find your voice, understand and fix your flaws, learn the 
                    pieces of a good story, and figure out if you even like to write. Don&apos;t be one 
                    of those people who write one book, think you have the best book ever, then 
                    spend years trying to get it published. Write ten more books, get really good 
                    at it. The flipside of this is to read as much as you can, especially in the 
                    genre of the type of books you want to write. Understanding the tropes is a big 
                    part of being able to craft a story that entertains readers.
                  </p>
                </div>
              </div>
            </section>

            {/* Bio */}
            <section className="pt-8 border-t border-border">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">About EE Isherwood</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EE Isherwood is a New York Times bestseller with multiple post-apocalyptic series, 
                  including books about EMPs that destroy the power grid, a superweapon that erases 
                  every person in the USA, and an asteroid made of gold that crashes into parts of 
                  the Midwest. You also might find him on a mountain bike, hiking with family, or 
                  listening to early-80s New Wave music.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  His tagline is <strong>&ldquo;Writing after THE END.&rdquo;</strong> He lives near 
                  St. Louis, Missouri with his wife and kids, plus one Chiweenie dog.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex gap-4 flex-wrap">
              <Link href="/about"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors">
                ← Back to About
              </Link>
              <Link href="/books"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Browse the Books →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}