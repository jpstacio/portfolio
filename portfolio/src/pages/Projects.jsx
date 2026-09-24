import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";

function SmartLink({ href, children, className }) {
  // internal pages use the router; everything else opens in a new tab
  return href.startsWith("/") ? (
    <Link to={href} className={className}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
  );
}

function StatusDot({ status }) {
  if (status === "ongoing") {
    return (
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-string opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-string" />
      </span>
    );
  }
  return <span className="inline-flex h-2 w-2 rounded-full bg-comment" />;
}

function ProjectCard({ project, index }) {
  const links = Object.entries(project.links || {}).filter(([, url]) => url);

  return (
    <article className="rounded-md border border-line bg-panel/60 p-6 md:p-8 hover:border-comment transition-colors">
      {/* meta row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <StatusDot status={project.status} />
          <span className={project.status === "ongoing" ? "text-string" : "text-comment"}>
            {project.status}
          </span>
        </div>
        <span className="text-number">{project.period}</span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-comment">
        {project.affiliation} · <span className="text-dim">{project.mentor.role}:</span>{" "}
        <span className="text-keyword">{project.mentor.name}</span>
      </p>

      <p className="mt-6 leading-7 text-dim">{project.summary}</p>

      <ul className="mt-6 space-y-3">
        {project.contributions.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-dim">
            <span className="font-mono text-accent shrink-0">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {project.results.length > 0 && (
        <div className="mt-6 rounded-sm border border-line bg-night/70 p-4 font-mono text-xs">
          <p className="text-comment mb-3">
            <span className="text-string">$</span> cat results.txt
          </p>
          <dl className="space-y-2">
            {project.results.map(({ metric, value }) => (
              <div key={metric} className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                <dt className="text-dim">{metric}</dt>
                <dd className="text-number">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-[11px] px-2.5 py-1 border border-line rounded-sm text-comment">
              {tag}
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="flex gap-4 font-mono text-xs">
            {links.map(([label, url]) => (
              <SmartLink key={label} href={url} className="text-func hover:underline underline-offset-4">
                [{label}]
              </SmartLink>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div>
      <SectionHeader index="03" title="Research Projects" />
      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}