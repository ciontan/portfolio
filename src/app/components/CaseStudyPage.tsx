import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { caseStudies } from "@/content/site";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-black/55 transition hover:text-black">
          <ArrowLeft className="size-4" />
          Back to Work
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-4xl space-y-6">
          <p className="section-kicker">{study.kicker}</p>
          <h1 className="font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            {study.title}
          </h1>
          <p className="max-w-3xl text-xl leading-8 text-black/62">{study.subtitle}</p>
        </div>

        <div className="mb-16 aspect-[16/9] overflow-hidden rounded-[2rem] bg-white">
          <ImageWithFallback src={study.heroImage} alt={study.title} className="h-full w-full object-cover" />
        </div>

        <div className="grid gap-10 border-b border-black/8 pb-16 md:grid-cols-4">
          {study.meta.map((item) => (
            <div key={item.label}>
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-black/45">{item.label}</p>
              {item.values.map((value) => (
                <p key={value} className="text-lg text-black/78">
                  {value}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {study.sections.map((section) => (
        <section
          key={section.title}
          className={`py-24 ${section.theme === "muted" ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="section-kicker">{section.kicker}</p>
              <h2 className="mb-6 text-4xl font-display leading-tight sm:text-5xl">{section.title}</h2>
              {section.description ? (
                <p className="mb-12 text-xl leading-8 text-black/62">{section.description}</p>
              ) : null}
            </div>

            {section.image ? (
              <div className="mx-auto mb-10 max-w-7xl overflow-hidden rounded-[2rem]">
                <div className="aspect-[16/9]">
                  <ImageWithFallback src={section.image} alt={section.title} className="h-full w-full object-cover" />
                </div>
              </div>
            ) : null}

            {section.cards ? (
              <div className={`mx-auto grid max-w-4xl gap-6 ${section.cardColumns === 2 ? "md:grid-cols-2" : ""}`}>
                {section.cards.map((card) => (
                  <article
                    key={card.title}
                    className={`${section.theme === "dark" ? "bg-white text-[var(--color-ink)]" : "bg-[var(--color-cream)]"} rounded-[1.5rem] p-8`}
                  >
                    <h3 className="mb-4 font-display text-2xl">{card.title}</h3>
                    <p className="leading-7 text-black/62">{card.body}</p>
                    {card.bullets ? (
                      <ul className="mt-5 space-y-3 text-black/68">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}

            {section.highlight ? (
              <div className="mx-auto max-w-4xl rounded-[2rem] bg-[var(--color-ink)] p-12 text-white">
                <p className="font-display text-6xl sm:text-7xl">{section.highlight.value}</p>
                <p className="mt-3 text-lg text-white/70">{section.highlight.label}</p>
              </div>
            ) : null}

            {section.paragraphs ? (
              <div className="mx-auto max-w-4xl space-y-6 text-xl leading-8 text-black/62">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {study.link ? (
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <a href={study.link.href} target="_blank" rel="noreferrer" className="button-primary">
              {study.link.label}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      ) : null}

      <section className="border-t border-black/8 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-black/55 transition hover:text-black">
            <ArrowLeft className="size-4" />
            Back to all projects
          </Link>
        </div>
      </section>
    </div>
  );
}
