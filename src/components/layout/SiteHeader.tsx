import { Search } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-[#F7F5EF]">
      <div className="sc-container">
        <div className="flex min-h-[108px] items-center justify-between gap-6">
          {/* Court Identity */}
          <div className="flex min-w-0 items-center gap-4">
            <div
              className="
                flex h-16 w-16 shrink-0
                items-center justify-center
                rounded-full
                border-2 border-[#B38A3E]
                bg-white
              "
              aria-hidden="true"
            >
              <span className="sc-serif text-xl font-bold text-[#0B1F33]">
                SC
              </span>
            </div>

            <div className="min-w-0">
              <p className="sc-eyebrow">
                The Apex Court of India
              </p>

              <h1 className="sc-serif mt-1 truncate text-2xl font-bold text-[#0B1F33] md:text-3xl">
                Supreme Court of India
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                न्याय की ओर एक कदम
              </p>
            </div>
          </div>

          {/* Desktop Search */}
          <button
            type="button"
            className="
              hidden shrink-0 items-center gap-3
              rounded-full
              border border-slate-300
              bg-white
              px-5 py-3
              text-sm text-slate-500
              transition
              hover:border-[#B38A3E]
              hover:text-[#0B1F33]
              md:flex
            "
          >
            <Search size={17} strokeWidth={1.8} />

            <span>
              Search judgments, cases & notices
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}