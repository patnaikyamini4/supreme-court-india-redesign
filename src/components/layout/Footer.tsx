import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const footerGroups = [
  {
    title: "Court",
    links: [
      "About Us",
      "History",
      "Jurisdiction",
      "Judges",
      "Contact Us",
    ],
  },
  {
    title: "Services",
    links: [
      "Case Status",
      "Cause List",
      "Judgments",
      "Daily Orders",
      "Office Reports",
    ],
  },
  {
    title: "Resources",
    links: [
      "Constitution",
      "Acts & Rules",
      "Court Library",
      "Notices",
      "Recruitment",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071624] text-white">
      {/* Main footer */}
      <div className="sc-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Identity */}
          <div className="max-w-md">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B38A3E]">
                <span className="sc-serif text-lg font-bold">
                  SC
                </span>
              </div>

              <div>
                <p className="sc-eyebrow text-[#D8B86A]">
                  The Apex Court of India
                </p>

                <h2 className="sc-serif mt-1 text-2xl font-bold">
                  Supreme Court of India
                </h2>
              </div>
            </div>

            <p className="mt-7 text-sm leading-7 text-white/50">
              Official digital information and services of the
              Supreme Court of India, presented through a clearer
              and more accessible frontend experience.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm text-white/50">
              <span className="h-2 w-2 rounded-full bg-[#B38A3E]" />

              Government of India
            </div>
          </div>

          {/* Link groups */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#footer-link"
                        className="text-sm text-white/45 transition-colors hover:text-[#D8B86A]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* External resources */}
        <div className="mt-14 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a
            href="#national-portal"
            className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <span className="text-sm text-white/60">
              National Portal of India
            </span>

            <ExternalLink
              size={15}
              className="text-white/30 transition-colors group-hover:text-[#D8B86A]"
            />
          </a>

          <a
            href="#digital-india"
            className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <span className="text-sm text-white/60">
              Digital India
            </span>

            <ExternalLink
              size={15}
              className="text-white/30 transition-colors group-hover:text-[#D8B86A]"
            />
          </a>

          <a
            href="#india-code"
            className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            <span className="text-sm text-white/60">
              India Code
            </span>

            <ExternalLink
              size={15}
              className="text-white/30 transition-colors group-hover:text-[#D8B86A]"
            />
          </a>
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
              href="#privacy"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#accessibility"
              className="transition hover:text-white"
            >
              Accessibility
            </a>

            <a
              href="#sitemap"
              className="flex items-center gap-1 transition hover:text-white"
            >
              Sitemap
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}