import { ArrowRight } from "lucide-react";
import { projects, workExperience } from "@/content/site";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Work() {
  return (
    <div className="w-full">
      <section className="border-b border-black/8 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Work and Projects</p>
          <h1 className="section-title max-w-4xl">
            A portfolio of product design, frontend engineering, and AI-driven tools.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <p className="section-kicker">Projects</p>
            <h2 className="text-4xl font-display sm:text-5xl">Case studies</h2>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid gap-8 rounded-[2rem] bg-white p-5 shadow-[0_24px_70px_rgba(18,22,31,0.06)] md:grid-cols-2 md:p-6"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={`flex flex-col justify-center gap-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/45">
                    <span>{project.organization}</span>
                    <span className="h-1 w-1 rounded-full bg-black/25" />
                    <span>{project.year}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-4xl">{project.title}</h3>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-rust)]">
                      {project.category}
                    </p>
                  </div>
                  <p className="text-lg leading-8 text-black/62">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-black/10 bg-[var(--color-cream)] px-3 py-1 text-sm text-black/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.caseStudyLink ? (
                    <a href={project.caseStudyLink} className="button-primary w-fit">
                      View Case Study
                      <ArrowRight className="size-4" />
                    </a>
                  ) : project.externalLink ? (
                    <a href={project.externalLink} target="_blank" rel="noreferrer" className="button-primary w-fit">
                      Visit Website
                      <ArrowRight className="size-4" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/8 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <p className="section-kicker">Experience</p>
            <h2 className="text-4xl font-display sm:text-5xl">Internships and product roles</h2>
          </div>
          <div className="grid gap-8">
            {workExperience.map((work) => (
              <article key={`${work.company}-${work.year}`} className="grid gap-6 rounded-[1.75rem] border border-black/8 bg-[var(--color-cream)] p-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/45">
                    <span>{work.location}</span>
                    <span className="h-1 w-1 rounded-full bg-black/25" />
                    <span>{work.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl">{work.title}</h3>
                    <p className="mt-2 text-lg text-black/75">{work.company}</p>
                  </div>
                  <p className="leading-7 text-black/62">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 text-sm text-black/65">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
