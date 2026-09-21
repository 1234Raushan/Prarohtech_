import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/data/site";
import { cn } from "@/lib/utils";

const TITLE = "Technology Topics — AI, .NET, Angular & Cloud | PrarohTech";
const DESCRIPTION =
  "Topics PrarohTech explores across AI systems, .NET modernisation, Angular, cloud and business automation.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <Section className="pb-8 pt-16">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Topics</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
             Practical technology notes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Perspectives on software development, AI, cloud, automation and maintainable business systems.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
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
            <Reveal as="li" key={p.slug} delay={(i % 3) * 70} className="surface-card flex flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{p.category}</span>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-5 text-xs text-muted-foreground">
                 Article topic
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}