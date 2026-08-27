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
  image?: string;
  imageAlt?: string;
  seoTitle: string;
  seoDescription: string;
  /** Each string is a paragraph. */
  body: string[];
  relatedWork?: {
    label: string;
    href: string;
    description: string;
  };
  relatedInsight?: {
    label: string;
    href: string;
    description: string;
  };
  inlineLinks?: {
    after: string;
    label: string;
    href: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-it-cost-to-build-a-professional-real-estate-website",
    title: "How Much Does It Cost to Build a Professional Real Estate Website?",
    category: "Real Estate",
    date: "2026-08-26",
    readTime: "4 min read",
    excerpt:
      "The honest answer depends on what the site has to do. Here's what a professional real estate website actually costs, and where the money goes.",
    seoTitle: "Real Estate Website Cost: What Should You Budget?",
    seoDescription:
      "How much does a professional real estate website cost? A practical breakdown of website budgets for agents, teams, builders, and brokerages.",
    body: [
      "The honest answer is: it depends on what the site has to do.",
      "A personal agent website and a multi-community builder platform are both real estate websites. They are not the same project, and they should not have the same budget.",
      "The mistake I see most often is treating the website like a brochure. A professional real estate website is a sales tool. It has to attract the right people, help them find the right information, and give them a next step that makes sense.",
      "## A realistic range.",
      "For an individual agent or small team, a focused site can usually land somewhere between $3,000 and $15,000, depending on the content, integrations, and amount of custom design.",
      "For a full brokerage or builder website, the range is more commonly $50,000 to $85,000. That budget covers a much bigger problem: multiple audiences, communities or offices, CRM and IDX connections, search visibility, content migration, and a buyer journey that has to work across thousands of pages.",
      "Those are useful starting points, not quotes. The right number comes from the job the site needs to do.",
      "## What are you actually paying for?",
      "The platform is only one line item. The real budget usually goes into six things:",
      "• Strategy: deciding who the site is for, what they need, and what the business wants them to do",
      "• Information architecture: organizing listings, communities, neighborhoods, agents, and resources so people can find their way through",
      "• UX and visual design: making the experience feel clear, credible, and specific to the brand",
      "• Content: writing, editing, photography, video, floor plans, community information, and migration from the old site",
      "• Integrations: IDX, CRM, forms, analytics, marketing automation, and any internal systems the team depends on",
      "• Build and quality assurance: development, accessibility, performance, responsive behavior, testing, and launch support",
      "If a quote is much lower than the rest of the market, ask which of those pieces is missing. Sometimes the answer is that the team has a more efficient process. Sometimes the answer is that strategy, content, testing, and post-launch support were never included.",
      "## Where people waste money.",
      "The biggest waste is paying for pages nobody needs or features nobody will use.",
      "A real estate brand does not need a custom animation on every section if buyers cannot quickly find a community, understand the value, or contact the right person. It does not need a complicated search experience if the audience is still researching neighborhoods. It does not need a massive content migration just because the old site has thousands of URLs.",
      "Start with the decisions buyers are trying to make. Then spend on the parts of the site that help them make those decisions.",
      "## What a good budget should include.",
      "Before comparing proposals, make sure each one answers the same questions:",
      "• Who owns the code, content, domain, and analytics?",
      "• How will listings, communities, and agent information be managed?",
      "• What CRM and IDX systems need to connect?",
      "• Who is responsible for content and photography?",
      "• How will mobile performance and accessibility be tested?",
      "• What happens after launch when the team needs a new landing page or a new community section?",
      "A lower upfront price can become expensive if every update requires a developer or if the platform locks the business into a system it cannot grow with.",
      "## My recommendation.",
      "Set the budget around the outcome, not the number of pages.",
      "If you need a simple personal site that establishes your niche and generates direct inquiries, keep the scope focused. If you need a brokerage or builder site that supports multiple communities, lead sources, and teams, budget for the strategy and infrastructure that make that possible.",
      "The cheapest website is not the one with the lowest proposal. It is the one that does its job without needing to be rebuilt a year later.",
    ],
    relatedInsight: {
      label: "Keep reading: How to choose the right website builder",
      href: "/insights/how-to-choose-the-right-real-estate-website-builder",
      description: "The platform matters less than the strategy behind it. Here is what to evaluate before choosing one.",
    },
    relatedWork: {
      label: "See the Babcock Ranch case study",
      href: "/work/babcock-ranch",
      description: "A large-scale real estate website rebuilt around buyer decisions, mobile behavior, and qualified leads.",
    },
  },
  {
    slug: "can-i-build-my-own-real-estate-website-without-technical-skills",
    title: "Can I Build My Own Real Estate Website Without Technical Skills?",
    category: "Real Estate",
    date: "2026-08-26",
    readTime: "4 min read",
    excerpt:
      "Yes, you can build a real estate website without being technical. The better question is what you want the site to accomplish once it is live.",
    seoTitle: "Can You Build a Real Estate Website Yourself?",
    seoDescription:
      "Can you build your own real estate website without technical skills? A practical guide to DIY platforms, trade-offs, and when to bring in a designer.",
    body: [
      "Yes, you can build a real estate website without being technical.",
      "The tools are easier to use than they used to be. You can choose a template, add your logo, connect a domain, and publish something that works on a phone in a weekend.",
      "But a website that exists is not automatically a website that helps your business.",
      "The better question is what you want the site to accomplish once it is live.",
      "## DIY works when the job is simple.",
      "Building it yourself can be a smart choice if you are an individual agent or a small team with a clear niche, a small amount of content, and a realistic launch goal.",
      "A managed platform can give you the basics: a homepage, an about page, listing links, a few neighborhood pages, a contact form, and a way to publish updates. If you are willing to write the copy, choose the images, and maintain the site, that may be enough to get started.",
      "The important word is focused. A DIY site works better when it has one audience and one clear promise instead of trying to represent every service, neighborhood, and type of buyer at once.",
      "## What the templates do not decide for you.",
      "A template can give you a layout. It cannot decide what your buyer needs to know first.",
      "You still have to answer the hard questions:",
      "• Who do you serve and where?",
      "• What makes your approach different from the other agents in the same market?",
      "• Which pages will attract the buyer you actually want?",
      "• What should someone do if they are not ready to book a call?",
      "• Where does a lead go after they fill out the form?",
      "Most DIY sites struggle in the space between the template and those decisions. The pages look finished, but the message is generic, the navigation is vague, and the only CTA is \"Contact me.\"",
      "## The hidden time cost.",
      "The cost of a DIY site is not only the subscription. It is also the time spent making decisions you may not have expected.",
      "You have to write the copy, resize the images, check the mobile layout, connect the domain, configure forms, test notifications, set up analytics, write page titles, create redirects, and keep the content current. Then you have to do it again when the template changes or a new page does not behave the way you expected.",
      "If you enjoy that work, it can be worthwhile. If you would rather be meeting clients, showing properties, or running the business, that time has a real cost.",
      "## When DIY starts to break down.",
      "I would bring in a designer when the website needs to support more than a basic presence.",
      "That usually means a stronger personal brand, a specific SEO strategy, multiple communities, custom landing pages, CRM automation, IDX behavior, a team of agents, or a buyer journey that needs to work for different levels of intent.",
      "It also means the site is important enough that a slow page, confusing form, or weak first impression is costing real opportunities.",
      "A designer is not there just to make the site look better. The useful part is having someone make the structure, content, and interaction decisions before you spend weeks building the wrong thing.",
      "## A practical middle ground.",
      "You do not have to choose between doing everything yourself and commissioning a massive custom build.",
      "You can own the platform and content while bringing in help for the parts that have the most leverage: positioning, information architecture, conversion paths, mobile UX, visual direction, and launch QA.",
      "That gives you a site you can maintain without asking a developer to change every sentence, but it avoids the most common DIY mistake: building a polished version of the wrong experience.",
      "Start small if small is enough. Get help when the site becomes part of the sales system, not just a digital business card.",
    ],
    relatedWork: {
      label: "See the GL Homes case study",
      href: "/work/gl-homes",
      description: "A real estate experience designed to make complex decisions easier in the sales center and online.",
    },
  },
  {
    slug: "what-features-should-every-real-estate-website-have",
    title: "What Features Should Every Real Estate Website Have?",
    category: "Real Estate",
    date: "2026-08-26",
    readTime: "4 min read",
    excerpt:
      "A professional real estate website does not need every feature. It needs the right features in the right order, for the right buyer.",
    seoTitle: "Essential Features for a Real Estate Website",
    seoDescription:
      "What features should every real estate website have? A practical checklist covering listings, communities, mobile UX, lead capture, CRM, and performance.",
    body: [
      "A professional real estate website does not need every feature.",
      "It needs the right features in the right order, for the right buyer.",
      "The feature list usually starts with IDX search, property detail pages, agent profiles, forms, and social links. Those are useful. They are not the whole experience.",
      "The best real estate websites help someone answer three questions quickly: Is this relevant to me? Can I trust this brand? What should I do next?",
      "## 1. Clear positioning.",
      "The first screen should tell people who you serve, where you work, and why the site is worth their time.",
      "That sounds basic, but a lot of real estate sites lead with a generic search bar and leave the visitor to figure out the rest. A buyer looking for a specific community or lifestyle should not have to decode the business before finding a useful page.",
      "## 2. Search that matches buyer intent.",
      "Listings matter, but not everyone arrives ready to search by price and bedroom count.",
      "Give people more than one way in. Someone may want to browse available homes. Someone else may be researching a neighborhood, comparing builders, looking for waterfront properties, or trying to understand the buying process in a new market.",
      "The site should support those different entry points instead of forcing every visitor through the same search box.",
      "## 3. Useful community and neighborhood pages.",
      "Community pages are where a real estate website can become genuinely helpful.",
      "A strong page can explain the location, lifestyle, inventory, schools or amenities where appropriate, available homes, next steps, and who can answer questions. It also gives search engines and buyers something more specific than a generic listings page.",
      "These pages should be maintained. A thin page with a hero image and three adjectives is not a neighborhood guide.",
      "## 4. Mobile-first UX.",
      "Real estate research happens on phones. The site has to work when someone is holding it in one hand, moving between apps, or trying to compare options on a smaller screen.",
      "That means readable type, fast images, reachable navigation, forms that do not feel like paperwork, and a page structure that makes sense without a desktop monitor.",
      "When I rebuilt the Babcock Ranch website, 80% of the traffic came from mobile devices, so the entire UX architecture was rebuilt mobile-first.",
      "## 5. CTAs for different levels of intent.",
      "Not everyone is ready to schedule a tour or talk to an agent.",
      "A good site gives a researcher a useful next step, such as a neighborhood guide or availability alert. It gives a more engaged visitor a quiz, intake, or agent match. It gives a ready buyer a direct call, form, or tour request.",
      "One CTA repeated across every page is not a conversion strategy. It is a shortcut.",
      "## 6. Lead routing that works.",
      "A form is not useful if the lead disappears after submission.",
      "The website should send the right information to the right person or system, with a clear notification and a follow-up process behind it. That might be a CRM, an agent inbox, a shared sales team, or an automation platform.",
      "Test the full path. Submit the form on a phone. Check the notification. Confirm the data arrives where it should. A beautiful form that nobody receives is still a broken feature.",
      "## 7. Trust without clutter.",
      "People want evidence that the business knows the market and can help them.",
      "That can come through specific community knowledge, clear team information, useful content, relevant project experience, reviews that are real and properly attributed, and a consistent brand. Trust does not require filling every section with badges and logos.",
      "## 8. Performance and accessibility.",
      "A real estate site can be image-heavy without feeling slow. Images should be compressed and served in modern formats. Pages should load the important content first. Text should be readable, controls should be usable, and the experience should not depend on perfect vision, precise tapping, or a fast connection.",
      "Performance and accessibility are not separate from conversion. They are part of whether someone can complete the next step.",
      "## Nice-to-have features come later.",
      "Chatbots, mortgage calculators, saved searches, personalization, map layers, and integrations can all be valuable. They are only valuable if they support a real need and the team can maintain them.",
      "Start with the path that matters most. Help the right person find the right information, understand the opportunity, and take the next step. Then add features when the evidence says they will improve that path.",
      "The best real estate website is not the one with the longest feature list. It is the one that removes the most uncertainty for the people you want to work with.",
    ],
    inlineLinks: [
      {
        after: "One CTA repeated across every page is not a conversion strategy. It is a shortcut.",
        label: "Read more about designing CTAs around user intent →",
        href: "/insights/what-makes-a-real-estate-website-convert-visitors-into-leads",
      },
    ],
    relatedWork: {
      label: "See the Babcock Ranch case study",
      href: "/work/babcock-ranch",
      description: "A master-planned community website rebuilt to turn a bigger brand story into a clearer buyer journey.",
    },
  },
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
      "Five real estate website conversion principles that turn traffic into leads, from buyer-intent navigation to mobile performance and right-sized CTAs.",
    body: [
      "Most real estate websites get traffic. Very few turn that traffic into conversations.",
      "I've worked on websites for brokerages, builders, and master-planned communities. The pattern is always the same. The site looks good. The listings are there. The traffic numbers are fine. But the phone doesn't ring and the contact forms sit empty.",
      "Here's what I've found actually moves the needle.",
      "## The homepage isn't a brochure. It's a decision point.",
      "Most real estate homepages try to show everything. Every community, every listing type, every agent. The visitor lands and has to figure out where they fit.",
      "That's friction. And friction kills conversion.",
      "The fix is simple: give people a clear path based on how they think. Not by price range. Not by MLS number. By intent. Are you relocating? Looking for waterfront? Downsizing? Each of those is a different buyer with a different journey.",
      "When I rebuilt the Babcock Ranch website, we reorganized the entire navigation around lifestyle and neighborhood, not square footage. 80% of their traffic was mobile and the old site made people pinch and scroll through desktop-era menus. Once we matched the structure to how buyers actually think, the site became their most effective sales asset.",
      "## The CTA has to match the commitment level.",
      "\"Schedule a showing\" is a big ask for someone who just found you on Google. They're not ready. They're researching.",
      "You need CTAs at different commitment levels:",
      "• Low commitment: \"Get the neighborhood guide\" or \"See what's available in [community]\"",
      "• Medium commitment: A quick quiz or intake that matches them with the right agent or area",
      "• High commitment: \"Book a call\" or \"Schedule a tour\"",
      "Most sites only have the high-commitment option. That means 90% of visitors leave without doing anything.",
      "## Speed matters more than you think.",
      "A real estate site is image-heavy by nature. Buyers want to see photos. But if your page takes 4+ seconds to load on a phone, you've already lost them.",
      "This isn't about cutting photos. It's about how you serve them. Lazy loading, proper compression, modern formats. The site should feel fast even when it's showing 30 high-res images.",
      "## Nobody trusts a site that looks like every other site.",
      "If your website uses the same IDX template as 500 other brokerages, buyers don't feel like they're working with a premium brand. They feel like they're on a search engine with your logo slapped on top.",
      "The brokerages that convert well have sites that feel like their brand. The typography, the photography style, the way information is presented. It all signals: this is a team that pays attention to detail.",
      "## The bottom line.",
      "Traffic without conversion is just a vanity metric. If your site gets 10,000 visits a month and generates 5 leads, the problem isn't SEO. The problem is what happens after someone arrives.",
      "I help real estate brands figure out exactly where visitors drop off and what to do about it. If your site has traffic but no leads, that's a solvable problem.",
    ],
    relatedInsight: {
      label: "Keep reading: What features should every website have?",
      href: "/insights/what-features-should-every-real-estate-website-have",
      description: "A practical checklist for the features that help real estate buyers find, trust, and contact you.",
    },
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
      "A practical guide to choosing the right real estate website builder, including custom WordPress, Squarespace, IDX, CRM integration, and all-in-one platforms.",
    body: [
      "This is the wrong question. But I'll answer it anyway.",
      "The reason it's the wrong question: the platform matters less than the strategy behind it. I've seen beautiful sites on WordPress that generate zero leads, and ugly sites on Squarespace that book showings every week. The difference is never the tool. It's the thinking.",
      "That said, here's how I'd frame the decision if you're a brokerage, builder, or team choosing a platform.",
      "## What you actually need to evaluate.",
      "Forget the feature comparison charts. Every platform has \"IDX integration\" and \"mobile responsive\" on their list. That's table stakes. Here's what actually matters:",
      "Can you customize the buyer journey? Most template platforms give you a homepage, a listings page, and a contact form. That's it. If you can't build custom landing pages for specific communities, create neighborhood guides, or design intake flows that qualify leads before they hit your CRM, you're going to outgrow the platform in 6 months.",
      "Who maintains it? If you pick a custom WordPress build and your developer disappears, you're stuck. If you pick Squarespace and need something beyond what the templates allow, you're stuck. The right answer depends on whether you have someone in-house who can manage updates or whether you need a partner.",
      "Does it integrate with your CRM? This is where most decisions fall apart. Your website should push leads directly into Follow Up Boss, Salesforce, or whatever system your agents actually use. If there's a manual step between \"visitor fills out form\" and \"agent gets notified,\" you're losing leads.",
      "## My recommendation for most brokerages.",
      "WordPress with a custom theme (not a purchased template) and Elementor for content editing. Here's why:",
      "• Your marketing team can update pages without calling a developer",
      "• It integrates with every CRM and IDX provider on the market",
      "• You own the code and the hosting, so you're never locked in",
      "• It scales from 10 pages to 10,000 without breaking",
      "For smaller teams or individual agents, Squarespace or a similar managed platform is fine. You don't need the complexity. But for a brokerage with multiple offices, hundreds of agents, and community-specific landing pages, you need the flexibility of a custom build.",
      "## What about the all-in-one real estate platforms?",
      "Platforms like kvCORE, Sierra Interactive, and Luxury Presence offer \"everything in one place.\" They're convenient. But convenience comes with trade-offs:",
      "• You look like every other brokerage using the same platform",
      "• Customization is limited to what their system allows",
      "• You're renting, not owning. If you leave, you start over.",
      "• The monthly fees add up to more than a custom build over 2-3 years",
      "For a luxury brokerage that needs to stand out, I'd avoid these. For a team that just needs something functional fast, they're fine.",
      "## The real question to ask.",
      "Don't ask \"which platform should I use?\" Ask \"what do I need my website to do for my business in 12 months?\" Then work backward from there.",
      "If the answer is \"generate 50 qualified leads per month from organic traffic,\" that's a strategy conversation, not a platform conversation. The platform is just the tool that executes the strategy.",
    ],
    relatedInsight: {
      label: "Keep reading: Do you need a personal website?",
      href: "/insights/do-i-need-a-personal-website-if-my-brokerage-already-has-one",
      description: "When your brokerage site is not enough, and what an agent-owned website should actually do.",
    },
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
      "When a real estate agent needs a personal website despite having a brokerage page, what the site should include, and when the investment makes sense.",
    body: [
      "Short answer: it depends on what you're trying to build.",
      "If you're happy being one of 200 agents on your brokerage's site, and your leads come from the brokerage's marketing, and you plan to stay at that brokerage forever, then no. You don't need your own site.",
      "But if any of the following are true, the answer changes:",
      "## You want to be known for something specific.",
      "Your brokerage site positions the brokerage. Not you. If you specialize in waterfront condos, luxury new construction, or a specific community, your brokerage's site isn't going to tell that story for you.",
      "A personal site lets you own a niche. When someone Googles \"waterfront condos Boca Raton agent,\" your brokerage's generic agent directory page isn't going to rank. A dedicated page on your own site, with your content and your expertise, might.",
      "## You might move brokerages someday.",
      "This happens more than people admit. And when it does, you lose your agent page, your reviews, your content, and whatever SEO equity that page built up. It's gone.",
      "Your own domain is yours. It follows you regardless of where you hang your license.",
      "## You want leads that come to you, not leads assigned to you.",
      "Brokerage websites generate leads for the brokerage. Those leads get distributed by a manager. You might get them, you might not.",
      "Your own site generates leads for you. They come in with your name attached. No round-robin, no fighting over who gets the next inquiry.",
      "## What a personal agent site actually needs.",
      "It doesn't need to be complicated. The basics:",
      "• A clear statement of who you serve and where",
      "• Your active listings (can pull from IDX)",
      "• 2-3 neighborhood or community guides (this is what ranks on Google)",
      "• Social proof: testimonials, transaction history, awards",
      "• A way to contact you that goes directly to you",
      "You don't need a blog with 50 articles about \"5 tips for first-time homebuyers.\" You need a few pages that are genuinely useful to the specific buyer you want to attract.",
      "## The investment.",
      "A personal agent site doesn't need to cost $20K. A clean, fast, well-structured site on Squarespace or a simple WordPress setup can be done for $3-5K. The ROI comes from the leads it generates that you wouldn't have gotten otherwise.",
      "If you close one additional deal per year because someone found your site, that's $10-15K in commission from a $3K investment. The math works.",
      "## When it doesn't make sense.",
      "If you're brand new, have no niche, and no content to put on a site, wait. Build your reputation first. A personal site amplifies what's already there. It doesn't create something from nothing.",
      "But if you've been in the business 3+ years, have a specialty, and want to grow beyond what your brokerage's marketing provides, your own site is one of the best investments you can make.",
    ],
    relatedInsight: {
      label: "Keep reading: Can you build it yourself?",
      href: "/insights/can-i-build-my-own-real-estate-website-without-technical-skills",
      description: "A practical look at DIY platforms, hidden time costs, and when outside UX help makes sense.",
    },
  },
  {
    slug: "nobody-had_watched-real-people-use-it",
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
