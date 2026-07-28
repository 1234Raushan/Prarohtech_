import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/data/site";

const TITLE = "Contact PrarohTech — Talk to Our Engineering Team";
const DESCRIPTION =
  "Get in touch with PrarohTech. Share your project and we will respond within one business day with an approach, timeline and budget.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section className="pt-16">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Tell us what you are building
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          One business day response, always from an engineer — never a sales bot.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="surface-card p-6 sm:p-8">
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Full name" />
              <Field id="email" label="Work email" type="email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="company" label="Company" required={false} />
              <Field id="phone" label="Phone" type="tel" required={false} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={6}
                required
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="mt-2 justify-self-start rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Send message
            </button>
            {sent ? (
              <p role="status" className="text-sm text-brand">
                Thanks — your message is on its way. We will reply within one business day.
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={100} className="grid gap-6">
          <div className="surface-card p-6">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <address className="not-italic">{company.address}</address>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                Mon–Fri, 9:30–18:30 IST
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
              {company.social.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-foreground">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="PrarohTech office location on Google Maps"
              src="https://www.google.com/maps?q=Baner%20Road%2C%20Pune&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </Section>
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