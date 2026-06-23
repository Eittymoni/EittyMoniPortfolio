import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slatey-100 bg-white/80 backdrop-blur-xl dark:border-slatey-800 dark:bg-slatey-950/80"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-base font-bold tracking-tight text-slatey-900 dark:text-white"
        >
          Eitty <span className="text-sage-600 dark:text-sage-400 ">Moni</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link group">
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slatey-200 bg-white text-slatey-600 transition-colors hover:text-sage-600 dark:border-slatey-700 dark:bg-slatey-900 dark:text-slatey-300 dark:hover:text-sage-400"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <a href={profile.resumeUrl} className="btn-primary hidden sm:inline-flex">
            Resume
          </a>
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slatey-200 text-slatey-600 lg:hidden dark:border-slatey-700 dark:text-slatey-300"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slatey-950/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 border-l border-slatey-100 bg-white p-6 animate-fade-in dark:border-slatey-800 dark:bg-slatey-900">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slatey-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-slatey-500 hover:text-slatey-900 dark:hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-slatey-600 transition-colors hover:bg-slatey-100 hover:text-slatey-900 dark:text-slatey-300 dark:hover:bg-slatey-800 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="btn-primary mt-auto"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
