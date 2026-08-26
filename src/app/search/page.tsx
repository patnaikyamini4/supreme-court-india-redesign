"use client";

import {
  ArrowUpRight,
  FileText,
  Gavel,
  Search,
  Bell,
  BriefcaseBusiness,
} from "lucide-react";
import { useMemo, useState } from "react";

const searchableContent = [
  {
    title: "Latest Judgments",
    description:
      "Search published judgments and judicial decisions.",
    type: "Judgments",
    href: "/judgments",
    icon: Gavel,
  },
  {
    title: "Case Status",
    description:
      "Search cases using case number, diary number, party name or CNR number.",
    type: "Cases",
    href: "/cases",
    icon: BriefcaseBusiness,
  },
  {
    title: "Daily Orders",
    description:
      "Browse orders published by the Supreme Court.",
    type: "Orders",
    href: "/orders",
    icon: FileText,
  },
  {
    title: "Notices",
    description:
      "Find listing notices, circulars and announcements.",
    type: "Notices",
    href: "/notices",
    icon: Bell,
  },
  {
    title: "Cause List",
    description:
      "Explore court-wise daily listings.",
    type: "Cause List",
    href: "/cause-list",
    icon: FileText,
  },
  {
    title: "e-Services",
    description:
      "Access online services and digital resources.",
    type: "Services",
    href: "/services",
    icon: Search,
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return searchableContent;
    }

    return searchableContent.filter((item) =>
      `${item.title} ${item.description} ${item.type}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16 md:py-20">
          <p className="sc-eyebrow text-[#D8B86A]">
            Find information
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            Search
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Search across court services, judgments, orders,
            notices and other sections of the website.
          </p>

          <div className="mt-8 flex max-w-3xl items-center gap-3 rounded-2xl bg-white p-2">
            <Search
              size={21}
              className="ml-3 text-slate-400"
            />

            <input
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search judgments, cases, notices, services..."
              className="h-12 flex-1 bg-transparent px-2 text-sm text-[#0B1F33] outline-none"
            />

            <button
              type="button"
              className="rounded-xl bg-[#B38A3E] px-5 py-3 text-sm font-semibold text-white"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">
              {query
                ? `${results.length} results`
                : "Popular sections"}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#0B1F33]">
              {query ? "Search results" : "Explore"}
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {results.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#B38A3E]/50 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                    <Icon size={19} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-300 group-hover:text-[#B38A3E]"
                  />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
                  {item.type}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#0B1F33]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>

        {results.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <Search
              size={28}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-4 font-bold text-[#0B1F33]">
              No results found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try a different search phrase.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}