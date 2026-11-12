import { px } from "@/app/design";
import {
  CaseStudy,
  CaseHeader,
  Body,
  Section,
  SubSection,
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
    <figure className="flex w-full flex-col items-start" style={{ gap: "var(--cs-gap-xs)", width: px(width) }}>
      <img src={src} alt="" className="w-full rounded-media-sm shadow-media" />
      <figcaption className="text-left font-body text-black" style={{ fontSize: "var(--cs-caption)" }}>
        {label}
      </figcaption>
    </figure>
  );
}

// A competitive-analysis brand badge (circular)
function Badge({ src }: { src: string }) {
  return (
    <div
      className="grid place-items-center overflow-hidden rounded-full bg-white shadow-media"
      style={{ width: px(190), height: px(190) }}
    >
      <img src={src} alt="" className="h-[86%] w-[86%] object-contain" />
    </div>
  );
}

export default function SaltAndStrawPage() {
  return (
    <CaseStudy>

      <CaseHeader
        logo={{ src: `${A}/salt-and-straw-logo.png`, alt: "Salt & Straw", height: 190 }}
        headline="Upcycled Food Is More Than Leftovers: Reimagining Salt &amp; Straw&rsquo;s Upcycled Menu Through Research, Strategy, and Design"
        meta={{
          team: ["Student team"],
          timeline: ["February - May 2026"],
          role: ["Project Lead, Product Strategy & Design"],
        }}
      >
        Led a 5-person cross-functional design team, partnering directly with Salt &amp; Straw&rsquo;s
        CEO to conduct consumer and expert research and develop an integrated brand experience for
        its Upcycled Food menu. Translated customer concerns around food safety, quality, and
        sustainability into branded brochures, in-store posters, and server scripts, equipping
        2,000+ employees to educate customers, reduce stigma around upcycled ingredients, and
        encourage trial of upcycled menu items.
      </CaseHeader>

      <div style={{ marginTop: px(20) }}>
        <FloralBand height={880} objectPosition="center 26%" />
      </div>

      <Section title="Overview">
        <SubSection title="Understanding the Challenge Behind Salt &amp; Straw&rsquo;s Upcycled Food Series">
          <Body>
            Founded in Portland in 2011, Salt &amp; Straw is an ice cream company known for its
            quality ingredients and innovative, quirky seasonal flavors, released monthly.
          </Body>
          <Body>
            For its upcoming Upcycled Food series, Salt &amp; Straw set out to highlight ingredients
            that are perfectly safe and delicious but would otherwise go to waste, from fruit ends
            to misshapen produce.
          </Body>
          <Body>
            However, many customers lack a clear understanding of what upcycled food actually
            means, or whether it&rsquo;s worth trying. This presented an opportunity to rethink how
            the concept could be communicated to customers.
          </Body>
          <Body>
            The CEO of Salt &amp; Straw asked our team to explore: how might we make upcycled food{" "}
            <mark className="highlight">feel approachable and enticing</mark> to Salt &amp; Straw
            customers, and{" "}
            <mark className="highlight">
              expand the importance of upcycling beyond just the store
            </mark>
            ?
          </Body>
        </SubSection>
      </Section>

      <EdgeBars side="left" />

      <Section title="Research">
        <SubSection title="Combining Five Methods to Map Perceptions of Upcycling and What People Look For in Ice Cream">
          <Body>
            To understand the current landscape of perceptions and efforts surrounding
            &ldquo;upcycling&rdquo; and what people look for when purchasing a food product
            like ice cream, we used several different methods.
          </Body>
          <div className="flex w-full flex-wrap items-start justify-center" style={{ gap: "var(--cs-gap-group)" }}>
            <IconFigure src={`${A}/book.png`} label={<>Literature<br />Review</>} size={170} />
            <IconFigure src={`${A}/web-icon.png`} label={<>Web<br />Scrape</>} size={170} />
            <IconFigure src={`${A}/clipboard-icon.png`} label={<>User<br />Survey</>} size={170} />
            <IconFigure src={`${A}/leaderboard-icon.png`} label={<>Competitive<br />Analysis</>} size={170} />
            <IconFigure src={`${A}/people-icon.png`} label={<>User<br />Interview</>} size={170} />
          </div>
        </SubSection>

        <SubSection title="Analyzing Seven Upcycling Brands to See What They Do Right">
          <div className="flex w-full flex-wrap items-center justify-center" style={{ gap: px(50) }}>
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
        </SubSection>

        <SubSection title="Interviewing Nine Super Fans, Food Professionals, Gen-Z, and Millennials">
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
        </SubSection>

        <SubSection title="Stepping Inside the Store to Learn What Visuals and Scripts Drive Engagement">
          <div className="flex w-full flex-wrap items-center justify-center" style={{ gap: "var(--cs-gap-group)" }}>
            <img src={`${A}/in-store-1.png`} alt="" style={{ width: px(430) }} className="rounded-media-sm shadow-media" />
            <img src={`${A}/in-store-2.png`} alt="" style={{ width: px(430) }} className="rounded-media-sm shadow-media" />
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
        </SubSection>
      </Section>

      <EdgeBars side="right" />

      <Section title="Extracting Insights">
        <SubSection title="Synthesizing Research Through Affinity Mapping, an Effort-Impact Matrix, and Two Personas">
          <Body>
            In order to synthesize and understand our research, we went ahead and used a few
            methods: affinity mapping, an effort-impact matrix, and creating two user personas.
          </Body>
          <div className="flex w-full flex-wrap items-start justify-center" style={{ gap: "var(--cs-gap-block)" }}>
            <LabeledImg src={`${A}/aff-map-1.png`} label="Affinity Mapping" width={720} />
            <LabeledImg src={`${A}/effort-impact.png`} label="Effort-Impact Matrix" width={720} />
          </div>
          <div className="flex w-full flex-wrap items-start justify-center" style={{ gap: "var(--cs-gap-block)" }}>
            <LabeledImg src={`${A}/persona-1.png`} label="Persona 1: The Skeptic" width={760} />
            <LabeledImg src={`${A}/persona-2.png`} label="Persona 2: The Optimist" width={760} />
          </div>
        </SubSection>

        <SubSection title="Distilling Three Key Insights: Stigma, Taste and Price, and Proof of Safety">
          <Body>Through these synthesis methods, here were our key insights.</Body>
          <div className="flex flex-col" style={{ gap: "var(--cs-gap-block)" }}>
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
        </SubSection>
      </Section>

      <Section title="Ideation">
        <SubSection title="Exploring Scripts, Typography, Color Palettes, and Design Languages to Express Upcycling">
          <Body>
            Our ideation process involved looking at creating scripts for copywriting for
            scoopers, exploring typography, color palettes, and different design languages to
            best express &ldquo;upcycling&rdquo; in stores in an educational and memorable manner.
          </Body>
          <div className="flex w-full flex-wrap items-center justify-center" style={{ gap: "var(--cs-gap-tight)" }}>
            <img src={`${A}/inspo.png`} alt="" style={{ width: px(560) }} className="rounded-media-sm shadow-media" />
            <img src={`${A}/moodboard.png`} alt="" style={{ width: px(560) }} className="rounded-media-sm shadow-media" />
            <img src={`${A}/inspo-2.png`} alt="" style={{ width: px(560) }} className="rounded-media-sm shadow-media" />
          </div>
          <Body>
            Through this process we learned that creating a cohesive set of materials for our
            final deliverables would deliver the highest impact on the customer experience. The
            deliverables had to impact both the server-customer experience, and simply the
            experience of being in the store.
          </Body>
        </SubSection>
      </Section>

      <Section title="Brand Design">
        <SubSection title="Delivering a Flavor Brochure, Server Scripts, and a Collectible Sticker Pack">
          <div className="flex w-full flex-wrap items-center justify-center" style={{ gap: "var(--cs-gap-block)" }}>
            <img src={`${A}/brochure-deliverable.png`} alt="" style={{ width: px(820) }} className="rounded-media-sm shadow-media" />
            <div className="flex flex-col" style={{ gap: px(30) }}>
              {[
                { n: 1, src: `${A}/Untitled_Artwork 41 1.png` },
                { n: 2, src: `${A}/cute-guys.png` },
                { n: 3, src: `${A}/cute-guys-2.png` },
              ].map(({ n, src }) => (
                <div key={n} className="flex items-center" style={{ gap: px(30) }}>
                  <span
                    className="grid shrink-0 place-items-center rounded-full bg-red font-body font-bold text-white"
                    style={{ width: px(80), height: px(80), fontSize: "var(--cs-caption)" }}
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
        </SubSection>

        <SubSection title="Bringing Warmth and Story to the Store With In-Store Posters">
          <div className="flex w-full flex-wrap items-start justify-center" style={{ gap: "var(--cs-gap-tight)" }}>
            {["poster-1", "poster-2", "poster-3"].map((n) => (
              <img key={n} src={`${A}/${n}.png`} alt="" style={{ width: px(470) }} className="rounded-control border-[3px] border-red shadow-media" />
            ))}
          </div>
          <Body>
            Finally, we also created these posters to be placed around the store to create a warm,
            inviting atmosphere in the store during this seasonal menu.
          </Body>
        </SubSection>
      </Section>

      <Section title="Team">
        <SubSection title="Meet the Team Behind the Project">
          <div className="flex w-full flex-wrap items-start justify-center" style={{ gap: "var(--cs-gap-group)" }}>
            <img src={`${A}/team-1.jpg`} alt="The Salt & Straw project team" style={{ width: px(900) }} className="rounded-media-sm shadow-media" />
            <img src={`${A}/team-2.jpg`} alt="The Salt & Straw project team" style={{ width: px(900) }} className="rounded-media-sm shadow-media" />
          </div>
        </SubSection>
      </Section>
    </CaseStudy>
  );
}
