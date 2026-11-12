import { px } from "@/app/design";
import CdDisc from "@/components/CdDisc";

// Wordmark + glass panel are scaled up by K about the panel's original center
// (x 1089, y 692.5) so the name reads slightly larger.
const K = 1.06;
const PANEL = {
  left: 1089 - (1872 / 2) * K,
  top: 692.5 - (353 / 2) * K,
  w: 1872 * K,
  h: 353 * K,
  radius: 30 * K,
};
// CD sized to the cap height of the headline so it reads as the "0".
const FONT = 360 * K;
const CD = 259 * K; // ≈ 0.72em cap height
const PAD_LEFT = 68 * K; // CD start - panel left
const GAP = 36 * K; // text - CD right
const GHOST_OFFSET = 156 * K;

const TAGLINE = "I’m a [designer], [researcher], and [artist], who makes things for people";

/** The "01 RAHUL" wordmark: CD disc as the "0" + Satoshi wordmark, vertically
 *  centered in a box so it sits centered in the glass panel. `u` is the length
 *  of one Figma px so the same markup serves the composition and mobile layouts. */
function Wordmark({ ghost, u }: { ghost?: boolean; u: (n: number) => string }) {
  return (
    <>
      {ghost ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/cd.png"
          alt=""
          className="shrink-0"
          style={{ width: u(CD), height: u(CD) }}
        />
      ) : (
        <CdDisc src="/images/cd.png" size={u(CD)} />
      )}
      <span
        className="whitespace-pre font-body leading-[0.72] text-black"
        style={{ fontSize: u(FONT) }}
      >
        1  RAHUL
      </span>
    </>
  );
}

/** ≥ md — composition positioned at exact Figma px (scaled by --u). */
export default function Hero() {
  const row = (ghost: boolean) => (
    <div
      className={`absolute flex items-center ${ghost ? "z-0 opacity-30" : "z-10"}`}
      style={{
        left: px(PANEL.left),
        top: px(PANEL.top - (ghost ? GHOST_OFFSET : 0)),
        width: px(PANEL.w),
        height: px(PANEL.h),
        paddingLeft: px(PAD_LEFT),
        gap: px(GAP),
      }}
    >
      <Wordmark ghost={ghost} u={px} />
    </div>
  );

  return (
    <>
      {row(true)}
      <div
        className="liquid-glass glass-rim absolute z-[1] border-[3px] border-white/50 bg-white/5"
        style={{
          left: px(PANEL.left),
          top: px(PANEL.top),
          width: px(PANEL.w),
          height: px(PANEL.h),
          borderRadius: px(PANEL.radius),
        }}
      />
      {row(false)}
      <p
        className="absolute z-10 text-center font-display leading-tagline text-white [text-shadow:var(--shadow-text)]"
        style={{ left: px(339), top: px(1004), width: px(1500), fontSize: px(118.584) }}
      >
        {TAGLINE}
      </p>
    </>
  );
}

/** < md — same panel + wordmark, scaled so the panel spans the viewport width. */
export function HeroMobile() {
  const hu = (n: number) => `calc(${n} * (100vw - 2 * var(--gutter)) / ${PANEL.w})`;
  const rowStyle = { height: hu(PANEL.h), paddingLeft: hu(PAD_LEFT), gap: hu(GAP) };

  return (
    <div className="relative z-10 md:hidden" style={{ margin: "0 var(--gutter)", paddingTop: "5.5rem" }}>
      <div className="relative" style={{ paddingTop: hu(GHOST_OFFSET) }}>
        <div className="absolute inset-x-0 top-0 z-0 flex items-center opacity-30" style={rowStyle} aria-hidden>
          <Wordmark ghost u={hu} />
        </div>
        <div
          className="liquid-glass glass-rim relative z-[1] border-2 border-white/50 bg-white/5"
          style={{ height: hu(PANEL.h), borderRadius: hu(PANEL.radius) }}
        />
        <div className="absolute inset-x-0 z-10 flex items-center" style={{ ...rowStyle, top: hu(GHOST_OFFSET) }}>
          <Wordmark u={hu} />
        </div>
      </div>
    </div>
  );
}

export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-center font-display leading-tagline text-white [text-shadow:var(--shadow-text)] ${className}`}
    >
      {TAGLINE}
    </p>
  );
}
