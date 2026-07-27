import { px } from "@/app/design";
import CdDisc from "@/components/CdDisc";

// Panel geometry (Figma px)
const PANEL = { left: 153, top: 516, w: 1872, h: 353, radius: 30 };
// CD sized to the cap height of the headline so it reads as the "0".
const FONT = 360;
const CD = 259; // ≈ 0.72em cap height
const PAD_LEFT = 68; // CD start (221) - panel left (153)
const GAP = 36; // text (491) - CD right (455)

/** The "01 RAHUL" wordmark: CD disc as the "0" + Satoshi wordmark, vertically
 *  centered in a box so it sits centered in the glass panel. */
function Wordmark({ ghost }: { ghost?: boolean }) {
  return (
    <div
      className={`absolute flex items-center ${ghost ? "z-0 opacity-30" : "z-10"}`}
      style={{
        left: px(PANEL.left),
        top: px(PANEL.top - (ghost ? 156 : 0)),
        width: px(PANEL.w),
        height: px(PANEL.h),
        paddingLeft: px(PAD_LEFT),
        gap: px(GAP),
      }}
    >
      {ghost ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/cd.png"
          alt=""
          className="shrink-0"
          style={{ width: px(CD), height: px(CD) }}
        />
      ) : (
        <CdDisc src="/images/cd.png" size={px(CD)} />
      )}
      <span
        className="whitespace-pre font-body leading-[0.72] text-black"
        style={{ fontSize: px(FONT) }}
      >
        1  RAHUL
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Ghost duplicate (faint, offset up, shows through the glass) */}
      <Wordmark ghost />

      {/* Frosted liquid-glass panel */}
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

      {/* Real wordmark on top of the glass */}
      <Wordmark />

      {/* Tagline — PP NeueBit, centered */}
      <p
        className="absolute z-10 text-center font-display leading-[1.05] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ left: px(339), top: px(1004), width: px(1500), fontSize: px(118.584) }}
      >
        I&rsquo;m a [designer], [researcher], and [artist], who makes things for
        people
      </p>
    </>
  );
}
