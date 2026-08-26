"use client";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Users,
} from "lucide-react";
import { useState } from "react";

const dates = [
  {
    label: "24",
    month: "AUG",
    day: "Monday",
  },
  {
    label: "25",
    month: "AUG",
    day: "Tuesday",
  },
  {
    label: "27",
    month: "AUG",
    day: "Thursday",
  },
  {
    label: "31",
    month: "AUG",
    day: "Monday",
  },
];

const courts = [
  {
    number: "01",
    judges:
      "Hon'ble the Chief Justice, Hon'ble Mr. Justice Joymalya Bagchi",
    type: "Miscellaneous",
    time: "10:30 AM",
  },
  {
    number: "02",
    judges:
      "Hon'ble Mr. Justice Vikram Nath, Hon'ble Mr. Justice Sandeep Mehta",
    type: "Miscellaneous",
    time: "10:30 AM",
  },
  {
    number: "03",
    judges:
      "Hon'ble Mrs. Justice B.V. Nagarathna, Hon'ble Mr. Justice R. Mahadevan",
    type: "Regular",
    time: "10:30 AM",
  },
  {
    number: "04",
    judges:
      "Hon'ble Mr. Justice Pamidighantam Sri Narasimha, Hon'ble Mr. Justice Alok Aradhe",
    type: "Regular",
    time: "02:00 PM",
  },
];

export default function CourtSchedule() {
  const [selectedDate, setSelectedDate] = useState("24");

  return (
    <section className="bg-[#0B1F33] py-20 text-white md:py-24">
      <div className="sc-container">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="sc-eyebrow text-[#D8B86A]">
              Cause List
            </p>

            <h2 className="sc-serif mt-2 text-4xl font-bold leading-tight md:text-5xl">
              Court schedule at a glance.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60">
              View scheduled court sessions, benches and listing
              information in a simpler format.
            </p>
          </div>

          <button
            type="button"
            className="hidden items-center gap-2 text-sm font-semibold text-[#D8B86A] md:flex"
          >
            View full cause list

            <ArrowRight size={16} />
          </button>
        </div>

        {/* Date selector */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {dates.map((date) => {
              const active = selectedDate === date.label;

              return (
                <button
                  key={date.label}
                  type="button"
                  onClick={() => setSelectedDate(date.label)}
                  className={`min-w-[100px] rounded-xl border px-4 py-4 text-left transition ${
                    active
                      ? "border-[#B38A3E] bg-[#B38A3E] text-white"
                      : "border-white/10 bg-white/[0.04] text-white/60 hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="block text-[10px] font-semibold tracking-[0.2em]">
                    {date.month}
                  </span>

                  <span className="mt-1 block text-2xl font-bold">
                    {date.label}
                  </span>

                  <span className="mt-1 block text-xs">
                    {date.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Court cards */}
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {courts.map((court) => (
            <article
              key={court.number}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-[#B38A3E]/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B86A]">
                    Court
                  </p>

                  <p className="mt-1 text-4xl font-bold">
                    {court.number}
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/60">
                  {court.type}
                </span>
              </div>

              <div className="mt-7 flex gap-3">
                <Users
                  size={18}
                  className="mt-1 shrink-0 text-[#D8B86A]"
                />

                <p className="text-sm leading-6 text-white/75">
                  {court.judges}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-5">
                <span className="flex items-center gap-2 text-xs text-white/50">
                  <Clock3 size={14} />
                  {court.time}
                </span>

                <span className="flex items-center gap-2 text-xs text-white/50">
                  <CalendarDays size={14} />
                  {selectedDate} Aug 2026
                </span>
              </div>

              <button
                type="button"
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#D8B86A]"
              >
                View cause list

                <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <button
          type="button"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white md:hidden"
        >
          View full cause list
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}