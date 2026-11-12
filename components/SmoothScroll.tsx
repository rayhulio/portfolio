"use client";

import { useSyncExternalStore } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/**
 * Site-wide smooth, velocity-based scrolling via Lenis
 * (https://github.com/darkroomengineering/lenis). Mounted once in the root
 * layout so every page gets it. Skipped for users who prefer reduced motion.
 * Horizontal scrollers (the work carousel) are unaffected — Lenis only drives
 * the page's vertical scroll.
 */
const QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function SmoothScroll() {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true, // server: render nothing until the client knows
  );

  if (reduced) return null;
  return <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, anchors: true }} />;
}
