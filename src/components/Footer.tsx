import { ArrowUp, GitBranch, Globe, Mail } from "lucide-react";
import { profile } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-slatey-100 py-10 dark:border-slatey-800">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-slatey-500 dark:text-slatey-400">
          <span className="font-display text-base font-bold text-slatey-900 dark:text-white">
            Eitty<span className="text-sage-600 dark:text-sage-400">.</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: GitBranch, label: "GitHub", href: profile.github },
            { Icon: Globe, label: "LinkedIn", href: profile.linkedin },
            { Icon: Mail, label: "Email", href: `mailto:${profile.email}` },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slatey-200 bg-white text-slatey-500 transition-all duration-200 hover:border-sage-300 hover:text-sage-600 dark:border-slatey-700 dark:bg-slatey-900 dark:text-slatey-300 dark:hover:border-sage-500 dark:hover:text-sage-400"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slatey-500 transition-colors hover:text-slatey-900 dark:text-slatey-400 dark:hover:text-white"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
