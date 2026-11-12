"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import { px, S } from "@/app/design";

const GAP = 85; // Figma px between cards
const CARD_W = 914.892;
const CARD_H = 870;
const CAROUSEL_TOP = 1371;

type P = Project & { href: string };

export default function WorkCarousel({
  projects,
  padLeft,
}: {
  projects: P[];
  padLeft: string;
}) {
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

  const step = () => (CARD_W + GAP) * S;
  const nudge = (dir: 1 | -1) =>
    ref.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  return (
    <>
      {/* Horizontal card carousel */}
      <div
        ref={ref}
        id="work"
        className="no-scrollbar absolute left-0 flex w-screen snap-x snap-mandatory overflow-x-auto scroll-smooth"
        style={{ top: px(CAROUSEL_TOP), gap: px(GAP), paddingLeft: padLeft, paddingRight: px(120) }}
      >
        {projects.map((p) => (
          <Link
            key={p.number}
            href={p.href}
            className="flex-none snap-start transition-transform hover:-translate-y-1"
            style={{ width: px(CARD_W), height: px(CARD_H) }}
          >
            <ProjectCard project={p} />
          </Link>
        ))}
      </div>

      {/* Frosted-glass progress control — sits in the composition just below the
          card row rather than pinned to the viewport. */}
      <div
        className="absolute left-1/2 z-30 flex -translate-x-1/2 items-center"
        style={{ top: px(CAROUSEL_TOP + CARD_H + 90), gap: px(70) }}
      >
        <ArrowButton dir="left" onClick={() => nudge(-1)} />
        {/* Progress track + fill (frosted white; picks up the floral behind) */}
        <div
          className="overflow-hidden rounded-full border border-white/70 bg-white/35 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-md"
          style={{ width: px(1220), height: px(100) }}
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
      className="grid place-items-center rounded-[18px] border border-white/70 bg-white/40 text-black shadow-[0_4px_10px_rgba(0,0,0,0.22)] backdrop-blur-md transition-transform hover:-translate-y-0.5 active:translate-y-0"
      style={{ width: px(114), height: px(114) }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: px(56), height: px(56) }}
        className={dir === "right" ? "-scale-x-100" : ""}
      >
        <path d="M10 3.5 1.5 12 10 20.5V14.2H21v-4.4H10z" />
      </svg>
    </button>
  );
}
