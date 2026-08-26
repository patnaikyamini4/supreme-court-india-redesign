"use client";

import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const suggestions = [
  "Judgments",
  "Case Status",
  "Cause List",
  "Orders",
  "Notices",
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-[#0B1F33] text-white">
      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full border border-[#B38A3E]/20" />

      <div className="absolute bottom-[-180px] left-[-120px] h-96 w-96 rounded-full border border-white/5" />

      <div className="sc-container relative py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="sc-eyebrow text-[#D8B86A]">
            Justice • Access • Transparency
          </p>

          <h1 className="sc-serif mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Access the
            <span className="block text-[#D8B86A]">
              Supreme Court
            </span>
            with clarity.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Find judgments, case information, cause lists,
            notices, orders and essential court services from
            one accessible digital experience.
          </p>

          {/* Search */}
          <div className="mt-9 max-w-3xl">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search
                  size={20}
                  className="shrink-0 text-slate-400"
                />

                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search judgments, cases, notices..."
                  className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  aria-label="Search judgments, cases and notices"
                />
              </div>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#B38A3E] px-6 text-sm font-semibold text-white transition hover:bg-[#9C7734]"
              >
                Search
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs text-white/40">
                Popular:
              </span>

              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:border-[#D8B86A]/50 hover:text-[#D8B86A]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}