import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerColumns = [
  {
    title: "Court",
    links: [
      { label: "About the Court", href: "/court" },
      { label: "Judges", href: "/court" },
      { label: "Registry", href: "/court" },
      { label: "Contact", href: "/court" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Case Status", href: "/cases" },
      { label: "Cause List", href: "/cause-list" },
      { label: "Judgments", href: "/judgments" },
      { label: "Orders", href: "/orders" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Notices", href: "/notices" },
      { label: "Rules", href: "/services" },
      { label: "Resources", href: "/services" },
      { label: "Downloads", href: "/services" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#071624] text-white">
      {/* Main footer */}
      <div className="sc-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          {/* Court identity */}
          <div className="max-w-md">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#B38A3E] bg-white">
                <span className="sc-serif text-lg font-bold text-[#0B1F33]">
                  SC
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D8B86A]">
                  The Apex Court of India
                </p>

                <h2 className="sc-serif mt-1 text-xl font-bold">
                  Supreme Court of India
                </h2>
              </div>
            </div>

            <p className="mt-7 text-sm leading-7 text-white/50">
              An independent frontend redesign concept focused
              on making judicial information, court services and
              legal resources easier to discover and access.
            </p>

            {/* Contact information */}
            <div className="mt-7 space-y-3 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D8B86A]"
                />

                <span>
                  Supreme Court of India,
                  <br />
                  New Delhi, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={15}
                  className="shrink-0 text-[#D8B86A]"
                />

                <span>Registry & Court Services</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={15}
                  className="shrink-0 text-[#D8B86A]"
                />

                <span>Official Court Communication</span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold text-white">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
  <li key={link.label}>
    <a
      href={link.href}
      className="text-sm text-white/45 transition hover:text-[#D8B86A]"
    >
      {link.label}
    </a>
  </li>
))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact / quick links */}
        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8B86A]">
              Need assistance?
            </p>

            <p className="mt-2 text-sm text-white/50">
              Explore court services and information through
              the digital access points above.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-[#D8B86A]/50 hover:text-[#D8B86A]"
            >
              Accessibility
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-[#D8B86A]/50 hover:text-[#D8B86A]"
            >
              Contact
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="sc-container flex flex-col gap-4 py-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Supreme Court of India.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="transition hover:text-white/70"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white/70"
            >
              Accessibility
            </a>

            <a
              href="#"
              className="transition hover:text-white/70"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-white/70"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}