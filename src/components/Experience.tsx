import { Briefcase, Check } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { experience } from "../data";

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1 w-6 rounded-full bg-sage-500" />
            Experience
          </span>
          <h2 className="section-heading">Where I've worked.</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey-500 dark:text-slatey-300">
            A timeline of roles where I've grown and delivered impact.
          </p>
        </div>

        <div ref={ref} className="mt-14">
          <div className="relative">
            <div className="absolute left-[19px] top-1 bottom-1 w-px bg-slatey-200 dark:bg-slatey-800 sm:left-[23px]" />
            <div className="space-y-8">
              {experience.map((item, i) => (
                <div
                  key={item.role + item.company}
                  className={`relative flex gap-5 sm:gap-7 transition-all duration-700 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slatey-200 bg-white text-sage-600 sm:h-12 sm:w-12 dark:border-slatey-700 dark:bg-slatey-900 dark:text-sage-400">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="card flex-1 p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-slatey-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="w-fit rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700 dark:bg-sage-900/30 dark:text-sage-300">
                        {item.period}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slatey-500 dark:text-slatey-400">
                      <span className="font-medium text-sage-600 dark:text-sage-400">
                        {item.company}
                      </span>
                      <span className="text-slatey-300 dark:text-slatey-600">
                        •
                      </span>
                      <span>{item.location}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slatey-500 dark:text-slatey-300">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-sm text-slatey-600 dark:text-slatey-300"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
