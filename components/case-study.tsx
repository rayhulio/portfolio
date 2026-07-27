import { px } from "@/app/design";

/* Shared building blocks for case-study pages (Frolic, Google, …). */

export function Body({
  children,
  maxWidth = 1500,
}: {
  children: React.ReactNode;
  maxWidth?: number;
}) {
  return (
    <p
      className="mx-auto text-center font-body text-black"
      style={{ maxWidth: px(maxWidth), fontSize: px(56), lineHeight: 1.4 }}
    >
      {children}
    </p>
  );
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center font-body font-bold text-black" style={{ fontSize: px(64) }}>
      {children}
    </h2>
  );
}

export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mx-auto text-center font-body text-black"
      style={{ maxWidth: px(950), fontSize: px(46), lineHeight: 1.35 }}
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
    <figure className="flex flex-col items-center" style={{ gap: px(40), width: px(size + 80) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={{ width: px(size), height: px(size) }} />
      <figcaption className="text-center font-body text-black" style={{ fontSize: px(48), lineHeight: 1.2 }}>
        {label}
      </figcaption>
    </figure>
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
    <div className="flex items-start" style={{ gap: px(70), maxWidth: px(1500) }}>
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-red font-body font-bold text-white"
        style={{ width: px(90), height: px(90), fontSize: px(48) }}
      >
        {n}
      </span>
      <div className="flex flex-col" style={{ gap: px(24) }}>
        <h3 className="font-body font-bold text-black" style={{ fontSize: px(58) }}>
          {title}
        </h3>
        <p className="font-body text-black" style={{ fontSize: px(52), lineHeight: 1.4 }}>
          {children}
        </p>
      </div>
    </div>
  );
}
