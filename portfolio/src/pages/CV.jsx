import SectionHeader from "../components/SectionHeader";
import { profile } from "../data/profile";

export default function CV() {
  const { file, updated } = profile.cv;
  const fileName = file.split("/").pop();

  return (
    <div>
      <SectionHeader index="04" title="Curriculum Vitae" />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="font-mono text-xs text-comment">
          // last updated <span className="text-number">{updated}</span>
        </p>
        <div className="flex gap-3 font-mono text-xs">
          <a
            href={file}
            download
            className="px-4 py-2 rounded-sm border border-func text-func hover:bg-func hover:text-night transition-colors"
          >
            download pdf
          </a>
          <a
            href={file}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-sm border border-line text-dim hover:border-dim transition-colors"
          >
            open in new tab
          </a>
        </div>
      </div>

      {/* Embedded viewer on larger screens */}
      <div className="hidden md:block rounded-md border border-line bg-panel overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line">
          <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-number/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-string/80" />
          <span className="ml-3 font-mono text-xs text-comment">{fileName}</span>
        </div>
        <iframe src={`${file}#view=FitH`} title={`${profile.name} CV`} className="w-full h-[80vh] bg-white" />
      </div>

      {/* Phones handle embedded PDFs poorly, so point them to the buttons */}
      <p className="md:hidden text-sm text-comment">
        Use the buttons above to view or download the full CV.
      </p>
    </div>
  );
}