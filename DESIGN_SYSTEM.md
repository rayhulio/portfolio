# Portfolio Design System

Single source of truth for the site's visual language. Tokens live in
[`app/globals.css`](app/globals.css) (`@theme` / `:root`) and
[`app/design.ts`](app/design.ts); component styles in the `@layer components`
block of the same CSS file. **Never hard-code a color, radius, shadow or
duration that has a token below.**

## 0. The scaling model (read first)

Everything is authored in **Figma px** on a 2176px-wide artboard and converted
with `px(n)` → `calc(n * var(--u))`, where `--u` is one Figma px in CSS px:

```css
--u: clamp(0.3px, 100vw / 2176, 0.62px);
```

| Viewport | `--u` | Behaviour |
|---|---|---|
| ≥ 3510px | 0.62 (cap) | original composition scale, centered |
| 653–3510px | `100vw / 2176` | whole composition scales proportionally |
| < 653px | 0.3 (floor) | body copy stays ≈ 17px; wide media shrinks via `max-width:100%`; dedicated mobile layouts |

Background line art (rings) keeps its original 0.62-scale size (`px0`) so it stays cropped by the viewport; only its position follows `--u`. The floral field is solved so its flower edge always sits behind the lower part of the hero glass panel (`floralCopyStyle`).

Home page (`.home-scale`, ≥ md) additionally bounds `--u` by `100svh / 1700` so
the first project cards always peek in under the hero — one uniform factor, so
proportions never change. Use `pxMin(n, minPx)` for text/tap targets that must
not shrink below a legible size.

## A. Typography

| Role | Family | Weight | Size (Figma px → CSS at 0.62) | Notes |
|---|---|---|---|---|
| Wordmark "01 RAHUL" | Satoshi (`font-body`) | 400 | 360 (223px) | leading 0.72 |
| Tagline | PP Neue Bit (`font-display`) | 700 | 118.6 (73px) | leading 0.95 (`leading-tagline`, all breakpoints), white, `--shadow-text` |
| Page title (H1) | PP Neue Bit | 700 | 130–140 | leading 1, black |
| Section heading (H2) | Satoshi | 700 | 64 | centered |
| Step title (H3) | Satoshi | 700 | 58 | |
| Body | Satoshi | 400 | 52–56 | leading 1.35–1.4, max-width 1500 |
| Caption / figure label | Satoshi | 400 | 44–48 | leading 1.2–1.35 |
| Nav pill | PP Neue Bit | 700 | 55 (min 17px) | uppercase, leading 1, echo ghost |
| Card title | PP Neue Bit | 700 | `min(10.6cqw, 160/len cqw)` | echo ghost |
| Card meta (year, client) | Satoshi | 400 | 3.6cqw | taupe |

Font files: `public/fonts/` (PP Neue Bit Bold; Satoshi Regular 400 + Bold 700),
loaded in [`app/fonts.ts`](app/fonts.ts). No monospace face is used. Special
treatment: **echo** — a blurred, 3px-offset duplicate behind pixel-face labels
(`.echo-ghost`).

### Case-study content hierarchy (all case studies)

Every case study body is organised as: **header → floral band → broad
`<Section>`s → `<SubSection>`s → supporting content.**

* **`<Section title>`** — a broad process stage (Overview, Research,
  Extracting Insights, Ideation, Prototyping, Brand Design, Recommendations).
  A parent container holding its sub-sections. Generic, process-level names.
* **`<SubSection title>`** — a descriptive, project-specific title that says what
  was done or found (e.g. "Analyzing Seven Upcycling Brands to See What They Do
  Right"). Supporting text, images and figures sit directly beneath it.
* **Spacing:** `--cs-gap-chapter` (260) between broad sections (largest);
  `--cs-gap-sub` (80) between sub-sections in one section (tight);
  `--cs-gap-tight` (44) heading → content inside a sub-section.
* Add new case-study content by nesting it in a `SubSection` — never as a bare
  heading.

**Key-word highlight:** wrap key phrases in `<mark className="highlight">` — bold on a 16% `--color-red` marker background.

### Case-study type scale (unified)

All case-study pages (Frolic, Google, Salt & Straw, CNTNDR, Self-Driving,
 use these `--cs-*` tokens — **Figma px × `--u` − 2px**, i.e.
case-study text is deliberately 2px smaller than the base scale at every
viewport. Never set a font size directly in a case-study page.

| Token | Figma px | Role |
|---|---|---|
| `--cs-title` | 130 | standalone page H1 (`<Title>`, PP Neue Bit) |
| `--cs-headline` | 100 | case-study opening headline (`<CaseHeader>`) |
| `--cs-section` | 70 (min 20px) | **broad section** heading (`<Section>`) — PP Neue Bit, the same face as the home tagline, slightly smaller |
| `--cs-subsection` | 76 (min 22px) | **sub-section** heading (`<SubSection>`) — Satoshi bold, slightly larger than the broad heading so specifics stand out |
| `--cs-heading` | 64 | legacy heading size (unused by pages) |
| `--cs-subheading` | 58 | step titles (`NumberedStep`) |
| `--cs-body` | 44 (min 14px) | body copy, intros, step text, header summary (`<Body>`) — deliberately well below headings so hierarchy reads clearly |
| `--cs-meta-label` / `--cs-meta` | 42 / 34 (min 14 / 12px); label→value gap 8 Figma px | header Team · Timeline · Role labels / values |
| `--cs-caption` | 39 (min 12.5px) | captions, figure labels, number badges, annotations |

**Line height:** `--cs-leading: normal` (the font's natural leading) for all
case-study body, caption, step and meta text — no fixed ratios.

**Case-study spacing tokens** (Figma px × `--u`; use these, never raw `px()` gaps,
in case-study pages): `--cs-gap-section` 110 (between major blocks),
`--cs-gap-block` 90, `--cs-gap-group` 60 (heading groups, figure rows),
`--cs-gap-tight` 44 (heading → body, step internals), `--cs-gap-xs` 30
(captions), `--cs-pad-section` 180 (section top/bottom padding).

(Previously these varied between 42–60 and 118–140; they are now consolidated.)

## B. Color

| Token | Hex | Use |
|---|---|---|
| `--color-cream` / `bg-cream` | `#ffe8cb` | page background |
| `--color-red` / `bg-red` | `#ff021b` | accent stripes, numbered steps, focus ring |
| `--color-taupe` | `#b2a08a` | card accent blocks, meta text |
| `--color-ink` | `#0e0e0e` | primary text |
| `--color-mat` | `#f6e9cf` | project-card cream mat |
| `--color-guide` | `#ff1755` | dashed guide lines |
| `--color-guide-soft` | `#ff467b` | solid hairline guide |
| `--color-placeholder` | `#494949` | "under development" text + dashed border |
| Pure black / white | `#000` / `#fff` | headings, pixel labels |

Transparency treatments: nav pill `rgb(0 0 0 / .8)` + border `white/50`; glass
panel `white/5`; card thumbnail veil `white/30`; control surface `white/40`
with `white/70` border; progress fill `white/50`; label bar `rgba(14,14,14,.85)`.
Gradients: the radial dial gradient in `MenuDial`, ideation-board blobs in
`app/frolic`. Hover/active colors: pill active = solid `#000` + white border.

## C. Spacing & Layout

Spacing scale (multiples of `--u`): `--space-1` 24, `--space-2` 40,
`--space-3` 60, `--space-4` 80, `--space-5` 150, `--space-6` 220 (Figma px).
`--gutter` = `max(1rem, 4vw)` is the mobile page margin. Typical use: 24–40
inside figures, 60–80 heading→body, 150 between case-study blocks, 220 before a
floral band.

* **Frame**: 2176 Figma px wide, centered (`mx-auto`); full-bleed bands use
  `w-screen -translate-x-1/2`.
* **Case-study column**: left-aligned (all case-study text, headings, captions and figure rows are `text-left` / `items-start` / `justify-start`), flex column, width `--cs-w` centered on the page so its left edge lines up with the header; content width
  `--cs-w` = 80vw (header, masonry, body text); paragraphs, steps and wide figures (≥ 1100 Figma px) also use 80vw (`--cs-body-w` = `--cs-w`); captions 950 Figma px.
  The nav bar is 90vw.
* **Grids**: pill row = four equal pills (mobile `grid-cols-4`); figure rows are
  `flex flex-wrap justify-center` with Figma-px gaps; the Play gallery uses a CSS
  multi-column masonry.
* **Responsive spacing**: `--u` shrinks every gap/margin proportionally;
  below 653px gaps stop shrinking (floor 0.3) and the gutter takes over.

## D. Components

| Component | File | Notes |
|---|---|---|
| Nav | `components/Nav.tsx`, `.nav-pill` (sized with `--un`, never overridden per page → identical on every page) | order Work · Play · About · Resumé; ≥ md: bar spans 95vw (nav scale = 0.85 × the base unit; logo and pills vertically centered on one line), logo at the left edge, four pills grouped at the right edge with fixed Figma-px gaps (never spread out on wider screens); < md single row of 44px pills; `aria-current="page"` = active |
| Hero | `components/Hero.tsx` | glass panel + CD disc + wordmark; `HeroMobile` scales panel to viewport |
| Project card | `components/ProjectCard.tsx` | radius `--radius-card`, shadow `--shadow-ui`, mat strips, taupe/red accents, glass thumbnail window, dark label bar |
| Carousel + controls | `components/WorkCarousel.tsx` | `.glass-control` arrows/track, radius `--radius-control`; scrolls exactly one card |
| Case-study header | `CaseHeader` in `components/case-study.tsx` | Every case study opens with it: left column = logo → action-oriented headline (starts with an "-ing" verb, summarises what was done) → summary; right column = **Team / Timeline / Role** (labels `--cs-meta-label` bold, values `--cs-meta`). 2.6fr / 1fr grid (left column dominant), width `--cs-w` (80vw), stacks on mobile. Facts are passed as a `meta` prop per page |
| Case-study kit | `components/case-study.tsx` | `CaseStudy` (page shell: cream canvas + Nav), `Title`, `Section`, `SubSection`, `Body`, `Caption`, `FloralBand`, `IconFigure`, `EdgeBars`, `NumberedStep`. Media uses `rounded-media-sm` (14) / `rounded-media` (22) / `rounded-media-lg` (28) with `shadow-media` / `shadow-media-lg` |
| Placeholder page | `components/UnderDevelopment.tsx` | dashed pill; used by Work, Play, About, Resumé |
| Media window (About) | `MediaWindow` in `app/about/page.tsx`, `.sheen` | Retro-Mac window framing a cover; hover lifts, straightens, sweeps a rainbow holographic sheen and spins the CD; books, CDs and film posters; 2-col mobile / 3-col tablet / 6-col wide desktop grid resting in a full-bleed band of the hand-painted floral art (natural top edge, slight brightness/glow, white-glow shadows). Title + author appear only on hover/focus in a small retro pop-up window beside the cover (pixel-font uppercase heading, flips side in the last grid column) |
| Glass surfaces | `.liquid-glass`, `-soft`, `-dark`, `.glass-rim` | SVG-refraction backdrop (Chromium), blur fallback |

Radii: card 10, control 18, media-sm 12, media 20, media-lg 28 (CSS px);
panel 30 and pill 20.9 Figma px. Shadows: `--shadow-ui`, `--shadow-control`,
`--shadow-media`, `--shadow-media-lg`, `--shadow-text`. Media: images are
`max-width:100%`; screenshots get `rounded-media* shadow-media*`.

## E. Responsive standards

| Breakpoint | Tailwind | Layout |
|---|---|---|
| < 640 | base | mobile: stacked home, single-row nav, 78vw cards, floor scale |
| 640–767 | `sm` | mobile layout, same as base |
| ≥ 768 | `md` | composition layout (nav + hero on Figma frame, carousel absolute) |
| ≥ 1024 / 1280 | `lg` / `xl` | same composition; scale continues |
| ≥ 3510 | — | scale capped at 0.62 |

Rules: no horizontal page scroll at any width; tap targets ≥ 44px
(`--tap`); text never below ≈ 17px (nav ≥ 12.8px); wide figures shrink with
`max-width:100%`; collages with absolute children (Frolic ideation board) use a
local unit bounded by viewport width.

## F. Interaction & motion

| Element | Behaviour |
|---|---|
| Nav pill / carousel card / arrow | `translateY(-2px or -4px)` on hover; 150–300ms ease-out |
| Focus | 3px `--color-red` outline, 3px offset (`:focus-visible`) |
| CD disc | hover: scale 1.08 (300ms) + 2 turns, `--ease-spin` 1.1s |
| Progress fill | width transition 150ms ease-out |
| Smooth scroll | `components/SmoothScroll.tsx` mounts [Lenis](https://github.com/darkroomengineering/lenis) (`lerp 0.1`) in the root layout for every page; disabled under reduced motion |
| Dither reveal | block cluster follows the cursor (desktop only) |
| Carousel | smooth scroll, `snap-x mandatory` |
| Reduced motion | transitions collapse to ~0ms, no smooth scroll |

## Adding things

* New page: render `<Nav />`, use `px()` for sizes, tokens for color/shadow.
* New nav item: add to `LINKS` in `components/Nav.tsx` (and a `left` Figma px).
* Rescale the whole site: change the `clamp` in `:root --u`.
