import Link from "next/link";
import { Search } from "lucide-react";

export default function SiteHeader() {
  return (
    <section className="border-b border-slate-200 bg-[#F7F5EF]">
      <div className="sc-container">
        <div className="flex min-h-[150px] items-center justify-between gap-8 py-8">
          <Link
            href="/"
            className="flex items-center gap-5"
            aria-label="Supreme Court of India home"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#B38A3E] bg-white">
              <span className="sc-serif text-xl font-bold text-[#0B1F33]">
                SC
              </span>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B38A3E]">
                The Apex Court of India
              </p>

              <h1 className="sc-serif mt-1 text-3xl font-bold text-[#0B1F33] md:text-4xl">
                Supreme Court of India
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                न्याय की ओर एक कदम
              </p>
            </div>
          </Link>

          <Link
            href="/search"
            className="hidden min-w-[260px] items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-500 transition hover:border-[#B38A3E] hover:text-[#0B1F33] md:flex"
          >
            <Search size={17} />

            <span>
              Search judgments, cases & notices
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}