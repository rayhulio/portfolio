import Nav from "@/components/Nav";
import { px } from "@/app/design";
import { Body, Heading, FloralBand } from "@/components/case-study";

/* eslint-disable @next/next/no-img-element */

const A = "/images/cntndr";

export default function CntndrPage() {
  return (
    <div className="relative overflow-x-clip bg-cream pb-[8vh]">
      <Nav />

      {/* Hero */}
      <div className="mx-auto flex flex-col items-center px-6" style={{ paddingTop: px(470), gap: px(50) }}>
        <img src={`${A}/logo.png`} alt="" style={{ width: px(250), height: "auto" }} />
        <h1 className="text-center font-display leading-none text-black" style={{ fontSize: px(130) }}>
          CNTNDR
        </h1>
        <Body maxWidth={1040}>A redesign of a music platform application</Body>
      </div>

      {/* Thin cropped floral band with natural top */}
      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(150), paddingTop: px(240) }}>
        <Body>
          When working with CNTNDR, we were tasked to design a mobile interface for their music
          battle system.
        </Body>
        <Body>
          The platform aims to provide a space for up-and-coming creators to go head to head with
          each other in a &ldquo;music battle&rdquo; with a live audience. It aims to create a new
          space where both fans and musicians can enjoy the novelty of the platform.
        </Body>
        <Body>
          We conducted a survey with 60+ respondents, 6 hour long interviews with musicians and
          content creators, and a focus group with 5 listeners
        </Body>

        <img
          src={`${A}/survey.png`}
          alt=""
          style={{ width: px(640) }}
          className="rounded-[28px] shadow-[0_8px_28px_rgba(0,0,0,0.25)]"
        />

        {/* Synthesis */}
        <div className="flex flex-col items-center" style={{ gap: px(80), marginTop: px(40) }}>
          <Heading>Synthesis</Heading>
          <Body>
            Synthesis methods centered in 3 areas: affinity mapping to surface creator and listener
            insights and pinpoint pain points in music competition apps, competitive analysis to
            identify which existing features worked and where gaps remained, and personas and journey
            maps to visualize how different types of users would navigate the CNTNDR experience.
          </Body>
        </div>
        <img
          src={`${A}/affinitymap.png`}
          alt=""
          style={{ width: px(1420) }}
          className="rounded-[12px] shadow-[0_5px_16px_rgba(0,0,0,0.12)]"
        />

        {/* Ideation */}
        <div className="flex flex-col items-center" style={{ gap: px(80), marginTop: px(40) }}>
          <Heading>Ideation</Heading>
          <Body>
            We started with braindumps and narrowed ideas as a group, moving from rough paper
            sketches to mid-fidelity Figma mockups. Key concepts that emerged: an audience meter,
            voting gestures, and a homepage designed around artist exposure.
          </Body>
        </div>
        <div className="flex flex-wrap items-end justify-center" style={{ gap: px(80) }}>
          {["ideation-1", "ideation-2", "ideation-3"].map((n) => (
            <img
              key={n}
              src={`${A}/${n}.png`}
              alt=""
              style={{ height: px(1000), width: "auto" }}
              className="rounded-[14px] shadow-[0_5px_16px_rgba(0,0,0,0.12)]"
            />
          ))}
        </div>

        {/* Prototype */}
        <div className="flex flex-col items-center" style={{ marginTop: px(60) }}>
          <Heading>Prototype</Heading>
        </div>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(70) }}>
          {["proto-1", "proto-2", "proto-3", "proto-4"].map((n) => (
            <img
              key={n}
              src={`${A}/${n}.png`}
              alt=""
              style={{ width: px(380) }}
              className="rounded-[20px] shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
