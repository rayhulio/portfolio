import Nav from "@/components/Nav";
import { px } from "@/app/design";
import { Body, Heading, FloralBand, EdgeBars } from "@/components/case-study";

/* eslint-disable @next/next/no-img-element */

const A = "/images/self-driving";

function Img({ src, width, className = "" }: { src: string; width: number; className?: string }) {
  return (
    <img
      src={`${A}/${src}`}
      alt=""
      style={{ width: px(width) }}
      className={`rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.12)] ${className}`}
    />
  );
}

function LabeledImg({ src, label, width }: { src: string; label: string; width: number }) {
  return (
    <figure className="flex flex-col items-center" style={{ gap: px(40) }}>
      <Img src={src} width={width} />
      <figcaption className="text-center font-body text-black" style={{ fontSize: px(48) }}>
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
    <div className="flex flex-col justify-center" style={{ gap: px(90) }}>
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
              fontSize: px(42),
              lineHeight: 1.3,
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
      className={`flex flex-wrap items-center justify-center ${imgSide === "right" ? "flex-row-reverse" : ""}`}
      style={{ gap: px(70) }}
    >
      <Img src={src} width={width} />
      {callouts}
    </div>
  );
}

export default function SelfDrivingPage() {
  return (
    <div className="relative overflow-x-hidden bg-cream pb-[8vh]">
      <Nav />

      {/* Hero */}
      <div className="mx-auto flex flex-col items-center px-6" style={{ paddingTop: px(470), gap: px(50) }}>
        <img src={`${A}/car-header.png`} alt="" style={{ width: px(230), height: "auto" }} />
        <h1 className="text-center font-display leading-none text-black" style={{ fontSize: px(122) }}>
          Self-Driving Interface Design
        </h1>
        <Body maxWidth={1160}>
          UI and Prototyping design for the future of Self-Driving for a Major Automative Client
        </Body>
      </div>

      {/* Thin cropped floral band with natural top */}
      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      {/* Intro */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(150), paddingTop: px(240), paddingBottom: px(80) }}>
        <Body>
          We were reached out to by a confidential automative client with a broad goal in mind. By
          2035 it&rsquo;s expected that industry leaders will be able to produce level 5 self-driving
          cars. With that comes the need for an equally compelling user experience.
        </Body>
        <Body>
          <strong className="font-bold">Our project and scope:</strong> How might we reimagine the
          shared autonomous vehicle experience for shared vehicle users in 2035, integrating safety,
          human connection, and personalized experiences?
        </Body>
      </div>

      {/* Problem space */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(80), paddingTop: px(120) }}>
        <Heading>Diving into the Problem Space</Heading>
        <Body maxWidth={1100}>
          First, we decided to narrow down our scope on what user group we should design for.
        </Body>
        <Img src="urban-fam.png" width={1150} className="!shadow-none" />
      </div>

      <EdgeBars side="left" />

      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(120), paddingTop: px(120) }}>
        <Body>
          Our research aimed to identify market trends and consumer experiences for in-car
          experiences; Understand attitudes, concerns, and readiness for fully autonomous driving;
          and pinpoint opportunities for new interactions.
        </Body>
        <Img src="methods.png" width={1400} className="!shadow-none" />
      </div>

      <EdgeBars side="right" />

      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(120), paddingTop: px(120) }}>
        <Img src="shared-participants.png" width={1320} className="!shadow-none" />
        <Body>
          Our research specifically aimed to uncover more about what people thought about their
          current driving experiences, and a bit of a different question. &ldquo;What would you enjoy
          in a car experience if all the seats faced each other&rdquo; was the question we were
          trying to ask. But to phrase it in a relatable way, we asked people about their favorite
          public transit features when traveling with friends.
        </Body>
      </div>

      {/* Synthesis */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(120), paddingTop: px(140) }}>
        <div className="flex flex-col items-center" style={{ gap: px(80) }}>
          <Heading>Synthesis</Heading>
          <Body>
            To synthesize this research, we decided to create different user personas to first get an
            understanding of who might be using this, and what situations they may be in.
          </Body>
        </div>

        {/* Personas + labels */}
        <figure className="flex flex-col items-center" style={{ gap: px(40) }}>
          <Img src="personas.png" width={1700} className="!shadow-none" />
          <figcaption className="flex w-full justify-around font-body text-black" style={{ fontSize: px(52) }}>
            <span>A middle aged family man.</span>
            <span>A college student.</span>
          </figcaption>
        </figure>

        <Body>
          The next step was creating Journey Maps with more updated, refined personas based on
          additional research and insights. These were important specifically because they documented{" "}
          <strong className="font-bold">the difference</strong> between an emotional journey with an
          autonomous vehicle vs. without one.
        </Body>

        <Img src="journeymap.png" width={1720} />

        <Body>
          Some clear insights we got from this synthesis work was that people value{" "}
          <strong className="font-bold">agency and flexibility</strong> in autonomous experiences,
          that there&rsquo;s a lack of <strong className="font-bold">transparency</strong> in current
          autonomous designs about what the car will do next, and people want autonomous experiences
          to reclaim time and foster <strong className="font-bold">human connection</strong>.
        </Body>

        {/* Ideation */}
        <div className="flex flex-col items-center" style={{ gap: px(80), marginTop: px(40) }}>
          <Heading>Ideation</Heading>
          <Body>Our ideation was guided by two principles we had identified.</Body>
          <Body>
            The first was <strong className="font-bold">functional utility</strong>. Users are most
            open to adopting new technologies when they solve a practical task or pain point such as
            reclaiming time and reducing cognitive load. The second was{" "}
            <strong className="font-bold">emotional resonance</strong>, which refers to users being
            weary of emerging technologies. They need something that can assert a sense of control and
            safety to build trust and put users at ease.
          </Body>
        </div>

        <LabeledImg src="ideation-sketch-1.png" label="A sketch of the personal seat experience" width={760} />
        <LabeledImg src="ideation-sketch-2.png" label="A sketch of the end-to-end media experience in the car." width={800} />

        {/* Prototype */}
        <div className="flex flex-col items-center" style={{ gap: px(80), marginTop: px(40) }}>
          <Heading>Prototype</Heading>
          <Body>
            Our final deliverables were a set of AR-display interfaces with a customizable set of
            widgets for specific scenarios.
          </Body>
        </div>

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
      </div>
    </div>
  );
}
