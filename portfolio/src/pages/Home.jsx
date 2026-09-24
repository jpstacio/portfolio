import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/profile";
import { news } from "../data/news";
import Label from "../components/Label";

let hasPlayed = false; // lives outside the component so it survives page navigation

function buildTokens() {
  const fields = [
    { key: "role", value: profile.title },
    { key: "institution", value: profile.institution, url: profile.institutionUrl },
    { key: "advisor", value: profile.advisor.name, url: profile.advisor.url },
    { key: "year", value: profile.year },
  ];

  const tokens = [
    { text: "const", className: "text-keyword" },
    { text: " " },
    { text: "me", className: "text-fg" },
    { text: " " },
    { text: "=", className: "text-type" },
    { text: " " },
    { text: "{", className: "text-dim" },
    { text: "\n" },
  ];

  fields.forEach(({ key, value, url }) => {
    tokens.push(
      { text: "  " },
      { text: key, className: "text-type" },
      { text: ": ", className: "text-dim" },
      { text: `"${value}"`, className: "text-string", url },
      { text: ",", className: "text-dim" },
      { text: "\n" }
    );
  });

  tokens.push({ text: "};", className: "text-dim" });
  return tokens;
}

function renderTokens(tokens, limit) {
  let remaining = limit;
  const out = [];
  for (let i = 0; i < tokens.length && remaining > 0; i++) {
    const { text, className, url } = tokens[i];
    const shown = text.slice(0, remaining);
    remaining -= shown.length;
    out.push(
      url ? (
        <a key={i} href={url} target="_blank" rel="noreferrer" className={`${className} hover:underline underline-offset-4`}>
          {shown}
        </a>
      ) : (
        <span key={i} className={className}>{shown}</span>
      )
    );
  }
  return out;
}

function CodeCard() {
  const tokens = useMemo(buildTokens, []);
  const fullText = tokens.map((t) => t.text).join("");
  const total = fullText.length;

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [count, setCount] = useState(hasPlayed || reduceMotion ? total : 0);

  useEffect(() => {
    if (count >= total) {
      hasPlayed = true;
      return;
    }
    const prevChar = fullText[count - 1];
    const delay =
      count === 0 ? 700 :               // pause before typing starts
      prevChar === "\n" ? 180 :         // pause at each new line
      18 + Math.random() * 35;          // natural keystroke rhythm
    const id = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [count, total, fullText]);

  return (
    <div className="rounded-md border border-line bg-panel overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-number/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-string/80" />
        <span className="ml-3 font-mono text-xs text-comment">profile.js</span>
      </div>
      <pre className="p-5 font-mono text-sm leading-7 overflow-x-auto">
        <code className="grid">
          {/* invisible full version reserves the final size, so nothing below jumps */}
          <span aria-hidden="true" className="invisible col-start-1 row-start-1">
            {renderTokens(tokens, total)}
          </span>
          {/* the version that actually types out */}
          <span className="col-start-1 row-start-1">
            {renderTokens(tokens, count)}
            {count < total && (
              <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-fg/70" />
            )}
          </span>
        </code>
      </pre>
    </div>
  );
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? news : news.slice(0, 5);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="font-mono text-sm text-comment mb-5">
            <span className="inline-block w-2 h-4 ml-1 align-middle bg-fg/70 animate-pulse" />
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-3 text-dim">
            {profile.title} · {profile.institution}
          </p>
          <p className="mt-8 leading-8 text-dim max-w-xl">{profile.bio}</p>
        </div>
        {profile.photo && (
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-md border border-line grayscale hover:grayscale-0 transition duration-500"
          />
        )}
      </section>

      {/* Code card */}
      <section>
        <CodeCard />
      </section>

      {/* Research interests */}
      <section>
        <Label>research interests</Label>
        <ul className="flex flex-wrap gap-3">
          {profile.interests.map((interest) => (
            <li
              key={interest}
              className="font-mono text-xs px-3 py-1.5 border border-line rounded-sm text-dim hover:border-keyword hover:text-keyword transition-colors"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      {/* News */}
      <section>
        <Label>news</Label>
        <ul className="space-y-4">
          {visibleNews.map((item) => (
            <li key={item.date + item.text} className="flex gap-6 text-sm leading-6">
              <span className="font-mono text-number shrink-0 w-16">{item.date}</span>
              <span className="text-dim">
                {item.text}
                {item.link && (
                  <>
                    {" "}
                    <a href={item.link} target="_blank" rel="noreferrer" className="font-mono text-func hover:underline underline-offset-4">
                      [link]
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
        {news.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 font-mono text-xs text-comment hover:text-func transition-colors cursor-pointer"
          >
            {showAll ? "- show less" : `+ ${news.length - 5} more`}
          </button>
        )}
      </section>
    </div>
  );
}