import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { services, processSteps } from "@/data/site";

const TITLE = "Services — Software, AI, Cloud, ERP | PrarohTech";
const DESCRIPTION =
  "Custom software, web and mobile development, AI & machine learning, cloud, ERP, UI/UX, APIs, business automation and IT consulting from PrarohTech.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            description: s.summary,
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <Section className="pb-10 pt-16">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Ten capabilities. One accountable team.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Engage us for a single discipline or an end-to-end programme. Either way you get senior engineers, a fixed
            delivery cadence and code you fully own.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 80} className="surface-card scroll-mt-28 p-6">
              <div id={s.slug} className="sr-only" />
              <s.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Delivery model" title="How an engagement runs" />
        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="surface-card p-6">
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Request a proposal <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}