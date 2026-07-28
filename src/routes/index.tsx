import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Gauge, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  services,
  processSteps,
  technologies,
  industries,
  stats,
  testimonials,
  faqs,
  posts,
  clients,
} from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "PrarohTech — Software, AI & Cloud Engineering Partner";
const DESCRIPTION =
  "PrarohTech builds custom software, AI solutions, cloud platforms and ERP systems that help ambitious companies grow. Plan, design, develop, deploy, support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Senior engineers only",
    text: "Every squad is led by architects with a decade of production delivery — no learning on your budget.",
  },
  {
    icon: Gauge,
    title: "Ship in weeks, not quarters",
    text: "Two-week sprints, working software every demo, and a roadmap you can hold us to.",
  },
  {
    icon: Users,
    title: "Business outcomes first",
    text: "We measure success in throughput, cost saved and revenue enabled — not story points.",
  },
  {
    icon: Sparkles,
    title: "Built to be handed over",
    text: "Documented architecture, tests and CI/CD so your team can own the platform from day one.",
  },
];

function Index() {
  return (
    <>
      <h1 className="sr-only">PrarohTech — software development, AI, cloud and digital transformation</h1>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-70 dark:opacity-25"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 dark:from-background dark:via-background/85 dark:to-background/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32 lg:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Trusted engineering partner since 2014
            </span>
            <p className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Software that moves
              <br />
              <span className="gradient-text">your business forward</span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design, build and operate custom software, AI systems, cloud platforms and ERP solutions for companies
              that cannot afford to guess.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-[1.03]"
              >
                Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
              >
                Contact Us
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="hidden lg:block">
            <div className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Engagement snapshot</p>
              <ul className="mt-5 space-y-4">
                {[
                  "Discovery sprint in 2 weeks",
                  "Architecture and costed roadmap",
                  "Dedicated squad within 30 days",
                  "SLA-backed support after launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
                “PrarohTech felt like our own team, only faster.”
                <span className="mt-2 block text-xs font-medium text-foreground">CTO, Northbridge Finance</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted by */}
      <Section className="py-12 sm:py-14">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trusted by teams across fintech, healthcare, manufacturing and logistics
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">
            {clients.map((c) => (
              <li
                key={c}
                className="text-center font-display text-base font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Intro */}
      <Section className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Who we are"
            title="An engineering partner, not a body shop"
            description="PrarohTech is a 60-person product engineering company. We combine strategy, design and deep .NET, Angular, cloud and AI expertise to deliver systems that run critical operations for our clients — and keep running long after we hand them over."
          />
          <Reveal delay={100} className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="surface-card p-5">
                <d.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Featured services"
          description="Ten disciplines, one accountable delivery team."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 70} className="surface-card p-6">
              <s.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      {/* Process */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="How we work"
          title="Plan → Design → Develop → Deploy → Support"
          description="A delivery model refined over 180 projects, with a clear owner and exit criteria at every stage."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="surface-card p-6">
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Technologies + industries */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Our stack" title="Technologies we build with" />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Sectors" title="Industries we serve" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((ind) => (
                <li key={ind} className="flex items-center gap-2.5 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Client voices" title="What our clients say" />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90} className="surface-card flex flex-col p-6">
              <p className="flex-1 text-sm leading-relaxed">“{t.quote}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions we hear most" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      {/* Blog */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Insights" title="Latest from the blog" />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 90} className="surface-card p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{p.category}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{p.read}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Read the blog <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal className="text-center">
          <div className="rounded-3xl p-10 sm:p-16" style={{ backgroundImage: "var(--gradient-brand)" }}>
            <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Let&apos;s scope your next platform
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Tell us the outcome you need. We will come back within one business day with an approach, a timeline and a
              realistic budget.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              Book a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
