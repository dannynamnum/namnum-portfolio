/**
 * Insights / blog posts — sourced from Danny's LinkedIn.
 * Voice kept exactly as written. Hashtags, emoji prompts, and
 * engagement questions removed per Danny's instruction.
 */

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  /** Each string is a paragraph. */
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nobody-had-watched-real-people-use-it",
    title: "Nobody Had Watched Real People Use It. So I Did.",
    category: "Kiosks",
    date: "2026-07-28",
    readTime: "3 min read",
    excerpt:
      "Every mockup looked clean. Everyone had signed off. But no one on the project had gone to watch an actual guest use one. So I volunteered.",
    image: "/assets/blog-post6-penn-kiosk.webp",
    imageAlt:
      "A casino guest reaching up to tap a PENN Play kiosk touchscreen",
    seoTitle: "Nobody Had Watched Real People Use It. So I Did.",
    seoDescription:
      "How spending a day on a casino floor watching real guests use PENN Entertainment kiosks uncovered seven fixes no desk review ever would have found.",
    body: [
      "Nobody had watched real people use it. So I did.",
      "I was redesigning the kiosks for PENN Entertainment.",
      "Every mockup looked clean. Everyone had signed off. But no one on the project had gone to watch an actual guest use one.",
      "So I volunteered.",
      "I spent a day on a casino floor, just watching.",
      "Most guests were 55 and up. A lot of them weren't comfortable with a touchscreen. And the problems I'd never have caught from my desk were everywhere.",
      "People tapped a banner that wasn't a button, then waited for something to happen.",
      "The buttons were so big, folks hit them with a full palm. A habit carried straight over from the slot machines.",
      "Shorter guests couldn't reach the menu at the top.",
      "The very first screen made people freeze before they'd even started.",
      "I came back with seven fixes. Every one came from something I watched happen, not something I assumed.",
      "Move the menu down to where hands already are. Shrink the buttons so one finger does the job. Make the banner read as information, not a target.",
      "Here's my read: you don't find those problems on a screen or in a meeting.",
      "You find them by watching a real person, in the room, with their own hands.",
      "I did the same for GL Homes, the kiosks in their sales offices. Watch the buyer walk up, see where they stall, fix it.",
      "Casino floor or sales gallery, it doesn't change.",
    ],
  },
  {
    slug: "rebuilding-babcock-ranch-digital-experience",
    title: "Rebuilding Babcock Ranch's Digital Experience",
    category: "Real Estate",
    date: "2026-07-14",
    readTime: "3 min read",
    excerpt:
      "Babcock Ranch wasn't just selling homes. They were selling the idea of an entire self-sustaining city. The website had to match that ambition. It didn't.",
    image: "/assets/MobileWebDesign2x.jpg",
    imageAlt: "Mobile web design mockup for Babcock Ranch website",
    seoTitle: "Rebuilding Babcock Ranch's Digital Experience",
    seoDescription:
      "How a full UX rebuild turned a master-planned community's real estate website into a conversion engine. Builder website UX lessons from Babcock Ranch.",
    body: [
      "Babcock Ranch was one of the most complex projects I've ever worked on.",
      "They weren't just selling homes. They were selling the idea of an entire self-sustaining city. Solar-powered, master-planned, built from the ground up in Southwest Florida.",
      "The website had to match that ambition. It didn't.",
      "When we started, the existing site was doing what most real estate sites do. It showed properties. But it wasn't telling a story, it wasn't guiding a buyer through a decision, and it wasn't converting at the level a project that size demanded.",
      "So we rebuilt the entire UX architecture around three priorities.",
      "Navigation that matched how buyers actually think. By lifestyle and neighborhood, not just square footage and price.",
      "A mobile-first experience, because 80% of their traffic was coming from phones and the old site was built for a desktop that no longer existed.",
      "Performance. Heavy visuals are unavoidable when you're selling a $500M master-planned community. The site had to feel fast despite that weight.",
      "The result was a digital experience that worked as their most effective sales asset. Not a brochure. A conversion engine.",
    ],
  },
  {
    slug: "kiosks-are-marketing-machines",
    title: "Kiosks Are Marketing Machines Now",
    category: "Kiosks",
    date: "2026-06-30",
    readTime: "3 min read",
    excerpt:
      "Kiosks stopped being just checkout stations. Now they're data collectors, personalization engines, and engagement trackers rolled into one touchpoint.",
    image: "/assets/blog-post2-kiosks.jpg",
    imageAlt:
      "A woman using an interactive touchscreen kiosk in a modern sales center",
    seoTitle: "Kiosks Are Marketing Machines Now — Danny Namnum",
    seoDescription:
      "Interactive kiosk marketing is growing from $2.8B to $4.75B by 2034. Why smart kiosk design turns a transaction screen into a personalization engine.",
    body: [
      "Kiosks stopped being just checkout stations.",
      "Now they're marketing machines.",
      "The Interactive Digital Signage Kiosk market is jumping from $2.8B in 2024 to $4.75B by 2034. That's 9% growth, but the real story isn't the numbers.",
      "It's what's happening behind the screen.",
      "Retail kiosks are keeping customers engaged 45% longer through AI-driven recommendations. Early adopters? They're converting 68% better than static displays.",
      "At GL Homes, I built a Sales Center Kiosk that completely changed how buyers customize their homes. What started as a digital brochure became an experience that cut decision time by 60%.",
      "The shift is obvious when you see it: kiosks aren't just self-service anymore. They're data collectors, personalization engines, and engagement trackers rolled into one touchpoint.",
      "Smart retailers aren't just buying kiosks. They're weaving them into strategies where every tap, swipe, and selection feeds intelligence back to marketing teams.",
      "The real question isn't whether you need kiosks. It's whether you're ready to make them work harder than a simple transaction screen.",
    ],
  },
  {
    slug: "biggest-risk-neighborhood-launch",
    title: "The Biggest Risk in a New Neighborhood Launch",
    category: "Real Estate / Strategy",
    date: "2026-06-16",
    readTime: "2 min read",
    excerpt:
      "The biggest risk in a new neighborhood launch isn't speed. It's sequencing. Execution often starts before the brand direction is clear enough to guide decisions.",
    image: "/assets/blog-post3-sequencing.jpg",
    imageAlt: "A leadership team in discussion around a conference table",
    seoTitle: "The Biggest Risk in a New Neighborhood Launch",
    seoDescription:
      "Real estate brand strategy for neighborhood launches: why sequencing beats speed, and how a clear north star prevents costly rework downstream.",
    body: [
      "The biggest risk in a new neighborhood launch isn't speed.",
      "It's sequencing.",
      "Most leadership teams move fast for good reasons. Timelines are real. Sales matter. Momentum matters.",
      "But execution often starts before the brand direction is clear enough to guide decisions.",
      "Sales centers get designed. Websites go live. Signage gets ordered.",
      "All while the brand is still forming.",
      "The challenge? Once direction sharpens, the work has already committed in dozens of small ways.",
      "Teams that avoid this don't slow projects down.",
      "They slow one moment down early.",
      "They define a clear north star. A few key guardrails. Shared direction before execution ramps up.",
      "Not a polished brand book. Just enough clarity to anchor decisions as things evolve.",
      "That shift changes everything downstream. Teams move faster with less friction. Decisions get easier. Rework drops without drama.",
      "The work doesn't just move quickly. It stays in sync with the business as it grows.",
      "In my experience working across real estate launches, this sequencing makes the difference between smooth execution and costly pivots.",
    ],
  },
  {
    slug: "not-every-digital-touchpoint-deserves-a-budget",
    title: "Not Every Digital Touchpoint Deserves a Budget",
    category: "UX Strategy / Kiosks",
    date: "2026-06-02",
    readTime: "2 min read",
    excerpt:
      "Before you redesign the site or build the app, ask this: where does the guest actually engage? Your best digital investment lives where guests are hesitating, converting, or building trust.",
    image: "/assets/blog-post4-touchpoints.jpg",
    imageAlt:
      "A man reviewing floor plans across a desktop, phone, and digital kiosk screen",
    seoTitle: "Not Every Digital Touchpoint Deserves a Budget",
    seoDescription:
      "UX strategy for digital touchpoint design: invest where guests hesitate, convert, or build trust. Not where your org chart or tech stack is most convenient.",
    body: [
      "Before you redesign the site or build the app, ask this:",
      "Where does the guest actually engage?",
      "Not where your org is structured. Not where your agency has the most capacity. And definitely not where the tech stack is most convenient.",
      "Your best digital investment lives where your guests are hesitating, converting, or building trust.",
      "Sometimes that's the kiosk in the model center. Sometimes it's the pre-arrival email flow. Sometimes it's the mobile experience guests actually check after booking.",
      "When your next dollar follows behavior, not internal momentum, you don't just upgrade the asset. You unlock the outcome.",
      "Higher conversion. Cleaner reputation. Stronger guest confidence.",
      "I help real estate, hospitality, and experience-driven brands figure out where UX friction is costing them, and how to fix it without guesswork.",
    ],
  },
  {
    slug: "before-bags-are-packed-experience-begins",
    title: "Before Bags Are Packed, the Experience Begins",
    category: "Hospitality / AI",
    date: "2026-05-19",
    readTime: "2 min read",
    excerpt:
      "Great hospitality doesn't start at check-in anymore. It starts in the inbox. Before the bags are packed. And most brands still send the same generic welcome message.",
    image: "/assets/blog-post5-hospitality.jpg",
    imageAlt:
      "A guest reading a personalized pre-arrival hotel message on their phone",
    seoTitle: "Before Bags Are Packed, the Experience Begins",
    seoDescription:
      "Hospitality AI personalization done right: guest experience design that shifts tone, timing, and detail per guest without losing the brand voice.",
    body: [
      "Great hospitality doesn't start at check-in anymore.",
      "It starts in the inbox. Before the bags are packed. Before the route is mapped.",
      "And most brands still send the same generic welcome message. Same copy. Same timing. Same call to action.",
      "But every guest is different.",
      "One's bringing kids. One's hiking solo. One booked last minute, no add-ons. One's already paid for everything and still has questions.",
      "AI makes it possible to personalize these messages at scale. Not just insert a name. But shift the tone. Highlight the right details. Serve the right vibe.",
      "This isn't about sounding like a robot. It's about sounding like someone who gets it.",
      "I help hospitality teams design guest flows that use AI without losing the brand voice, so guests feel seen before they even show up.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function nextBlogPost(slug: string): BlogPost {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  return blogPosts[(i + 1) % blogPosts.length];
}
