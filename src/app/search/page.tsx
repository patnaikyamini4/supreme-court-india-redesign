"use client";

import {
  FileText,
  Search as SearchIcon,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const searchableItems = [
  {
    title: "Constitutional Interpretation and Fundamental Rights",
    type: "Judgment",
    date: "18 August 2026",
    href: "/judgments/sample-constitutional-matter",
  },
  {
    title: "Principles Governing Civil Appellate Jurisdiction",
    type: "Judgment",
    date: "12 August 2026",
    href: "/judgments/sample-civil-matter",
  },
  {
    title: "Notice regarding listing of matters",
    type: "Notice",
    date: "26 August 2026",
    href: "/notices",
  },
  {
    title: "Daily court orders and procedural directions",
    type: "Order",
    date: "25 August 2026",
    href: "/orders",
  },
  {
    title: "Court listings and scheduled matters",
    type: "Cause List",
    date: "26 August 2026",
    href: "/cause-list",
  },
  {
    title: "Supreme Court of India",
    type: "Court",
    date: "2026",
    href: "/court",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return searchableItems;
    }

    return searchableItems.filter((item) =>
      `${item.title} ${item.type} ${item.date}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Discover"
        title="Search the Court"
        description="Search judgments, cases, orders, notices and other important court information."
        breadcrumbs={[
          {
            label: "Search",
          },
        ]}
      />

      <PageContainer>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <label
            htmlFor="site-search"
            className="mb-3 block text-sm font-semibold text-[#0B1F33]"
          >
            Search website
          </label>

          <div className="relative">
            <SearchIcon
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B38A3E]"
            />

            <input
              id="site-search"
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search judgments, cases, notices..."
              className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-12 text-sm text-[#0B1F33] outline-none transition focus:border-[#B38A3E] focus:ring-4 focus:ring-[#B38A3E]/10"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-[#0B1F33]"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Judgments",
              "Cases",
              "Orders",
              "Notices",
            ].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setQuery(category)}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-[#B38A3E] hover:text-[#B38A3E]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="sc-eyebrow text-[#B38A3E]">
                Results
              </p>

              <h2 className="sc-serif mt-2 text-3xl font-bold text-[#0B1F33]">
                {query
                  ? `Results for "${query}"`
                  : "Available Information"}
              </h2>
            </div>

            <span className="text-sm text-slate-500">
              {results.length} results
            </span>
          </div>

          <div className="mt-6 grid gap-4">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={`${item.type}-${item.title}`}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#B38A3E]/50 hover:shadow-sm md:p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                      <FileText size={20} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#B38A3E]">
                          {item.type}
                        </span>

                        <span className="text-xs text-slate-400">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="sc-serif mt-2 text-xl font-bold text-[#0B1F33]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-[#B38A3E]">
                        Open result →
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                <SearchIcon
                  className="mx-auto text-slate-300"
                  size={35}
                />

                <h3 className="sc-serif mt-5 text-2xl font-bold text-[#0B1F33]">
                  No results found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another keyword or browse one of the
                  available categories.
                </p>
              </div>
            )}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}