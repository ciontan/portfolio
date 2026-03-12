import { highlights, profile, skills } from "@/content/site";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="w-full">
      <section className="border-b border-black/8 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="space-y-6">
            <p className="section-kicker">About Me</p>
            <h1 className="section-title">Designing with empathy, systems thinking, and technical depth.</h1>
            <div className="space-y-5 text-lg leading-8 text-black/62">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-[var(--color-cream)] p-3 shadow-sm">
            <ImageWithFallback
              src={profile.image}
              alt="Designer workspace"
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-4">
            <p className="section-kicker">Experience</p>
            <h2 className="text-4xl font-display sm:text-5xl">Roles that shaped my approach</h2>
          </div>
          <div className="grid gap-6">
            {profile.experience.map((item) => (
              <article key={`${item.role}-${item.period}`} className="rounded-[1.75rem] border border-black/8 bg-white p-8">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="font-display text-2xl">{item.role}</h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-black/45">{item.period}</p>
                </div>
                <p className="mb-3 text-lg text-black/78">{item.company}</p>
                <p className="leading-7 text-black/62">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-4">
            <p className="section-kicker">Skills and Tools</p>
            <h2 className="text-4xl font-display sm:text-5xl">A hybrid toolkit across design and engineering</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.title} className="rounded-[1.75rem] bg-[var(--color-cream)] p-8">
                <h3 className="mb-5 font-display text-2xl">{group.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-4">
            <p className="section-kicker">Highlights</p>
            <h2 className="text-4xl font-display sm:text-5xl">Signals of impact</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <article key={`${item.achievement}-${item.year}`} className="flex items-center justify-between rounded-[1.5rem] border border-black/8 bg-white p-6">
                <div>
                  <h3 className="font-display text-2xl">{item.achievement}</h3>
                  <p className="mt-2 text-black/60">{item.project}</p>
                </div>
                <span className="text-3xl text-[var(--color-rust)]">{item.year}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
