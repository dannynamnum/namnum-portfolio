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
    slug: "what-makes-a-real-estate-website-convert-visitors-into-leads",
    title: "What Makes a Real Estate Website Actually Convert Visitors Into Leads?",
    category: "Real Estate",
    date: "2026-08-14",
    readTime: "3 min read",
    excerpt:
      "Most real estate websites get traffic. Very few turn that traffic into conversations. Here's what actually moves the needle.",
    image: "/assets/real-estate-website-conversion.webp",
    imageAlt: "Strategic CTA design for a real estate website conversion journey",
    seoTitle: "What Makes a Real Estate Website Convert?",
    seoDescription:
      "What makes a real estate website convert visitors into leads? Danny Namnum breaks down buyer intent, CTA design, speed, and trust.",
    body: [
      "Most real estate websites get traffic. Very few turn that traffic into conversations.",
      "I've worked on websites for brokerages, builders, and master-planned communities. The pattern is always the same. The site looks good. The listings are there. The traffic numbers are fine. But the phone doesn't ring and the contact forms sit empty.",
      "Here's what I've found actually moves the needle.",
      "The homepage isn't a brochure. It's a decision point.",
      "Most real estate homepages try to show everything. Every community, every listing type, every agent. The visitor lands and has to figure out where they fit.",
      "That's friction. And friction kills conversion.",
      "The fix is simple: give people a clear path based on how they think. Not by price range. Not by MLS number. By intent. Are you relocating? Looking for waterfront? Downsizing? Each of those is a different buyer with a different journey.",
      "When I rebuilt the Babcock Ranch website, we reorganized the entire navigation around lifestyle and neighborhood, not square footage. 80% of their traffic was mobile and the old site made people pinch and scroll through desktop-era menus. Once we matched the structure to how buyers actually think, the site became their most effective sales asset.",
      "The CTA has to match the commitment level.",
      "Schedule a showing is a big ask for someone who just found you on Google. They're not ready. They're researching.",
      "You need CTAs at different commitment levels:",
      "Low commitment: Get the neighborhood guide or See what's available in a community.",
      "Medium commitment: A quick quiz or intake that matches them with the right agent or area.",
      "High commitment: Book a call or Schedule a tour.",
      "Most sites only have the high-commitment option. That means 90% of visitors leave without doing anything.",
      "Speed matters more than you think.",
      "A real estate site is image-heavy by nature. Buyers want to see photos. But if your page takes 4+ seconds to load on a phone, you've already lost them.",
      "This isn't about cutting photos. It's about how you serve them. Lazy loading, proper compression, modern formats. The site should feel fast even when it's showing 30 high-res images.",
      "Nobody trusts a site that looks like every other site.",
      "If your website uses the same IDX template as 500 other brokerages, buyers don't feel like they're working with a premium brand. They feel like they're on a search engine with your logo slapped on top.",
      "The brokerages that convert well have sites that feel like their brand. The typography, the photography style, the way information is presented. It all signals: this is a team that pays attention to detail.",
      "The bottom line.",
      "Traffic without conversion is just a vanity metric. If your site gets 10,000 visits a month and generates 5 leads, the problem isn't SEO. The problem is what happens after someone arrives.",
      "I help real estate brands figure out exactly where visitors drop off and what to do about it. If your site has traffic but no leads, that's a solvable problem.",
    ],
  },
  {
    slug: "how-to-choose-the-right-real-estate-website-builder",
    title: "How Do I Choose the Right Real Estate Website Builder?",
    category: "Real Estate",
    date: "2026-08-14",
    readTime: "3 min read",
    excerpt:
      "The platform matters less than the strategy behind it. Here's what a brokerage, builder, or team should actually evaluate before choosing a real estate website builder.",
    image: "/assets/choose-real-estate-website-builder.webp",
    imageAlt: "Real estate team comparing website builder platforms and business requirements",
    seoTitle: "How to Choose a Real Estate Website Builder",
    seoDescription:
      "How should a brokerage choose a real estate website builder? Evaluate buyer journeys, ownership, CRM integrations, and long-term flexibility.",
    body: [
      "This is the wrong question. But I'll answer it anyway.",
      "The reason it's the wrong question: the platform matters less than the strategy behind it. I've seen beautiful sites on WordPress that generate zero leads, and ugly sites on Squarespace that book showings every week. The difference is never the tool. It's the thinking.",
      "That said, here's how I'd frame the decision if you're a brokerage, builder, or team choosing a platform.",
      "What you actually need to evaluate.",
      "Forget the feature comparison charts. Every platform has IDX integration and mobile responsive on their list. That's table stakes. Here's what actually matters:",
      "Can you customize the buyer journey? Most template platforms give you a homepage, a listings page, and a contact form. That's it. If you can't build custom landing pages for specific communities, create neighborhood guides, or design intake flows that qualify leads before they hit your CRM, you're going to outgrow the platform in 6 months.",
      "Who maintains it? If you pick a custom WordPress build and your developer disappears, you're stuck. If you pick Squarespace and need something beyond what the templates allow, you're stuck. The right answer depends on whether you have someone in-house who can manage updates or whether you need a partner.",
      "Does it integrate with your CRM? This is where most decisions fall apart. Your website should push leads directly into Follow Up Boss, Salesforce, or whatever system your agents actually use. If there's a manual step between visitor fills out form and agent gets notified, you're losing leads.",
      "My recommendation for most brokerages.",
      "WordPress with a custom theme, not a purchased template, and Elementor for content editing. Here's why:",
      "Your marketing team can update pages without calling a developer.",
      "It integrates with every CRM and IDX provider on the market.",
      "You own the code and the hosting, so you're never locked in.",
      "It scales from 10 pages to 10,000 without breaking.",
      "For smaller teams or individual agents, Squarespace or a similar managed platform is fine. You don't need the complexity. But for a brokerage with multiple offices, hundreds of agents, and community-specific landing pages, you need the flexibility of a custom build.",
      "What about the all-in-one real estate platforms?",
      "Platforms like kvCORE, Sierra Interactive, and Luxury Presence offer everything in one place. They're convenient. But convenience comes with trade-offs:",
      "You look like every other brokerage using the same platform.",
      "Customization is limited to what their system allows.",
      "You're renting, not owning. If you leave, you start over.",
      "The monthly fees add up to more than a custom build over 2-3 years.",
      "For a luxury brokerage that needs to stand out, I'd avoid these. For a team that just needs something functional fast, they're fine.",
      "The real question to ask.",
      "Don't ask which platform should I use? Ask what do I need my website to do for my business in 12 months? Then work backward from there.",
      "If the answer is generate 50 qualified leads per month from organic traffic, that's a strategy conversation, not a platform conversation. The platform is just the tool that executes the strategy.",
    ],
  },
  {
    slug: "do-i-need-a-personal-website-if-my-brokerage-already-has-one",
    title: "Do I Need a Personal Website If My Brokerage Already Has One?",
    category: "Real Estate",
    date: "2026-08-14",
    readTime: "3 min read",
    excerpt:
      "A brokerage site positions the brokerage, not you. Here's when an agent's personal website becomes a practical business asset.",
    image: "/assets/personal-website-brokerage.webp",
    imageAlt: "Real estate agent leaving a brokerage with a personal website and brand assets",
    seoTitle: "Do Real Estate Agents Need a Personal Website?",
    seoDescription:
      "Do you need a personal website if your brokerage already has one? Danny Namnum explains when an agent-owned site becomes a practical business asset.",
    body: [
      "Short answer: it depends on what you're trying to build.",
      "If you're happy being one of 200 agents on your brokerage's site, and your leads come from the brokerage's marketing, and you plan to stay at that brokerage forever, then no. You don't need your own site.",
      "But if any of the following are true, the answer changes:",
      "You want to be known for something specific.",
      "Your brokerage site positions the brokerage. Not you. If you specialize in waterfront condos, luxury new construction, or a specific community, your brokerage's site isn't going to tell that story for you.",
      "A personal site lets you own a niche. When someone Googles waterfront condos Boca Raton agent, your brokerage's generic agent directory page isn't going to rank. A dedicated page on your own site, with your content and your expertise, might.",
      "You might move brokerages someday.",
      "This happens more than people admit. And when it does, you lose your agent page, your reviews, your content, and whatever SEO equity that page built up. It's gone.",
      "Your own domain is yours. It follows you regardless of where you hang your license.",
      "You want leads that come to you, not leads assigned to you.",
      "Brokerage websites generate leads for the brokerage. Those leads get distributed by a manager. You might get them, you might not.",
      "Your own site generates leads for you. They come in with your name attached. No round-robin, no fighting over who gets the next inquiry.",
      "What a personal agent site actually needs.",
      "It doesn't need to be complicated. The basics:",
      "A clear statement of who you serve and where.",
      "Your active listings, which can pull from IDX.",
      "Two or three neighborhood or community guides. This is what ranks on Google.",
      "Social proof: testimonials, transaction history, awards.",
      "A way to contact you that goes directly to you.",
      "You don't need a blog with 50 articles about 5 tips for first-time homebuyers. You need a few pages that are genuinely useful to the specific buyer you want to attract.",
      "The investment.",
      "A personal agent site doesn't need to cost $20K. A clean, fast, well-structured site on Squarespace or a simple WordPress setup can be done for $3-5K. The ROI comes from the leads it generates that you wouldn't have gotten otherwise.",
      "If you close one additional deal per year because someone found your site, that's $10-15K in commission from a $3K investment. The math works.",
      "When it doesn't make sense.",
      "If you're brand new, have no niche, and no content to put on a site, wait. Build your reputation first. A personal site amplifies what's already there. It doesn't create something from nothing.",
      "But if you've been in the business 3+ years, have a specialty, and want to grow beyond what your brokerage's marketing provides, your own site is one of the best investments you can make.",
    ],
  },
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
