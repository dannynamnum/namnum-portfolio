/**
 * Editorial Monochrome — case study content.
 * Sourced from namnum.net, lightly edited to be confident and client-facing.
 */
import { A } from "./assets";

export interface CaseStudySection {
  label: string; // e.g. "The Problem"
  heading: string;
  body: string[];
  bullets?: { title?: string; text: string }[];
  images?: { src: string; alt: string; caption?: string }[];
}

export interface CaseStudy {
  slug: string;
  index: string; // "01"
  title: string; // Project name
  headline: string; // Editorial headline on detail page
  oneLiner: string;
  industry: string; // tag
  filter: "real-estate" | "fintech";
  hero: string;
  heroAlt: string;
  cardImage: string;
  details: { role: string; industry: string; timeline?: string; scope: string };
  problem: CaseStudySection;
  solution: CaseStudySection;
  beforeAfter?: {
    heading: string;
    body: string;
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
  role?: CaseStudySection;
  metrics?: { value: string; suffix?: string; label: string }[];
  results: { heading: string; body: string[] };
  testimonial?: { quote: string; name: string; title: string };
  userQuote?: { quote: string; attribution: string };
  featured?: boolean;
}
// Optional user quote (no named attribution required)
export interface UserQuote {
  quote: string;
  attribution: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "babcock-ranch",
    index: "01",
    title: "Babcock Ranch",
    headline: "A master-planned community, built to convert.",
    oneLiner:
      "A full redesign for America's first solar-powered town — built to turn the community's story into qualified buyer leads.",
    industry: "Real Estate",
    filter: "real-estate",
    hero: A.babcockHero,
    heroAlt:
      "Babcock Ranch website redesign — mobile-first homepage with lifestyle imagery and lead capture",
    cardImage: A.babcockMobile2x,
    details: {
      role: "Lead Designer & Developer",
      industry: "Real Estate · Master-Planned Communities",
      timeline: "5 months",
      scope: "Strategy, Design & Development",
    },
    problem: {
      label: "The Problem",
      heading: "A premium community with a website that didn't match.",
      body: [
        "The Babcock Ranch website is the first impression for one of Florida's most ambitious master-planned communities — America's first solar-powered town. For prospective homebuyers, it's where the decision starts. For the marketing team, it's one of the most important sales tools in the business.",
        "The previous site wasn't pulling its weight. Babcock Ranch competes for serious buyers — people making one of the largest financial decisions of their lives — and the old site was costing the team opportunities.",
      ],
      bullets: [
        { text: "The community's biggest selling points — its sustainability story and master-planned scale — were buried. Prospects couldn't see what made Babcock Ranch worth the visit." },
        { text: "Mobile performance was weak, even though most buyers were discovering the community on their phones first." },
        { text: "Lead capture was inefficient. The site generated volume, but not the quality of inquiries the sales team could actually close." },
        { text: "Brand presentation felt inconsistent, quietly undercutting the premium positioning the community had earned." },
      ],
    },
    solution: {
      label: "The Solution",
      heading: "A buyer experience designed to convert.",
      body: [
        "I rebuilt the site around one question: what does a serious buyer need to see, feel, and do to take the next step? Every decision worked backward from that.",
      ],
      bullets: [
        { title: "Lifestyle-led narrative", text: "Put the sustainability story and master-planned vision front and center — turning the community's differentiators into reasons to inquire." },
        { title: "Mobile-first experience", text: "Met buyers on the device they actually use, with fast, frictionless browsing." },
        { title: "Streamlined inquiry flows", text: "Designed to attract higher-intent buyers, not just more form fills." },
        { title: "Premium visual identity", text: "Matched the price point and aspiration of the community itself." },
        { title: "Scalable foundation", text: "The marketing team can launch new neighborhoods, campaigns, and landing pages without starting from scratch." },
      ],
      images: [
        { src: A.babcockMobile2x, alt: "Babcock Ranch mobile website design screens" },
        { src: A.babcockLayer2, alt: "Babcock Ranch website design — desktop layout" },
        { src: A.babcockLayer3, alt: "Babcock Ranch website design — interior page layouts" },
      ],
    },
    beforeAfter: {
      heading: "Before & After",
      body: "The original site had the right pieces — they just weren't working together. The story wasn't leading buyers anywhere, the important things got lost, and it wasn't built for the phones most people were on. The redesign fixed that. The story leads now, the right things come first, and it finally looks the part.",
      before: { src: A.babcockBefore, alt: "Babcock Ranch website before redesign" },
      after: { src: A.babcockAfter, alt: "Babcock Ranch website after redesign" },
    },
    role: {
      label: "How I Worked",
      heading: "A single partner from strategy through launch.",
      body: [
        "Babcock Ranch's marketing team got the efficiency of working with one person who handled the full project end to end — strategy, design, and build — without the cost or coordination overhead of an agency.",
      ],
      bullets: [
        { title: "Buyer-focused strategy", text: "Restructured the site around the questions real prospects ask before they inquire." },
        { title: "Brand-aligned design", text: "Crafted a visual experience that reinforced Babcock Ranch as a premium, category-defining community." },
        { title: "Mobile-first build", text: "Designed and developed every page for the way buyers actually browse today." },
        { title: "Direct collaboration", text: "Worked hand in hand with marketing leadership to align the site with sales goals." },
      ],
    },
    results: {
      heading: "A website the marketing team trusted enough to reinvest in.",
      body: [
        "After launch, the redesigned site shifted both the volume and the quality of inbound interest. Engagement climbed, mobile performance jumped, and the sales team began receiving inquiries from buyers who were further along in their decision-making.",
        "The clearest measure of success wasn't a metric — it was the client's behavior after launch. Babcock Ranch renewed for ongoing site maintenance, then commissioned a dedicated luxury landing page to reach a more affluent buyer segment. Two reinvestments, same partner, same conviction the work was driving results.",
      ],
    },
    testimonial: {
      quote:
        "We redesigned our website and used Namnum Design Co because of their reputation for leading edge design. The process was smooth and easy, and our website now competes more effectively and looks best-in-class. I strongly recommend them to any brand looking to lead, rather than follow.",
      name: "Nicholas Parks",
      title: "CMO, Babcock Ranch",
    },
    featured: true,
  },
  {
    slug: "gl-homes",
    index: "02",
    title: "GL Homes",
    headline: "A smarter, more intuitive homebuying journey.",
    oneLiner:
      "A corporate website redesign for one of Florida's largest homebuilders — driving a 30% lift in lead generation and 80% more mobile engagement.",
    industry: "Real Estate",
    filter: "real-estate",
    hero: A.glHero,
    heroAlt: "GL Homes corporate website redesign shown across devices",
    cardImage: A.glHero,
    details: {
      role: "Lead UX/UI Designer",
      industry: "Real Estate · PropTech",
      scope: "Website Design & Branding",
    },
    problem: {
      label: "The Problem",
      heading: "Bridging the gap between homebuyers and communities.",
      body: [
        "The GL Homes corporate website is the central hub for homebuyers — communities, home models, amenities, and everything in between. Buyers needed a clear, intuitive way to explore it all without feeling overwhelmed. The previous site was getting in their way.",
      ],
      bullets: [
        { text: "Disorganized navigation made it difficult for buyers to compare communities and homes." },
        { text: "Limited mobile optimization meant many users struggled on phones and tablets." },
        { text: "Inefficient lead capture — buyers had difficulty finding contact forms or next steps." },
        { text: "No unified design system — inconsistent branding, typography, and layout across pages." },
      ],
    },
    solution: {
      label: "The Solution",
      heading: "One clear path from browsing to inquiry.",
      body: [
        "The site was restructured and redesigned to create a seamless experience — helping buyers explore communities, compare home options, and easily connect with sales teams.",
      ],
      bullets: [
        { title: "Clear, user-friendly navigation", text: "Streamlined browsing across communities, floorplans, and amenities." },
        { title: "Mobile-first design", text: "A fully responsive experience across all devices." },
        { title: "Intuitive search & filtering", text: "Buyers find homes by price, location, and lifestyle preferences." },
        { title: "Optimized lead capture", text: "Forms strategically placed for increased inquiries and engagement." },
        { title: "Scalable design system", text: "Visual and brand consistency across every page, built to grow." },
      ],
      images: [
        { src: A.glCorporateMockup, alt: "GL Homes corporate website page designs" },
        { src: A.glStyleGuide, alt: "GL Homes design system and style guide" },
        { src: A.glIphone, alt: "GL Homes mobile experience on iPhone" },
        { src: A.glStyleGuideCon, alt: "GL Homes design system — components and patterns" },
      ],
    },
    beforeAfter: {
      heading: "Before & After",
      body: "The previous website lacked clear navigation, a structured information hierarchy, and mobile responsiveness. The redesign created a more intuitive, visually appealing, and conversion-focused experience.",
      before: { src: A.glOld, alt: "GL Homes website before redesign" },
      after: { src: A.glNew, alt: "GL Homes website after redesign" },
    },
    metrics: [
      { value: "30", suffix: "%", label: "Increase in lead generation" },
      { value: "80", suffix: "%", label: "Increase in mobile engagement" },
    ],
    results: {
      heading: "30% more leads from a clearer buying path.",
      body: [
        "The redesigned website transformed the homebuying journey — making it easier for buyers to explore communities, compare floorplans, and connect with sales teams. With improved navigation, intuitive lead capture, and a fully responsive design, the platform saw a 30% increase in lead submissions and significantly higher engagement.",
        "The scalable design system ensured brand consistency and streamlined future updates, letting new pages and features integrate seamlessly — reinforcing GL Homes' position as a leader in customer-focused digital experiences.",
      ],
    },
    testimonial: {
      quote:
        "Danny was a critical part of GL Homes' online branding modernization for GLHomes.com, providing not only design but strategy as well.",
      name: "Mike San German",
      title: "Manager UX/UI & Digital Transformation, GL Homes",
    },
    featured: true,
  },
  {
    slug: "payology-website",
    index: "03",
    title: "Payology Website",
    headline: "A digital identity for a growing fintech brand.",
    oneLiner:
      "A conversion-driven website and brand refresh that became the catalyst for Payology's entire digital ecosystem.",
    industry: "Fintech",
    filter: "fintech",
    hero: A.payWebsiteMockup,
    heroAlt: "Payology corporate website shown across desktop, tablet, and mobile",
    cardImage: A.payWebsiteMockup,
    details: {
      role: "Lead UX/UI Designer",
      industry: "Fintech · SaaS · B2B",
      scope: "Website Design & Branding",
    },
    problem: {
      label: "The Problem",
      heading: "Establishing a cohesive digital identity.",
      body: [
        "Payology provides payment processing solutions for businesses, with deep integrations into platforms like Salesforce. As the company evolved from Check21 to Payology, it needed a modernized brand and a digital presence that reflected its innovation and industry leadership. The old site couldn't carry that weight.",
      ],
      bullets: [
        { text: "Outdated branding and inconsistent messaging — the site didn't reflect the shift from Check21, creating brand confusion." },
        { text: "Key product offerings were buried in complex menus, obscuring the value proposition." },
        { text: "No conversion strategy — the site wasn't optimized for lead generation." },
        { text: "No scalable design system, making updates and expansion difficult." },
      ],
    },
    solution: {
      label: "The Solution",
      heading: "A website that finally matched the product.",
      body: [
        "The new website was designed to be visually engaging, easy to navigate, and conversion-driven — establishing a strong, unified digital presence.",
      ],
      bullets: [
        { title: "Refreshed brand identity", text: "A modern, professional aesthetic that reinforced trust and credibility through the Check21-to-Payology transition." },
        { title: "Streamlined architecture", text: "Visitors quickly understand services, explore features, and find resources." },
        { title: "Conversion-focused design", text: "Clear calls-to-action, optimized lead capture, and persuasive content." },
        { title: "Scalable design system", text: "Reusable components for easy updates as Payology expands." },
        { title: "Mobile-first & responsive", text: "Seamless performance across desktop, tablet, and mobile." },
      ],
      images: [
        { src: A.payColorType, alt: "Payology color palette and typography system" },
        { src: A.payWebsiteMockup2, alt: "Payology website page designs" },
      ],
    },
    beforeAfter: {
      heading: "Before & After",
      body: "The old website was text-heavy, outdated, and difficult to navigate. The redesign introduced a modern, structured layout with improved navigation, a refined color palette, and strategic content placement — making it easier for visitors to explore services and take action.",
      before: { src: A.payBefore, alt: "Check21 website before the Payology redesign" },
      after: { src: A.payAfter, alt: "Payology website after redesign" },
    },
    results: {
      heading: "The catalyst for an entire digital ecosystem.",
      body: [
        "The website redesign became the catalyst for Payology's entire digital ecosystem — establishing a scalable design system that now extends across its suite of financial applications, ensuring brand consistency and a seamless user experience everywhere customers touch the brand.",
      ],
    },
  },
  {
    slug: "payology-app",
    index: "04",
    title: "Payology App",
    headline: "An intuitive platform for financial transactions.",
    oneLiner:
      "Payology's first-ever financial platform — a scalable foundation for its entire suite of enterprise products.",
    industry: "Fintech",
    filter: "fintech",
    hero: A.payAppDark,
    heroAlt: "Payology enterprise application interface in dark mode",
    cardImage: A.payAppDark,
    details: {
      role: "Lead UX/UI Designer",
      industry: "Fintech · Enterprise SaaS",
      scope: "Product & UX/UI Design",
    },
    featured: true,
    problem: {
      label: "The Problem",
      heading: "Designing a platform for complex financial workflows.",
      body: [
        "Payology needed to build its first-ever financial platform — one that would serve as the foundation for its suite of enterprise products. Everything had to be designed from the ground up, and it had to be powerful without being complicated.",
      ],
      bullets: [
        { text: "No existing framework — the entire user journey, navigation, and workflow structure had to be designed from scratch." },
        { text: "Complex financial workflows — enterprise users needed a clear interface that simplified transactions and approvals." },
        { text: "Brand flexibility — the platform had to support client-specific branding while staying cohesive." },
        { text: "Data-heavy interactions — users needed structured data presentation to analyze reports and complete transactions quickly." },
      ],
    },
    solution: {
      label: "The Solution",
      heading: "A clear, scalable system for enterprise finance.",
      body: [
        "I designed a user-first financial platform that balanced structure, flexibility, and scalability.",
      ],
      bullets: [
        { title: "Structured workflows", text: "A step-by-step process that made financial operations clear and efficient." },
        { title: "Intuitive navigation", text: "Key actions surfaced to reduce cognitive load and improve transaction clarity." },
        { title: "Scalable UI framework", text: "Built to support future product expansion with a consistent experience." },
        { title: "Enterprise branding", text: "Clients integrate their own branding without disrupting usability." },
        { title: "Optimized data visualization", text: "Clean, structured dashboards for processing reports and transactions efficiently." },
      ],
      images: [
        { src: A.payAppIpads, alt: "Payology platform screens across tablets" },
        { src: A.payMenuBeforeAfter, alt: "Payology navigation menu — before and after redesign" },
        { src: A.payAppMobile, alt: "Payology mobile login experience" },
      ],
    },
    results: {
      heading: "The foundation of Payology's digital ecosystem.",
      body: [
        "Designed with flexibility in mind, the Payology application became the foundation for the company's digital ecosystem — allowing enterprise clients to tailor their experiences while ensuring seamless scalability as the product suite grows.",
      ],
    },
  },
  {
    slug: "model-showcase",
    index: "05",
    title: "Model Showcase Kiosk",
    headline: "From inspiration to selection.",
    oneLiner:
      "A touchscreen home-customization experience deployed across 12 communities in 8 cities — turning model home inspiration into upgrade revenue.",
    industry: "PropTech",
    filter: "real-estate",
    hero: A.modelShowcaseHero,
    heroAlt:
      "A homebuyer using the Model Showcase touchscreen kiosk to select exterior designs",
    cardImage: A.modelShowcaseHero,
    details: {
      role: "Lead UX/UI Designer",
      industry: "Real Estate · PropTech",
      scope: "Product & UX/UI Design",
    },
    problem: {
      label: "The Problem",
      heading: "Helping buyers navigate hundreds of customization options.",
      body: [
        "After purchasing a new construction home, buyers enter the next phase: selecting finishes, fixtures, and upgrades. It's exciting — and overwhelming. They're expected to remember what they liked from multiple model homes and make dozens of decisions quickly, often with limited guidance.",
        "Sales teams were relying on printed sheets, verbal descriptions, and the buyer's memory to close high-ticket upgrades — everything from flooring to faucets. The process lacked consistency, clarity, and a modern experience.",
      ],
    },
    solution: {
      label: "The Solution",
      heading: "The model home tour, continued on screen.",
      body: [
        "The Model Showcase was designed as a guided, digital continuation of the model home tour. Instead of relying on memory, buyers revisit every design detail — room by room, product by product — with each space featuring curated finishes, fixtures, and appliances tied directly to available upgrades.",
        "I translated the showroom flow into a clean, responsive application. The interface made it easy to explore, zoom in, compare, and bookmark preferred choices — making the digital experience feel just as intentional as the physical models. The result: upgrades feel less like an upsell and more like a confident design decision.",
      ],
      images: [
        { src: A.kitchenIpad, alt: "Interactive kitchen design tool on iPad" },
        { src: A.modelShowcaseMobile, alt: "Model Showcase mobile experience" },
        { src: A.modelShowcaseDesktop, alt: "Model Showcase desktop application" },
        { src: A.kioskMockup, alt: "Model Showcase kiosk installed in a GL Homes sales center" },
      ],
    },
    metrics: [
      { value: "12", label: "GL Homes communities" },
      { value: "8", label: "Cities across South Florida" },
    ],
    results: {
      heading: "From pilot to essential sales tool.",
      body: [
        "The Model Showcase changed the way buyers engaged with their home selections — and how the business closed upgrade sales. It boosted upgrade conversions by giving buyers a clear, visual way to explore high-ticket options, reduced decision fatigue, and gave the sales team a modern, persuasive tool.",
        "What started as a digital tool for a single community quickly became an essential part of the GL Homes sales experience — successfully implemented across 12 communities in 8 cities. It became more than a tool: a trusted part of the buyer journey, driving both satisfaction and revenue.",
      ],
    },
  },
  {
    slug: "options-catalog",
    index: "06",
    title: "Options Catalog",
    headline: "Confident selections, made simple.",
    oneLiner:
      "A digital catalog that organized 1,299 home customization options into a clear, browsable experience buyers could explore on their own time.",
    industry: "PropTech",
    filter: "real-estate",
    hero: A.optionsCatalogHero,
    heroAlt: "Options Catalog web application for home customization",
    cardImage: A.optionsCatalogHero,
    details: {
      role: "Lead UX/UI Designer",
      industry: "Real Estate · PropTech",
      scope: "Product & UX/UI Design",
    },
    problem: {
      label: "The Problem",
      heading: "A vast selection with no way to navigate it.",
      body: [
        "At GL Homes, buyers visit the Design Studio to personalize their new homes — selecting finishes, layouts, and upgrades. But the traditional process worked against them.",
      ],
      bullets: [
        { text: "An overwhelming number of choices made comparing options difficult." },
        { text: "No centralized resource existed for buyers to browse selections before visiting the Design Studio." },
        { text: "Repetitive inquiries to design coordinators slowed everything down." },
        { text: "Decisions often had to be made on the spot, leading to hesitation." },
      ],
    },
    solution: {
      label: "The Solution",
      heading: "A structured digital catalog for every option.",
      body: [
        "The Options Catalog gave buyers an interactive, organized, visually rich tool for exploring every available customization — flooring, cabinetry, appliances, fixtures, and exterior selections. Buyers browse a structured catalog, filter by category, view high-resolution detail, and arrive at Design Studio appointments already prepared.",
        "For design coordinators, the tool streamlined consultations — giving buyers a structured way to explore before meetings, leading to faster, more confident decisions.",
      ],
      images: [
        { src: A.optionsCatalogIpad, alt: "Options Catalog on iPad" },
        { src: A.optionsCatalogRecording, alt: "Options Catalog application interface" },
        { src: A.iphoneDesk, alt: "Options Catalog mobile experience" },
      ],
    },
    metrics: [
      { value: "1,299", label: "Available options organized" },
      { value: "12", label: "Option categories" },
    ],
    results: {
      heading: "1,299 options, zero guesswork.",
      body: [
        "With 1,299 options across 12 categories, home customization used to mean hours of sorting through physical samples. The Options Catalog eliminated the guesswork — letting buyers explore and understand selections ahead of time.",
        "The result: faster decision-making, reduced in-person consultation time, and a more efficient, buyer-driven customization process.",
      ],
    },
  },
  {
    slug: "penn-entertainment",
    index: "07",
    title: "PENN Entertainment",
    headline: "Kiosks That Work for the People Who Actually Use Them.",
    oneLiner:
      "A field-research-driven redesign of casino floor kiosks used by millions of guests — backed by a design system spanning kiosk, app, and web.",
    industry: "Hospitality",
    filter: "fintech",
    hero: A.pennCasinoFloor,
    heroAlt: "A PENN Play kiosk on the casino floor at Hollywood Casino",
    cardImage: A.pennCasinoFloor,
    details: {
      role: "Senior Product Designer",
      industry: "Hospitality · Casino · Kiosk",
      timeline: "1.5 years",
      scope: "Product & UX/UI Design · Design System",
    },
    problem: {
      label: "The Problem",
      heading: "Most guests are 55+. Most kiosks weren't designed for them.",
      body: [
        "Penn Entertainment runs self-service kiosks on casino floors around the country, and most of the guests using them are 55 and up. A lot of them aren't comfortable with a touchscreen. So before I designed anything, I watched. I paired real usability testing with hours on the floor, just observing people use the machines. Every change I made came from something I actually saw trip someone up.",
      ],
      bullets: [
        { text: "Balance display lacked clarity — guests confused about Gaming vs Non-Gaming balances." },
        { text: "Back navigation broke flow — returning from a promo reset scroll position." },
        { text: "Top menu placement blocked access — shorter guests couldn't reach the nav tabs." },
        { text: "Start interaction was unclear — guests tried tapping instead of swiping their card." },
        { text: "Download App banner misled — guests tapped it thinking it was a button." },
        { text: "Multi-touch input caused missed taps — guests used palm taps, a habit from slot machines." },
      ],
    },
    solution: {
      label: "The Solution",
      heading: "Seven fixes. All from watching real people use the machine.",
      body: [
        "That became seven fixes. A promo banner people kept mashing like a button, so I toned it down until it read as information. Buttons big enough to invite palm taps — a habit that comes right off the slot machines — so I sized them for a single finger. A menu sitting too high for shorter guests, so I dropped it to the bottom where everyone could reach it.",
        "I gave engineering the full set, ranked by effort and impact so they'd know where to start. I also run the design system tying the kiosk, the Penn Host app, and the web together, so none of these fixes live in just one place.",
      ],
      images: [
        { src: A.pennStyleGuide, alt: "PENN Entertainment kiosk design system one-sheeter" },
      ],
    },
    beforeAfter: {
      heading: "Before & After",
      body: "The original interface stacked everything in a single column with a promotional banner that guests kept tapping like a button. The redesign introduced a two-column card grid, a bottom navigation bar reachable by everyone, and a clear visual hierarchy — so guests could find what they needed and act on it without confusion.",
      before: { src: A.pennBefore, alt: "PENN Entertainment kiosk — before redesign" },
      after: { src: A.pennAfter, alt: "PENN Entertainment kiosk — after redesign" },
    },
    metrics: [
      { value: "97", label: "Color tokens in the design system" },
      { value: "56", label: "Components built" },
      { value: "128", label: "Component variants" },
    ],
    results: {
      heading: "Validated on the floor. Shipped across the system.",
      body: [
        "The redesign was validated by the people who actually use the machines. Guests navigated faster, made fewer errors, and — critically — told us they noticed the difference. The design system that came out of this work now spans the kiosk, the Penn Host app, and the web, ensuring every touchpoint speaks the same visual language.",
      ],
    },
    userQuote: {
      quote: "Love how easy it was to use, much better than the old one.",
      attribution: "Casino guest, Hollywood Casino at The Meadows",
    },
    featured: true,
  },
];

// ─── PENN Entertainment ────────────────────────────────────────────────────

export const featuredStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function nextCaseStudy(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}
