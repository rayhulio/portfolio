import Nav from "@/components/Nav";
import { px } from "@/app/design";

/* Shared building blocks for case-study pages. ALL case-study type uses the
   --cs-* tokens (globals.css) so it can be retuned in one place. */

/** Page shell: cream canvas, primary nav, bottom breathing room. */
export function CaseStudy({ children }: { children: React.ReactNode }) {
  return (
    <div className="case-study relative overflow-x-clip bg-cream pb-[8vh]">
      <Nav />
      {children}
    </div>
  );
}

/** Page title (H1) — PP Neue Bit, centered. */
export function Title({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <h1
      className={`${align === "left" ? "text-left" : "text-center"} font-display leading-none text-black`}
      style={{ fontSize: "var(--cs-title)" }}
    >
      {children}
    </h1>
  );
}


export function Body({
  children,
  maxWidth,
}: {
  children: React.ReactNode;
  /** Figma px; omit for the standard reading measure (--cs-body-w = 80vw). */
  maxWidth?: number;
}) {
  return (
    <p
      className="text-left font-body text-black"
      style={{ maxWidth: maxWidth ? px(maxWidth) : "var(--cs-body-w)", fontSize: "var(--cs-body)", lineHeight: "var(--cs-leading)" }}
    >
      {children}
    </p>
  );
}

/** Broad section (primary heading) — a PARENT container for its sub-sections.
 *  PP Neue Bit, same face as the home tagline, slightly smaller. */
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section
      className="mx-auto flex w-[var(--cs-w)] flex-col items-start"
      style={{ marginTop: "var(--cs-gap-chapter)", gap: "var(--cs-gap-sub)" }}
    >
      <h2
        className="text-left font-display leading-none text-black"
        style={{ fontSize: "var(--cs-section)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Sub-section (secondary heading) — a descriptive, project-specific title with
 *  its supporting content directly beneath. Satoshi bold, slightly larger than
 *  the broad section heading. */
export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start" style={{ gap: "var(--cs-gap-tight)" }}>
      <h3
        className="text-left font-body font-bold leading-tight text-black"
        style={{ fontSize: "var(--cs-subsection)" }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-left font-body text-black"
      style={{ maxWidth: px(950), fontSize: "var(--cs-caption)", lineHeight: "var(--cs-leading)" }}
    >
      {children}
    </p>
  );
}

/** Full-bleed floral band used as a section backdrop. objectPosition "top"
 *  shows the art's natural, irregular flower-top edge emerging from cream. */
export function FloralBand({
  children,
  height,
  objectPosition = "center 35%",
}: {
  children?: React.ReactNode;
  height: number;
  objectPosition?: string;
}) {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/background-art.png"
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </div>
      <div className="mx-auto flex items-center justify-center" style={{ minHeight: px(height) }}>
        {children}
      </div>
    </section>
  );
}

/** A labelled icon (circular research-method / etc. icons). */
export function IconFigure({
  src,
  label,
  size = 236,
}: {
  src: string;
  label: React.ReactNode;
  size?: number;
}) {
  return (
    <figure className="flex flex-col items-start" style={{ gap: "var(--cs-gap-xs)", width: px(size + 80) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={{ width: px(size), height: px(size) }} />
      <figcaption className="text-left font-body text-black" style={{ fontSize: "var(--cs-caption)", lineHeight: "var(--cs-leading)" }}>
        {label}
      </figcaption>
    </figure>
  );
}

/** Two red accent bars that bleed off a viewport edge (Figma #ff021b). */
export function EdgeBars({ side }: { side: "left" | "right" }) {
  return (
    <div className="pointer-events-none relative left-1/2 h-0 w-screen -translate-x-1/2">
      <div
        className="absolute flex flex-col"
        style={{ [side]: 0, top: 0, gap: px(90) } as React.CSSProperties}
      >
        <span className="bg-red" style={{ width: px(240), height: px(90) }} />
        <span className="bg-red" style={{ width: px(240), height: px(90) }} />
      </div>
    </div>
  );
}

/** A numbered recommendation: red circle + bold title + body, left-aligned. */
export function NumberedStep({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start" style={{ gap: "var(--cs-gap-tight)", maxWidth: "var(--cs-body-w)" }}>
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-red font-body font-bold text-white"
        style={{ width: px(90), height: px(90), fontSize: "var(--cs-caption)" }}
      >
        {n}
      </span>
      <div className="flex flex-col" style={{ gap: px(24) }}>
        <h3 className="font-body font-bold text-black" style={{ fontSize: "var(--cs-subheading)" }}>
          {title}
        </h3>
        <p className="font-body text-black" style={{ fontSize: "var(--cs-body)", lineHeight: "var(--cs-leading)" }}>
          {children}
        </p>
      </div>
    </div>
  );
}


/** Project facts for the header's right column. */
export type CaseMeta = { team: string[]; timeline: string[]; role: string[] };

/**
 * Case-study opening: logo → action-oriented headline ("-ing" verb) → summary on
 * the left; Team / Timeline / Role on the right. Stacks on mobile. Labels use
 * --cs-subheading (bold), values --cs-caption.
 */
export function CaseHeader({
  logo,
  headline,
  children,
  meta,
}: {
  logo?: { src: string; alt?: string; height?: number };
  headline: React.ReactNode;
  children: React.ReactNode;
  meta: CaseMeta;
}) {
  const groups = [
    ["Team", meta.team],
    ["Timeline", meta.timeline],
    ["Role", meta.role],
  ] as const;

  return (
    <header
      className="mx-auto grid md:grid-cols-[2.6fr_1fr]"
      style={{
        width: "var(--cs-w)",
        paddingTop: "max(7rem, " + px(430) + ")",
        columnGap: px(110),
        rowGap: px(120),
      }}
    >
      <div className="flex flex-col items-start" style={{ gap: px(60) }}>
        {logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo.src}
            alt={logo.alt ?? ""}
            className="w-auto max-w-full"
            style={{ height: px(logo.height ?? 190) }}
          />
        )}
        <h1
          className="font-display leading-[1.05] text-black"
          style={{ fontSize: "var(--cs-headline)" }}
        >
          {headline}
        </h1>
        <p className="font-body text-black" style={{ fontSize: "var(--cs-body)", lineHeight: "var(--cs-leading)" }}>
          {children}
        </p>
      </div>

      <dl className="flex flex-col md:pt-[var(--meta-pt)]" style={{ gap: px(70), ["--meta-pt" as string]: logo ? px(250) : 0 }}>
        {groups.map(([label, items]) => (
          <div key={label} className="flex flex-col" style={{ gap: px(8) }}>
            <dt className="font-body font-bold text-black" style={{ fontSize: "var(--cs-meta-label)" }}>
              {label}
            </dt>
            {items.map((item) => (
              <dd key={item} className="font-body text-black" style={{ fontSize: "var(--cs-meta)", lineHeight: "var(--cs-leading)" }}>
                {item}
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </header>
  );
}
