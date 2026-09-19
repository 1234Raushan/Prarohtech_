import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Gauge, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  services,
  processSteps,
  technologies,
  industries,
  faqs,
  posts,
} from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "PrarohTech — Software, AI & Cloud Solutions";
const DESCRIPTION =
  "PrarohTech builds practical digital solutions for growing businesses, including custom software, web applications, AI automation, cloud solutions and IT consulting.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Practical by design",
    text: "Solutions are shaped around real business needs, clear priorities and maintainable technology.",
  },
  {
    icon: Gauge,
    title: "Clear delivery approach",
    text: "Work is organised into transparent stages with regular reviews and visible progress.",
  },
  {
    icon: Users,
    title: "Business outcomes first",
    text: "Technology decisions start with the problem your business needs to solve.",
  },
  {
    icon: Sparkles,
    title: "Built for ownership",
    text: "Clear architecture, documentation and testing support long-term maintainability.",
  },
];

function Index() {
  return (
    <>
<<<<<<< HEAD
      <h1 className="sr-only">
        PrarohTech — software development, AI, cloud and business technology solutions
      </h1>
=======
      <h1 className="sr-only">PrarohTech — Software, AI &amp; Cloud Solutions</h1>
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1

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

        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 dark:from-background dark:via-background/85 dark:to-background/40"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32 lg:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
<<<<<<< HEAD
              Software • AI • Cloud Solutions
=======
              PrarohTech
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
            </span>

            <p className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Software, AI &amp; Cloud
              <br />
              <span className="gradient-text">Solutions</span>
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
<<<<<<< HEAD
              We design and build custom software, web applications, AI-enabled
              solutions, cloud platforms and business applications for growing
              businesses.
=======
              We build practical digital solutions for growing businesses.
              Custom software, web applications, AI automation, cloud solutions and IT consulting designed around your business needs.
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-[1.03]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
              >
                Contact Us
              </Link>
            </div>
<<<<<<< HEAD

            {/* Capability highlights instead of fabricated statistics */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "Custom", label: "Software Solutions" },
                { value: "AI", label: "Business Automation" },
                { value: ".NET", label: "Development Expertise" },
                { value: "Cloud", label: "Technology Solutions" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl font-semibold">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
=======
            <ul className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {["Software", "Web Apps", "AI Automation", "Cloud"].map((item) => (
                <li key={item} className="font-display text-sm font-semibold text-muted-foreground">{item}</li>
              ))}
            </ul>
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
          </Reveal>

          <Reveal delay={120} className="hidden lg:block">
            <div className="surface-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                How we can help
              </p>

              <ul className="mt-5 space-y-4">
                {[
<<<<<<< HEAD
                  "Understand your business requirements",
                  "Design a practical technical approach",
                  "Build and test the solution",
                  "Deploy and provide ongoing support",
=======
                  "Discovery and requirements",
                  "Architecture and delivery planning",
                  "Iterative development and reviews",
                  "Maintenance and support options",
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
<<<<<<< HEAD
                We focus on clear communication, practical engineering and
                solutions built around your business needs.
=======
                Technology choices and delivery plans shaped around your business needs.
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
              </div>
            </div>
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
      {/* Business positioning */}
      <Section className="py-12 sm:py-14">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Technology solutions for growing businesses
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              "Software Development",
              "AI & Automation",
              "Cloud Solutions",
              "IT Consulting",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
=======
      {/* Partnership statement */}
      <Section className="py-12 sm:py-14">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Building partnerships with businesses and teams looking for reliable technology solutions.
          </p>
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
        </Reveal>
      </Section>

      {/* Intro */}
      <Section className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Who we are"
<<<<<<< HEAD
            title="A technology partner for growing businesses"
            description="PrarohTech is a growing technology services company focused on software development, AI-enabled applications, cloud solutions and business technology. We combine practical engineering with a business-focused approach to build solutions that are reliable, maintainable and ready to grow."
=======
            title="A practical technology partner"
            description="PrarohTech is a growing technology services company focused on building practical software, web, AI and cloud solutions for businesses."
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
          />

          <Reveal
            delay={100}
            className="grid gap-4 sm:grid-cols-2"
          >
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="surface-card p-5"
              >
                <d.icon
                  className="h-6 w-6 text-brand"
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-base font-semibold">
                  {d.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Technology services"
          description="Practical technology services designed around your business requirements."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={i * 70}
              className="surface-card p-6"
            >
              <s.icon
                className="h-7 w-7 text-brand"
                aria-hidden="true"
              />

              <h3 className="mt-5 text-lg font-semibold">
                {s.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.summary}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      {/* Process */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="How we work"
          title="Plan → Design → Develop → Deploy → Support"
<<<<<<< HEAD
          description="A clear and practical delivery process with defined goals, communication and ownership at every stage."
=======
          description="A clear delivery model with defined goals, regular reviews and practical handover at every stage."
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 80}
              className="surface-card p-6"
            >
              <span className="font-display text-sm font-semibold text-brand">
                0{i + 1}
              </span>

              <h3 className="mt-3 text-lg font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Technologies + industries */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our stack"
              title="Technologies we build with"
            />

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
            <SectionHeading
              align="left"
              eyebrow="Sectors"
              title="Industries we can support"
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((ind) => (
                <li
                  key={ind}
                  className="flex items-center gap-2.5 text-sm"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

<<<<<<< HEAD
=======
      {/* Partnership */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Working together" title="Technology support built around your needs" />
        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Building partnerships with businesses and teams looking for reliable technology solutions.
          </p>
        </Reveal>
      </Section>

>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear most"
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
              >
                <AccordionTrigger className="text-left text-base">
                  {f.q}
                </AccordionTrigger>

                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      {/* Blog */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Insights"
          title="Latest from the blog"
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal
              as="li"
              key={p.slug}
              delay={i * 90}
              className="surface-card p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {p.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold leading-snug">
                {p.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>

              <p className="mt-4 text-xs text-muted-foreground">
                {p.read}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read the blog
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal className="text-center">
          <div
            className="rounded-3xl p-10 sm:p-16"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Let&apos;s build something useful together
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
<<<<<<< HEAD
              Tell us what you are looking to build. We will review your
              requirements and discuss a practical approach, timeline and
              budget.
=======
              Tell us what you need to build or improve. We will discuss the requirements and a practical way forward.
>>>>>>> e468481a248c659defd04f9974a6af652f68dad1
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              Start a Conversation
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
