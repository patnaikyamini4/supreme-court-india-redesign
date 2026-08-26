"use client";

import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  "Case Status",
  "Judgments",
  "Cause List",
  "Notices",
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      return;
    }

    console.log("Search:", query);
  };

  return (
    <section className="relative overflow-hidden bg-[#071624] text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-160px] top-[-180px] h-[520px] w-[520px] rounded-full border border-[#B38A3E]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-80px] top-[-100px] h-[360px] w-[360px] rounded-full border border-[#B38A3E]/10"
      />

      <div className="sc-container relative">
        <div className="max-w-5xl py-20 md:py-28 lg:py-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B38A3E]" />

            <p className="sc-eyebrow text-[#D8B86A]">
              Justice • Access • Transparency
            </p>
          </div>

          {/* Main heading */}
          <h2 className="sc-serif mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[84px]">
            Find the information
            <span className="block text-[#D8B86A]">
              you need.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
            Access judgments, case information, orders, notices,
            cause lists and essential services of the Supreme
            Court of India from one place.
          </p>

          {/* Search */}
          <div className="mt-9 max-w-3xl">
            <label
              htmlFor="court-search"
              className="sr-only"
            >
              Search Supreme Court information
            </label>

            <div className="flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row">
              <div className="flex min-h-14 flex-1 items-center gap-3 px-4">
                <Search
                  size={21}
                  strokeWidth={1.8}
                  className="shrink-0 text-slate-400"
                />

                <input
                  id="court-search"
                  type="search"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search by case number, party name, judgment..."
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 md:text-base"
                />
              </div>

              <button
                type="button"
                onClick={handleSearch}
                className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#B38A3E] px-7 text-sm font-semibold text-white transition hover:bg-[#9C7734] focus:outline-none focus:ring-2 focus:ring-[#D8B86A] focus:ring-offset-2 focus:ring-offset-white"
              >
                Search
                <ArrowRight size={17} />
              </button>
            </div>

            <p className="mt-3 text-xs text-white/40">
              Search across cases, judgments, orders and court
              notices.
            </p>
          </div>

          {/* Quick actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <button
                key={link}
                type="button"
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition hover:border-[#B38A3E]/60 hover:bg-white/[0.08] hover:text-white"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}