import Background from "@/components/Background";
import GlassFilters from "@/components/GlassFilters";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { type Project } from "@/components/ProjectCard";
import WorkCarousel from "@/components/WorkCarousel";
import { px, FRAME_W, FRAME_H } from "@/app/design";

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
  {
    number: "07",
    title: "ILLUSTRATIONS",
    year: "[2026]",
    client: "Personal",
    thumbnail: "/images/illustrations/fka-twigs.webp",
    thumbnailType: "sharp",
    href: "/illustrations",
  },
];

export default function Home() {
  // Left inset so the carousel's first card aligns with the centered frame,
  // while the row itself spans the full viewport and bleeds off the right edge.
  const carouselPadLeft = `max(${px(34)}, calc((100vw - ${px(FRAME_W)}) / 2 + ${px(34)}))`;

  return (
    <div id="top" className="relative overflow-x-clip" style={{ minHeight: px(FRAME_H) }}>
      <GlassFilters />
      <Background />
      <Nav />

      {/* Centered composition frame — hero positioned at exact Figma px */}
      <div className="relative mx-auto" style={{ width: px(FRAME_W), height: px(FRAME_H) }}>
        <Hero />
      </div>

      {/* Work carousel + fixed frosted progress control */}
      <WorkCarousel projects={PROJECTS} padLeft={carouselPadLeft} />
    </div>
  );
}
