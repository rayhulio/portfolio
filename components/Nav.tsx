import Link from "next/link";
import { px, FRAME_W } from "@/app/design";

const LINKS = [
  { label: "ABOUT", href: "/about", left: 1272, width: 201.512 },
  { label: "WORK", href: "/work", left: 1527.74, width: 201.512 },
  { label: "RESUMÉ", href: "/resume", left: 1783, width: 250 },
] as const;

/** Top chrome — logo + nav pills. Sits at the top of the page in normal flow
 *  and scrolls away with the content (not pinned). */
export default function Nav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
      <div
        className="relative mx-auto"
        style={{ width: px(FRAME_W), height: px(240) }}
      >
        {/* Logo — red smiley */}
        <Link
          href="/"
          aria-label="Home"
          className="pointer-events-auto absolute"
          style={{ left: px(96), top: px(76) }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/smiley-logo.png"
            alt="Home"
            style={{ width: px(168.579), height: px(162) }}
          />
        </Link>

        {/* Nav pills — dark liquid glass with the offset double-vision label */}
        {LINKS.map(({ label, href, left, width }) => (
          <Link
            key={label}
            href={href}
            className="liquid-glass-dark pointer-events-auto absolute grid place-items-center overflow-hidden border-[3px] border-white/50 bg-black/80 font-display leading-none text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5"
            style={{
              left: px(left),
              top: px(92),
              width: px(width),
              height: px(88),
              borderRadius: px(20.882),
              fontSize: px(55),
            }}
          >
            <span className="relative z-10">{label}</span>
            <span
              aria-hidden
              className="absolute inset-0 grid translate-x-[3px] translate-y-[3px] place-items-center blur-[2px]"
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </header>
  );
}
