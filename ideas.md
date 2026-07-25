# Danny Namnum Portfolio — Design Brainstorm

## Three Stylistic Approaches

### 1. Editorial Monochrome
A stark black-and-white editorial layout inspired by high-end print magazines, with the coral-red accent used surgically — one accent per viewport. Confidence through restraint.
**Probability:** 0.07

### 2. Swiss Grid Precision
International Typographic Style — exposed grid lines, index numbers, rigid alignment, heavy Helvetica-adjacent type. Feels like a design system specimen.
**Probability:** 0.03

### 3. Warm Architectural Minimal
Light, gallery-like spaces with warm off-white paper tones, oversized serif-free display type, and imagery treated like framed architecture photography. Soft, premium, approachable.
**Probability:** 0.02

---

## CHOSEN: Editorial Monochrome

**Design Movement:** Contemporary editorial design — the visual language of premium print media (think Pentagram case-study pages, high-end architecture magazines) translated to the web. Strong typographic hierarchy, generous whitespace, dark/light section alternation, one disciplined accent color.

**Core Principles:**
1. **One accent per viewport** — the coral red (#E63946) appears surgically: the logo square, the availability dot, a single underline or word. Never washes or gradients of red.
2. **Type IS the design** — oversized display headlines (clamp 3rem–7rem) do the visual heavy lifting; imagery supports, chrome disappears.
3. **Dark/light rhythm** — near-black (#141414) and warm white (#FAFAF8) sections alternate to create pacing as you scroll, like magazine spreads.
4. **Show the work large** — case study imagery is displayed full-bleed or near-full-width, never as thumbnails.

**Color Philosophy:** Black and white communicate confidence and let client work (which is colorful) be the color. The red square from the logo is the brand's heartbeat — it marks moments of action (CTAs, availability, hover states). Emotionally: authoritative but warm, premium but personal.
- Ink: #141414 (near-black) / Paper: #FAFAF8 (warm white)
- Accent: #E63946 (coral red)
- Muted ink: #6B6B68, hairlines: rgba borders at 10–14%

**Layout Paradigm:** Asymmetric editorial columns. Section headers sit left-aligned with small index numbers ("01 — Featured Work") like magazine folios. Featured work alternates image left/right. Wide max-width (1400px) with off-center text blocks. No centered hero clichés — the hero name is left-anchored, oversized, and breaks the grid.

**Signature Elements:**
1. **The red square** — a small solid red square (from the logo) used as a bullet/marker motif throughout: before section labels, on hover states, as list markers.
2. **Index numbering** — "01", "02" folio numbers on sections and case studies, monospace-styled, small.
3. **Hairline rules** — 1px border dividers (10% opacity) structuring sections like print rules.

**Interaction Philosophy:** Interactions confirm quietly. Hover states shift the red accent in (underlines slide, squares appear, images scale 1.02). Links use animated underlines. Nothing bounces; everything eases. The availability dot pulses gently — the one "alive" element.

**Animation:** Scroll-triggered reveals: elements fade up 24px with 600ms cubic-bezier(0.23,1,0.32,1), staggered 60–90ms. Hero text reveals on load with a slight upward mask. Images scale from 1.04→1.0 on reveal. Page transitions are instant (static site speed = quality signal). Respect prefers-reduced-motion.

**Typography System:**
- Display: "Archivo" (Google Fonts) — variable weight, used at 700–800 for headlines, tight tracking (-0.03em), tight leading (0.95–1.05).
- Body: "Inter" at 400/500 for paragraphs, 1.6 leading. (Prompt explicitly suggests Inter for body — acceptable since display work is Archivo.)
- Mono accents: "Space Grotesk" or system mono for index numbers, tags, meta strips — uppercase, letterspaced +0.08em, 12–13px.
- Scale: hero clamp(3.5rem, 9vw, 7.5rem); section titles clamp(2rem, 4.5vw, 3.5rem); case study titles clamp(2.25rem, 5vw, 4rem).

**Brand Essence:** A senior design partner who makes real estate, hospitality, and fintech websites that convert — for leaders who want best-in-class, without agency overhead. Personality: confident, precise, personal.

**Brand Voice:** Short declarative sentences. Outcomes first, craft second. No UX jargon.
- Example: "Better websites. Better leads. Better outcomes."
- Example: "One senior partner from strategy through launch. No agency layers."

**Wordmark & Logo:** The provided geometric "N" mark (black strokes + red square). In the header: the N mark at ~32px + "Danny Namnum" in Archivo 600. On dark sections the N strokes invert to white (SVG currentColor treatment or white variant).

**Signature Brand Color:** #E63946 — the coral red square. It appears only where action or life exists: availability, CTAs, hovers, the logo.

## Style Decisions

- Red accent rule: #E63946 appears as the logo square, one action marker, or one key outcome per viewport; no generic red icons or decorative red repeats.
- Case-study rule: every project detail page includes multiple large work visuals after the hero, treated as editorial plates rather than thumbnails or small mockup cards.
- Copy voice rule: case-study headings are short, declarative, and outcome-first — "30% more leads from a clearer buying path" over "high-impact digital experience."
- Outcomes and list sections use letter/number folio markers and display type, not outline icon cards.
