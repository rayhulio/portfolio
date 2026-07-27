import Nav from "@/components/Nav";
import { px } from "@/app/design";

/** Placeholder page for sections that aren't built yet (About / Work / Résumé /
 *  project detail). Matches Figma node 641:166. */
export default function UnderDevelopment() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-cream">
      <Nav />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div
          className="flex w-full items-center justify-between border-4 border-dashed border-[#484848]"
          style={{
            maxWidth: px(1629),
            height: px(258),
            borderRadius: px(100),
            paddingLeft: px(116),
            paddingRight: px(72),
          }}
        >
          <span
            className="font-display leading-none text-[#494949]"
            style={{ fontSize: px(118.584) }}
          >
            This page is under development!
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/smiley-logo.png"
            alt=""
            className="shrink-0 [filter:grayscale(1)_brightness(2.3)_contrast(0.9)]"
            style={{ width: px(168.579), height: px(162) }}
          />
        </div>
      </div>
    </main>
  );
}
