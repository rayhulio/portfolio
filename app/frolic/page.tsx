import Nav from "@/components/Nav";
import { px, FRAME_W } from "@/app/design";
import { Body, Heading, Caption, FloralBand } from "@/components/case-study";

const HERO_H = 2040; // Figma px — hero region (header + splash over floral band)

const SPLASH = [
  "/images/frolic-splash-1.png",
  "/images/frolic-splash-2.png",
  "/images/frolic-splash-3.png",
  "/images/frolic-splash-4.png",
];

/* eslint-disable @next/next/no-img-element */

export default function FrolicPage() {
  return (
    <div className="relative overflow-x-hidden bg-cream pb-[8vh]">
      <Nav />

      {/* HERO — header + splash cards over a floral band */}
      <section className="relative" style={{ height: px(HERO_H) }}>
        {/* Floral band behind the splash cards */}
        <div
          className="absolute left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden"
          style={{ top: px(955), height: px(1085) }}
        >
          <img
            src="/images/background-art.png"
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </div>

        <div className="relative z-10 mx-auto" style={{ width: px(FRAME_W), height: px(HERO_H) }}>
          <img
            src="/images/frolic-logo.png"
            alt="Frolic"
            className="absolute"
            style={{ left: px(954), top: px(343), width: px(269.428), height: px(260) }}
          />
          <h1
            className="absolute -translate-x-1/2 text-center font-display leading-none text-black"
            style={{ left: px(1089), top: px(639), fontSize: px(140) }}
          >
            Frolic
          </h1>
          <p
            className="absolute -translate-x-1/2 text-center font-body text-black"
            style={{ left: px(1066), top: px(773), width: px(854), fontSize: px(60), lineHeight: 1.18 }}
          >
            An app designed to help people reconnect with the moment.
          </p>

          <div className="absolute left-1/2 flex -translate-x-1/2" style={{ top: px(1065), gap: px(92) }}>
            {SPLASH.map((src) => (
              <div
                key={src}
                className="overflow-hidden shadow-[0_5.5px_5.5px_rgba(0,0,0,0.25)]"
                style={{ width: px(384.545), height: px(832.251), borderRadius: px(41) }}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY — flowing column */}
      <div
        className="relative mx-auto flex flex-col items-center px-6"
        style={{ gap: px(150), paddingTop: px(260), paddingBottom: px(200) }}
      >
        <Body>
          The idea for Frolic was pitched to me by the director of operations at{" "}
          <strong className="font-bold">pgLang</strong>. Their idea was to make an app,
          that encouraged people to take break free from the mundane.
        </Body>

        <Body>
          My goal was to create a space to inspire users to take pictures of their
          surroundings with particular mindful notice, and reflect on that experience.
        </Body>

        <div className="flex flex-col items-center" style={{ gap: px(60), marginTop: px(80) }}>
          <Heading>Research and Considerations</Heading>
          <Body>
            My goal with research was to understand similar apps and their design systems,
            to understand what was effective. This included apps like the{" "}
            <strong className="font-bold">Apple Fitness Calendar, BeReal, and Duolingo</strong>.
            There was special attention to notification design, how to reward users, and
            overall UX flow.
          </Body>
        </div>

        {/* App icons */}
        <div className="flex items-center justify-center" style={{ gap: px(107) }}>
          <img src="/images/frolic/calendar-img.png" alt="Apple Fitness Calendar" style={{ width: px(209), height: px(236) }} className="rounded-[18px]" />
          <img src="/images/frolic/duolingo.png" alt="Duolingo" style={{ width: px(236), height: px(236) }} className="rounded-[18px]" />
          <img src="/images/frolic/bereal.png" alt="BeReal" style={{ width: px(236), height: px(236) }} className="rounded-[18px]" />
        </div>

        <Body>
          During this process, recurring themes emerged. Familiar patterns, like tab
          navigation, shouldn&apos;t be reinvented for the sake of novelty. Notification
          design needs to reflect the app&apos;s branding and drive a clear call to action.
          These insights shaped the direction, so I focused on larger icons, a simpler
          layout, and a flow centered on the act of &ldquo;frolicking&rdquo;.
        </Body>

        {/* Ideas notes card */}
        <img
          src="/images/frolic/ideation-pic.png"
          alt="Notification ideas"
          className="rounded-[20px] shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
          style={{ width: px(948) }}
        />

        <div className="flex flex-col items-center" style={{ gap: px(60), marginTop: px(80) }}>
          <Heading>Early Ideation</Heading>
          <Body>
            Here, I experimented with different layouts of the home page, understanding
            aesthetics, and how different pages would compliment each other.
          </Body>
        </div>
      </div>

      {/* Ideation board over a floral band — "top" shows the art's natural,
          irregular flower-top edge emerging from cream (not a hard mid crop). */}
      <FloralBand height={1500} objectPosition="center top">
        <IdeationBoard />
      </FloralBand>

      {/* CASE STUDY continued */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(150), marginTop: px(220) }}>
        {/* Design Decisions: Home Screen */}
        <Heading>Design Decisions: Home Screen</Heading>
        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(300) }}>
          <figure className="flex flex-col items-center" style={{ gap: px(80), width: px(620) }}>
            <img src="/images/frolic/design-dec-home-screen.png" alt="" style={{ width: px(322) }} className="rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.12)]" />
            <Caption>This layout lets you see the prompt, the last 7 days, and can navigate past weeks.</Caption>
          </figure>
          <figure className="flex flex-col items-center" style={{ gap: px(80), width: px(620) }}>
            <img src="/images/frolic/design-dec-home-screen-2.png" alt="" style={{ width: px(321) }} className="rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.12)]" />
            <Caption>Gradient colors match with the frolic of the day.</Caption>
          </figure>
        </div>

        {/* Design Decisions: Friends Tab */}
        <div className="flex flex-col items-center" style={{ gap: px(60), marginTop: px(80) }}>
          <Heading>Design Decisions: Friends Tab</Heading>
          <Body>
            The problem I faced with the friends tab design was how to split up friend
            requests, friend pages, and the leaderboard in an intuitive and simple
            interface. My solution was creating three &ldquo;swipeable&rdquo; pages.
          </Body>
        </div>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(80) }}>
          {["friend-tab-1", "friend-tab-2", "friend-tab-3"].map((n) => (
            <img key={n} src={`/images/frolic/${n}.png`} alt="" style={{ width: px(322) }} className="rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.12)]" />
          ))}
        </div>

        {/* Design Decisions: Profile Pages */}
        <div className="flex flex-col items-center" style={{ gap: px(60), marginTop: px(80) }}>
          <Heading>Design Decisions: Profile Pages</Heading>
          <Body>
            Inspired by a VSCO-esque layout, I wanted to build upon that idea by turning
            each picture into a memory by showing what you wrote on each day with just a
            tap of that card.
          </Body>
        </div>
        <img src="/images/frolic/profile-page.png" alt="" style={{ width: px(392) }} className="rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.12)]" />
      </div>
    </div>
  );
}

/** The Early-Ideation collage: frosted panel with sketches, an inspiration board,
 *  the lifesaver icon, and two home-screen mockups. Positioned per Figma (offsets
 *  relative to the 1872×920 container at frame 153,5669). */
function IdeationBoard() {
  const CW = 1872;
  const CH = 920;
  const at = (x: number, y: number, w?: number, h?: number) => ({
    left: px(x),
    top: px(y),
    ...(w ? { width: px(w) } : {}),
    ...(h ? { height: px(h) } : {}),
  });
  const label = "text-center font-body font-bold text-black";
  const labelStyle = { fontSize: px(30), lineHeight: 1.2 };

  return (
    <div
      className="relative overflow-hidden border border-white/50 bg-white/25 backdrop-blur-md"
      style={{ width: px(CW), height: px(CH), borderRadius: px(41) }}
    >
      {/* Sketch — Different Home Page Flows */}
      <img src="/images/frolic/early-ideation-sketch.png" alt="" className="absolute rounded-[14px] object-cover shadow-[0_4px_12px_rgba(0,0,0,0.15)]" style={at(234, 34, 464, 283)} />
      <div className={`absolute ${label}`} style={{ ...at(278, 327, 375), ...labelStyle }}>Different Home Page Flows</div>

      {/* Inspiration — Frutiger Aero */}
      <img src="/images/frolic/frutiger-aero.png" alt="" className="absolute rounded-[14px] object-cover shadow-[0_4px_12px_rgba(0,0,0,0.15)]" style={at(222, 495, 488, 274)} />
      <div className={`absolute ${label}`} style={{ ...at(292, 773, 346), ...labelStyle }}>Inspiration: Frutiger Aero</div>

      {/* Lifesaver icon */}
      <div className="absolute rounded-full" style={{ ...at(818, 152, 179, 179), background: "radial-gradient(circle at 40% 35%, #cdeaf2, #9fd0dd)" }} />
      <div className="absolute rounded-full" style={{ ...at(865, 199, 86, 86), background: "radial-gradient(circle at 40% 35%, #c3e59a, #9ccc65)" }} />
      <div className={`absolute ${label}`} style={{ ...at(798, 341, 219), ...labelStyle }}>Lifesaver icons; elicit curiosity</div>

      {/* Home-screen mockups */}
      <img src="/images/frolic/homescreen-1.png" alt="" className="absolute rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]" style={at(1159, 176, 256, 568)} />
      <img src="/images/frolic/homescreen-2.png" alt="" className="absolute rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]" style={at(1453, 176, 263, 568)} />
      <div className={`absolute ${label}`} style={{ ...at(1079, 773, 375), ...labelStyle }}>Tap to see past Frolic</div>

      {/* Connector arrows (approximate) */}
      <svg className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }} viewBox={`0 0 ${CW} ${CH}`} fill="none">
        <path d={`M ${1200} ${790} Q ${1150} ${650} ${1230} ${560}`} stroke="#333" strokeWidth={2.5} />
        <path d={`M ${1470} ${720} Q ${1520} ${620} ${1560} ${560}`} stroke="#333" strokeWidth={2.5} />
      </svg>
    </div>
  );
}
