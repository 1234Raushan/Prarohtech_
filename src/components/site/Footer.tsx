import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin } from "lucide-react";
import logo from "@/assets/prarohtech-logo.png";
import { company, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="PrarohTech logo"
                loading="lazy"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-semibold">
                Praroh<span className="text-brand">Tech</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Practical software, web, AI and cloud solutions designed around business needs.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a className="hover:text-foreground" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a className="hover:text-foreground" href={company.website}>
                  {company.website.replace("https://", "")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { label: "About us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Careers", to: "/careers" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" hash={s.slug} className="transition-colors hover:text-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Stay informed</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Read practical notes about software, AI, cloud and business technology on our blog.
            </p>
            <Link
              to="/blog"
              className="mt-4 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-background"
            >
              Visit the blog
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PrarohTech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}