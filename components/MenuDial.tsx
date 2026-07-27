"use client";

/**
 * Bottom-left media-player dial — the only element that stays fixed (sticky)
 * while the page scrolls. Decorative for now (real function TBD, build spec §7).
 */
export default function MenuDial() {
  return (
    <div className="fixed bottom-6 left-6 z-40 md:bottom-10 md:left-10">
      <div className="relative grid h-[180px] w-[180px] place-items-center rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(70,26,26,0.9),rgba(18,7,7,0.78))] shadow-[0_14px_50px_rgba(0,0,0,0.55)] backdrop-blur-sm md:h-[240px] md:w-[240px]">
        {/* MENU label with the offset double-vision echo */}
        <span className="absolute top-6 font-display text-4xl leading-none tracking-widest text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] md:top-9 md:text-6xl">
          <span className="relative z-10">MENU</span>
          <span
            aria-hidden
            className="absolute inset-0 translate-x-[2px] translate-y-[2px] blur-[2px]"
          >
            MENU
          </span>
        </span>

        {/* Inner well */}
        <div className="h-[46%] w-[46%] rounded-full bg-black/25 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]" />

        {/* Transport controls */}
        <button
          aria-label="Previous"
          className="absolute left-[8%] top-1/2 -translate-y-1/2 text-white/90"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zM20 6v12l-9-6z" />
          </svg>
        </button>
        <button
          aria-label="Next"
          className="absolute right-[8%] top-1/2 -translate-y-1/2 text-white/90"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 6h2v12h-2zM4 6l9 6-9 6z" />
          </svg>
        </button>
        <button aria-label="Play" className="absolute bottom-[8%] text-white/90">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 5v14l9-7z" />
            <rect x="17" y="5" width="2.5" height="14" />
          </svg>
        </button>
      </div>
    </div>
  );
}
