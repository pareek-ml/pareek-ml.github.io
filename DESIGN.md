---
version: alpha
name: ypareek
description: "ypareek.ch is the portfolio of an AI engineer aiming at consulting and forward-deployed roles. A warm off-white base carries a few large bands of Aston Martin green, finished with a metallic sheen like car paint, with cream type on top. Mustard is the single warm accent. Every page closes with a multi-stop gradient stripe (deep green → Aston green → racing teal → mustard → cream) above a cream footer. Serif displays, Inter for everything else, 8px buttons and 12px cards, and two scroll moments that set the site apart: the work deck and the experience stack."

colors:
  # Aston Martin green (bands, primary actions)
  primary: "#00563F"          # Aston Martin green
  primary-deep: "#003D2C"     # hover, shadow side of the sheen, stripe start
  primary-light: "#00634A"    # mid-point of the sheen
  teal: "#037A68"             # Aston Martin racing teal: highlight side of the sheen, stripe
  on-primary: "#F7F1E3"       # cream text on green (7.8:1)
  on-primary-muted: "rgba(247, 241, 227, 0.88)"  # 0.88 keeps small text at 4.5:1 near the teal corner of the sheen
  primary-line: "rgba(247, 241, 227, 0.22)"
  # Warm accents
  mustard: "#D9B44A"          # card rules, hero query point, button hover on green, stripe
  mustard-light: "#EFD88F"    # stripe
  kicker: "#8A6A12"           # mustard-deep: section labels and step numbers on the base (4.7:1)
  oxblood: "#8B2323"          # charts only
  # Base and surfaces (light only)
  base: "#FAF6EC"             # off-white page
  cream: "#F3ECDA"            # footer, badges, exhibit frames, callouts
  beige: "#E6D9B8"            # borders on cream
  hairline: "#E6DCC4"         # dividers and card borders on the base
  # Text
  ink: "#1A1F1B"              # 15.5:1 on base
  muted: "#5A615B"            # 5.9:1 on base

typography:
  hero-display:
    fontFamily: Newsreader
    fontSize: 72px
    fontWeight: 350
    lineHeight: 1.04
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: 350
    lineHeight: 1.08
    letterSpacing: -0.015em
  action-title:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.01em
  heading-2:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.2
  heading-3:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.2
  stat-display:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: 350
    lineHeight: 1.0
    letterSpacing: -0.015em
  lede:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  badge:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
  kicker:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.08em
  button-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.3

rounded:
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 120px
  section-mobile: 72px
  gutter: 40px
  gutter-mobile: 20px

elevation:
  card: "0 4px 12px rgba(26, 31, 27, 0.05)"
  lift: "0 18px 40px -12px rgba(0, 61, 44, 0.28)"

components:
  sheen:
    background: "radial-gradient(120% 140% at 85% -20%, rgba(255,255,255,0.16), transparent 55%), linear-gradient(135deg, {colors.teal} 0%, {colors.primary-light} 30%, {colors.primary} 55%, {colors.primary-deep} 100%)"
  band-section:
    background: "{components.sheen}"
    textColor: "{colors.on-primary}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-on-band:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-on-band-hover:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.ink}"
  section-kicker:
    textColor: "{colors.kicker}"
    typography: "{typography.kicker}"
  badge:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.beige}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-on-band:
    backgroundColor: "rgba(247, 241, 227, 0.14)"
    textColor: "{colors.on-primary}"
    border: "1px solid {colors.primary-line}"
  work-card:
    backgroundColor: "{colors.base}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    shadow: "{elevation.card}"
  work-card-band:
    background: "{components.sheen}"
    textColor: "{colors.on-primary}"
    typography: "{typography.stat-display}"
    border: "3px solid {colors.mustard} (bottom)"
  stack-card:
    backgroundColor: "{colors.base}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    shadow: "{elevation.lift}"
  stripe:
    height: 14px
    background: "linear-gradient(90deg, {colors.primary-deep} 0%, {colors.primary} 22%, {colors.teal} 44%, {colors.mustard} 68%, {colors.mustard-light} 84%, {colors.cream} 100%)"
  stripe-thin:
    height: 6px
  footer-region:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "40px {spacing.gutter}"
---

## Overview

ypareek.ch should read like a well-made report from a firm you'd trust with a hard problem, with one unmistakable finish: Aston Martin green, polished like paint on a car. Visitors are partners at consulting firms, hiring managers for forward-deployed engineering teams, and technical leads. They skim, so the design makes the argument (outcome, proof, method) effortless to follow.

**Key characteristics**
- A warm off-white base ({colors.base}); there is no dark mode
- Aston Martin green ({colors.primary}) in a few large bands with a metallic sheen running from racing teal ({colors.teal}) to deep green ({colors.primary-deep})
- Cream type ({colors.on-primary}) on green; mustard ({colors.mustard}) as the single warm accent
- The gradient stripe and cream footer close every page
- Newsreader serif for claims and numbers, Inter for everything else
- 8px buttons, 12px cards, pill badges for dates
- Two signature scroll moments: the work deck and the experience stack

## Colors

### Distribution
| Role | Share | Colours |
|---|---|---|
| Base | ~60% | {colors.base}, with {colors.cream} for the footer and badges |
| Green bands | ~25% | {colors.primary} with the sheen |
| Type | ~12% | {colors.ink} on base, {colors.on-primary} on green |
| Accents | ~3% | {colors.mustard}, {colors.kicker}, the stripe |

### Green
- **Aston Martin green** ({colors.primary}): the hero, case study headers, the result panel on each work card, the header of each experience card, and the contact section. On the base it's also the primary button, links and active states.
- **The sheen** gives the green its shine: a diagonal gradient from racing teal ({colors.teal}) through {colors.primary-light} and {colors.primary} to {colors.primary-deep}, with a soft white highlight in the top-right corner. Every green surface uses it; flat green only appears on buttons and links.
- **Racing teal** ({colors.teal}) appears only inside the sheen and the stripe, never as a fill of its own.

### Accents
- **Mustard** ({colors.mustard}): the 3px rule under each work card's result, the hero's query point and links, button hover on green, and bullet markers. It is never text on the base.
- **Kicker** ({colors.kicker}): section labels and step numbers on the base.
- **Oxblood** ({colors.oxblood}): charts only (the "before" series).

### Contrast (checked)
| Pair | Ratio |
|---|---|
| Ink on base | 15.5:1 |
| Green on base | 8.1:1 |
| Cream on Aston green | 7.8:1 |
| Green on cream | 7.4:1 |
| Muted on base | 5.9:1 |
| Kicker on base | 4.7:1 |
| Cream on racing teal (lightest point of the sheen) | 4.7:1 |
| Muted cream (88%) near the teal corner, e.g. the hero eyebrow | 4.6:1 |
| Mustard on green | 4.4:1 (large numbers and rules only) |

## Typography

**Newsreader** (open licence, self-hosted) for displays, action titles, numbers and card titles. **Inter** for body, UI, labels, badges and kickers.

| Token | Size | Weight | Family | Use |
|---|---|---|---|---|
| `hero-display` | 72px | 350 | Newsreader | Homepage headline |
| `display-lg` | 56px | 350 | Newsreader | Case study titles, "Let's talk." |
| `action-title` | 38px | 400 | Newsreader | Section titles (full sentences) |
| `stat-display` | 56px | 350 | Newsreader | Proof numbers, card results |
| `heading-3` | 26px | 400 | Newsreader | Card titles, employers |
| `lede` | 19px | 400 | Inter | Hero subhead, case summary |
| `body-md` | 17px | 400 | Inter | Body |
| `caption` | 14px | 400 | Inter | Labels, metric captions |
| `badge` | 13px | 600 | Inter | Date and tag chips |
| `kicker` | 12px | 600 | Inter, uppercase, +0.08em | Section labels |

The serif makes the point, the sans explains it. Headings are sentences, uppercase is reserved for kickers, and body copy caps at 68 characters per line.

## Layout

- **Container:** 1120px plus 40px gutters (20px on mobile), 12-column grid.
- **Section rhythm:** 120px (72px on mobile), hairline-separated on the base.
- **Homepage:** hero (green) → thin stripe → proof strip → work deck → how I work → experience stack → what I bring → contact (green) → stripe → cream footer.
- **Case study:** header (green) → thin stripe → metric row → body with sidebar → stripe → cream footer.

## Elevation

| Level | Value | Use |
|---|---|---|
| Card | `0 4px 12px rgba(26,31,27,0.05)` | Work cards at rest |
| Lift | `0 18px 40px -12px rgba(0,61,44,0.28)` | Cards while stacked in the deck, experience cards in the stack |

## Components

### Buttons
`button-primary` (green, 8px radius) on the base; `button-on-band` (cream fill, green text, mustard on hover) on green. One primary button per view.

### Badge
Pill chip in cream with a beige border for dates and tags; translucent cream on green. The only rounded-full element besides bullets.

### Work card
12px radius, hairline border, card shadow. A green result panel with the sheen holds the first metric in `stat-display` and its label, closed by a 3px mustard rule. Below it: sector, title, summary, second metric, arrow. Cards in a row share their row's tracks (CSS subgrid), so result panels and mustard rules line up even when one label runs longer.

### Proof strip
Three outcomes under the hero that show range beyond the current role, without repeating the work cards below. Each figure names its source in a line under it, like the source note under a consulting exhibit: "Case study: Customs-code recommender" (from the case study's `short` field, linked), or a note such as "Perimattic, 2023–2024", linked when it has an `href` and in {colors.muted} when it doesn't.

### Work deck (homepage, desktop)
The "Selected work" section pins in the viewport while you scroll through about 1.1 screens; the cards are fully dealt by 84% of that, so the row rests briefly before the page moves on. At first the four cards sit stacked in the centre: slightly fanned, scaled to 96%, with the lift shadow and the first card on top. As you scroll, they deal out into a row of four and settle flat. In deck mode the cards show only the result panel, sector, title and arrow; the full card returns on smaller screens. Deck titles use `text-wrap: pretty` and should fit in four lines, so keep card titles under about 65 characters.
- Runs only when the window is at least 1100 × 720px and reduced motion is off. Otherwise it's a normal 2-column grid (1 column on mobile).

### Experience stack
Each role is a card: a green header with the headline number (`stat-display`), its label and a date badge, then a body with employer, role, a one-line impact and a "What I did" toggle. One card per employer: a promotion is one card ("Intern → AI Engineer"), not two.

Like the work deck, the section pins while you scroll, so the page appears to stop. The first card sits under the section title; each following card slides up from below and lands 16px lower than the one before it, so the earlier cards' top edges show above it. Nothing shrinks or slides behind. The page moves on only after the last card has landed, with a short pause before the first card moves and after the last one lands.
- All cards share one grid cell, so they are the same size and line up exactly. In the stack, "What I did" opens inside the card and scrolls there, so the stack never changes size.
- Runs when the window is at least 760 × 640px, the heading and stack fit the pinned area, and reduced motion is off. Otherwise the cards are a plain list.

### What I bring
Three numbered columns (01–03, in {colors.kicker}): a Newsreader title over a 2px green rule, a one-sentence summary of what the client gets in Newsreader 22px, then three plain statements with mustard dashes. No tool names in the columns; they go in the toolkit below.

The **toolkit** is one cream panel ({colors.cream}, 1px {colors.beige} border, 12px radius) with an uppercase "Toolkit" kicker and a row per area: the area name on the left (180px), its tools as off-white pills on the right. Pills never wrap inside, so names like "SQL Server" stay whole. On phones the columns stack and each toolkit row puts its pills under the area name. Edit the tools in `src/content/toolkit.yaml` or under Toolkit in `/admin`.

### Stripe
A full-width gradient band: {colors.primary-deep} → {colors.primary} → {colors.teal} → {colors.mustard} → {colors.mustard-light} → {colors.cream}. 14px above the footer on every page; 6px under the hero and case study headers. Never used as a divider elsewhere.

### Footer
Cream ({colors.cream}) band under the stripe: copyright, location and "Last updated <month year>" on the left, social links on the right, all in {colors.muted}. The date is the latest commit's, read at build time.

### Copy email
In the contact section, right after the email address: a 36px rounded-square icon button (8px radius, translucent cream border, 20px copy icon in cream), smaller than the address beside it. Clicking it copies the address; the icon turns into a mustard check mark for two seconds and screen readers hear "Copied". It only appears where the browser can copy.

## Imagery
No stock photography. The hero visual is the nearest-neighbour canvas: cream dots on the green sheen, with mustard links and a mustard query point.

## Motion
- 150–250 ms ease for hovers and underlines; a single 8px fade-up as sections enter.
- The deck and the stack are tied to scroll position, not time, so they never play on their own.
- Everything respects `prefers-reduced-motion`: no deck animation, the experience cards as a plain list, no fades, a static hero.

## Do's and don'ts

### Do
- Use green as large polished bands, always with the sheen.
- End every page with the stripe and cream footer.
- Lead every card with its number.
- Keep the base off-white everywhere.

### Don't
- Don't use flat green for large areas; the sheen is what makes it Aston Martin rather than generic.
- Don't use mustard as text on the base, or teal as a standalone fill.
- Don't add a dark mode, pill buttons, or heavy shadows on resting content.
- Don't put two green bands next to each other except contact and footer, which the stripe separates.

## Responsive behaviour
| Width | Changes |
|---|---|
| < 760px | Single column, 20px gutters, hero 40px with no canvas (it would double the hero's height), deck off, experience as a plain list |
| 760–1099px | Work grid 2-up, deck off |
| ≥ 760px and ≥ 640px tall | Experience stack on |
| ≥ 1100px and ≥ 720px tall | Deck on |

## Known gaps
- Case study exhibit images aren't drawn yet.
- The skills matrix and the case study section bar are planned but not built.
