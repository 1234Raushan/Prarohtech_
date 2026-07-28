import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { company } from "@/data/site";

const TITLE = "Privacy Policy | PrarohTech";
const DESCRIPTION = "How PrarohTech collects, uses, stores and protects personal data submitted through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Section className="pt-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page is maintained by PrarohTech and describes how we handle information submitted through this website.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
            <p className="mt-2">
              We collect the details you choose to send us through our contact, application and newsletter forms — such
              as your name, email address, phone number, company and message.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
            <p className="mt-2">
              We use your information solely to respond to your enquiry, assess job applications, or send the newsletter
              you requested. We do not sell personal data.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Retention</h2>
            <p className="mt-2">
              Enquiry and application records are retained only as long as needed for the purpose they were collected
              for, or as required by applicable law.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal data at any time by emailing{" "}
              <a className="text-brand hover:underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              PrarohTech, {company.address}. Questions about this policy can be sent to {company.email}.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}