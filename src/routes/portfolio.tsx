import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

const TITLE = "Portfolio — Selected Projects | PrarohTech";
const DESCRIPTION =
  "Explore PrarohTech case studies across software, AI, ERP, mobile, web and cloud — with the measurable results each project delivered.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Section className="pb-8 pt-16">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Work that shipped, and the numbers behind it
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A selection of platforms we have designed, built and operate today. Full case studies available on request.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === c
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 70} className="surface-card overflow-hidden">
              <div
                className="flex h-40 items-end p-5"
                style={{ backgroundImage: "var(--gradient-brand)" }}
                aria-hidden="true"
              >
                <span className="rounded-full bg-background/85 px-3 py-1 text-xs font-semibold">{p.category}</span>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-brand">{p.result}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}