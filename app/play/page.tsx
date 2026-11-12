import Nav from "@/components/Nav";
import { Title } from "@/components/case-study";
import { px } from "@/app/design";

export const metadata = { title: "Play — Rahul" };

/* eslint-disable @next/next/no-img-element */

const A = "/images/play";

// Ordered so the two tall pieces land mid-column in the masonry.
const PIECES = [
  { file: "fka-twigs", title: "FKA twigs" },
  { file: "spiderverse", title: "Across the Spider-Verse" },
  { file: "frank-ocean", title: "Frank Ocean" },
  { file: "rocky", title: "A$AP Rocky" },
  { file: "kendrick", title: "Kendrick Lamar" },
  { file: "snow", title: "Snow" },
];

/** Play — personal digital paintings in a masonry gallery. */
export default function Play() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream pb-[8vh]">
      <Nav />

      <div
        className="mx-auto flex flex-col items-center px-6"
        style={{ paddingTop: "max(7rem, " + px(430) + ")", gap: "var(--cs-gap-tight)" }}
      >
        <Title>Play</Title>
        <p
          className="text-center font-body text-black"
          style={{ fontSize: "var(--cs-body)", lineHeight: "var(--cs-leading)" }}
        >
          Digital paintings and personal work.
        </p>
      </div>

      {/* Masonry gallery — columns keep each piece's aspect ratio intact */}
      <div
        className="mx-auto columns-1 sm:columns-2 xl:columns-3"
        style={{
          width: "90vw",
          marginTop: "var(--cs-gap-section)",
          columnGap: "var(--cs-gap-group)",
        }}
      >
        {PIECES.map(({ file, title }) => (
          <figure key={file} className="break-inside-avoid" style={{ marginBottom: "var(--cs-gap-group)" }}>
            <img
              src={`${A}/${file}.webp`}
              alt={title}
              loading="lazy"
              className="w-full rounded-media-sm shadow-media transition-transform duration-[var(--duration-base)] hover:-translate-y-1"
            />
            <figcaption
              className="text-center font-body text-taupe"
              style={{ fontSize: "var(--cs-caption)", marginTop: "var(--cs-gap-xs)" }}
            >
              {title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
