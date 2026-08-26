"use client";

import {
  Search,
  FileSearch,
  Hash,
  UserRound,
  Scale,
} from "lucide-react";
import { useState } from "react";

const searchModes = [
  {
    title: "Case Number",
    description: "Search using case type, number and year.",
    icon: FileSearch,
  },
  {
    title: "Diary Number",
    description: "Search using the diary number of a matter.",
    icon: Hash,
  },
  {
    title: "Party Name",
    description: "Find cases using a party or organization name.",
    icon: UserRound,
  },
  {
    title: "CNR Number",
    description: "Search using the CNR number where available.",
    icon: Scale,
  },
];

export default function CasesPage() {
  const [mode, setMode] = useState("Case Number");

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16">
          <p className="sc-eyebrow text-[#D8B86A]">
            Case information
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            Case Status
          </h1>

          <p className="mt-5 max-w-2xl text-white/60">
            Search and access case information through a
            clearer, task-focused interface.
          </p>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {searchModes.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setMode(item.title)}
                className={`rounded-2xl border p-5 text-left transition ${
                  mode === item.title
                    ? "border-[#B38A3E] bg-white shadow-md"
                    : "border-slate-200 bg-white hover:border-[#B38A3E]/50"
                }`}
              >
                <Icon
                  size={21}
                  className={
                    mode === item.title
                      ? "text-[#B38A3E]"
                      : "text-slate-400"
                  }
                />

                <h2 className="mt-5 font-bold text-[#0B1F33]">
                  {item.title}
                </h2>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
              <Search size={19} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Search method
              </p>

              <h2 className="font-bold text-[#0B1F33]">
                {mode}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                {mode}
              </span>

              <input
                placeholder={`Enter ${mode.toLowerCase()}`}
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#B38A3E]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">
                Year
              </span>

              <select className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#B38A3E]">
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </label>
          </div>

          <button
            type="button"
            className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#B38A3E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9C7734]"
          >
            <Search size={16} />
            Search case
          </button>

          <p className="mt-5 text-xs leading-5 text-slate-400">
            Frontend demonstration only. No case records are
            retrieved because this redesign does not include a
            backend.
          </p>
        </div>
      </section>
    </main>
  );
}