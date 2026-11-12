import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero, { HeroMobile, Tagline } from "@/components/Hero";
import { type Project } from "@/components/ProjectCard";
import WorkCarousel from "@/components/WorkCarousel";
import { px, FRAME_W, FRAME_H, CAROUSEL_VARS } from "@/app/design";

const PROJECTS: (Project & { href: string })[] = [
  {
    number: "02",
    title: "FROLIC",
    year: "[2026]",
    client: "Frolic Labs",
    thumbnail: "/images/frolic-home.png",
    thumbnailType: "sharp",
    href: "/frolic",
  },
  {
    number: "03",
    title: "GOOGLE",
    year: "[2026]",
    client: "Google Workspace",
    thumbnail: "/images/google/google-logo.png",
    thumbnailType: "sharp",
    iconThumb: true,
    href: "/google",
  },
  {
    number: "04",
    title: "SALT & STRAW",
    year: "[2026]",
    client: "Salt & Straw",
    thumbnail: "/images/salt-and-straw/salt-and-straw-logo.png",
    thumbnailType: "sharp",
    iconThumb: true,
    href: "/salt-and-straw",
  },
  {
    number: "05",
    title: "CNTNDR",
    year: "[2026]",
    client: "CNTNDR",
    thumbnail: "/images/cntndr/logo.png",
    thumbnailType: "sharp",
    iconThumb: true,
    href: "/cntndr",
  },
  {
    number: "06",
    title: "SELF DRIVING",
    year: "[2026]",
    client: "Major Automative OEM",
    thumbnailType: "blur",
    href: "/self-driving",
  },
];

export default function Home() {
  return (
    <div
      id="top"
      className="home-scale relative overflow-x-clip md:min-h-[var(--frame-h)]"
      style={{ ...CAROUSEL_VARS, ["--frame-h" as string]: px(FRAME_H) }}
    >
      <Background />
      <Nav />

      {/* ≥ md: centered composition frame — hero positioned at exact Figma px */}
      <div className="relative mx-auto hidden md:block" style={{ width: px(FRAME_W), height: px(FRAME_H) }}>
        <Hero />
      </div>

      {/* < md: stacked hero, then the floral band with tagline + carousel.
          On ≥ md the wrapper is display:contents so the carousel positions
          itself inside the composition above. */}
      <HeroMobile />
      <div className="relative bg-cream bg-[url('/images/background-art.png')] bg-[length:100%_auto] bg-top bg-no-repeat pb-12 pt-[28vw] md:contents">
        <Tagline className="mx-auto mb-10 max-w-[22rem] px-4 text-[clamp(1.75rem,8.5vw,2.5rem)] md:hidden" />
        <WorkCarousel projects={PROJECTS} />
      </div>
    </div>
  );
}
