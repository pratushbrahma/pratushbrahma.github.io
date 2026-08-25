---
name: Pratush Brahma — Behavioural Ecologist
description: A field-notebook / naturalist's-monograph aesthetic for an academic portfolio — aged parchment, forest green, and field tan under EB Garamond and Inter.
colors:
  parchment: "#f5f1eb"
  parchment-deep: "#ede8df"
  surface: "#faf7f0"
  ink: "#1c1c1a"
  ink-dim: "#3a3934"
  ink-muted: "#706a5c"
  hairline: "rgba(28, 28, 26, 0.14)"
  forest-green: "#3b5240"
  forest-green-soft: "#4c6b52"
  field-tan: "#8c7355"
  warm-slate: "#55636b"
  on-accent: "#f5f1eb"
  canopy-900: "#10231a"
  canopy-800: "#16291c"
  canopy-700: "#1d3826"
  canopy-600: "#294e35"
  canopy-400: "#5a7f66"
  species-jewel: "#3f7a78"
  species-agama: "#a86a3d"
  species-spider: "#a68a3a"
  species-termite: "#9c6b3f"
  species-frog: "#6b8a4a"
  species-mouse: "#a99a80"
  ink-stroke: "#2c2c28"
  illus-terracotta: "#b5654a"
  illus-moss: "#4a6741"
  illus-slate: "#5c7a8a"
  illus-ochre: "#c4932a"
  hero-ink: "#f7f3e8"
  hero-accent: "#e3d7bf"
  hero-accent-line: "#c2a883"
  hero-accent-warm: "#c9ad85"
typography:
  h1-section:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.4rem, 6vw, 4.4rem)"
    fontWeight: 500
    letterSpacing: "-0.02em"
  display:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  hero-display:
    fontFamily: "EB Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(3rem, 11vw, 9rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.75
  lead:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)"
    fontWeight: 300
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  sm: "10px"
  md: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  section: "clamp(4.5rem, 11vw, 9rem)"
  card-padding: "1.5rem"
  maxw: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.forest-green-soft}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-padding}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.95rem"
  chip-active:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.on-accent}"
  tag:
    backgroundColor: "rgba(28, 28, 26, 0.05)"
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.65rem"
---

# Design System: Pratush Brahma — Behavioural Ecologist

## Overview

**Creative North Star: "The Field Notebook"**

The site reads as a working field notebook laid open on a desk: warm parchment pages, near-black ink, a forest-green marginal annotation, a faint paw-track watermark pressed into the paper. It belongs to natural history and scholarly publishing, not to software — no dark-mode dashboards, no purple-to-blue gradients, no glassy SaaS chrome, no card-in-card nesting. Where the subject turns dark (the hero, the illustrated habitat scene), it goes fully immersive canopy-green rather than tech-black, like the plates in a naturalist's monograph rather than a hero video loop.

The voice is formal but human, precise but unhurried — the site's own motion timing is tuned to "turning a page," never a snap. Type carries the formality: an italic EB Garamond kicker functions like a field-journal marginal note ahead of every section title. Cards and surfaces sit flat and paper-like at rest, then lift gently on interaction, like picking a card up off a desk rather than a UI element animating.

This is a credibility instrument first — the primary readers are postdoc search committees — so nothing here may read as decorative for its own sake. Every warm texture and hairline border earns its place by making dense academic content (publication lists, project cards, CVs) feel considered rather than templated.

**Key Characteristics:**
- Warm parchment ground with near-black ink, never a stark white-on-black tech palette
- Forest green as the single confident accent; field tan as its quieter secondary
- EB Garamond for display, Inter for body and small tracked labels
- Flat-at-rest surfaces with a soft, paper-lift hover, never glassy or neon
- Immersive canopy-green (not black) for full-bleed dark moments
- Pill-shaped buttons, chips, and tags throughout — no sharp-cornered UI chrome

## Colors

Warm, muted, and paper-toned. Nothing in the working palette reads as saturated "tech bright" — even the accent green is a deep, dulled forest tone.

### Primary
- **Forest Green** (`#3b5240`): The site's one confident accent — primary buttons, links, active states, the CV icon fill, section kickers, publication years. Lightens to **Forest Green Soft** (`#4c6b52`) on hover.

### Secondary
- **Field Tan** (`#8c7355`): The warm secondary accent — note dates, the "what keeps me going" pull-quote rule and label, secondary numerals. Reads as the accent's quieter, more archival sibling.

### Tertiary
- **Canopy Green Ramp** (`#10231a` → `#5a7f66`, five steps): Reserved for full-bleed dark, immersive moments — the hero background and the illustrated habitat scene — never for body UI. This is where the site permits itself real depth and drama; everywhere else stays paper-flat.
- **Species Swatch Palette** (jewel `#3f7a78`, agama `#a86a3d`, spider `#a68a3a`, termite `#9c6b3f`, frog `#6b8a4a`, mouse `#a99a80`): A small naturalist's-plate accent set used only behind research-card and gallery-plate photo swatches, one hue per study species. Muted deliberately — nothing here should read as a bright infographic color.
- **Field Systems Illustration Palette** (ink-stroke `#2c2c28`, terracotta `#b5654a`, moss `#4a6741`, slate `#5c7a8a`, ochre `#c4932a`): The hand-drawn habitat-map's own accent set — every zone's sketchy line art (agamas, jewelfish, spiders, anuran phylogeny, the mouse/angiogenesis vessel motif) draws from these five, never from the species swatch or canopy palettes. Reads as a naturalist atlas plate, not an infographic.

### Neutral
- **Parchment** (`#f5f1eb`): The base page background — warm, not white.
- **Parchment Deep** (`#ede8df`): Hover surfaces and slightly recessed regions.
- **Surface** (`#faf7f0`): Card and panel backgrounds — a "clean sheet" laid on the parchment.
- **Ink** (`#1c1c1a`): Primary text — warm near-black, never pure `#000`.
- **Ink Dim** (`#3a3934`) / **Ink Muted** (`#706a5c`): Secondary and tertiary text.
- **Hairline** (`rgba(28,28,26,0.14)`): The only border treatment in the system — a faint ink-tinted line, never a hard gray stroke.

### Named Rules
**The One Accent Rule.** Forest green is the only saturated, confident color allowed in body UI. Field tan is a secondary, not a second accent competing for attention. The canopy ramp and species swatches are contained to their two specific jobs (immersive dark scenes; photo-swatch backing) and never leak into buttons, links, or text color.

**The No-Tech-Palette Rule.** No purple, no blue-to-purple gradient, no near-black-with-neon-accent dark mode, no glass or frosted chrome. If a color choice would look at home in a SaaS dashboard, it does not belong here.

## Typography

**Display Font:** EB Garamond (with Georgia, Times New Roman, serif fallback)
**Body Font:** Inter (with system-ui, -apple-system, sans-serif fallback)
**Label/Mono Font:** Inter, used at small sizes with wide tracking and uppercase case — a clean sans standing in for a mono typewriter label, never an actual monospace face.

**Character:** A classical book serif carrying all display weight, paired with a quiet, well-mannered grotesque for everything functional. The pairing reads as "scholarly monograph," never "editorial magazine" or "startup landing page" — EB Garamond's italic is used constantly as a voice of its own (kickers, captions, pull-quote labels), not just for emphasis.

### Hierarchy
- **Hero Display** (400, `clamp(3rem, 11vw, 9rem)`, 0.94 line-height): The name/title treatment on the home hero only — the site's single largest, most dramatic type moment, set in italic for the accent line.
- **Display** (500, `clamp(1.9rem, 4.5vw, 3.4rem)`, 1.08 line-height): Section titles (`h2`) throughout inner pages.
- **Title** (500, `clamp(1.15rem, 2vw, 1.45rem)`, 1.08 line-height): Card and note titles (`h3`).
- **Body** (400, 1.05rem, 1.75 line-height): All running prose; comfortably wide leading for long-form reading.
- **Lead** (300, `clamp(1.05rem, 1.6vw, 1.3rem)`, 1.7 line-height): Hero taglines and section intro paragraphs — lighter weight than body, for a quieter opening statement.
- **Label** (500, 0.72–0.85rem, 0.1em+ tracking, uppercase): Tags, chips, nav CTAs, filter labels, dates — the system's only uppercase, tracked-out text.

### Named Rules
**The Italic-Kicker Rule.** Every section opens with a small italic EB Garamond kicker line before its title — the visual signature of a field-journal marginal note. This is the system's recurring typographic tell; do not replace it with an uppercase label in new sections.

## Layout

A single centered column, `max-width: 1180px`, with fluid gutters (`clamp(1.25rem, 5vw, 4rem)`). Section vertical rhythm is a deliberate two-step scale, not per-section guesswork: `--space-section` (`clamp(4.5rem, 11vw, 9rem)`) for full-weight sections like About and Research; `--space-section-tight` (`clamp(3.5rem, 8vw, 6.5rem)`) for sections that already carry their own internal spacing, currently the homepage's Field Systems and Explore sections. Sections are gently banded by alternating a near-transparent ink wash (`rgba(28,28,26,0.05)`) against the parchment, rather than hard section dividers. Card grids use `auto-fill`/`auto-fit` with a `290px` minimum, so density adapts without breakpoints doing the work alone. The About page's two-column layout (photo sticky at `header-height + 2rem`, prose alongside) collapses to a single stacked column under 900px; the primary nav collapses to a slide-in panel under 980px.

## Elevation & Depth

Flat by default, tactile paper on interaction. Cards, notes, and the CV panel sit with only a hairline border at rest — no ambient shadow. On hover, they lift 4–6px with a soft, wide, low-opacity shadow (e.g. `0 22px 44px -28px rgba(28,28,26,0.3)`) tinted from ink rather than pure black, and the border warms to the accent color. This reads as physically picking a card up off the desk, not a UI element gaining a drop shadow. Buttons follow the same logic at smaller scale.

### Shadow Vocabulary
- **card-hover** (`0 22px 44px -28px rgba(28, 28, 26, 0.3)`): Research cards, field notes on hover.
- **button-hover** (`0 16px 30px -16px rgba(59, 82, 64, 0.55)`): Primary button on hover — tinted forest green rather than neutral.
- **photo-frame** (`0 24px 50px -30px rgba(28, 28, 26, 0.35)`): The About-page portrait frame, at rest.

### Named Rules
**The Flat-Until-Touched Rule.** Nothing casts a shadow at rest. Elevation only appears as a response to hover or focus, and it is always ink- or accent-tinted, never a neutral gray drop shadow.

## Shapes

Two families of geometry, used deliberately: generous rounded rectangles (`14px` cards/notes, `22px` the larger About-photo and CV panels) for content containers, and full pill shapes (`999px`) for anything actionable — buttons, chips, tags, the nav CTA. Nothing in the system uses a sharp 0px corner or a small 4–6px "SaaS-default" radius; the two live sizes are intentionally generous. Borders are always the single hairline token, never a heavier structural stroke.

## Components

Buttons, cards, chips/tags, and notes all share one grammar: hairline border at rest, pill or generous-radius corners, forest-green accent on interaction, and a soft page-lift on hover rather than a snap.

### Buttons
- **Shape:** Full pill (`border-radius: 999px`).
- **Primary:** Forest-green fill, parchment text, uppercase tracked Inter label, 600 weight. Hovers to Forest Green Soft with a lift and green-tinted shadow.
- **Ghost:** Transparent fill, hairline border, ink text. Hovers to an accent-green border and text color with the same lift.

### Chips (filters)
- **Style:** Transparent background, 1.5px hairline border, dim-ink text, uppercase Inter label.
- **State:** Active chips fill solid forest-green with parchment text and bump to 700 weight — the only chip state with a filled background.

### Cards / Containers
- **Corner Style:** 14px radius (research cards, field notes); 22px for larger panels (About photo, CV card).
- **Background:** Surface (`#faf7f0`), a "clean sheet" against the parchment page.
- **Shadow Strategy:** See Elevation & Depth — flat at rest, soft ink-tinted lift on hover.
- **Border:** 1px hairline, warms to accent-green on hover.
- **Internal Padding:** 1.5rem (research cards), 1.8rem (field notes), 2–2.5rem (CV/contact panels).

### Tags
- **Style:** Small pill, near-transparent ink wash background, hairline border, uppercase tracked label. Species-name tags render in forest green and bold; phase tags (Doctoral, etc.) render in field tan with a tinted background.

### Inputs / Fields
- **Style:** Surface background, 1.5px hairline border, 10px radius, generous padding.
- **Focus:** Border shifts to forest green; no glow or ring.

### Navigation
- **Style:** Fixed header, transparent over the dark hero (light text) that crossfades to a blurred parchment bar with ink text once scrolled. Active/hover links get an animated underline that scales in from the left in the accent color. Mobile collapses to a slide-in parchment panel from the right.

## Do's and Don'ts

### Do:
- **Do** keep forest green as the only saturated accent color in body UI; let field tan and the canopy/species ramps stay confined to their specific, established jobs.
- **Do** open every section with an italic EB Garamond kicker line ahead of the title — it is the system's recurring signature.
- **Do** keep cards and buttons flat at rest, with elevation appearing only as a soft, ink- or accent-tinted lift on hover or focus.
- **Do** use full pill shapes for anything clickable (buttons, chips, tags, nav CTA) and generous 14–22px radii for content containers — never a sharp or small-radius corner.
- **Do** reserve full-bleed saturated canopy-green darkness for genuinely immersive moments (hero, habitat scene), not routine UI backgrounds.

### Don't:
- **Don't** introduce tech/SaaS visual language: no purple-to-blue gradients, no glassmorphism, no neon-on-black dark mode, no nested card-in-card layouts.
- **Don't** use a hard neutral-gray drop shadow; every shadow in this system is ink- or accent-tinted and only appears on interaction.
- **Don't** swap EB Garamond or Inter for a system default (Arial, generic sans) or introduce a third display face — the pairing is a fixed brand commitment.
- **Don't** let the species swatch palette (jewel, agama, spider, termite, frog, mouse) drift into use as general-purpose UI accent colors; it is reserved for photo-swatch backing only.
