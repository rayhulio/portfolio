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

export default function GooglePage() {
  return (
    <div className="relative overflow-x-hidden bg-cream pb-[8vh]">
      <Nav />

      {/* Hero */}
      <div
        className="mx-auto flex flex-col items-center px-6"
        style={{ paddingTop: px(500), gap: px(50) }}
      >
        <img src="/images/google/google-logo.png" alt="Google" style={{ height: px(230), width: "auto" }} />
        <h1 className="text-center font-display leading-none text-black" style={{ fontSize: px(118) }}>
          Google Workspace UXR Research
        </h1>
        <Body maxWidth={1120}>
          A collaboration with Google Workspace to understand how students use AI
          to propose new features for the Workspace suite.
        </Body>
      </div>

      {/* Heavily-cropped floral band — flowers fill it (start just under the
          description) with a thin natural top; bottom cut-off stays put. */}
      <div style={{ marginTop: px(20) }}>
        <FloralBand height={1050} objectPosition="center 30%" />
      </div>

      {/* Body content */}
      <div
        className="relative mx-auto flex flex-col items-center px-6"
        style={{ gap: px(150), paddingTop: px(240), paddingBottom: px(120) }}
      >
        <Body>
          <strong className="font-bold">Note</strong>: due to the confidential
          nature of this project, many specific findings could not be shared.
        </Body>

        <Body>
          Education is one of GenAI&apos;s biggest use cases. LLMs are becoming
          ubiquitous in higher ed, used for learning, creation, and processing
          information. Most research so far has focused on workers, not students.
        </Body>

        <Body>
          Berkeley Innovation partnered with a team of UX Researchers at Google
          Workspace to close that gap, exploring how Gemini and the Workspace suite
          could better serve students. Our focus:{" "}
          <strong className="font-bold">how might we</strong> help students use AI
          alongside productivity tools to{" "}
          <strong className="font-bold">
            learn, collaborate, communicate, and work
          </strong>{" "}
          more effectively?
        </Body>
      </div>

      <EdgeBars side="left" />

      <div
        className="relative mx-auto flex flex-col items-center px-6"
        style={{ gap: px(80), paddingTop: px(120) }}
      >
        <Heading>Research Methodology</Heading>
        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(120), marginTop: px(40) }}>
          <IconFigure src="/images/google/research-icon.png" label={<>Secondary<br />Research</>} />
          <IconFigure src="/images/google/survey-icon.png" label="Survey" />
          <IconFigure src="/images/google/interview-icon.png" label="Interviews" />
        </div>
        <Body>
          We conducted over twenty one hour student interviews, selecting from a
          diverse set of lived experiences, majors, and regional locations. We also
          utilized secondary research and surveys.
        </Body>
      </div>

      <div
        className="relative mx-auto flex flex-col items-center px-6"
        style={{ gap: px(150), paddingTop: px(150) }}
      >
        <Body>
          The first hour long interview consisted of getting an understanding of the
          student&rsquo;s relationship and feelings towards AI, and how they use it in
          relation with their school work. Then, certain students were selected for a
          follow up hour long interview, to explain a project they talked about and
          how they used AI in their process. We also followed up through focus groups,
          to get further varied perspectives.
        </Body>

        <Heading>Key Insights</Heading>
      </div>

      <EdgeBars side="right" />

      <div
        className="relative mx-auto flex flex-col items-center px-6"
        style={{ gap: px(150), paddingTop: px(40) }}
      >
        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(90) }}>
          <img src="/images/google/key-insight-1.png" alt="" style={{ width: px(780) }} className="rounded-[18px] shadow-[0_4px_14px_rgba(0,0,0,0.12)]" />
          <img src="/images/google/key-insight-2.png" alt="" style={{ width: px(780) }} className="rounded-[18px] shadow-[0_4px_14px_rgba(0,0,0,0.12)]" />
        </div>

        <Body>
          Our interviews revealed that the primary use cases of AI tend to be
          motivated by a few things: feelings of being on a time crunch, exploring
          personal interests, and building a foundation for a skillset. Concerns range
          from issues around technical inadequecy to environmental and social concerns
          over the effects of AI.
        </Body>

        <Body>
          We learned that students want nuanced control, and AI that is context-aware.
          Students also crucially wanted integration between tools in their workflow,
          for a smoother experience.
        </Body>

        <div className="flex flex-wrap items-start justify-center" style={{ gap: px(90) }}>
          <img src="/images/google/data-vis-2.png" alt="" style={{ width: px(780) }} className="rounded-[14px]" />
          <img src="/images/google/data-vis-22.png" alt="" style={{ width: px(780) }} className="rounded-[14px]" />
        </div>

        <Body>
          We also utilized data visualizations of our interview transcript and survey
          data, which led us to understand insights and patterns that wouldn&rsquo;t
          have otherwise been clearly visible. Like the example to the left above, where
          our analysis shows ethical concerns to be of a higher importance than privacy.
        </Body>

        <Heading>User Archetypes</Heading>

        <Body>
          Instead of grouping those who use AI into one or two personas as would be done
          traditionally, our insights pointed us to the understanding that there were
          actually 4 distinct personalities that could be identified by two different axes.
        </Body>

        <img src="/images/google/archetypes.png" alt="" style={{ width: px(560) }} className="rounded-[20px] shadow-[0_6px_20px_rgba(0,0,0,0.12)]" />

        <Body>
          Defined by frequency of use and how much trust individuals have in AI, we see
          4 distinct groups: the <strong className="font-bold">AI Advocate</strong>, the{" "}
          <strong className="font-bold">Reluctant Reliant</strong>, the{" "}
          <strong className="font-bold">DIY Devotee</strong>, and the{" "}
          <strong className="font-bold">Active Avoidant</strong>.
        </Body>

        <Body>
          By identifying each group&rsquo;s pain points, use cases, motivations, and
          behaviors, we were starting to see patterns emerge for what this would mean
          when coming up with product recommendations and which group would be most
          positively impacted by specific design changes.
        </Body>

        <Heading>Journey Mapping</Heading>

        <Body>
          Using our insights from our follow up interviews on selected project
          walkthroughs, we created journey maps of essay / writing workflows and
          technical workflows. We also created spotlight case studies to further
          supplement users&rsquo; relationships with tools by diving into the issues and
          pros with current tools of the Workspace suite and competitors.
        </Body>

        <div className="flex flex-wrap items-center justify-center" style={{ gap: px(90) }}>
          <img src="/images/google/journey-map.png" alt="" style={{ width: px(800) }} className="rounded-[18px] shadow-[0_6px_20px_rgba(0,0,0,0.18)]" />
          <img src="/images/google/case-study.png" alt="" style={{ width: px(800) }} className="rounded-[18px] shadow-[0_6px_20px_rgba(0,0,0,0.18)]" />
        </div>
        <Caption>Here are truncated examples of a Journey Map and Case Study</Caption>

        <Heading>Recommendations</Heading>

        <Body>
          While I&rsquo;m not able to share our specific product recommendations, our
          whole process of understanding these different users led us to come up with
          some core design principles that guided our product thinking.
        </Body>

        {/* Numbered recommendations (left-aligned) */}
        <div className="flex flex-col" style={{ gap: px(120), marginTop: px(40) }}>
          <NumberedStep n={1} title="Transparency is Crucial">
            Students expected transparency from the AI services they use. Whether it was
            clearly stating environmental impact, or citing sources, this transparency
            should be considered at the foundation of product decisions.
          </NumberedStep>
          <NumberedStep n={2} title="Meet Students where they’re at">
            Students don&rsquo;t want AI to takeover everything; they don&rsquo;t want it
            to push for shortcuts that make students feel like they&rsquo;re learning
            less. Making AI unobtrusive is key for user agency
          </NumberedStep>
          <NumberedStep n={3} title="Prioritizing Personalization">
            Students have diverse studies, work, and needs. A one-size-fits all
            methodology could be detrimental to the design of new, effective and helpful
            tools for students.
          </NumberedStep>
        </div>
      </div>
    </div>
  );
}
