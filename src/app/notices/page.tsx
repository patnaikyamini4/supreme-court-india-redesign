"use client";

import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  Search,
} from "lucide-react";
import { useState } from "react";

const notices = [
  {
    category: "Listing Notice",
    date: "23 August 2026",
    title:
      "Notice regarding change in Court No. 8",
  },
  {
    category: "Listing Notice",
    date: "24 August 2026",
    title:
      "Notice regarding change in Court Nos. 2, 8, 11 and 17",
  },
  {
    category: "Oral Mentioning",
    date: "24 August 2026",
    title:
      "List of oral mentioning matters before Hon'ble Courts",
  },
  {
    category: "Chamber Matters",
    date: "24 August 2026",
    title:
      "Advance List of Chamber Matters likely to be listed",
  },
  {
    category: "Administrative",
    date: "22 August 2026",
    title:
      "Notice regarding sitting of Special Lok Adalat",
  },
];

export default function NoticesPage() {
  const [query, setQuery] = useState("");

  const filtered = notices.filter((notice) =>
    notice.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16 md:py-20">
          <p className="sc-eyebrow text-[#D8B86A]">
            Information centre
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            Notices
          </h1>

          <p className="mt-5 max-w-2xl text-white/60">
            Browse notices, listing information and
            administrative announcements.
          </p>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4">
          <Search size={18} className="text-slate-400" />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search notices..."
            className="h-14 w-full outline-none"
          />
        </div>

        <div className="mt-7 space-y-3">
          {filtered.map((notice) => (
            <article
              key={notice.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#B38A3E]/50 hover:shadow-md md:p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                  <Bell size={18} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B38A3E]">
                      {notice.category}
                    </span>

                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <CalendarDays size={13} />
                      {notice.date}
                    </span>
                  </div>

                  <h2 className="mt-2 text-sm font-bold leading-6 text-[#0B1F33] md:text-base">
                    {notice.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 self-start text-sm font-semibold text-[#0B1F33] hover:text-[#B38A3E]"
                >
                  View
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="font-semibold text-[#0B1F33]">
                No notices found
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}