import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "About PrarohTech — Practical Technology Solutions";
const DESCRIPTION =
  "Learn about PrarohTech, a growing technology services company focused on practical software, web, AI and cloud solutions for businesses.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest guidance and clear communication shape every conversation." },
  { icon: Target, title: "Craft", text: "Readable code, tested paths and documented decisions support maintainable software." },
  { icon: Compass, title: "Ownership", text: "Clear responsibilities and thoughtful decisions guide the work." },
  { icon: HeartHandshake, title: "Partnership", text: "Open communication and shared priorities guide how we work together." },
];

const focusAreas = [
  { title: "Understand", text: "Start with the business need, the people involved and the systems already in place." },
  { title: "Simplify", text: "Choose practical technology and a scope that can be understood, tested and maintained." },
  { title: "Build", text: "Develop in clear stages with regular reviews and visible progress." },
  { title: "Support", text: "Provide options for maintenance, improvement and technical guidance after launch." },
];

function About() {
  return (
    <>
      <Section className="pb-10 pt-16" >
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">About us</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Practical technology for growing businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            PrarohTech is a growing technology services company focused on building practical software, web, AI and cloud solutions for businesses.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 surface-card p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Custom software, web applications, AI automation, cloud solutions and IT consulting designed around your business needs.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-secondary/40">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="surface-card p-8">
            <h2 className="text-2xl font-semibold">Our vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To make practical, maintainable technology more accessible to growing businesses and teams.
            </p>
          </Reveal>
          <Reveal delay={100} className="surface-card p-8">
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To understand business needs and create useful software, AI and cloud solutions through a clear,
              collaborative process.
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
        <SectionHeading eyebrow="Our approach" title="Focused on useful, maintainable solutions" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className="surface-card p-6">
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Start a conversation"
          title="Tell us what your business needs"
          description="We can discuss your goals, current systems and the practical options for moving forward."
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