# Website-Clone Specification(Visual shell cloned **pixel-for-pixel** from the reference screenshots; **all copy replaced** for a CS/Econ student portfolio)

---

##0. Global Design Language (Cloned from Reference)

###0.1 Brand & Art-Direction Overview• Ultra-minimal, white-canvas aesthetic with _one_ hero statement in gigantic, ultra-bold type stretching full viewport width.• High-contrast black-on-white typography, balanced by soft-grey UI chrome and generous white-space.• Carefully-spaced grid; every element breathes.• Imagery sits in hard-edged, perfectly-rectangular containers with no shadows; feels editorial.• Subtle micro-interactions (fade-ins, gentle80ms scale-up on hover; pill-nav active state flips to solid black).

###0.2 Color Palette (exact clones)| Token | HEX | Usage | Notes |
|------------------|------------|-------------------------------------|-------------------------------------|
| Primary Text | #000000 | All headings, body copy, borders | Pure black,100% opacity |
| Canvas / BG | #FFFFFF | Global page background | Absolute white |
| UI-Grey | #E6E6E6 | Bottom nav un-active pills, thin borders | Matches reference light-grey |
| Accent-Red* | #FF1F1F | (Only if reference shows red tiles) | Keep % usage identical (≈1 tile) |

\* Include accent-red ONLY for any thumbnail that mimics the bright reference tile; otherwise remain unused on the home page.

###0.3 Typography Scale (clone)| Element (ref) | Font | Weight | Size (px) | Line-height | Notes |
|--------------------|--------------------|--------|-----------|-------------|----------------------------------------|
| Gigantic Name | `Inter`, `Satoshi` or similar neo-grotesque |900 |14vw |0.85 | All caps, tight tracking |
| H2 / Section Head | Same font family |700 |48 |1.1 | “ABOUT”, etc. |
| Body Small | Same font family |400 |16 |1.55 | Paragraphs & nav labels |
| Button Label | Same font family |500 |14 |1.3 | Caps-case, letter-spacing .5px |

###0.4 Spacing & Layout Grid (clone)•12-column fluid grid; outer gutters6% vw on XL, collapse to24px on ≤768px.• Consistent64px vertical rhythm between major blocks.• Bottom fixed nav bar always88px above bottom edge on desktop,48px on mobile.• Left hero media container exactly46% viewport width; right copy column28%; remaining is white space.

###0.5 Visual Effects & Treatments• All images: zero border-radius, zero drop-shadow.• Hover on images: fade from100% ->90% opacity over120ms ease-in-out.• CTA button: outline1px black, transparent fill,4px radius; hover swaps to black fill / white text over120ms.• Fixed bottom nav: inactive pills have #E6E6E6 fill / black text; active pill has black fill / white text.

###0.6 Component Styles1. Gigantic headline text block (overflow visible).2. Media carousel (two-image cross-fade, vertical middle).3. Small body copy column with two inline buttons.4. One-line mission statement spanning full content width under carousel.5. Fixed pill-shaped bottom navigation bar.

---

##1. Project SummaryA clean, modern personal portfolio for a Northeastern University CS & Economics student (backend focus).Home page acts as an attention-grabber: name in bold, quick snapshot, CTAs to Projects & About, professional headshot carousel, and concise mission statement.

---

##2. Main Page Overview (`/`)The reference home structure is reused verbatim:1. Top giant name banner (replaced with student’s name).2. Twin-panel hero: left = rotating visual (headshot & themed images); right = short intro + dual CTAs.3. One-sentence mission statement below panels.4. Fixed bottom nav (“Home” active, “Projects”, “About”, “Contact”).All copy, labels, alt text, and imagery are swapped to reflect the new persona, **without** altering any visual metric.

---

##3. Section-by-Section Specifications###3.1 Hero Name Banner1. Visual Clone • Same full-width, all-caps, ultra-bold typography. • Vertical offset identical (top margin48px).2. Content Replacement • Original: “CLEMENTGRELLIER” • NEW: “JONATHAN LIN” (replace with actual student name). • Preserve single line, no wrap; ensure tracking identical so letters kiss viewport edges just like reference.

3. Layout & Structure • Text element spans100vw, z-index1 above carousel.4. Components • Single `<h1>` element.5. Assets • None.6. Interactions • None (static).

---

###3.2 Dual-Image Hero Carousel1. Visual Clone • Rectangular frame46% viewport width,3:2 aspect. • Subtle cross-fade every4s.2. Content Replacement • Original subject: neutral interior shots labeled “Travel”. • NEW: two images that feel equally minimal and airy:1. Image A – professional headshot in soft natural light.2. Image B – macro shot of server racks / cloud iconography with bokeh. • Overlay label font identical; word cycles between “Headshot” & “Infrastructure”.3. Layout & Structure • Left-aligned to same x-coordinate as banner start (grid column1).4. Components • Two `<img>` slides, overlay `<span>` centered both axes.5. Asset Replacement Prompts • Headshot prompt: “Professional portrait of a college student in business-casual attire, soft daylight, neutral background, sharp focus – studio vibe.” • Infrastructure prompt: “Artistic photograph of modern cloud data center server racks, subtle blue lighting, shallow depth of field, minimal style.” • Both delivered at1920×1280px, no compression artifacts.

6. Interactions • Hover pauses slideshow (exact mimic). • Cursor to pointer on overlay text.

---

###3.3 Intro Copy & CTA Column1. Visual Clone •28% viewport width column, vertically center-aligned vs carousel.2. Content Replacement • Title not present (keep same). • Body text (≤130 chars;5 lines identical to ref): “I’m a CS & Economics student at Northeastern focusing on backend engineering, cloud automation, and IaC. I love crafting scalable, reliable systems.” • Button1 label: “View my projects” (primary CTA). • Button2 label: “Quick bio” (secondary text link).3. Layout • Same24px gap between buttons.4. Components • Outline pill button + plain text link.5. Interactions • Primary button hover: invert colors. • Secondary link hover: underline appear over120ms.

---

###3.4 Mission Statement Row1. Visual Clone • Black body weight text, full width, located exactly48px under carousel bottom.2. Content Replacement • Original: “Bringing designs to life with pixel-perfect precision…” • NEW (same character length): “Building performant cloud systems with clean code and thoughtful automation.”3. Layout • Left-aligned to starting gutter, same font & size as reference.

---

###3.5 Fixed Bottom Navigation1. Visual Clone • Identical pill group centered horizontally at bottom,3-item replaced with4-item for new IA. • Pills72px wide,32px high,20px gap.2. Content Replacement | Reference Label | NEW Label | Route |
 |-----------------|-----------|-------|
 | Home | Home | `/` |
 | Work | Projects | `/projects` |
 | About | About | `/about` |
 | — | Contact | `/contact` |

3. Interactions • Active pill = black fill / white text. • Hover on inactive pill = grey border darkens to #BFBFBF.

---

## Clone Fidelity Checklist✓ Gigantic headline style & placement identical✓ Carousel container, overlay label, fade timing cloned✓ All copy swapped to student-specific wording✓ Component spacing, grid, and typography scales unchanged✓ Button & nav pill styles1-to-1 with reference✓ Asset prompts guarantee matching photographic mood & aspect✓ Interactions/hover behaviors mirrored exactly