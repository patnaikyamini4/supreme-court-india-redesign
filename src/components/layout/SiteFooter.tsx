import Link from "next/link";
import {
  ArrowUp,
  ExternalLink,
  MapPin,
} from "lucide-react";

const quickLinks = [
  {
    label: "Cases",
    href: "/cases",
  },
  {
    label: "Judgments",
    href: "/judgments",
  },
  {
    label: "Orders",
    href: "/orders",
  },
  {
    label: "Notices",
    href: "/notices",
  },
];

const serviceLinks = [
  {
    label: "Cause List",
    href: "/cause-list",
  },
  {
    label: "Court Services",
    href: "/services",
  },
  {
    label: "Search",
    href: "/search",
  },
  {
    label: "The Court",
    href: "/court",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="sc-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8B86A] text-[#D8B86A]">
                <span className="sc-serif text-lg font-bold">
                  SC
                </span>
              </div>

              <div>
                <p className="sc-eyebrow text-[#D8B86A]">
                  The Apex Court of India
                </p>

                <h2 className="sc-serif mt-2 text-2xl font-bold">
                  Supreme Court of India
                </h2>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              A redesigned frontend experience focused
              on clearer information architecture,
              discoverability, accessibility and
              responsive design.
            </p>

            <div className="mt-6 flex items-start gap-3 text-sm text-white/60">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-[#D8B86A]"
              />

              <span>
                Supreme Court of India
                <br />
                New Delhi, India
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="sc-eyebrow text-[#D8B86A]">
              Quick Links
            </p>

            <nav className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/65 transition hover:text-[#D8B86A]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="sc-eyebrow text-[#D8B86A]">
              Explore
            </p>

            <nav className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/65 transition hover:text-[#D8B86A]"
                >
                  {link.label}

                  {link.label === "Search" && (
                    <ExternalLink size={13} />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Supreme Court of India Redesign.
              Frontend demonstration project.
            </p>

            <a
              href="#main-content"
              className="inline-flex items-center gap-2 self-start text-white/60 transition hover:text-[#D8B86A] sm:self-auto"
            >
              Back to top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}