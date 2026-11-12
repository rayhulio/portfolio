import Nav from "@/components/Nav";
import { Title } from "@/components/case-study";
import { px } from "@/app/design";

export const metadata = { title: "Resumé — Rahul" };

const PDF = "/Rahul_Sathya_Resume.pdf";

/** Resumé — the PDF embedded in the page, with a download fallback (some mobile
 *  browsers can't render embedded PDFs). */
export default function Resume() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-cream pb-[8vh]">
      <Nav />

      <div
        className="mx-auto flex flex-col items-center px-6"
        style={{ paddingTop: "max(7rem, " + px(430) + ")", gap: "var(--cs-gap-tight)" }}
      >
        <Title>Resumé</Title>
        <a
          href={PDF}
          download
          className="font-body text-black underline underline-offset-4"
          style={{ fontSize: "var(--cs-body)" }}
        >
          Download PDF
        </a>
      </div>

      <div
        className="mx-auto overflow-hidden rounded-media-sm bg-white shadow-media"
        style={{ width: "min(90vw, 1100px)", marginTop: "var(--cs-gap-section)" }}
      >
        <object data={`${PDF}#toolbar=0&navpanes=0&view=FitH`} type="application/pdf" className="block h-[85vh] min-h-[32rem] w-full">
          <p className="p-6 font-body text-black">
            Your browser can&rsquo;t display the PDF here.{" "}
            <a href={PDF} className="underline">
              Open the resumé
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  );
}
