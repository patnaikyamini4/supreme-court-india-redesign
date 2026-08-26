"use client";

import {
  CalendarDays,
  ChevronDown,
  Clock,
  Download,
  Filter,
} from "lucide-react";
import { useState } from "react";

const courts = [
  {
    court: "Court No. 1",
    judges: "Chief Justice & Companion Judges",
    matters: 24,
  },
  {
    court: "Court No. 2",
    judges: "Hon'ble Judges",
    matters: 31,
  },
  {
    court: "Court No. 3",
    judges: "Hon'ble Judges",
    matters: 27,
  },
  {
    court: "Court No. 4",
    judges: "Hon'ble Judges",
    matters: 29,
  },
  {
    court: "Court No. 5",
    judges: "Hon'ble Judges",
    matters: 22,
  },
  {
    court: "Court No. 6",
    judges: "Hon'ble Judges",
    matters: 26,
  },
];

const listingTypes = [
  "All",
  "Miscellaneous",
  "Regular",
  "Advance",
  "Chamber",
];

export default function CauseListPage() {
  const [listing, setListing] = useState("All");

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16 md:py-20">
          <p className="sc-eyebrow text-[#D8B86A]">
            Daily proceedings
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            Cause List
          </h1>

          <p className="mt-5 max-w-2xl text-white/60">
            Explore court-wise listings and scheduled matters
            through a clearer daily view.
          </p>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">
          <label>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Date
            </span>

            <div className="mt-2 flex h-12 items-center gap-3 rounded-xl border border-slate-200 px-4">
              <CalendarDays size={17} className="text-slate-400" />

              <input
                type="date"
                defaultValue="2026-08-27"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </label>

          <label>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Listing type
            </span>

            <div className="relative mt-2">
              <select
                value={listing}
                onChange={(event) =>
                  setListing(event.target.value)
                }
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none"
              >
                {listingTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-4 text-slate-400"
              />
            </div>
          </label>

          <div className="flex items-end">
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F33] px-5 text-sm font-semibold text-white transition hover:bg-[#102A43]"
            >
              <Filter size={16} />
              Apply filters
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B38A3E]">
              Daily listing
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#0B1F33]">
              Court-wise schedule
            </h2>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0B1F33] hover:border-[#B38A3E]"
          >
            <Download size={16} />
            Download list
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courts.map((court) => (
            <article
              key={court.court}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#0B1F33]">
                  {court.court}
                </h3>

                <span className="rounded-full bg-[#F7F5EF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#B38A3E]">
                  {listing}
                </span>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                {court.judges}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock size={14} />
                  10:30 AM
                </span>

                <span className="text-xs font-semibold text-[#0B1F33]">
                  {court.matters} matters
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}