import Nav from "@/components/Nav";
import { px } from "@/app/design";

/** Placeholder page for sections that aren't built yet (About / Work / Résumé /
 *  project detail). Matches Figma node 641:166. */
export default function UnderDevelopment() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-cream">
      <Nav />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div
          className="flex w-full flex-col-reverse items-center justify-between gap-4 border-4 border-dashed border-placeholder py-8 text-center md:flex-row md:gap-0 md:py-0 md:text-left"
          style={{
            maxWidth: px(1629),
            minHeight: px(258),
            borderRadius: px(100),
            paddingLeft: px(116),
            paddingRight: px(72),
          }}
        >
          <span
            className="px-4 font-display leading-none text-placeholder md:px-0"
            style={{ fontSize: "max(1.75rem, " + px(118.584) + ")" }}
          >
            This page is under development!
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/smiley-logo.png"
            alt=""
            className="shrink-0 [filter:grayscale(1)_brightness(2.3)_contrast(0.9)]"
            style={{ width: "max(3.5rem, " + px(168.579) + ")", height: "auto" }}
          />
        </div>
      </div>
    </main>
  );
}
