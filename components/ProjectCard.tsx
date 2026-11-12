import Image from "next/image";

export type Project = {
  number: string;
  title: string;
  year: string;
  client: string;
  thumbnail?: string;
  /** "sharp" = rendered crisp (phone mockup); "blur" = frosted glass placeholder */
  thumbnailType: "sharp" | "blur";
  /** render the thumbnail as a small centered icon rather than filling the window */
  iconThumb?: boolean;
};

// Thumbnail window inset (% of card), from Figma
const T = { left: "11.48%", right: "12.89%", top: "10.23%", bottom: "22.64%" };

export default function ProjectCard({ project }: { project: Project }) {
  const { number, title, year, client, thumbnail, thumbnailType, iconThumb } = project;

  return (
    // Transparent card so the thumbnail window can reveal (and frost) the real
    // floral behind the card. The cream "mat" is drawn as strips around it.
    <article className="relative h-full w-full overflow-hidden rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] [container-type:inline-size]">
      {/* Cream mat frame with a window cut out for the thumbnail */}
      <div className="absolute inset-x-0 top-0 bg-[#f6e9cf]" style={{ height: T.top }} />
      <div className="absolute inset-x-0 bottom-0 bg-[#f6e9cf]" style={{ top: `calc(100% - ${T.bottom})` }} />
      <div className="absolute bg-[#f6e9cf]" style={{ left: 0, width: T.left, top: T.top, bottom: T.bottom }} />
      <div className="absolute bg-[#f6e9cf]" style={{ right: 0, width: T.right, top: T.top, bottom: T.bottom }} />

      {/* Taupe accent blocks (Figma #b2a08a) */}
      <span className="absolute left-0 top-[12.4%] h-[7.5%] w-[1.8%] bg-taupe shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
      <span className="absolute left-0 top-[22%] h-[7.5%] w-[1.8%] bg-taupe shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
      <span className="absolute right-0 top-[14.5%] h-[12%] w-[3.1%] bg-taupe shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
      <span className="absolute right-[3.2%] top-[52.4%] h-[26.7%] w-[9.7%] bg-taupe" />

      {/* Red stripes on the left (Figma #ff021b) */}
      <span className="absolute left-[1.75%] top-[33.9%] h-[4%] w-[9.7%] bg-red" />
      <span className="absolute left-[1.75%] top-[41.8%] h-[4%] w-[9.7%] bg-red" />

      {/* Thumbnail window — soft/pastel liquid glass frosting the floral behind
          the card (a heavier white veil keeps it soft, like Figma). */}
      <div
        className="liquid-glass-soft absolute overflow-hidden bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]"
        style={{ left: T.left, right: T.right, top: T.top, bottom: T.bottom }}
      >
        {thumbnail && iconThumb ? (
          <div className="absolute inset-0 grid place-items-center">
            <Image
              src={thumbnail}
              alt={title}
              width={200}
              height={200}
              className="h-[38%] w-[38%] object-contain"
            />
          </div>
        ) : (
          thumbnail && (
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 768px) 80vw, 460px"
              className={thumbnailType === "blur" ? "scale-110 object-cover blur-2xl" : "object-contain"}
            />
          )
        )}
      </div>

      {/* Dark label bar with title */}
      <div
        className="absolute grid place-items-center overflow-hidden bg-[rgba(14,14,14,0.85)]"
        style={{ left: T.left, right: T.right, top: "77.36%", bottom: "10.23%" }}
      >
        {/* 10.6cqw is calibrated for ~15 characters; longer labels step down so
            they never wrap or clip inside the bar. */}
        <h3
          className="relative whitespace-nowrap font-display leading-none text-white [text-shadow:0_3.3px_3.3px_rgba(0,0,0,0.25)]"
          style={{ fontSize: `min(10.6cqw, ${(160 / `${number} ${title}`.length).toFixed(2)}cqw)` }}
        >
          <span className="relative z-10">
            {number} {title}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 grid translate-x-[2px] translate-y-[2px] place-items-center whitespace-nowrap blur-[2px]"
          >
            {number} {title}
          </span>
        </h3>
      </div>

      {/* Meta row: year + client (Satoshi, taupe) */}
      <span className="absolute bottom-[1.8%] left-[3.2%] font-body text-[3.6cqw] text-taupe">
        {year}
      </span>
      <span className="absolute bottom-[1.8%] right-[8%] font-body text-[3.6cqw] text-taupe">
        {client}
      </span>
    </article>
  );
}
