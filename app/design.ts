/**
 * Design scale. The Figma artboard is 2176px wide. Every dimension is authored
 * in Figma px and converted with `px(n)`, which multiplies by the fluid unit
 * `--u` (one Figma px in CSS px) defined in globals.css:
 *
 *   --u = clamp(0.3px, 100vw / 2176, 0.62px)
 *
 *  - ≥ 3510px wide: capped at 0.62 (the original fixed composition scale)
 *  - 653–1349px:   the whole composition scales proportionally to the viewport
 *  - ≤ 653px:      floored at 0.3 so body copy stays readable (≈17px); wide
 *                  items shrink with max-width:100% and the home page / nav
 *                  switch to dedicated mobile layouts (see Tailwind `md:`).
 *
 * Change the clamp in globals.css to rescale the whole site uniformly.
 */

/** Figma px -> fluid CSS length. */
export const px = (n: number) => `calc(${+n.toFixed(3)} * var(--u))`;

/** Figma px -> fixed minimum-aware length: never smaller than `min` CSS px.
 *  Use for type and tap targets that must stay legible on small screens. */
export const pxMin = (n: number, min: number) => `max(${min}px, ${px(n)})`;

/** The scaled artboard width — the centered composition frame. */
export const FRAME_W = 2176;
/** Total scrollable composition height (Figma px) — content + long floral field.
 *  (Figma artboard is 5600 tall but the lower ~1600 is empty cream.) */
export const FRAME_H = 4020;

/** Desktop geometry of the home carousel as CSS vars (Figma px × --u). Set on a
 *  common ancestor; consumed by the `md:` classes in WorkCarousel. Lives here
 *  (not in the client component) so server components can spread it. */
export const CAROUSEL_VARS = {
  "--car-top": px(1371),
  "--ctl-top": px(1371 + 870 + 90),
  "--card-w": px(914.892),
  "--track-w": px(1220),
  "--track-h": px(100),
  "--arrow": px(114),
  "--arrow-icon": px(56),
  "--ctl-gap": px(70),
} as React.CSSProperties;

/** Original (pre-fluid) composition scale — used for decorative line art whose
 *  physical size must never change (it stays cropped by the viewport). */
export const U0 = 0.62;
/** Figma px → fixed CSS px at the original scale. */
export const px0 = (n: number) => `${+(n * U0).toFixed(2)}px`;

/**
 * Floral field copy `i`. The art is 2176×2284 with its flower edge ~590px down.
 * Width is max(viewport, frame) so it always bleeds full-width; the vertical
 * offset is solved so the flower edge lands at the SAME place relative to the
 * hero glass panel at every scale (page y = 650 Figma px, +1200 per copy).
 */
export const floralCopyStyle = (i: number): React.CSSProperties => ({
  left: "50%",
  transform: "translateX(-50%)",
  width: "max(100vw, calc(2176 * var(--u)))",
  top: `calc(${650 + i * 1200} * var(--u) - 590 / 2176 * max(100vw, calc(2176 * var(--u))))`,
});
