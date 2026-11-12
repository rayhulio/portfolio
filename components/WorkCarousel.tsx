"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import { px } from "@/app/design";


type P = Project & { href: string };

/** Project card row + frosted progress control.
 *  ≥ md: absolutely placed in the composition. < md: normal flow, cards ~78vw. */
export default function WorkCarousel({ projects }: { projects: P[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Scroll by exactly one card (measured, so it's correct at every breakpoint).
  const nudge = (dir: 1 | -1) => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <>
      {/* Horizontal card carousel */}
      <div
        ref={ref}
        id="work"
        className="no-scrollbar relative flex w-full scroll-mt-8 snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 md:absolute md:left-0 md:top-[var(--car-top)] md:w-screen md:pb-0"
        style={{
          gap: `min(5vw, ${px(85)})`,
          paddingLeft: "var(--carousel-pad-left)",
          paddingRight: "var(--gutter)",
        }}
      >
        {projects.map((p) => (
          <Link
            key={p.number}
            href={p.href}
            className="aspect-[914.892/870] w-[78vw] max-w-[26rem] flex-none snap-start transition-transform duration-[var(--duration-base)] hover:-translate-y-1 md:w-[var(--card-w)] md:max-w-none"
          >
            <ProjectCard project={p} />
          </Link>
        ))}
      </div>

      {/* Frosted-glass progress control */}
      <div
        className="relative z-30 mx-auto mt-6 flex items-center justify-center gap-3 px-[var(--gutter)] md:absolute md:left-1/2 md:top-[var(--ctl-top)] md:mt-0 md:-translate-x-1/2 md:gap-[var(--ctl-gap)] md:px-0"
      >
        <ArrowButton dir="left" onClick={() => nudge(-1)} />
        <div
          className="glass-control h-11 min-w-0 flex-1 overflow-hidden rounded-full md:h-[var(--track-h)] md:w-[var(--track-w)] md:flex-none"
        >
          <div
            className="h-full rounded-full bg-white/50 transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(progress * 100, 8)}%` }}
          />
        </div>
        <ArrowButton dir="right" onClick={() => nudge(1)} />
      </div>
    </>
  );
}

function ArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Previous project" : "Next project"}
      onClick={onClick}
      className="glass-control grid size-11 shrink-0 place-items-center rounded-control text-black transition-transform hover:-translate-y-0.5 active:translate-y-0 md:size-[var(--arrow)]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`size-6 md:size-[var(--arrow-icon)] ${dir === "right" ? "-scale-x-100" : ""}`}
      >
        <path d="M10 3.5 1.5 12 10 20.5V14.2H21v-4.4H10z" />
      </svg>
    </button>
  );
}
