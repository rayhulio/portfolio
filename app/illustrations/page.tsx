import Nav from "@/components/Nav";
import { px } from "@/app/design";
import { Body, FloralBand } from "@/components/case-study";

/* eslint-disable @next/next/no-img-element */

const A = "/images/illustrations";

// Ordered so the two tall pieces land mid-column — a tall piece last leaves the
// other masonry column visibly short.
const PIECES = [
  { file: "fka-twigs", title: "FKA twigs" },
  { file: "spiderverse", title: "Across the Spider-Verse" },
  { file: "frank-ocean", title: "Frank Ocean" },
  { file: "rocky", title: "A$AP Rocky" },
  { file: "kendrick", title: "Kendrick Lamar" },
  { file: "snow", title: "Snow" },
];

export default function IllustrationsPage() {
  return (
    <div className="relative overflow-x-clip bg-cream pb-[8vh]">
      <Nav />

      {/* Hero */}
      <div
        className="mx-auto flex flex-col items-center px-6"
        style={{ paddingTop: px(470), gap: px(50) }}
      >
        <h1
          className="text-center font-display leading-none text-black"
          style={{ fontSize: px(130) }}
        >
          ILLUSTRATIONS
        </h1>
        <Body maxWidth={1040}>Digital paintings and personal work</Body>
      </div>

      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      <div
        className="relative mx-auto flex flex-col items-center px-6"
        style={{ gap: px(150), paddingTop: px(180) }}
      >
        {/* Masonry gallery — columns keep the mixed aspect ratios intact */}
        <div
          className="mx-auto columns-2"
          style={{ maxWidth: px(1900), columnGap: px(90) }}
        >
          {PIECES.map(({ file, title }) => (
            <figure key={file} className="break-inside-avoid" style={{ marginBottom: px(90) }}>
              <img
                src={`${A}/${file}.webp`}
                alt={title}
                className="w-full rounded-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
              />
              <figcaption
                className="text-center font-body text-taupe"
                style={{ fontSize: px(44), marginTop: px(28) }}
              >
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
