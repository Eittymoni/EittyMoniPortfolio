import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(45,111,71,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,111,71,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-sage-300/20 blur-[120px] dark:bg-sage-700/15" />

      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-1.5 text-xs font-medium text-sage-700 dark:border-sage-800 dark:bg-sage-900/30 dark:text-sage-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slatey-900 dark:text-white sm:text-6xl">
            Dilruba Yasmin Eitty
          </h1>
          <p className="mt-4 animate-fade-up text-xl font-semibold text-sage-600 dark:text-sage-400 sm:text-2xl [animation-delay:60ms]">
            Web Developer
          </p>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-slatey-500 dark:text-slatey-300 sm:text-lg [animation-delay:120ms]">
            {profile.intro}
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:200ms]">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={profile.resumeUrl} className="btn-secondary w-full sm:w-auto">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

         <div className="mt-10 flex animate-fade-in items-center justify-center gap-4 [animation-delay:400ms]">
  {[
    { Icon: Github, href: "https://github.com/Eittymoni", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/eitty-moni/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:eitty.t@gmail.com", label: "Email" },
  ].map(({ Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slatey-200 bg-white text-slatey-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-300 hover:text-sage-600 dark:border-slatey-700 dark:bg-slatey-900 dark:text-slatey-300 dark:hover:border-sage-500 dark:hover:text-sage-400"
    >
      <Icon className="h-[18px] /w-[18px]" />
    </a>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
