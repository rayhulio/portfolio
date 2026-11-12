import Nav from "@/components/Nav";
import { Title, Body } from "@/components/case-study";
import { px } from "@/app/design";

export const metadata = { title: "About — Rahul" };

/* eslint-disable @next/next/no-img-element */

type Item = {
  kind: "book" | "album" | "movie";
  file: string; // /images/about/<file>
  title: string;
  by: string;
  filename: string; // shown in the retro window's title bar
  tilt: string; // resting rotation
};

// Physical media (books, CDs, film posters), presented as little retro-OS windows over the floral art.
const SHELF: Item[] = [
  { kind: "book", file: "pachinko.webp", title: "Pachinko", by: "Min Jin Lee", filename: "pachinko.epub", tilt: "-rotate-2" },
  { kind: "book", file: "splendid-suns.png", title: "A Thousand Splendid Suns", by: "Khaled Hosseini", filename: "splendid_suns.epub", tilt: "rotate-1" },
  { kind: "album", file: "blonde.png", title: "Blonde", by: "Frank Ocean", filename: "blonde.cd", tilt: "rotate-2" },
  { kind: "album", file: "baby.png", title: "Baby", by: "Dijon", filename: "baby.cd", tilt: "-rotate-1" },
  { kind: "movie", file: "mononoke.webp", title: "Princess Mononoke", by: "Hayao Miyazaki", filename: "mononoke.mov", tilt: "rotate-1" },
  { kind: "movie", file: "seven.webp", title: "Seven", by: "David Fincher", filename: "seven.mov", tilt: "-rotate-2" },
];

/** Classic-Mac-style window: striped title bar with close/zoom boxes, framed cover,
 *  rainbow holographic sheen on hover. On hover/focus a retro info pop-up (title +
 *  author, pixel font) appears beside it; `i` picks which side so it never leaves
 *  the viewport. Albums also get a CD hanging off the corner. */
function MediaWindow({ kind, file, title, by, filename, tilt, i }: Item & { i: number }) {
  // Pop-up opens to the right, flipping left for items in the last column of each grid.
  const flipBase = i % 2 === 1; // 2 columns
  const flipMd = i % 3 === 2; // 3 columns
  const flipXl = i % 6 === 5; // 6 columns
  const side = (flip: boolean, bp: string) =>
    flip ? `${bp}right-full ${bp}left-auto ${bp}mr-3` : `${bp}left-full ${bp}right-auto ${bp}ml-3`;
  const popSide = `${side(flipBase, "")} ${side(flipMd, "md:")} ${side(flipXl, "xl:")}`;

  return (
    <figure
      tabIndex={0}
      className={`group relative flex flex-col items-start outline-none transition-transform duration-[var(--duration-base)] hover:z-30 hover:-translate-y-2 hover:rotate-0 focus-visible:z-30 focus-visible:-translate-y-2 focus-visible:rotate-0 ${tilt}`}
    >
      <div className={`relative ${kind === "book" ? "w-[86%]" : "w-full"}`}>
        <div className="relative overflow-hidden rounded-[6px] border-2 border-black bg-white shadow-[0_0_34px_rgba(255,255,255,0.6),0_6px_16px_rgba(0,0,0,0.25)]">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b-2 border-black bg-[repeating-linear-gradient(0deg,#fff_0_2px,#cfcfcf_2px_3px)] px-2 py-1">
            <span aria-hidden className="size-3 border-2 border-black bg-white" />
            <span className="flex-1 truncate bg-white px-2 text-center font-display text-sm leading-tight text-black">
              {filename}
            </span>
            <span aria-hidden className="size-3 border-2 border-black bg-white" />
          </div>
          {/* cover + holographic sheen */}
          <div className={`relative ${kind === "album" ? "aspect-square" : kind === "book" ? "aspect-[2/3]" : "aspect-[7/10]"}`}>
            <img src={`/images/about/${file}`} alt={`${title} — ${by}`} className="absolute inset-0 h-full w-full object-cover" />
            <span aria-hidden className="sheen" />
          </div>
        </div>

        {kind === "album" && (
          <img
            src="/images/cd.png"
            alt=""
            className="absolute -bottom-3 -right-3 w-[34%] drop-shadow-[0_3px_4px_rgba(0,0,0,0.35)] transition-transform duration-[var(--duration-spin)] ease-[var(--ease-spin)] group-hover:rotate-[360deg]"
          />
        )}
      </div>

      {/* Retro info pop-up */}
      <figcaption
        role="tooltip"
        className={`pointer-events-none absolute top-[14%] z-40 w-max max-w-[13rem] origin-left scale-95 overflow-hidden rounded-[6px] border-2 border-black bg-white opacity-0 shadow-[0_0_28px_rgba(255,255,255,0.55),4px_4px_0_rgba(14,14,14,0.35)] transition-[opacity,transform] duration-[var(--duration-base)] ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${popSide}`}
      >
        <div className="flex items-center gap-2 border-b-2 border-black bg-[repeating-linear-gradient(0deg,#fff_0_2px,#cfcfcf_2px_3px)] px-2 py-0.5">
          <span aria-hidden className="size-2.5 border-2 border-black bg-white" />
          <span className="flex-1" />
          <span aria-hidden className="size-2.5 border-2 border-black bg-white" />
        </div>
        <div className="flex flex-col gap-1.5 px-3 py-2.5 text-black">
          <span className="font-display uppercase leading-tight" style={{ fontSize: "var(--cs-body)" }}>
            {title}
          </span>
          <span className="font-body uppercase tracking-wide" style={{ fontSize: "max(10px, calc(var(--cs-caption) * 0.72))" }}>
            {by}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function About() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream">
      <Nav />

      <section
        className="mx-auto grid w-[var(--cs-w)] items-center md:grid-cols-[1fr_1.3fr]"
        style={{ paddingTop: "max(7rem, " + px(430) + ")", columnGap: px(150), rowGap: px(100) }}
      >
        <img
          src="/images/about/rahul.webp"
          alt="Rahul taking a photo with a film camera at dusk"
          className="w-full rounded-media shadow-media-lg md:max-w-[34rem]"
        />

        <div className="flex flex-col items-start" style={{ gap: "var(--cs-gap-tight)" }}>
          <Title align="left">Hey, I&rsquo;m Rahul.</Title>
          <Body>
            I&rsquo;m a developer, designer, and artist at UC Berkeley who loves to make things for
            people. What started off as making over-edited iMovies and art for my friends and family
            as a kid turned into creating experiences that invoke emotions. That&rsquo;s always what
            I&rsquo;ve been chasing, making people feel through my work.
          </Body>
          <Body>
            Recently, I&rsquo;ve been looking at the intersection between design, the development of
            AI, and people; on how this emerging area can still be used to develop experiences that
            are deeply human.
          </Body>
          <Body>Outside of work, I love to paint, play basketball, and make music :)</Body>
        </div>
      </section>

      {/* Media shelf */}
      <section className="mx-auto w-[var(--cs-w)]" style={{ marginTop: "var(--cs-gap-chapter)" }}>
        <h2
          className="text-left font-display leading-none text-black"
          style={{ fontSize: "var(--cs-section)" }}
        >
          On the Shelf
        </h2>
        <p className="mt-2 font-body text-black" style={{ fontSize: "var(--cs-body)" }}>
          Recent reads and records I keep coming back to.
        </p>
      </section>

      {/* Full-bleed floral band — the painted flowers rise in naturally from the
          cream (irregular top edge), with the media windows resting in them. */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden" style={{ marginTop: "var(--cs-gap-tight)" }}>
        <img
          src="/images/background-art.png"
          alt=""
          className="absolute left-0 w-full object-cover [filter:brightness(1.06)_saturate(1.1)]"
          style={{ top: "-20vw", height: "calc(100% + 20vw)", objectPosition: "center top" }}
        />
        {/* soft bloom behind the windows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[8vw] bg-[radial-gradient(ellipse_at_50%_55%,rgba(255,255,255,0.35),transparent_65%)]"
        />
        <div
          className="relative mx-auto grid w-[var(--cs-w)] grid-cols-2 items-end gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8 xl:grid-cols-6"
          style={{ paddingTop: "max(7vw, 3rem)", paddingBottom: "max(6vw, 3rem)" }}
        >
          {SHELF.map((item, i) => (
            <MediaWindow key={item.title} {...item} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
