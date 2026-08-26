"use client";

import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

const judgments = [
  {
    title:
      "HARPREET SAWHNEY VS. PUNEET SHARMA",
    caseNumber: "C.A. No. 10509-10510/2026",
    diary: "Diary Number 57166 / 2025",
    date: "10 August 2026",
    type: "Civil Appeal",
  },
  {
    title:
      "THE STATE OF ANDHRA PRADESH HOME DEPARTMENT VS. PONTHATI SIVA RAMI REDDY",
    caseNumber: "Crl.A. No. 2120/2017",
    diary: "Diary Number 6413 / 2016",
    date: "10 August 2026",
    type: "Criminal Appeal",
  },
  {
    title:
      "SHABU KN ACHARY VS. DHARAMPAL PREMCHAND LIMITED",
    caseNumber: "C.A. No. 10260/2026",
    diary: "Diary Number 21018 / 2026",
    date: "07 August 2026",
    type: "Civil Appeal",
  },
  {
    title:
      "ASHOK KUMAR TIWARI VS. VIVEK KUMAR CHATURVEDI",
    caseNumber: "CONMT.PET.(C) No. 251/2026",
    diary: "Diary Number 72089 / 2025",
    date: "07 August 2026",
    type: "Contempt Petition",
  },
  {
    title:
      "LACHCHAPPA VS. SPECIAL LAND ACQUISITION OFFICER",
    caseNumber: "C.A. No. 10250-10252/2026",
    diary: "Diary Number 41642 / 2016",
    date: "07 August 2026",
    type: "Civil Appeal",
  },
  {
    title:
      "RAZIYA BEGUM VS. NAFISA BEGUM ABDUL HAMID",
    caseNumber: "C.A. No. 7225/2011",
    diary: "Diary Number 13874 / 2010",
    date: "07 August 2026",
    type: "Civil Appeal",
  },
];

export default function JudgmentsPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const types = ["All", ...new Set(judgments.map((item) => item.type))];

  const filtered = useMemo(() => {
    return judgments.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.caseNumber.toLowerCase().includes(query.toLowerCase()) ||
        item.diary.toLowerCase().includes(query.toLowerCase());

      const matchesType =
        type === "All" || item.type === type;

      return matchesQuery && matchesType;
    });
  }, [query, type]);

  return (
    <>
      <main className="min-h-screen bg-[#F7F5EF]">
        <section className="bg-[#0B1F33] text-white">
          <div className="sc-container py-16 md:py-20">
            <p className="sc-eyebrow text-[#D8B86A]">
              Judicial decisions
            </p>

            <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
              Judgments
            </h1>

            <p className="mt-5 max-w-2xl text-white/60">
              Search and explore published judgments and
              decisions of the Supreme Court.
            </p>
          </div>
        </section>

        <section className="sc-container py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 px-4">
                <Search size={18} className="text-slate-400" />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by party name, case number or diary number"
                  className="h-12 w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4">
                <SlidersHorizontal size={17} />

                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="h-12 bg-transparent text-sm outline-none"
                >
                  {types.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-500">
              Showing {filtered.length} judgment records
            </p>

            <div className="mt-4 space-y-3">
              {filtered.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-md"
                >
                  <div className="flex flex-col justify-between gap-5 md:flex-row">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#B38A3E]">
                        {item.type}
                      </span>

                      <h2 className="mt-2 max-w-4xl text-base font-bold leading-7 text-[#0B1F33] md:text-lg">
                        {item.title}
                      </h2>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                        <span>{item.caseNumber}</span>
                        <span>{item.diary}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-[#0B1F33] hover:text-[#B38A3E]"
                    >
                      View
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                  <h2 className="font-semibold text-[#0B1F33]">
                    No judgments found
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Try a different search term or category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}