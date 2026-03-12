import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, services } from "@/content/site";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="w-full">
      <section className="hero-grid overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center gap-8">
            <div className="inline-flex w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/65 shadow-sm">
              Product Designer and Developer
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-rust)]">
                Portfolio selected from Figma Make
              </p>
              <h1 className="max-w-3xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
                Hi, I&apos;m Cion Tan
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-black/66 sm:text-xl">
                A designer and developer crafting intuitive digital experiences at
                the intersection of design and AI. Currently studying Design and
                Artificial Intelligence at SUTD.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/work" className="button-primary">
                View My Work
                <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="button-secondary">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -right-8 top-10 hidden h-44 w-44 rounded-full bg-[var(--color-sky)]/40 blur-3xl lg:block" />
            <div className="absolute -left-10 bottom-8 hidden h-56 w-56 rounded-full bg-[var(--color-rust)]/20 blur-3xl lg:block" />
            <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[2rem] border border-black/8 bg-white p-3 shadow-[0_30px_90px_rgba(18,22,31,0.12)]">
              <ImageWithFallback
                src="/images/profile/workspace-hero.svg"
                alt="Creative workspace"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="section-kicker">Featured Work</p>
              <h2 className="section-title">Selected projects from design to delivery.</h2>
              <p className="max-w-2xl text-lg leading-8 text-black/60">
                A small set of case studies from the Figma design, focusing on
                product thinking, interface craft, and AI-integrated workflows.
              </p>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-black/60 transition hover:text-black">
              View All Projects
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link key={project.slug} to={`/work/${project.slug}`} className="group block rounded-[2rem] bg-[var(--color-cream)] p-4 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,22,31,0.08)]">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 px-2 pb-2 pt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-rust)]">
                    {project.category}
                  </p>
                  <h3 className="font-display text-3xl">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <p className="section-kicker">What I Do</p>
            <h2 className="section-title">Design systems, interfaces, and AI-enabled products.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.75rem] border border-black/8 bg-white p-8 shadow-sm">
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-black/45">
                  {service.eyebrow}
                </p>
                <h3 className="mb-4 font-display text-2xl">{service.title}</h3>
                <p className="leading-7 text-black/60">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
