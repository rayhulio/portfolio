"use client";

import { useState } from "react";

/**
 * The CD disc that stands in for the "0". On hover it grows slightly and spins
 * up then slows to a stop — each hover adds two full turns to an ever-increasing
 * angle (so it never snaps back), eased accelerate→decelerate.
 */
export default function CdDisc({
  src,
  size,
  className = "",
}: {
  src: string;
  size: string;
  className?: string;
}) {
  const [turns, setTurns] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className={`shrink-0 will-change-transform ${className}`}
      onMouseEnter={() => {
        setHover(true);
        setTurns((t) => t + 2);
      }}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        rotate: `${turns * 360}deg`,
        scale: hover ? "1.08" : "1",
        transition:
          "rotate var(--duration-spin) var(--ease-spin), scale var(--duration-base) ease-out",
      }}
    />
  );
}
