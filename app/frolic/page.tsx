import { px } from "@/app/design";
import { CaseStudy, CaseHeader, Body, Caption, Section, SubSection, FloralBand } from "@/components/case-study";

const SPLASH = [
  "/images/frolic-splash-1.png",
  "/images/frolic-splash-2.png",
  "/images/frolic-splash-3.png",
  "/images/frolic-splash-4.png",
];

/* eslint-disable @next/next/no-img-element */

export default function FrolicPage() {
  return (
    <CaseStudy>

      <CaseHeader
        logo={{ src: "/images/frolic-logo.png", alt: "Frolic", height: 190 }}
        headline="Designing a mindful photo-a-day app that helps people reconnect with the moment"
        meta={{ team: ["1 Designer (Me)", "pgLang operations director"], timeline: ["2026"], role: ["Product Designer"] }}
      >
        An app designed to help people reconnect with the moment.
      </CaseHeader>

      {/* Splash cards over a floral band */}
      <section className="relative" style={{ marginTop: "var(--cs-gap-block)", ["--splash-w" as string]: px(384.545) }}>
        <img
          src="/images/background-art.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="no-scrollbar relative flex snap-x overflow-x-auto"
          style={{ gap: px(92), paddingTop: px(110), paddingBottom: px(143), paddingLeft: "10vw", paddingRight: "10vw" }}
        >
          {SPLASH.map((src) => (
            <div
              key={src}
              className="aspect-[384.545/832.251] w-[46vw] flex-none snap-center overflow-hidden rounded-[7%/3.2%] shadow-ui md:w-[var(--splash-w)]"
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <Section title="Overview">
        <SubSection title="Turning a pgLang Pitch Into an App That Helps People Break Free From the Mundane">
          <Body>
            The idea for Frolic was pitched to me by the director of operations at{" "}
            <strong className="font-bold">pgLang</strong>. Their idea was to make an app,
            that encouraged people to take break free from the mundane.
          </Body>
          <Body>
            My goal was to create a space to inspire users to take pictures of their
            surroundings with particular mindful notice, and reflect on that experience.
          </Body>
        </SubSection>
      </Section>

      <Section title="Research">
        <SubSection title="Studying Apple Fitness Calendar, BeReal, and Duolingo to Learn What Keeps Users Engaged">
          <Body>
            My goal with research was to understand similar apps and their design systems,
            to understand what was effective. This included apps like the{" "}
            <strong className="font-bold">Apple Fitness Calendar, BeReal, and Duolingo</strong>.
            There was special attention to notification design, how to reward users, and
            overall UX flow.
          </Body>
          <div className="flex w-full items-center justify-center" style={{ gap: px(107) }}>
            <img src="/images/frolic/calendar-img.png" alt="Apple Fitness Calendar" style={{ width: px(209), height: px(236) }} className="rounded-control" />
            <img src="/images/frolic/duolingo.png" alt="Duolingo" style={{ width: px(236), height: px(236) }} className="rounded-control" />
            <img src="/images/frolic/bereal.png" alt="BeReal" style={{ width: px(236), height: px(236) }} className="rounded-control" />
          </div>
          <Body>
            During this process, recurring themes emerged. Familiar patterns, like tab
            navigation, shouldn&apos;t be reinvented for the sake of novelty. Notification
            design needs to reflect the app&apos;s branding and drive a clear call to action.
            These insights shaped the direction, so I focused on larger icons, a simpler
            layout, and a flow centered on the act of &ldquo;frolicking&rdquo;.
          </Body>
          <img
            src="/images/frolic/ideation-pic.png"
            alt="Notification ideas"
            className="self-center rounded-media shadow-media"
            style={{ width: px(948) }}
          />
        </SubSection>
      </Section>

      <Section title="Ideation">
        <SubSection title="Experimenting With Home Page Layouts and Frutiger Aero Inspiration">
          <Body>
            Here, I experimented with different layouts of the home page, understanding
            aesthetics, and how different pages would compliment each other.
          </Body>
          {/* Ideation board over a floral band — "top" shows the art's natural,
              irregular flower-top edge emerging from cream (not a hard mid crop). */}
          <FloralBand height={1500} objectPosition="center top">
            <IdeationBoard />
          </FloralBand>
        </SubSection>
      </Section>

      <Section title="Prototyping">
        <SubSection title="Designing a Home Screen That Shows the Prompt, the Last 7 Days, and Past Weeks">
          <div className="flex w-full flex-wrap items-start justify-center" style={{ gap: px(300) }}>
            <figure className="flex flex-col items-start" style={{ gap: "var(--cs-gap-group)", width: px(620) }}>
              <img src="/images/frolic/design-dec-home-screen.png" alt="" style={{ width: px(322) }} className="rounded-media shadow-media" />
              <Caption>This layout lets you see the prompt, the last 7 days, and can navigate past weeks.</Caption>
            </figure>
            <figure className="flex flex-col items-start" style={{ gap: "var(--cs-gap-group)", width: px(620) }}>
              <img src="/images/frolic/design-dec-home-screen-2.png" alt="" style={{ width: px(321) }} className="rounded-media shadow-media" />
              <Caption>Gradient colors match with the frolic of the day.</Caption>
            </figure>
          </div>
        </SubSection>

        <SubSection title="Splitting Friend Requests, Friend Pages, and the Leaderboard Into Three Swipeable Pages">
          <Body>
            The problem I faced with the friends tab design was how to split up friend
            requests, friend pages, and the leaderboard in an intuitive and simple
            interface. My solution was creating three &ldquo;swipeable&rdquo; pages.
          </Body>
          <div className="flex w-full flex-wrap items-center justify-center" style={{ gap: "var(--cs-gap-group)" }}>
            {["friend-tab-1", "friend-tab-2", "friend-tab-3"].map((n) => (
              <img key={n} src={`/images/frolic/${n}.png`} alt="" style={{ width: px(322) }} className="rounded-media shadow-media" />
            ))}
          </div>
        </SubSection>

        <SubSection title="Turning Every Picture Into a Memory With VSCO-Inspired Profile Pages">
          <Body>
            Inspired by a VSCO-esque layout, I wanted to build upon that idea by turning
            each picture into a memory by showing what you wrote on each day with just a
            tap of that card.
          </Body>
          <img src="/images/frolic/profile-page.png" alt="" style={{ width: px(392) }} className="self-center rounded-media shadow-media" />
        </SubSection>
      </Section>
    </CaseStudy>
  );
}

/** The Early-Ideation collage: frosted panel with sketches, an inspiration board,
 *  the lifesaver icon, and two home-screen mockups. Positioned per Figma (offsets
 *  relative to the 1872×920 container at frame 153,5669). */
function IdeationBoard() {
  // Local unit: the collage never exceeds the viewport width on small screens.
  const bp = (n: number) => `calc(${n} * var(--bu))`;
  const CW = 1872;
  const CH = 920;
  const at = (x: number, y: number, w?: number, h?: number) => ({
    left: bp(x),
    top: bp(y),
    ...(w ? { width: bp(w) } : {}),
    ...(h ? { height: bp(h) } : {}),
  });
  const label = "text-center font-body font-bold text-black";
  const labelStyle = { fontSize: `calc(${bp(30)} - 2px)`, lineHeight: "var(--cs-leading)" };

  return (
    <div
      className="relative overflow-hidden border border-white/50 bg-white/25 backdrop-blur-md"
      style={{ ["--bu" as string]: "min(var(--u), calc((100vw - 2rem) / 1872))", width: bp(CW), height: bp(CH), borderRadius: bp(41) }}
    >
      {/* Sketch — Different Home Page Flows */}
      <img src="/images/frolic/early-ideation-sketch.png" alt="" className="absolute rounded-media-sm object-cover shadow-media" style={at(234, 34, 464, 283)} />
      <div className={`absolute ${label}`} style={{ ...at(278, 327, 375), ...labelStyle }}>Different Home Page Flows</div>

      {/* Inspiration — Frutiger Aero */}
      <img src="/images/frolic/frutiger-aero.png" alt="" className="absolute rounded-media-sm object-cover shadow-media" style={at(222, 495, 488, 274)} />
      <div className={`absolute ${label}`} style={{ ...at(292, 773, 346), ...labelStyle }}>Inspiration: Frutiger Aero</div>

      {/* Lifesaver icon */}
      <div className="absolute rounded-full" style={{ ...at(818, 152, 179, 179), background: "radial-gradient(circle at 40% 35%, #cdeaf2, #9fd0dd)" }} />
      <div className="absolute rounded-full" style={{ ...at(865, 199, 86, 86), background: "radial-gradient(circle at 40% 35%, #c3e59a, #9ccc65)" }} />
      <div className={`absolute ${label}`} style={{ ...at(798, 341, 219), ...labelStyle }}>Lifesaver icons; elicit curiosity</div>

      {/* Home-screen mockups */}
      <img src="/images/frolic/homescreen-1.png" alt="" className="absolute rounded-control shadow-media" style={at(1159, 176, 256, 568)} />
      <img src="/images/frolic/homescreen-2.png" alt="" className="absolute rounded-control shadow-media" style={at(1453, 176, 263, 568)} />
      <div className={`absolute ${label}`} style={{ ...at(1079, 773, 375), ...labelStyle }}>Tap to see past Frolic</div>

      {/* Connector arrows (approximate) */}
      <svg className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }} viewBox={`0 0 ${CW} ${CH}`} fill="none">
        <path d={`M ${1200} ${790} Q ${1150} ${650} ${1230} ${560}`} stroke="#333" strokeWidth={2.5} />
        <path d={`M ${1470} ${720} Q ${1520} ${620} ${1560} ${560}`} stroke="#333" strokeWidth={2.5} />
      </svg>
    </div>
  );
}
