"use client";

import {
  ArrowUpRight,
  Search,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const judges = [
  {
    name: "Hon'ble the Chief Justice",
    role: "Chief Justice of India",
  },
  {
    name: "Justice Vikram Nath",
    role: "Judge, Supreme Court of India",
  },
  {
    name: "Justice B.V. Nagarathna",
    role: "Judge, Supreme Court of India",
  },
  {
    name: "Justice J.B. Pardiwala",
    role: "Judge, Supreme Court of India",
  },
  {
    name: "Justice K. Vinod Chandran",
    role: "Judge, Supreme Court of India",
  },
  {
    name: "Justice Joymalya Bagchi",
    role: "Judge, Supreme Court of India",
  },
];

const courtSections = [
  "Chief Justice & Judges",
  "Former Chief Justices",
  "Former Judges",
  "Judges Roster",
  "Judges Library",
];

export default function CourtPage() {
  const [query, setQuery] = useState("");

  const filteredJudges = judges.filter((judge) =>
    `${judge.name} ${judge.role}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16 md:py-20">
          <p className="sc-eyebrow text-[#D8B86A]">
            Institution
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            The Court
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Learn about the composition of the Supreme Court,
            its judges and institutional resources.
          </p>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="grid gap-4 md:grid-cols-5">
          {courtSections.map((section, index) => (
            <button
              key={section}
              type="button"
              className={`rounded-xl border p-4 text-left text-sm font-semibold transition ${
                index === 0
                  ? "border-[#B38A3E] bg-white text-[#0B1F33] shadow-sm"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#B38A3E]/50 hover:text-[#0B1F33]"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
              Current composition
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0B1F33]">
              Chief Justice & Judges
            </h2>
          </div>

          <label className="flex h-12 w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 md:max-w-sm">
            <Search
              size={17}
              className="text-slate-400"
            />

            <input
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search judges"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJudges.map((judge) => (
            <article
              key={judge.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-md"
            >
              <div className="h-2 bg-[#B38A3E]" />

              <div className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F5EF] text-[#B38A3E]">
                  <UserRound size={27} strokeWidth={1.5} />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
                  Supreme Court
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#0B1F33]">
                  {judge.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {judge.role}
                </p>

                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0B1F33] transition group-hover:text-[#B38A3E]"
                >
                  View profile
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}