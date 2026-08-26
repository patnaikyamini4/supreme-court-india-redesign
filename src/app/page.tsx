"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  FileSearch,
  FileText,
  Gavel,
  Search,
  Scale,
} from "lucide-react";

const services = [
  {
    title: "Case Status",
    description:
      "Search and explore information about cases before the Court.",
    href: "/cases",
    icon: FileSearch,
  },
  {
    title: "Judgments",
    description:
      "Browse important judicial decisions and judgments.",
    href: "/judgments",
    icon: Scale,
  },
  {
    title: "Daily Orders",
    description:
      "Access daily orders and procedural information.",
    href: "/orders",
    icon: FileText,
  },
  {
    title: "Cause List",
    description:
      "View scheduled matters and court listings.",
    href: "/cause-list",
    icon: CalendarDays,
  },
];

const highlights = [
  {
    number: "01",
    title: "Judicial Decisions",
    description:
      "Explore judgments through a structured and readable interface.",
    href: "/judgments",
  },
  {
    number: "02",
    title: "Court Services",
    description:
      "Reach important digital services without navigating complex menus.",
    href: "/services",
  },
  {
    number: "03",
    title: "Court Information",
    description:
      "Learn about the Court, its structure and judicial work.",
    href: "/court",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F33] text-white">
        <div
          aria-hidden="true"
          className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-160px] left-[-100px] h-80 w-80 rounded-full border border-[#D8B86A]/10"
        />

        <div className="sc-container relative py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="sc-eyebrow text-[#D8B86A]">
              Justice • Access • Transparency
            </p>

            <h1 className="sc-serif mt-5 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Supreme Court
              <br />
              <span className="text-[#D8B86A]">
                of India
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base md:text-lg">
              A modern digital experience for discovering
              judgments, cases, court services, notices and
              important judicial information.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/search"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D8B86A] px-6 text-sm font-bold text-[#0B1F33] transition hover:bg-white"
              >
                <Search size={17} />
                Search the Court
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-[#D8B86A] hover:text-[#D8B86A]"
              >
                Explore services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick access */}
      <section className="border-b border-slate-200 bg-white">
        <div className="sc-container py-8 md:py-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                      <Icon size={20} />
                    </div>

                    <ArrowRight
                      size={16}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#B38A3E]"
                    />
                  </div>

                  <h2 className="sc-serif mt-5 text-lg font-bold text-[#0B1F33]">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#F7F5EF]">
        <div className="sc-container py-14 sm:py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <div>
              <p className="sc-eyebrow text-[#B38A3E]">
                The Court
              </p>

              <h2 className="sc-serif mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#0B1F33] sm:text-4xl md:text-5xl">
                A clearer way to access the highest
                court of the land.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                The redesign focuses on information
                architecture rather than simply changing
                visual styling. Frequently used services
                are surfaced first, while judicial content
                is grouped into clear and recognizable
                categories.
              </p>

              <Link
                href="/court"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#B38A3E] transition hover:text-[#0B1F33]"
              >
                Learn about the Court
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-3xl bg-[#0B1F33] p-7 text-white sm:p-9">
              <Gavel
                size={30}
                className="text-[#D8B86A]"
              />

              <p className="sc-serif mt-8 text-2xl font-bold leading-snug sm:text-3xl">
                Justice, accessibility and
                transparency at the center of the
                experience.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-5 text-xs leading-6 text-white/50 sm:text-sm">
                Frontend redesign concept. No backend,
                authentication or live court data is
                connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t border-slate-200 bg-white">
        <div className="sc-container py-14 sm:py-16 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="sc-eyebrow text-[#B38A3E]">
                Explore
              </p>

              <h2 className="sc-serif mt-3 text-3xl font-bold text-[#0B1F33] sm:text-4xl">
                Discover the Court
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E]"
            >
              View all services
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:border-[#B38A3E]/50 hover:shadow-sm sm:p-7"
              >
                <span className="text-xs font-bold tracking-widest text-[#B38A3E]">
                  {item.number}
                </span>

                <h3 className="sc-serif mt-6 text-xl font-bold text-[#0B1F33]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E]">
                  Explore
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F7F5EF]">
        <div className="sc-container py-14 sm:py-16 md:py-20">
          <div className="rounded-3xl border border-[#B38A3E]/30 bg-white p-7 text-center sm:p-10 md:p-14">
            <p className="sc-eyebrow text-[#B38A3E]">
              Find what you need
            </p>

            <h2 className="sc-serif mx-auto mt-4 max-w-2xl text-3xl font-bold text-[#0B1F33] sm:text-4xl">
              Search judgments, cases and court
              information.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Use the redesigned search experience to
              quickly discover important information.
            </p>

            <Link
              href="/search"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0B1F33] px-7 text-sm font-semibold text-white transition hover:bg-[#102A43]"
            >
              <Search size={17} />
              Open Court Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}