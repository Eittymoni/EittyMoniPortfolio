import { Briefcase, Code2, GraduationCap, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

const highlights = [
  {
    icon: Code2,
    label: "1+ year",
    sub: "Frontend development",
  },
  {
    icon: Briefcase,
    label: "7.5 years",
    sub: "Operations Management",
  },
  {
    icon: GraduationCap,
    label: "MBA in HRM",
    sub: "Human Resource Management",
  },
  {
    icon: GraduationCap,
    label: "BSc in CSE",
    sub: "Computer Science & Engineering",
  },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-px">
        <div
          ref={ref}
          className={`grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="eyebrow">
              <span className="h-1 w-6 rounded-full bg-sage-500" />
              About me
            </span>
            <h2 className="section-heading">
              Turning ideas into elegant, scalable interfaces.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slatey-500 dark:text-slatey-300">
              I'm Dilruba Yasmin Eitty, a frontend developer based in Dhaka,
              Bangladesh with a BSc in Computer Science & Engineering and an
              MBA in Human Resource Management. My path blends a strong
              foundation in engineering with hands-on management experience.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slatey-500 dark:text-slatey-300">
              I bring 7.5 years of Operations Management experience, where I
              honed leadership, process optimization, and cross-functional
              collaboration. Over the past year I've transitioned full-time into
              frontend development, building scalable, user-friendly web
              applications with React.js, Next.js, and TypeScript.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-slatey-400 dark:text-slatey-400">
              <MapPin className="h-4 w-4 text-sage-500" />
              Open to remote & on-site opportunities
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className={`card p-6 transition-all duration-700 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-600 dark:bg-sage-900/30 dark:text-sage-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-slatey-900 dark:text-white">
                        {h.label}
                      </div>
                      <div className="mt-1 text-sm text-slatey-500 dark:text-slatey-400">
                        {h.sub}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              className={`card flex items-center gap-4 bg-sage-50/50 p-6 transition-all duration-700 sm:col-span-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "480ms" }}
            >
            
              <p className="text-sm leading-relaxed text-slatey-600 dark:text-slatey-300">
                My operations background gives me a unique edge in frontend
                engineering — I understand team dynamics, delivery, and the
                value of building things that scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}