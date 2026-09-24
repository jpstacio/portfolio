import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "home" },
  { to: "/publications", label: "publications" },
  { to: "/projects", label: "projects" },
  { to: "/resume", label: "resume" },
];

export default function Navbar() {
  return (
    <header className="border-b border-line bg-night/80 backdrop-blur sticky top-0 z-10">
      <nav className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="font-mono text-sm">
          <span className="text-comment">~/</span>
          <span className="text-fg">{profile.name.toLowerCase().replace(/\s+/g, "-")}</span>
        </NavLink>
        <ul className="flex gap-7 font-mono text-sm">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} className="group flex flex-col items-center">
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-fg" : "text-comment group-hover:text-dim transition-colors"}>
                      {label}
                    </span>
                    <span className={`h-px mt-1 transition-all ${isActive ? "w-full bg-accent" : "w-0 bg-comment group-hover:w-full"}`} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}