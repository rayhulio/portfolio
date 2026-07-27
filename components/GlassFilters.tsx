/**
 * SVG displacement filters used by .liquid-glass / .liquid-glass-dark.
 * Rendered once, hidden. feDisplacementMap bends the backdrop by a turbulence
 * field so the floral art visibly refracts through the glass.
 */
export default function GlassFilters() {
  return (
    <svg
      aria-hidden
      width="0"
      height="0"
      className="absolute"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.014"
            numOctaves={2}
            seed={14}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="38"
            xChannelSelector="R"
            yChannelSelector="G"
            result="disp"
          />
          {/* Heavy frost so the floral reads as soft glass, like Figma */}
          <feGaussianBlur in="disp" stdDeviation="9" />
        </filter>

        {/* Soft/pastel variant for the project cards */}
        <filter id="liquid-glass-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.01"
            numOctaves={2}
            seed={21}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
            result="disp"
          />
          <feGaussianBlur in="disp" stdDeviation="12" />
        </filter>

        <filter id="liquid-glass-strong" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.018"
            numOctaves={2}
            seed={7}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="26"
            xChannelSelector="R"
            yChannelSelector="G"
            result="disp"
          />
          <feGaussianBlur in="disp" stdDeviation="6" />
        </filter>
      </defs>
    </svg>
  );
}
