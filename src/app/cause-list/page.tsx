"use client";

import { CalendarDays, ChevronDown, Clock } from "lucide-react";
import { useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const causeList = [
  {
    court: "Court No. 1",
    bench: "Chief Justice Bench",
    time: "10:30 AM",
    matters: 18,
  },
  {
    court: "Court No. 4",
    bench: "Division Bench",
    time: "10:30 AM",
    matters: 24,
  },
  {
    court: "Court No. 7",
    bench: "Division Bench",
    time: "11:00 AM",
    matters: 21,
  },
  {
    court: "Court No. 9",
    bench: "Single Bench",
    time: "11:30 AM",
    matters: 16,
  },
];

export default function CauseListPage() {
  const [date, setDate] = useState("2026-08-26");

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Court Schedule"
        title="Cause List"
        description="Browse upcoming court listings and scheduled matters in a clearer format."
        breadcrumbs={[
          {
            label: "Cause List",
          },
        ]}
      />

      <PageContainer>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div>
              <label
                htmlFor="cause-date"
                className="mb-2 block text-sm font-semibold text-[#0B1F33]"
              >
                Select date
              </label>

              <div className="relative">
                <CalendarDays
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B38A3E]"
                />

                <input
                  id="cause-date"
                  type="date"
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#B38A3E] focus:ring-4 focus:ring-[#B38A3E]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cause-type"
                className="mb-2 block text-sm font-semibold text-[#0B1F33]"
              >
                Court type
              </label>

              <div className="relative">
                <select
                  id="cause-type"
                  className="h-12 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm outline-none focus:border-[#B38A3E]"
                  defaultValue="all"
                >
                  <option value="all">
                    All Courts
                  </option>
                  <option value="constitutional">
                    Constitution Bench
                  </option>
                  <option value="division">
                    Division Bench
                  </option>
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <button
              type="button"
              className="h-12 rounded-xl bg-[#0B1F33] px-7 text-sm font-semibold text-white"
            >
              View List
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-6">
            <p className="sc-eyebrow text-[#B38A3E]">
              Daily Schedule
            </p>

            <h2 className="sc-serif mt-2 text-3xl font-bold text-[#0B1F33]">
              Court Listings
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Showing frontend demonstration data for{" "}
              {date}.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {causeList.map((item) => (
              <article
                key={item.court}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#B38A3E]">
                      {item.court}
                    </p>

                    <h3 className="sc-serif mt-2 text-xl font-bold text-[#0B1F33]">
                      {item.bench}
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#F7F5EF] px-3 py-2 text-xs font-semibold text-[#B38A3E]">
                    {item.matters} matters
                  </span>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock size={16} />
                    {item.time}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}