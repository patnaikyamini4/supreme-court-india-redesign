"use client";

import {
  ArrowRight,
  CalendarDays,
  FileText,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

type Judgment = {
  title: string;
  caseNumber: string;
  date: string;
  category: string;
  summary: string;
};

const judgments: Judgment[] = [
  {
    title:
      "MS TATA STEEL LIMITED VS. UNION OF INDIA THROUGH THE SECRETARY MINISTRY OF FINANCE",
    caseNumber: "C.A. No. 12020/2026",
    date: "25 Aug 2026",
    category: "Civil",
    summary:
      "Judgment and order concerning the issues placed before the Court.",
  },
  {
    title:
      "UNION OF INDIA VS. THE BOARD OF TRUSTEES OF THE PORT OF BOMBAY",
    caseNumber: "C.A. No. 11842/2026",
    date: "25 Aug 2026",
    category: "Civil",
    summary:
      "Decision delivered by the Court in the matter before the Bench.",
  },
  {
    title:
      "STATE OF INDIA VS. RESPONDENT PARTIES",
    caseNumber: "C.A. No. 11672/2026",
    date: "24 Aug 2026",
    category: "Constitutional",
    summary:
      "Important decision concerning constitutional and legal questions.",
  },
  {
    title:
      "DIRECTOR GENERAL OF GST INTELLIGENCE VS. ASHOK KUMAR",
    caseNumber: "Crl.A. No. 3841/2026",
    date: "22 Aug 2026",
    category: "Criminal",
    summary:
      "Order and judgment delivered in the criminal appeal.",
  },
];

const categories = [
  "All",
  "Civil",
  "Criminal",
  "Constitutional",
];

export default function JudgmentExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredJudgments = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return judgments.filter((judgment) => {
      const matchesCategory =
        category === "All" ||
        judgment.category === category;

      const matchesSearch =
        !normalizedQuery ||
        judgment.title.toLowerCase().includes(normalizedQuery) ||
        judgment.caseNumber
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <section className="bg-[#F7F5EF] py-20 md:py-24">
      <div className="sc-container">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="sc-eyebrow">
            Judgments
          </p>

          <h2 className="sc-heading">
            Explore decisions of
            <span className="block">
              the Supreme Court.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500">
            Search and explore judgments by party name, case
            number or category.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl border border-slate-200 px-4">
              <Search
                size={19}
                className="shrink-0 text-slate-400"
              />

              <input
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search by party name or case number..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition ${
                    category === item
                      ? "bg-[#0B1F33] text-white"
                      : "bg-[#F7F5EF] text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result count */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-[#0B1F33]">
              {filteredJudgments.length}
            </span>{" "}
            judgments
          </p>

          <span className="hidden text-xs uppercase tracking-wider text-slate-400 sm:block">
            Latest decisions
          </span>
        </div>

        {/* Judgment cards */}
        <div className="mt-5 space-y-3">
          {filteredJudgments.length > 0 ? (
            filteredJudgments.map((judgment) => (
              <article
                key={judgment.caseNumber}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#B38A3E]/50 hover:shadow-lg hover:shadow-[#0B1F33]/5 md:p-7"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#F7F5EF] px-3 py-1 text-[11px] font-semibold text-[#B38A3E]">
                        {judgment.category}
                      </span>

                      <span className="text-xs text-slate-400">
                        {judgment.caseNumber}
                      </span>
                    </div>

                    <h3 className="sc-serif mt-4 max-w-4xl text-xl font-bold leading-7 text-[#0B1F33] md:text-2xl">
                      {judgment.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                      {judgment.summary}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                      <CalendarDays size={14} />

                      {judgment.date}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-[#0B1F33] transition hover:border-[#B38A3E] hover:text-[#B38A3E] md:self-center"
                  >
                    <FileText size={16} />

                    View judgment

                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <Search
                size={28}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 font-semibold text-[#0B1F33]">
                No judgments found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another party name, case number or category.
              </p>
            </div>
          )}
        </div>

        {/* View all */}
        <div className="mt-8">
          <button
            type="button"
            className="group flex items-center gap-2 text-sm font-semibold text-[#B38A3E]"
          >
            View all judgments

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}