import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { company } from "@/data/site";

const TITLE = "Terms & Conditions | PrarohTech";
const DESCRIPTION = "The terms that govern use of the PrarohTech website and the information published on it.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <Section className="pt-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold">Terms &amp; Conditions</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Use of this website</h2>
            <p className="mt-2">
              Content on this site is provided for general information. You may browse and share it, but you may not
              reproduce it commercially without written permission from PrarohTech.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">No warranty</h2>
            <p className="mt-2">
              Website content is provided “as is”. While we keep it accurate, we make no warranty that it is complete or
              current, and it does not constitute professional advice.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Engagements</h2>
            <p className="mt-2">
              Nothing on this website forms a contract. Project scope, pricing, intellectual property and service levels
              are governed exclusively by a signed agreement between you and PrarohTech.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Trademarks</h2>
            <p className="mt-2">
              The PrarohTech name and logo are our trademarks. Third-party names and logos remain the property of their
              respective owners.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">Questions about these terms: {company.email}.</p>
          </section>
        </div>
      </div>
    </Section>
  );
}