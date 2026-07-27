import localFont from "next/font/local";

// PP Neue Bit — display face for "01 RAHUL" and card labels ("02 FROLIC")
export const ppNeueBit = localFont({
  src: [
    { path: "../public/fonts/PPNeueBit-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/PPNeueBit-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

// Satoshi — body face for the tagline and nav
export const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Regular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
