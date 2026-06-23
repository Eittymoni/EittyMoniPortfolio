import { GraduationCap, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { education } from "../data";

export function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1 w-6 rounded-full bg-sage-500" />
            Education
          </span>
          <h2 className="section-heading">Academic background.</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey-500 dark:text-slatey-300">
            A blend of technical engineering foundations and management
            expertise.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {education.map((edu, i) => (
            <div
              key={edu.degree + edu.field}
              className={`card group relative overflow-hidden p-7 transition-all duration-700 hover:border-sage-300 dark:hover:border-sage-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sage-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-sage-900/20" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-600 dark:bg-sage-900/30 dark:text-sage-400">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-slatey-50 px-3 py-1 text-xs font-medium text-slatey-500 dark:bg-slatey-800 dark:text-slatey-400">
                    {edu.period}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slatey-900 dark:text-white">
                  {edu.degree} — {edu.field}
                </h3>
                <p className="mt-1 text-sm font-medium text-sage-600 dark:text-sage-400">
                  {edu.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slatey-500 dark:text-slatey-300">
                  {edu.description}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs text-slatey-400">
                  <MapPin className="h-3.5 w-3.5" />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
