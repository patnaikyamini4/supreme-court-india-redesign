"use client";

import {
  CalendarDays,
  Download,
  FileText,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

const orders = [
  {
    id: "order-1",
    title: "D. BACKIYA LAKSHMI VS. SATHISH KUMAR",
    caseNumber: "T.P.(C) No. 394/2026",
    diary: "Diary Number 6451 / 2026",
    date: "25 August 2026",
  },
  {
    id: "order-2",
    title: "SHAMPA DAS VS. PIJUS KANTI DAS",
    caseNumber: "Diary Number 18469 / 2026",
    diary: "Diary Number 18469 / 2026",
    date: "25 August 2026",
  },
  {
    id: "order-3",
    title: "NEHA KUMARI VS. NILOTPAL NAYAN",
    caseNumber: "T.P.(C) No. 2410/2026",
    diary: "Diary Number 43953 / 2026",
    date: "25 August 2026",
  },
  {
    id: "order-4",
    title: "SARITA KUMARI VS. PRINCE KUMAR",
    caseNumber: "T.P.(C) No. 2404/2026",
    diary: "Diary Number 45139 / 2026",
    date: "25 August 2026",
  },
  {
    id: "order-5",
    title: "AKULA YAMINI VIKITHA VS. AKULA ADIRAJU VENKATESH",
    caseNumber: "T.P.(C) No. 2339/2026",
    diary: "Diary Number 46475 / 2026",
    date: "25 August 2026",
  },
  {
    id: "order-6",
    title: "VIJAYA LAXMI VS. KUMAR AKSHAY SHANKAR",
    caseNumber: "T.P.(C) No. 2463/2026",
    diary: "Diary Number 46563 / 2026",
    date: "25 August 2026",
  },
];

export default function OrdersPage() {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesQuery =
        order.title.toLowerCase().includes(query.toLowerCase()) ||
        order.caseNumber.toLowerCase().includes(query.toLowerCase()) ||
        order.diary.toLowerCase().includes(query.toLowerCase());

      const matchesDate =
        !date || order.date === date;

      return matchesQuery && matchesDate;
    });
  }, [query, date]);

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16 md:py-20">
          <p className="sc-eyebrow text-[#D8B86A]">
            Judicial records
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            Daily Orders
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Search and browse orders published by the
            Supreme Court through a focused, accessible interface.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sc-container py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">
            <label className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 px-4">
              <Search
                size={17}
                className="text-slate-400"
              />

              <input
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search by party name, case or diary number"
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>

            <label className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 px-4">
              <CalendarDays
                size={17}
                className="text-slate-400"
              />

              <input
                type="date"
                value={date}
                onChange={(event) =>
                  setDate(event.target.value)
                }
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setDate("");
              }}
              className="rounded-xl border border-slate-200 px-5 text-sm font-semibold text-[#0B1F33] hover:border-[#B38A3E]"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
              Latest orders
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B1F33]">
              Published Orders
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {filteredOrders.length} records shown
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0B1F33] hover:border-[#B38A3E]"
          >
            <Download size={16} />
            Download list
          </button>
        </div>

        {/* Orders */}
        <div className="mt-6 space-y-3">
          {filteredOrders.map((order) => (
            <article
              key={order.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-md"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                  <FileText size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
                    Order
                  </p>

                  <h3 className="mt-2 text-base font-bold leading-6 text-[#0B1F33]">
                    {order.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                    <span>{order.caseNumber}</span>
                    <span>{order.diary}</span>
                    <span>{order.date}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center rounded-xl bg-[#0B1F33] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102A43]"
                >
                  View Order
                </button>
              </div>
            </article>
          ))}

          {filteredOrders.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="font-semibold text-[#0B1F33]">
                No orders found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try changing the search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}