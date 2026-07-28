import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, GraduationCap, HeartPulse, Plane, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Careers at PrarohTech — Engineering, Design & Internships";
const DESCRIPTION =
  "Join PrarohTech. Open roles in .NET, Angular, AI, cloud and design, plus a paid internship programme, benefits and how to apply.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const openings = [
  { role: "Senior .NET Engineer", location: "Pune / Hybrid", type: "Full-time" },
  { role: "Angular Front-End Engineer", location: "Remote, India", type: "Full-time" },
  { role: "AI/ML Engineer (LLM Systems)", location: "Pune / Hybrid", type: "Full-time" },
  { role: "Cloud & DevOps Engineer", location: "Remote, India", type: "Full-time" },
  { role: "Product Designer (UI/UX)", location: "Pune", type: "Full-time" },
  { role: "Software Engineering Intern", location: "Pune", type: "6-month paid internship" },
];

const benefits = [
  { icon: HeartPulse, title: "Health cover", text: "Family medical insurance and annual health checks." },
  { icon: GraduationCap, title: "Learning budget", text: "₹75,000 a year for certifications, courses and conferences." },
  { icon: Plane, title: "Flexible time off", text: "Hybrid working and generous, actually-used leave." },
  { icon: TrendingUp, title: "Clear progression", text: "Published levels, twice-yearly reviews, transparent pay bands." },
];

function Careers() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Section className="pb-8 pt-16">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Careers</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Do the best engineering of your career
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Small squads, real ownership, and clients who let us build things properly. We hire for judgement and
            curiosity as much as for stack experience.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-4">
        <SectionHeading align="left" eyebrow="Open roles" title="Current openings" />
        <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {openings.map((o) => (
            <li
              key={o.role}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 transition-colors hover:bg-secondary/60"
            >
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold">{o.role}</h3>
                <p className="mt-1 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {o.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {o.type}
                  </span>
                </p>
              </div>
              <a
                href="#apply"
                className="shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
              >
                Apply
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Benefits" title="What we offer" />
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
        <SectionHeading eyebrow="Apply" title="Send us your application" description="We reply to every applicant." />
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
              <Field id="c-role" label="Role you are applying for" />
              <Field id="c-link" label="Portfolio / LinkedIn" required={false} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="c-msg" className="text-sm font-medium">
                Why PrarohTech?
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
              Submit application
            </button>
            {submitted ? (
              <p role="status" className="text-sm text-brand">
                Thanks — your application has been received. We will be in touch shortly.
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