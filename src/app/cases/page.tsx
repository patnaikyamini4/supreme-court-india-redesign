"use client";

import { Search, FileSearch, Scale, UserRound } from "lucide-react";
import { useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const caseTypes = [
  "Civil",
  "Criminal",
  "Constitutional",
  "Writ Petition",
  "Review Petition",
  "Special Leave Petition",
];

const recentCases = [
  {
    number: "SLP (C) No. 1245/2026",
    title: "Sample Constitutional Matter",
    petitioner: "A.B. Enterprises",
    respondent: "Union of India",
    status: "Pending",
  },
  {
    number: "C.A. No. 827/2026",
    title: "Public Interest Matter",
    petitioner: "Citizens Forum",
    respondent: "State Government",
    status: "Listed",
  },
  {
    number: "W.P. (C) No. 412/2026",
    title: "Fundamental Rights Matter",
    petitioner: "X.Y. Foundation",
    respondent: "Union of India",
    status: "Pending",
  },
];

export default function CasesPage() {
  const [caseNumber, setCaseNumber] = useState("");
  const [searchResult, setSearchResult] = useState("");

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();

    if (!caseNumber.trim()) {
      setSearchResult("Please enter a case number.");
      return;
    }

    setSearchResult(
      `Frontend demo: searching for "${caseNumber.trim()}".`
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Case Information"
        title="Case Status"
        description="Search and explore case information through a clearer and more accessible interface."
        breadcrumbs={[
          {
            label: "Cases",
          },
        ]}
      />

      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                <FileSearch size={22} />
              </div>

              <div>
                <p className="sc-eyebrow text-[#B38A3E]">
                  Case Search
                </p>

                <h2 className="sc-serif mt-2 text-2xl font-bold text-[#0B1F33]">
                  Find a Case
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Enter a case number to explore case
                  information.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSearch}
              className="mt-7"
            >
              <label
                htmlFor="case-number"
                className="mb-2 block text-sm font-semibold text-[#0B1F33]"
              >
                Case Number
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="case-number"
                  value={caseNumber}
                  onChange={(event) =>
                    setCaseNumber(event.target.value)
                  }
                  placeholder="Example: SLP (C) No. 1245/2026"
                  className="min-h-12 flex-1 rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1F33] outline-none transition focus:border-[#B38A3E] focus:ring-4 focus:ring-[#B38A3E]/10"
                />

                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0B1F33] px-6 text-sm font-semibold text-white transition hover:bg-[#102A43]"
                >
                  <Search size={17} />
                  Search
                </button>
              </div>

              {searchResult && (
                <p
                  role="status"
                  className="mt-4 rounded-lg bg-[#F7F5EF] px-4 py-3 text-sm text-slate-600"
                >
                  {searchResult}
                </p>
              )}
            </form>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-[#0B1F33] p-6 text-white md:p-8">
            <Scale className="text-[#D8B86A]" size={26} />

            <h2 className="sc-serif mt-5 text-2xl font-bold">
              Case Categories
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Explore common categories of matters handled
              by the Supreme Court.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {caseTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/75"
                >
                  {type}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="sc-eyebrow text-[#B38A3E]">
                Recent Matters
              </p>

              <h2 className="sc-serif mt-2 text-3xl font-bold text-[#0B1F33]">
                Case Information
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Frontend demonstration data
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {recentCases.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#B38A3E]/50 hover:shadow-sm md:p-6"
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#B38A3E]">
                      {item.number}
                    </p>

                    <h3 className="sc-serif mt-2 text-xl font-bold text-[#0B1F33]">
                      {item.title}
                    </h3>

                    <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                      <p>
                        <span className="font-semibold text-[#0B1F33]">
                          Petitioner:
                        </span>{" "}
                        {item.petitioner}
                      </p>

                      <p>
                        <span className="font-semibold text-[#0B1F33]">
                          Respondent:
                        </span>{" "}
                        {item.respondent}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start rounded-full bg-[#F7F5EF] px-4 py-2 text-xs font-semibold text-[#B38A3E]">
                    <UserRound size={14} />
                    {item.status}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}