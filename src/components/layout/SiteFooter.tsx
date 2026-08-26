import Link from "next/link";

const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Court",
    href: "/court",
  },
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
  {
    label: "Cause List",
    href: "/cause-list",
  },
  {
    label: "e-Services",
    href: "/services",
  },
  {
    label: "Search",
    href: "/search",
  },
];

const informationLinks = [
  {
    label: "Case Status",
    href: "/cases",
  },
  {
    label: "Daily Orders",
    href: "/orders",
  },
  {
    label: "Latest Judgments",
    href: "/judgments",
  },
  {
    label: "Notices",
    href: "/notices",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="sc-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B86A]">
                <span className="sc-serif font-bold text-[#D8B86A]">
                  SC
                </span>
              </div>

              <div>
                <p className="sc-serif text-xl font-bold">
                  Supreme Court
                </p>

                <p className="text-xs text-white/50">
                  of India
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              A frontend redesign focused on making
              important judicial information easier to
              discover, understand and access.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8B86A]">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-[#D8B86A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8B86A]">
              Information
            </p>

            <div className="mt-5 space-y-3">
              {informationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 transition hover:text-[#D8B86A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-3 text-xs text-white/40 md:flex-row">
            <p>
              © 2026 Supreme Court of India Redesign.
            </p>

            <p>
              Frontend concept · No backend connected
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}