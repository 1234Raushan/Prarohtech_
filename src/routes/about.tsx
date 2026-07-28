import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { stats } from "@/data/site";

const TITLE = "About PrarohTech — Our Story, Vision and Team";
const DESCRIPTION =
  "Meet PrarohTech: a 60-person product engineering company delivering software, AI and cloud platforms since 2014. Our vision, mission, values and team.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "We tell you what we would do with our own money, even when it costs us the sale." },
  { icon: Target, title: "Craft", text: "Readable code, tested paths, documented decisions. Quality is a schedule feature." },
  { icon: Compass, title: "Ownership", text: "We take responsibility for outcomes, not just deliverables." },
  { icon: HeartHandshake, title: "Partnership", text: "Long horizons over quick wins — most clients stay with us for years." },
];

const team = [
  { name: "Rahul Deshpande", role: "Founder & CEO", bio: "18 years in enterprise software; previously led platform engineering at a global bank." },
  { name: "Sana Qureshi", role: "Head of Engineering", bio: "Architect for .NET and Azure programmes across fintech and manufacturing." },
  { name: "Kevin Alvarez", role: "Director of AI", bio: "Applied ML lead focused on retrieval systems, evaluation and safe deployment." },
  { name: "Neha Kulkarni", role: "Head of Design", bio: "Design systems and research practice for complex enterprise workflows." },
  { name: "Arjun Iyer", role: "Cloud Practice Lead", bio: "Kubernetes, FinOps and migration programmes on Azure and AWS." },
  { name: "Fatima Sheikh", role: "Delivery Director", bio: "Runs squad health, governance and client communication across accounts." },
];

function About() {
  return (
    <>
      <Section className="pb-10 pt-16" >
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">About us</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Built to be the last engineering partner you need
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            PrarohTech started in 2014 with three engineers and one belief: enterprise software does not have to be slow,
            ugly or fragile. Twelve years later we are 60 specialists delivering platforms that run lending desks,
            factories, hospitals and logistics networks.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="surface-card p-6">
                <dd className="font-display text-3xl font-semibold">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="bg-secondary/40">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="surface-card p-8">
            <h2 className="text-2xl font-semibold">Our vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A world where every growing organisation has access to the same calibre of engineering as the largest
              technology companies — without the overhead, the theatre or the lock-in.
            </p>
          </Reveal>
          <Reveal delay={100} className="surface-card p-8">
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To design, build and operate software that measurably improves how our clients work — delivered
              transparently, secured by default, and handed over with everything needed to own it.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core values" title="What we hold ourselves to" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 80} className="surface-card p-6">
              <v.icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Leadership" title="The people accountable for your delivery" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 70} className="surface-card p-6">
              <div
                className="grid h-12 w-12 place-items-center rounded-full font-display text-sm font-semibold text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-brand)" }}
                aria-hidden="true"
              >
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-brand">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why clients trust us"
          title="Certifications, governance and a decade of references"
          description="ISO 27001-aligned processes, Microsoft and AWS partner accreditation, secure SDLC, and named references in every sector we serve."
        />
        <Reveal className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Talk to our team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}