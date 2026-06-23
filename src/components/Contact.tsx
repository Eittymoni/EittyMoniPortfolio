import { useState } from "react";
import { Check, GitBranch, Globe, Mail, MapPin, Send } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { profile } from "../data";

const channels = [
  { Icon: Mail, label: profile.email, sub: "Email", href: `mailto:${profile.email}` },
  { Icon: Globe, label: "LinkedIn", sub: "Connect with me", href: profile.linkedin },
  { Icon: GitBranch, label: "GitHub", sub: "View my code", href: profile.github },
  { Icon: MapPin, label: profile.location, sub: "Location", href: "#" },
];

export function Contact() {
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-px">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl border border-slatey-100 bg-white shadow-sm p-8 sm:p-12 lg:p-16 transition-all duration-700 dark:border-slatey-800 dark:bg-slatey-900 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sage-200/30 blur-[100px] dark:bg-sage-800/20" />

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">
                <span className="h-1 w-6 rounded-full bg-sage-500" />
                Contact
              </span>
              <h2 className="section-heading">Let's build something great.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slatey-500 dark:text-slatey-300">
                Open to full-time roles and freelance projects. Send a message
                and I'll get back within 24 hours.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {channels.map(({ Icon, label, sub, href }) => (
                  <a
                    key={sub}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-xl border border-slatey-100 bg-slatey-50/50 p-4 transition-all duration-200 hover:border-sage-300 hover:bg-sage-50/50 dark:border-slatey-800 dark:bg-slatey-950/40 dark:hover:border-sage-600 dark:hover:bg-slatey-800/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-sage-600 dark:bg-slatey-900 dark:text-sage-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs text-slatey-400">{sub}</div>
                      <div className="truncate text-sm font-medium text-slatey-900 dark:text-white">
                        {label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slatey-700 dark:text-slatey-200">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="input-field"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slatey-700 dark:text-slatey-200">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    required
                    className="input-field"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slatey-700 dark:text-slatey-200">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project or role..."
                  required
                  rows={5}
                  className="input-field resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="btn-primary mt-2 w-full disabled:cursor-default disabled:bg-sage-500"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
              {sent && (
                <p className="text-center text-sm text-sage-600 dark:text-sage-400">
                  Thanks! I'll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
