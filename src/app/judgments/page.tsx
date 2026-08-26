import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Search,
} from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const judgments = [
  {
    id: "sample-constitutional-matter",
    title: "Constitutional Interpretation and Fundamental Rights",
    citation: "2026 INSC 245",
    date: "18 August 2026",
    bench: "Constitution Bench",
    category: "Constitutional",
  },
  {
    id: "sample-civil-matter",
    title: "Principles Governing Civil Appellate Jurisdiction",
    citation: "2026 INSC 231",
    date: "12 August 2026",
    bench: "Division Bench",
    category: "Civil",
  },
  {
    id: "sample-criminal-matter",
    title: "Safeguards in Criminal Proceedings",
    citation: "2026 INSC 219",
    date: "08 August 2026",
    bench: "Division Bench",
    category: "Criminal",
  },
  {
    id: "sample-public-interest",
    title: "Public Interest and Constitutional Governance",
    citation: "2026 INSC 204",
    date: "01 August 2026",
    bench: "Three Judge Bench",
    category: "Public Interest",
  },
];

export default function JudgmentsPage() {
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Judicial Decisions"
        title="Judgments"
        description="Explore judgments and judicial decisions through an organized and searchable interface."
        breadcrumbs={[
          {
            label: "Judgments",
          },
        ]}
      />

      <PageContainer>
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
              <Search size={20} />
            </div>

            <div className="flex-1">
              <label
                htmlFor="judgment-search"
                className="sr-only"
              >
                Search judgments
              </label>

              <input
                id="judgment-search"
                placeholder="Search by title, citation or keyword"
                className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#B38A3E] focus:ring-4 focus:ring-[#B38A3E]/10"
              />
            </div>

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0B1F33] px-6 text-sm font-semibold text-white"
            >
              <Search size={17} />
              Search
            </button>
          </div>
        </div>

        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="sc-eyebrow text-[#B38A3E]">
              Latest Decisions
            </p>

            <h2 className="sc-serif mt-2 text-3xl font-bold text-[#0B1F33]">
              Recent Judgments
            </h2>
          </div>

          <span className="hidden text-sm text-slate-500 md:block">
            {judgments.length} results
          </span>
        </div>

        <div className="grid gap-5">
          {judgments.map((judgment) => (
            <article
              key={judgment.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-sm md:p-7"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#F7F5EF] px-3 py-1 text-xs font-semibold text-[#B38A3E]">
                      {judgment.category}
                    </span>

                    <span className="text-xs text-slate-400">
                      {judgment.citation}
                    </span>
                  </div>

                  <h3 className="sc-serif mt-4 text-2xl font-bold leading-snug text-[#0B1F33]">
                    {judgment.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={15} />
                      {judgment.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <FileText size={15} />
                      {judgment.bench}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/judgments/${judgment.id}`}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#B38A3E] transition hover:text-[#0B1F33]"
                >
                  View judgment
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}