import { useInView } from "../hooks/useInView";
import { skills } from "../data";

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1 w-6 rounded-full bg-sage-500" />
            Skills
          </span>
          <h2 className="section-heading">My technical toolkit.</h2>
          <p className="mt-4 text-base leading-relaxed text-slatey-500 dark:text-slatey-300">
            A focused stack refined over years of shipping production-grade
            frontend applications.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`card group p-5 transition-all duration-700 hover:-translate-y-1 hover:border-sage-300 dark:hover:border-sage-600 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-50 text-sage-600 transition-colors group-hover:bg-sage-500 group-hover:text-white dark:bg-sage-900/30 dark:text-sage-400 dark:group-hover:bg-sage-500 dark:group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-mono text-slatey-400">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slatey-900 dark:text-white">
                  {skill.name}
                </h3>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slatey-100 dark:bg-slatey-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sage-500 to-sage-400 transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 70 + 200}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
