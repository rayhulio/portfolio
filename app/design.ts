/**
 * Design scale. The Figma artboard is 2176px wide. We render every element at
 * its exact Figma pixel size multiplied by S — a FIXED size, not viewport-
 * relative — so resizing the window just reveals more of the background rather
 * than resizing the composition (per design intent).
 *
 * Change S alone to rescale the whole composition uniformly.
 */
export const S = 0.62;

/** Figma px -> CSS px string, scaled by S. */
export const px = (n: number) => `${+(n * S).toFixed(2)}px`;

/** The scaled artboard width — the centered composition frame. */
export const FRAME_W = 2176;
/** Total scrollable composition height (Figma px) — content + long floral field.
 *  (Figma artboard is 5600 tall but the lower ~1600 is empty cream.) */
export const FRAME_H = 4020;
