"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
/** Figma px → length using the nav-only unit (--un) so the nav is identical on
 *  every page regardless of per-page --u overrides. */
const px = (n: number) => `calc(${n} * var(--un))`;
const pxMin = (n: number, min: number) => `max(${min}px, ${px(n)})`;

/** Order: Work → Play → About → Resumé. `width` is Figma px (≥ md). */
const LINKS = [
  { label: "WORK", href: "/#work", left: 1016.5, width: 201.512 },
  { label: "PLAY", href: "/play", left: 1272, width: 201.512 },
  { label: "ABOUT", href: "/about", left: 1527.74, width: 201.512 },
  { label: "RESUMÉ", href: "/resume", left: 1783, width: 250 },
] as const;

function Label({ children }: { children: string }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="echo-ghost">
        {children}
      </span>
    </>
  );
}

/** Top chrome — logo + nav pills. Scrolls away with the page (not pinned).
 *  - ≥ md: absolutely composed on the Figma frame, scaled by --u.
 *  - < md: compact single row — logo + four equal pills with 44px tap targets. */
export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
      {/* Mobile */}
      <nav
        aria-label="Primary"
        className="flex items-center md:hidden"
        style={{ gap: "0.5rem", padding: "1rem var(--gutter) 0" }}
      >
        <Link href="/" aria-label="Home" className="pointer-events-auto shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/smiley-logo.png" alt="Home" className="h-11 w-auto" />
        </Link>
        <div className="grid min-w-0 flex-1 grid-cols-4 gap-1.5">
          {LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className="nav-pill pointer-events-auto liquid-glass-dark rounded-media-sm border-2 text-[clamp(0.8rem,3.9vw,1.15rem)]"
            >
              <Label>{label}</Label>
            </Link>
          ))}
        </div>
      </nav>

      {/* Tablet / desktop: bar spans 90% of the viewport — logo at its left edge,
          pills at its right edge. Pill size and spacing scale with --u only
          (they never spread out on wider screens). */}
      <nav
        aria-label="Primary"
        className="mx-auto hidden items-start justify-between md:flex"
        style={{ width: "90vw", height: px(240) }}
      >
        <Link href="/" aria-label="Home" className="pointer-events-auto" style={{ marginTop: px(76) }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/smiley-logo.png"
            alt="Home"
            style={{ width: pxMin(168.579, 44), height: "auto" }}
          />
        </Link>

        <div className="flex items-start" style={{ marginTop: px(92), gap: px(54.2) }}>
          {LINKS.map(({ label, href, width }) => (
            <Link
              key={label}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className="nav-pill liquid-glass-dark pointer-events-auto"
              style={{
                width: px(width),
                height: pxMin(88, 44),
                borderRadius: px(20.882),
                fontSize: pxMin(55, 17),
              }}
            >
              <Label>{label}</Label>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
