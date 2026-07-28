import Nav from "@/components/Nav";
import { px } from "@/app/design";
import {
  Body,
  Heading,
  Caption,
  FloralBand,
  IconFigure,
  NumberedStep,
  EdgeBars,
} from "@/components/case-study";

/* eslint-disable @next/next/no-img-element */

const A = "/images/salt-and-straw";

// Image with a label underneath (personas, synthesis boards)
function LabeledImg({ src, label, width }: { src: string; label: string; width: number }) {
  return (
    <figure className="flex flex-col items-center" style={{ gap: px(40), width: px(width) }}>
      <img src={src} alt="" className="w-full rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.12)]" />
      <figcaption className="text-center font-body text-black" style={{ fontSize: px(48) }}>
        {label}
      </figcaption>
    </figure>
  );
}

// A competitive-analysis brand badge (circular)
function Badge({ src }: { src: string }) {
  return (
    <div
      className="grid place-items-center overflow-hidden rounded-full bg-white shadow-[0_6px_10px_rgba(0,0,0,0.18)]"
      style={{ width: px(190), height: px(190) }}
    >
      <img src={src} alt="" className="h-[86%] w-[86%] object-contain" />
    </div>
  );
}

export default function SaltAndStrawPage() {
  return (
    <div className="relative overflow-x-hidden bg-cream pb-[8vh]">
      <Nav />

      {/* Hero */}
      <div className="mx-auto flex flex-col items-center px-6" style={{ paddingTop: px(470), gap: px(50) }}>
        <img src={`${A}/salt-and-straw-logo.png`} alt="Salt & Straw" style={{ width: px(760), height: "auto" }} />
        <h1 className="text-center font-display leading-none text-black" style={{ fontSize: px(130) }}>
          Salt &amp; Straw
        </h1>
        <Body maxWidth={1120}>User Research and Branding for creating an Upcycled Menu</Body>
      </div>

      {/* Thin cropped floral band with natural top (bottom cut a bit higher) */}
      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      {/* Intro */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(150), paddingTop: px(240), paddingBottom: px(80) }}>
        <Body>
          For our collaboration with Salt &amp; Straw, we were asked to understand how
          upcycled food was perceived ahead of the release of their Upcycled Food series.
        </Body>
        <Body>
          We wanted to ask, how might we make upcycled food{" "}
          <strong className="font-bold">feel approachable</strong> and enticing to Salt
          &amp; Straw customers, and expand the importance of upcycling beyond just the store?
        </Body>
      </div>

      <EdgeBars side="left" />

      {/* Research */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(80), paddingTop: px(120) }}>
        <Heading>Research</Heading>
        <Body>
          To understand the current landscape of perceptions and efforts surrounding
          &ldquo;upcycling&rdquo; and what people look for when purchasing a food product
          like ice cream, we used several different methods.
        </Body>
        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(90), marginTop: px(60) }}>
          <IconFigure src={`${A}/book.png`} label={<>Literature<br />Review</>} size={170} />
          <IconFigure src={`${A}/web-icon.png`} label={<>Web<br />Scrape</>} size={170} />
          <IconFigure src={`${A}/clipboard-icon.png`} label={<>User<br />Survey</>} size={170} />
          <IconFigure src={`${A}/leaderboard-icon.png`} label={<>Competitive<br />Analysis</>} size={170} />
          <IconFigure src={`${A}/people-icon.png`} label={<>User<br />Interview</>} size={170} />
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(80), paddingTop: px(160) }}>
        <Heading>Competitive Analysis</Heading>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(50), marginTop: px(30) }}>
          {["rayzyn", "comp-logo-2", "uglies-logo", "logo-4", "logo-5", "atomo-logo", "the-ugly-co"].map((n) => (
            <Badge key={n} src={`${A}/${n}.png`} />
          ))}
        </div>
        <Body>
          Through our competitive analysis, we looked at seven other brands that
          participate in upcycling food efforts to see what they do right.
        </Body>
        <Body>
          We found <strong className="font-bold">three main things</strong>. Brands tend to
          include added benefits about health or community impact. Storytelling plays a huge
          role in clarifying safety and customer impact. And words like sustainability,
          locally grown, and delicious convey trust.
        </Body>
      </div>

      <EdgeBars side="right" />

      {/* Interviews */}
      <div className="relative mx-auto flex flex-col items-center px-6" style={{ gap: px(150), paddingTop: px(120) }}>
        <div className="flex flex-col items-center" style={{ gap: px(80) }}>
          <Heading>Interviews</Heading>
          <Body>
            We conducted nine interviews with a mix of super fans, food profssionals, regular
            fans, Gen-Z, and milllennials.
          </Body>
          <Body>
            We found that among <strong className="font-bold">younger customers</strong>,
            visuals, taste, and naming are key. For{" "}
            <strong className="font-bold">older customers</strong> consistency, taste, and
            naming drive purchase and quality. Our food professionals emphasized clear
            packaging explanations of &ldquo;upcycled&rdquo; foods, certifications,
            transparency, eco-friendly benefits, and in-store education.
          </Body>
        </div>

        {/* Stepping Inside the Store */}
        <div className="flex flex-col items-center" style={{ gap: px(80) }}>
          <Heading>Stepping Inside the Store</Heading>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: px(90) }}>
            <img src={`${A}/in-store-1.png`} alt="" style={{ width: px(430) }} className="rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.15)]" />
            <img src={`${A}/in-store-2.png`} alt="" style={{ width: px(430) }} className="rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
        <Body>
          The Salt &amp; Straw team invited us to take a look inside the store to gain further
          perspective. Here, we interviewed workers and customers to get a sense of how we can
          create an intuitive script for workers to share as they&rsquo;re talking about the
          menu, and to understand what visual aids in the store are most effective.
        </Body>
        <Body>
          We noted how big visuals drives engagement (e.g. large banners, featured flavor
          signage), intentional story-first selling positively frames upcycling, and sampling
          highlights the creative upcycled flavors
        </Body>

        {/* Synthesis */}
        <div className="flex flex-col items-center" style={{ gap: px(80) }}>
          <Heading>Synthesis</Heading>
          <Body>
            In order to synthesize and understand our research, we went ahead and used a few
            methods: affinity mapping, an effort-impact matrix, and creating two user personas.
          </Body>
        </div>
        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(120) }}>
          <LabeledImg src={`${A}/aff-map-1.png`} label="Affinity Mapping" width={720} />
          <LabeledImg src={`${A}/effort-impact.png`} label="Effort-Impact Matrix" width={720} />
        </div>
        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(120) }}>
          <LabeledImg src={`${A}/persona-1.png`} label="Persona 1: The Skeptic" width={760} />
          <LabeledImg src={`${A}/persona-2.png`} label="Persona 2: The Optimist" width={760} />
        </div>
        <Body>Through these synthesis methods, here were our key insights.</Body>

        <div className="flex flex-col" style={{ gap: px(120) }}>
          <NumberedStep n={1} title="Most people don’t know what “upcycled food” means, and the word sounds negative">
            Many customers have never heard of it. When they do, they think of words like old,
            leftover, or dirty.
          </NumberedStep>
          <NumberedStep n={2} title="Taste and price matter the most">
            Most people care about flavor and value, not about being sustainable.
          </NumberedStep>
          <NumberedStep n={3} title="Customers need proof that it’s safe and fresh">
            They want to know it&rsquo;s made from good ingredients and properly checked. Signs
            like &ldquo;certified,&rdquo; &ldquo;nothing added,&rdquo; or &ldquo;freshly
            made&rdquo; build trust.
          </NumberedStep>
        </div>

        {/* Ideation */}
        <div className="flex flex-col items-center" style={{ gap: px(80) }}>
          <Heading>Ideation</Heading>
          <Body>
            Our ideation process involved looking at creating scripts for copywriting for
            scoopers, exploring typography, color palettes, and different design languages to
            best express &ldquo;upcycling&rdquo; in stores in an educational and memorable manner.
          </Body>
        </div>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(70) }}>
          <img src={`${A}/inspo.png`} alt="" style={{ width: px(560) }} className="rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.12)]" />
          <img src={`${A}/moodboard.png`} alt="" style={{ width: px(560) }} className="rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.12)]" />
          <img src={`${A}/inspo-2.png`} alt="" style={{ width: px(560) }} className="rounded-[16px] shadow-[0_5px_16px_rgba(0,0,0,0.12)]" />
        </div>
        <Body>
          Through this process we learned that creating a cohesive set of materials for our
          final deliverables would deliver the highest impact on the customer experience. The
          deliverables had to impact both the server-customer experience, and simply the
          experience of being in the store.
        </Body>

        {/* Deliverables */}
        <Heading>Deliverables</Heading>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(120) }}>
          <img src={`${A}/brochure-deliverable.png`} alt="" style={{ width: px(820) }} className="rounded-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.15)]" />
          <div className="flex flex-col" style={{ gap: px(30) }}>
            {[
              { n: 1, src: `${A}/Untitled_Artwork 41 1.png` },
              { n: 2, src: `${A}/cute-guys.png` },
              { n: 3, src: `${A}/cute-guys-2.png` },
            ].map(({ n, src }) => (
              <div key={n} className="flex items-center" style={{ gap: px(30) }}>
                <span
                  className="grid shrink-0 place-items-center rounded-full bg-red font-body font-bold text-white"
                  style={{ width: px(80), height: px(80), fontSize: px(44) }}
                >
                  {n}
                </span>
                <img src={src} alt="" style={{ width: px(300) }} />
              </div>
            ))}
          </div>
        </div>
        <Body>
          Along with copywriting for the servers to use as they explain the story behind each
          flavor, we designed a brochure that provided information about each flavor and answered
          common FAQs regarding upcycled food. We also created a collectible sticker pack with
          cartoon designs to create a friendly, accessible image around these flavors.
        </Body>

        {/* Posters */}
        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(70) }}>
          {["poster-1", "poster-2", "poster-3"].map((n) => (
            <img key={n} src={`${A}/${n}.png`} alt="" style={{ width: px(470) }} className="rounded-[18px] border-[3px] border-red shadow-[0_5px_16px_rgba(0,0,0,0.15)]" />
          ))}
        </div>
        <Body>
          Finally, we also created these posters to be placed around the store to create a warm,
          inviting atmosphere in the store during this seasonal menu.
        </Body>
      </div>
    </div>
  );
}
