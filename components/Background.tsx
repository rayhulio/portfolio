import { px, FRAME_W, FRAME_H } from "@/app/design";
import DitherReveal from "@/components/DitherReveal";

/**
 * Full-bleed, layered background that scrolls with the page:
 *  - cream base
 *  - the hand-painted floral art, tiled vertically for length (full-bleed)
 *  - interactive dither: grayscale/pixelated floral revealed in a circle that
 *    follows the cursor (DitherReveal)
 *  - red guide lines + concentric rings (frame-aligned decor)
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden bg-cream"
      style={{ height: px(FRAME_H) }}
    >
      {/* Floral field — full viewport width, layered copies for length.
          Each copy's transparent top overlaps the previous copy's flowers. */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 w-screen -translate-x-1/2"
          style={{ top: px(60 + i * 1200), height: px(2284) }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/background-art.png"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
      ))}

      {/* Interactive dither reveal (follows the cursor) */}
      <DitherReveal />

      {/* Frame-aligned decor */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{ width: px(FRAME_W), height: px(FRAME_H) }}
      >
        {/* Concentric red rings (top-right), rotated per Figma */}
        <Ring src="/images/figma/union0.svg" cx={1783} cy={400} w={1295} h={591} />
        <Ring src="/images/figma/union1.svg" cx={1491.9} cy={221.4} w={498} h={498} />
        <Ring src="/images/figma/union2.svg" cx={1492.3} cy={222.9} w={356} h={356} />

        {/* Guide lines */}
        {/* dashed horizontal (line 12) */}
        <div
          className="absolute"
          style={{
            left: 0,
            top: px(782),
            width: px(2220),
            borderTop: "2px dashed #FF1755",
          }}
        />
        {/* dashed verticals (line 11 x2) */}
        {[425, 1168].map((x) => (
          <div
            key={x}
            className="absolute"
            style={{ left: px(x), top: 0, height: px(1204), borderLeft: "2px dashed #FF1755" }}
          />
        ))}
      </div>

      {/* Solid horizontal guide (line 7) — spans the full viewport width */}
      <div
        className="absolute inset-x-0"
        style={{ top: px(431), height: "1px", background: "#FF467B" }}
      />
    </div>
  );
}

function Ring({
  src,
  cx,
  cy,
  w,
  h,
}: {
  src: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="absolute origin-center"
      style={{
        left: px(cx - w / 2),
        top: px(cy - h / 2),
        width: px(w),
        height: px(h),
        transform: "rotate(-148.56deg)",
      }}
    />
  );
}
