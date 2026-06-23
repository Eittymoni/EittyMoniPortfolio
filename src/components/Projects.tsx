import { ArrowUpRight, Github } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { projects } from "../data";

export { Projects };

function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1 w-6 rounded-full bg-sage-500" />
              Projects
            </span>
            <h2 className="section-heading">Selected work.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slatey-500 dark:text-slatey-400">
            A selection of products, design systems, and side projects I've
            shipped.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-slatey-100 bg-white shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl dark:border-slatey-800 dark:bg-slatey-900 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slatey-950/80 via-slatey-950/20 to-transparent" />
                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-sage-500 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                )}
                <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-slatey-950/60 text-white backdrop-blur transition-colors hover:bg-slatey-950"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-slatey-950/60 text-white backdrop-blur transition-colors hover:bg-slatey-950"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-slatey-600 dark:text-slatey-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slatey-100 bg-slatey-50 px-2.5 py-1 text-xs font-medium text-slatey-500 dark:border-slatey-800 dark:bg-slatey-950 dark:text-slatey-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
