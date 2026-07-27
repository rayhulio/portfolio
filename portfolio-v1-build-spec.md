# Portfolio V1 — Home Page Build Spec

Purpose: recreate the Figma home page design faithfully in code (Next.js), one piece at a time, prioritizing accuracy over speed. This doc is meant to be fed to Claude Code as the working brief — check off sections as they're built, and paste in exported assets as they're ready.

---

## 0. Before starting: assets checklist

Do not start building until these exist locally. Claude Code should ask for any that are missing before generating code for that section.

- [ ] `PPNeueBit-Bold.woff2` + `.woff` (self-hosted, converted from OTF — see Fontshare/font section below)
- [ ] `Satoshi-Regular.woff2` + `.woff` (and any other Satoshi weights used — check Fontshare for direct woff2 hosting first, may not need manual conversion)
- [ ] Hand-painted floral background — exported flat, no effects, WebP, 2x resolution
- [ ] Dithered panel source images (see Section 3 — decide bake vs. procedural first)
- [ ] Frolic phone mockup screenshot (sharp, unblurred source)
- [ ] Self-driving project thumbnail (sharp, unblurred source)
- [ ] Red smiley logo mark — SVG if vector
- [ ] CD/disc icon graphic — SVG if vector, PNG if raster illustration

---

## 1. Project setup

- [ ] Next.js project scaffolded (App Router)
- [ ] Tailwind configured
- [ ] Folder structure: `/public/fonts`, `/public/images`, `/components`, `/app`
- [ ] Base container: `max-width: 1440px; margin: 0 auto;` — confirm this matches the Figma frame width you designed at before locking it in
- [ ] Viewport meta confirmed present (Next.js default, just verify not overridden)

---

## 2. Fonts — Satoshi + PP Neue Bit

- [ ] Confirm which weights are actually used in the design (don't load unused weights — hurts load time)
- [ ] Satoshi: check if Fontshare's hosted `woff2` link can be used directly via `<link>`/CSS import, OR self-host if you want zero external requests
- [ ] PP Neue Bit Bold: self-hosted only (see prior conversion steps — OTF converted to woff/woff2 via Transfonter or fontTools)
- [ ] Set up `@font-face` (or Next.js `localFont`) for both
- [ ] Define 2 Tailwind font families: e.g. `font-display` (PP Neue Bit Bold, for "01 RAHUL" and card labels like "02 FROLIC") and `font-body` (Satoshi, for the tagline and nav)
- [ ] Verify fallback stack is set (system-ui fallback) in case font fails to load, so layout doesn't break

**Ask Claude Code specifically:** "Set up self-hosted @font-face for these two fonts with proper font-display: swap, and create Tailwind font family tokens for display vs body text."

---

## 3. Background — hand-painted art + dithered masking panels

This is the highest-effort section. Do not rush it — decide bake vs. procedural before writing any code.

### Decision point (answer before building)
- [ ] **Bake it**: export the gray/dithered blocks as-is from Figma (with the plugin effect already applied), place as absolutely-positioned images/divs over the base background. Fast, pixel-accurate, static.
- [ ] **Recreate procedurally**: build a canvas/WebGL Bayer-matrix or Floyd-Steinberg dither shader that dithers the base image live in-browser. Slower to build, but dynamic and a stronger technical portfolio flex.

**Recommendation for V1: bake it now, leave procedural as a stretch goal after the rest of the page works.**

### If baking:
- [ ] Base floral image exported flat as one asset, positioned as full-bleed background
- [ ] Each dithered gray panel exported individually as PNG/WebP (with correct transparency where needed)
- [ ] Panels positioned with `absolute` + exact `top/left/width/height` percentages (not px) so they scale with the container instead of Figma's fixed-pixel coordinates
- [ ] Confirm panel positions still look correct at 3 widths: 1440px, 1024px, 375px — they will likely need separate mobile positioning or to be hidden/simplified on small screens (ask about this explicitly, don't assume)

### If going procedural (stretch goal):
- [ ] Ask Claude Code: "Write a canvas-based ordered (Bayer matrix) dithering effect that takes an image and a mask region, and renders the dithered result only within that region"
- [ ] Confirm performance is acceptable (dithering full-res images on every resize can be slow — may need to dither into an offscreen canvas once, not on every frame)

---

## 4. Hero section — "01 RAHUL" + glass panel + tagline

- [ ] Large "01 RAHUL" text in PP Neue Bit Bold — confirm exact tracking/letter-spacing from Figma (check the Text Style, don't eyeball it)
- [ ] Frosted-glass horizontal panel behind the headline — recreate with `backdrop-filter: blur()` + semi-transparent background fill, not a static exported image (so it stays responsive and doesn't pixelate)
- [ ] Ghosted duplicate "01 RAHUL" text behind (the faint gray outline version visible in the screenshot) — recreate as a second text layer, lower opacity/z-index, not baked into a background image
- [ ] CD/disc icon — positioned inline with the headline, confirm if it should have a subtle rotation animation on load/hover
- [ ] Tagline text ("I'm a [designer]...") in Satoshi — confirm bracket styling `[designer]` is literal text, not a component

**Ask Claude Code specifically:** "Build the glass panel effect using backdrop-filter and confirm it degrades gracefully in browsers that don't support it."

---

## 5. Project cards ("02 FROLIC", "03 SELF DRIVING")

- [ ] Build ONE reusable `ProjectCard` component (props: title, number, year, client, thumbnail image, thumbnail type)
- [ ] Card structure: cream card frame → thumbnail area (phone mockup or blurred image) → dark label bar with number + title → footer row with year + client name
- [ ] Frolic card: real phone mockup screenshot, NOT blurred
- [ ] Self-driving card: blurred thumbnail — confirm this is `filter: blur()` applied in CSS to a sharp source image (not a pre-blurred export), per earlier conversation, so it can un-blur on hover/interaction later
- [ ] Card grid: `grid-cols-1` on mobile, `grid-cols-3` (or however many fit) on desktop — confirm exact breakpoint where it should switch
- [ ] Confirm hover state behavior (does anything happen on hover in the original design intent, even if not shown in static comp?)

---

## 6. Nav bar (ABOUT / WORK / RESUMÉ)

- [ ] Three pill buttons, dark fill, positioned top-right
- [ ] Confirm if these are meant to be anchor links (scroll to section) or route links (separate pages) — this changes the implementation
- [ ] Logo mark (red smiley) top-left, confirm link target (usually home/top)

---

## 7. Bottom media-player control ("MENU" dial)

- [ ] Circular dark dial with MENU label, skip-back/skip-forward icons, play/pause icon
- [ ] Confirm actual function: is this a real interactive control (e.g., toggles a menu overlay) or purely decorative?
- [ ] **Flag for responsive handling**: this is a fixed-position circular element and is a likely mobile collision point — decide now whether it shrinks, moves to a bottom nav bar, or hides below a certain breakpoint. Do not leave this undecided until mobile testing.

---

## 8. Responsive pass

- [ ] Test at 375px, 768px, 1440px minimum (real browser resize, not just device presets)
- [ ] Confirm `Clip content` equivalent behavior — nothing should overflow its intended container at any width
- [ ] Confirm dithered background panels don't break or misalign at smaller widths (see Section 3)
- [ ] Confirm MENU dial resolved per Section 7
- [ ] Headline font-size uses `clamp()` so it scales fluidly instead of jumping at breakpoints

---

## 9. Image optimization pass (do last, once layout is locked)

- [ ] All images converted to WebP where possible
- [ ] All images run through Next.js `<Image>` component with correct `sizes` prop
- [ ] Confirm no image is being scaled up from a smaller source (check exported resolution vs. rendered size)

---

## How to use this doc with Claude Code

Work top to bottom, one numbered section per session/prompt. For each section, paste in this doc's relevant section plus any exported assets needed, and explicitly say what's still missing so Claude Code asks rather than guesses (e.g., exact hex values, spacing values, or breakpoint behavior not visible in a screenshot). Do not let Claude Code invent values for anything you can pull an exact number for from Figma — always paste the real spacing/color/font-size from the Figma inspect panel rather than letting it estimate from an image.
