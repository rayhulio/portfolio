"use client";

import { useEffect, useRef } from "react";
import { floralCopyStyle } from "@/app/design";

// Same copy positions as the floral field in Background.
const COPIES = [0, 1, 2, 3];

const GRID = 64; // block size (page px)
const RADIUS = 100; // cluster radius around the cursor
const EDGE = 0.85; // how fast blocks thin out toward the edge

// stable pseudo-random in [0,1)
function hash(a: number, b: number) {
  const s = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return s - Math.floor(s);
}

/**
 * Interactive dither: a grayscale/pixelated (Floyd–Steinberg) copy of the floral
 * field laid over the colour art, revealed through a cluster of hard-edged blocks
 * that pop in around the cursor — no fade, varied block sizes (Figma-style).
 */
export default function DitherReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const build = (cx: number, cy: number) => {
      const rects: string[] = [];
      const gx0 = Math.floor((cx - RADIUS) / GRID);
      const gx1 = Math.floor((cx + RADIUS) / GRID);
      const gy0 = Math.floor((cy - RADIUS) / GRID);
      const gy1 = Math.floor((cy + RADIUS) / GRID);
      for (let gx = gx0; gx <= gx1; gx++) {
        for (let gy = gy0; gy <= gy1; gy++) {
          const x = gx * GRID;
          const y = gy * GRID;
          const d = Math.hypot(x + GRID / 2 - cx, y + GRID / 2 - cy);
          if (d > RADIUS) continue;
          const density = 1 - (d / RADIUS) * EDGE;
          if (hash(gx, gy) > density) continue;
          const s = hash(gx * 3.7, gy * 1.3) < 0.18 ? GRID * 2 : GRID;
          rects.push(`M${x} ${y}h${s}v${s}h${-s}Z`);
        }
      }
      const path = rects.length ? `path('${rects.join("")}')` : "path('M-1 -1Z')";
      el.style.clipPath = path;
      el.style.setProperty("-webkit-clip-path", path);
    };

    const move = (e: MouseEvent) => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => build(x, y));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ clipPath: "path('M-1 -1Z')" }}
    >
      {COPIES.map((i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src="/images/background-art-dither.png"
          alt=""
          className="absolute h-auto [image-rendering:pixelated]"
          style={floralCopyStyle(i)}
        />
      ))}
    </div>
  );
}
