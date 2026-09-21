import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Careers at PrarohTech — Expressions of Interest";
const DESCRIPTION =
  "Learn about working with PrarohTech and submit a general expression of interest for future opportunities.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const benefits = [
  { icon: Lightbulb, title: "Practical thinking", text: "An interest in solving real business and technology problems." },
  { icon: BookOpen, title: "Continuous learning", text: "Curiosity and a willingness to develop new skills as the work evolves." },
  { icon: HeartHandshake, title: "Open communication", text: "Respectful collaboration, honest feedback and clear expectations." },
  { icon: Users, title: "Shared responsibility", text: "Thoughtful ownership of decisions, quality and the people affected by the work." },
];

function Careers() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Section className="pb-8 pt-16">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Careers</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Grow with a developing technology business
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We welcome expressions of interest from thoughtful engineers, designers and technology professionals who
            value practical work and continuous learning.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <SectionHeading align="left" eyebrow="Opportunities" title="No advertised openings at present" />
        <Reveal className="mt-10 surface-card p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            We are not currently advertising specific roles. If your experience aligns with software development, AI,
            cloud or business technology, you can share a general expression of interest below for future consideration.
          </p>
        </Reveal>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Working principles" title="What we value" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 80} className="surface-card p-6">
              <b.icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="apply">
        <SectionHeading eyebrow="Expression of interest" title="Introduce yourself" description="Share your background for possible future opportunities." />
        <Reveal className="mx-auto mt-12 max-w-2xl">
          <form
            className="surface-card grid gap-4 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="c-name" label="Full name" />
              <Field id="c-email" label="Email" type="email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="c-role" label="Area of interest" />
              <Field id="c-link" label="Portfolio / LinkedIn" required={false} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="c-msg" className="text-sm font-medium">
                Tell us about your interests and experience
              </label>
              <textarea
                id="c-msg"
                rows={5}
                required
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="mt-2 justify-self-start rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Submit interest
            </button>
            {submitted ? (
              <p role="status" className="text-sm text-brand">
                Thanks — your expression of interest has been received.
              </p>
            ) : null}
          </form>
        </Reveal>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}