import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Label from "../components/Label";
import { profile } from "../data/profile";
import { publications } from "../data/publications";
import { awards } from "../data/awards";

function PublicationItem({ pub }) {
  const [showBib, setShowBib] = useState(false);
  const [copied, setCopied] = useState(false);
  const links = Object.entries(pub.links || {}).filter(([, url]) => url);

  const copyBib = async () => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <li className="border-l border-line pl-6 hover:border-keyword transition-colors">
      <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-[11px]">
        <span className="px-2 py-0.5 rounded-sm border border-line text-type">{pub.type}</span>
        {pub.status && (
          <span className="px-2 py-0.5 rounded-sm bg-string/10 text-string">{pub.status}</span>
        )}
      </div>

      <h3 className="text-lg font-bold leading-snug">{pub.title}</h3>

      <p className="mt-2 text-sm text-dim">
        {pub.authors.map((author, i) => (
          <span key={author}>
            <span
              className={
                author === profile.name
                  ? "text-fg underline decoration-accent underline-offset-4"
                  : ""
              }
            >
              {author}
            </span>
            {i < pub.authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      <p className="mt-1 text-sm text-comment">
        <span className="text-keyword">{pub.venue}</span>
        {pub.location && ` · ${pub.location}`}
      </p>

      {(links.length > 0 || pub.bibtex) && (
        <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
          {links.map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" className="text-func hover:underline underline-offset-4">
              [{label}]
            </a>
          ))}
          {pub.bibtex && (
            <button
              onClick={() => setShowBib(!showBib)}
              className="text-func hover:underline underline-offset-4 cursor-pointer"
            >
              [bibtex]
            </button>
          )}
        </div>
      )}

      {showBib && (
        <div className="mt-4 relative rounded-md border border-line bg-panel">
          <button
            onClick={copyBib}
            className="absolute top-2 right-3 font-mono text-[11px] text-comment hover:text-func cursor-pointer"
          >
            {copied ? "copied!" : "copy"}
          </button>
          <pre className="p-4 pr-16 font-mono text-xs leading-6 text-dim overflow-x-auto">{pub.bibtex}</pre>
        </div>
      )}
    </li>
  );
}

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <div>
      <SectionHeader index="02" title="Publications & Awards" />

      <div className="space-y-20">
        <section>
          <Label>publications</Label>
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} className="grid gap-4 md:grid-cols-[5rem_1fr]">
                <p className="font-mono text-sm text-number">{year}</p>
                <ul className="space-y-10">
                  {publications
                    .filter((p) => p.year === year)
                    .map((pub) => (
                      <PublicationItem key={pub.title} pub={pub} />
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Label>awards</Label>
          <ul className="space-y-6">
            {awards.map((award) => (
              <li key={award.title} className="grid gap-1 md:grid-cols-[5rem_1fr] md:gap-4">
                <span className="font-mono text-sm text-number">{award.year}</span>
                <div>
                  <p className="font-bold">{award.title}</p>
                  <p className="mt-1 text-sm text-comment">{award.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}