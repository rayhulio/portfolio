import { px } from "@/app/design";
import { CaseStudy, CaseHeader, Body, Section, SubSection, FloralBand, EdgeBars } from "@/components/case-study";

/* eslint-disable @next/next/no-img-element */

const A = "/images/self-driving";

function Img({ src, width, className = "" }: { src: string; width: number; className?: string }) {
  return (
    <img
      src={`${A}/${src}`}
      alt=""
      style={{ width: width >= 1100 ? "var(--cs-w)" : px(width) }}
      className={`rounded-media-sm shadow-media ${className}`}
    />
  );
}

function LabeledImg({ src, label, width }: { src: string; label: string; width: number }) {
  return (
    <figure className="flex flex-col items-center self-center" style={{ gap: "var(--cs-gap-xs)" }}>
      <Img src={src} width={width} />
      <figcaption className="text-left font-body text-black" style={{ fontSize: "var(--cs-caption)" }}>
        {label}
      </figcaption>
    </figure>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 64 24"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      style={{ width: px(120), height: px(44) }}
    >
      {dir === "left" ? (
        <path d="M63 12 H10 M10 12 L20 5 M10 12 L20 19" />
      ) : (
        <path d="M1 12 H54 M54 12 L44 5 M54 12 L44 19" />
      )}
    </svg>
  );
}

/** A prototype widget image flanked by annotated callouts (arrows point at it). */
function AnnotatedWidget({
  src,
  imgSide,
  width,
  notes,
}: {
  src: string;
  imgSide: "left" | "right";
  width: number;
  notes: string[];
}) {
  const arrowDir = imgSide === "left" ? "left" : "right";
  const callouts = (
    <div className="flex flex-col justify-center" style={{ gap: "var(--cs-gap-group)" }}>
      {notes.map((n, i) => (
        <div
          key={i}
          className={`flex items-center ${imgSide === "right" ? "flex-row-reverse" : ""}`}
          style={{ gap: px(30) }}
        >
          <Arrow dir={arrowDir} />
          <p
            className="font-body text-black"
            style={{
              fontSize: "var(--cs-caption)",
              lineHeight: "var(--cs-leading)",
              maxWidth: px(560),
              textAlign: imgSide === "right" ? "right" : "left",
            }}
          >
            {n}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <div
      className={`flex w-full flex-wrap items-center justify-center ${imgSide === "right" ? "flex-row-reverse" : ""}`}
      style={{ gap: "var(--cs-gap-tight)" }}
    >
      <Img src={src} width={width} />
      {callouts}
    </div>
  );
}

export default function SelfDrivingPage() {
  return (
    <CaseStudy>

      <CaseHeader
        logo={{ src: `${A}/car-header.png`, alt: "", height: 190 }}
        headline="Prototyping the future of self-driving interfaces for a major automotive OEM"
        meta={{ team: ["Student team"], timeline: ["2026"], role: ["UI Designer", "Prototyper"] }}
      >
        UI and prototyping design for the future of self-driving for a major automotive client.
      </CaseHeader>

      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      <Section title="Overview">
        <SubSection title="Answering a Confidential Automotive Client&rsquo;s Call for a Level 5 Self-Driving Experience">
          <Body>
            We were reached out to by a confidential automative client with a broad goal in mind. By
            2035 it&rsquo;s expected that industry leaders will be able to produce level 5 self-driving
            cars. With that comes the need for an equally compelling user experience.
          </Body>
        </SubSection>
        <SubSection title="Defining Our Scope: Shared Autonomous Rides in 2035">
          <Body>
            <strong className="font-bold">Our project and scope:</strong> How might we reimagine the
            shared autonomous vehicle experience for shared vehicle users in 2035, integrating safety,
            human connection, and personalized experiences?
          </Body>
        </SubSection>
      </Section>

      <EdgeBars side="left" />

      <Section title="Research">
        <SubSection title="Diving Into the Problem Space to Narrow Down Who We Should Design For">
          <Body>
            First, we decided to narrow down our scope on what user group we should design for.
          </Body>
          <Img src="urban-fam.png" width={1150} className="self-center !shadow-none" />
        </SubSection>

        <SubSection title="Identifying Market Trends, Attitudes, and Readiness for Fully Autonomous Driving">
          <Body>
            Our research aimed to identify market trends and consumer experiences for in-car
            experiences; Understand attitudes, concerns, and readiness for fully autonomous driving;
            and pinpoint opportunities for new interactions.
          </Body>
          <Img src="methods.png" width={1400} className="self-center !shadow-none" />
        </SubSection>

        <SubSection title="Asking About Favorite Public Transit Features to Imagine Seats Facing Each Other">
          <Img src="shared-participants.png" width={1320} className="self-center !shadow-none" />
          <Body>
            Our research specifically aimed to uncover more about what people thought about their
            current driving experiences, and a bit of a different question. &ldquo;What would you enjoy
            in a car experience if all the seats faced each other&rdquo; was the question we were
            trying to ask. But to phrase it in a relatable way, we asked people about their favorite
            public transit features when traveling with friends.
          </Body>
        </SubSection>
      </Section>

      <EdgeBars side="right" />

      <Section title="Extracting Insights">
        <SubSection title="Creating Personas to Understand Who Might Be Riding and in What Situations">
          <Body>
            To synthesize this research, we decided to create different user personas to first get an
            understanding of who might be using this, and what situations they may be in.
          </Body>
          <figure className="flex w-full flex-col items-center" style={{ gap: "var(--cs-gap-xs)" }}>
            <Img src="personas.png" width={1700} className="self-center !shadow-none" />
            <figcaption className="flex w-full justify-around font-body text-black" style={{ fontSize: "var(--cs-body)" }}>
              <span>A middle aged family man.</span>
              <span>A college student.</span>
            </figcaption>
          </figure>
        </SubSection>

        <SubSection title="Mapping the Emotional Journey With and Without an Autonomous Vehicle">
          <Body>
            The next step was creating Journey Maps with more updated, refined personas based on
            additional research and insights. These were important specifically because they documented{" "}
            <strong className="font-bold">the difference</strong> between an emotional journey with an
            autonomous vehicle vs. without one.
          </Body>
          <Img src="journeymap.png" width={1720} className="self-center" />
        </SubSection>

        <SubSection title="Finding That People Value Agency, Transparency, and Human Connection">
          <Body>
            Some clear insights we got from this synthesis work was that people value{" "}
            <strong className="font-bold">agency and flexibility</strong> in autonomous experiences,
            that there&rsquo;s a lack of <strong className="font-bold">transparency</strong> in current
            autonomous designs about what the car will do next, and people want autonomous experiences
            to reclaim time and foster <strong className="font-bold">human connection</strong>.
          </Body>
        </SubSection>
      </Section>

      <Section title="Ideation">
        <SubSection title="Guiding Ideation With Two Principles: Functional Utility and Emotional Resonance">
          <Body>Our ideation was guided by two principles we had identified.</Body>
          <Body>
            The first was <strong className="font-bold">functional utility</strong>. Users are most
            open to adopting new technologies when they solve a practical task or pain point such as
            reclaiming time and reducing cognitive load. The second was{" "}
            <strong className="font-bold">emotional resonance</strong>, which refers to users being
            weary of emerging technologies. They need something that can assert a sense of control and
            safety to build trust and put users at ease.
          </Body>
          <LabeledImg src="ideation-sketch-1.png" label="A sketch of the personal seat experience" width={760} />
          <LabeledImg src="ideation-sketch-2.png" label="A sketch of the end-to-end media experience in the car." width={800} />
        </SubSection>
      </Section>

      <Section title="Prototyping">
        <SubSection title="Designing AR-Display Interfaces With Customizable Widgets for Specific Scenarios">
          <Body>
            Our final deliverables were a set of AR-display interfaces with a customizable set of
            widgets for specific scenarios.
          </Body>

          <Body>
            <strong className="font-bold">Personalized Rides with Saved Scenes:</strong> Customize
            Lighting, Climate, Sound, Window Tinting, and Seat Position
          </Body>
          <AnnotatedWidget
            src="adjusting-lighting.png"
            imgSide="left"
            width={780}
            notes={[
              "Personalize scenes for specific moods or events",
              "Automate scenes to sync with your schedule or time of day",
            ]}
          />

          <Body>
            <strong className="font-bold">Smarter Routes for a Smoother Journey:</strong> Explore cities
            effortlessly with personalized results at the swipe of a finger
          </Body>
          <AnnotatedWidget
            src="widgets-2.png"
            imgSide="right"
            width={780}
            notes={[
              "Smart, personalized recommendations based on the cars active passenger profiles",
              "Explore unfamiliar routes and learn about highly rated spots",
            ]}
          />

          <Body>
            <strong className="font-bold">Seamless In-Car Entertainment:</strong> Watching and listening
            together is easy with intuitive customization and personalization
          </Body>
          <AnnotatedWidget
            src="tv-together.png"
            imgSide="left"
            width={760}
            notes={[
              "Access shareplay across multiple windows and devices at once using passenger profiles",
              "Vote on preferences and receive group recommendations",
            ]}
          />

          <Body>
            <strong className="font-bold">Making Safety a Priority:</strong> A smart overlay detailing
            the car&rsquo;s choices throughout the ride, for full transparency
          </Body>
          <AnnotatedWidget
            src="vehicle-info.png"
            imgSide="right"
            width={800}
            notes={[
              "Back out of unwanted actions seamlessly",
              "Easily visualize current path vs altered state trajectory to increase comfortability & trust",
            ]}
          />
        </SubSection>
      </Section>
    </CaseStudy>
  );
}
