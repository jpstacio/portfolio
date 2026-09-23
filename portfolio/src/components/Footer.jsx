import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { profile } from "../data/profile";

export default function Footer() {
  const { email, links } = profile;
  const icons = [
    { href: `mailto:${email}`, label: "Email", Icon: FaEnvelope },
    { href: links.github, label: "GitHub", Icon: FaGithub },
    { href: links.scholar, label: "Google Scholar", Icon: SiGooglescholar },
    { href: links.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  ];

  return (
    <footer className="border-t border-line">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-comment">
          // © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 text-lg text-comment">
          {icons.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="hover:text-func transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}