import { px } from "@/app/design";
import { CaseStudy, CaseHeader, Body, Section, SubSection, FloralBand, EdgeBars } from "@/components/case-study";

/* eslint-disable @next/next/no-img-element */

const A = "/images/cntndr";

export default function CntndrPage() {
  return (
    <CaseStudy>

      <CaseHeader
        logo={{ src: `${A}/logo.png`, alt: "CNTNDR", height: 190 }}
        headline="Redesigning a music battle platform for creators and live audiences"
        meta={{ team: ["Student team"], timeline: ["2026"], role: ["UX Designer", "UX Researcher"] }}
      >
        A redesign of CNTNDR, a music platform application where up-and-coming creators go head to head in live music battles.
      </CaseHeader>

      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      <Section title="Overview">
        <SubSection title="Designing a Mobile Interface for CNTNDR&rsquo;s Music Battle System">
          <Body>
            When working with CNTNDR, we were tasked to design a mobile interface for their music
            battle system.
          </Body>
          <Body>
            The platform aims to provide a space for up-and-coming creators to go head to head with
            each other in a &ldquo;music battle&rdquo; with a live audience. It aims to create a new
            space where both fans and musicians can enjoy the novelty of the platform.
          </Body>
        </SubSection>
      </Section>

      <EdgeBars side="left" />

      <Section title="Research">
        <SubSection title="Surveying 60+ Respondents and Talking With Musicians, Creators, and Listeners">
          <Body>
            We conducted a survey with 60+ respondents, 6 hour long interviews with musicians and
            content creators, and a focus group with 5 listeners
          </Body>
          <img
            src={`${A}/survey.png`}
            alt=""
            style={{ width: px(640) }}
            className="self-center rounded-media-lg shadow-media-lg"
          />
        </SubSection>
      </Section>

      <EdgeBars side="right" />

      <Section title="Extracting Insights">
        <SubSection title="Synthesizing Creator and Listener Pain Points Through Affinity Maps, Competitive Analysis, and Personas">
          <Body>
            Synthesis methods centered in 3 areas: affinity mapping to surface creator and listener
            insights and pinpoint pain points in music competition apps, competitive analysis to
            identify which existing features worked and where gaps remained, and personas and journey
            maps to visualize how different types of users would navigate the CNTNDR experience.
          </Body>
          <img
            src={`${A}/affinitymap.png`}
            alt=""
            style={{ width: "var(--cs-w)" }}
            className="self-center rounded-media-sm shadow-media"
          />
        </SubSection>
      </Section>

      <Section title="Ideation">
        <SubSection title="Moving From Braindumps and Paper Sketches to Mid-Fidelity Mockups">
          <Body>
            We started with braindumps and narrowed ideas as a group, moving from rough paper
            sketches to mid-fidelity Figma mockups. Key concepts that emerged: an audience meter,
            voting gestures, and a homepage designed around artist exposure.
          </Body>
          <div className="flex w-full flex-wrap items-end justify-center" style={{ gap: "var(--cs-gap-group)" }}>
            {["ideation-1", "ideation-2", "ideation-3"].map((n) => (
              <img
                key={n}
                src={`${A}/${n}.png`}
                alt=""
                style={{ height: px(1000), width: "auto" }}
                className="rounded-media-sm shadow-media"
              />
            ))}
          </div>
        </SubSection>
      </Section>

      <Section title="Prototyping">
        <SubSection title="Prototyping the Mobile Music Battle Experience">
          <div className="flex w-full flex-wrap items-center justify-center" style={{ gap: "var(--cs-gap-tight)" }}>
            {["proto-1", "proto-2", "proto-3", "proto-4"].map((n) => (
              <img
                key={n}
                src={`${A}/${n}.png`}
                alt=""
                style={{ width: px(380) }}
                className="rounded-media shadow-media-lg"
              />
            ))}
          </div>
        </SubSection>
      </Section>
    </CaseStudy>
  );
}
