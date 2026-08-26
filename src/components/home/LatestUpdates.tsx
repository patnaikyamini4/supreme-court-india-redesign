import { ArrowRight, Bell, ChevronRight } from "lucide-react";
import HomeSectionHeading from "./HomeSectionHeading";

const updates = [
  {
    type: "Notice",
    date: "26 Aug 2026",
    title: "Important notice regarding court proceedings",
  },
  {
    type: "Circular",
    date: "25 Aug 2026",
    title: "Administrative circular for registry users",
  },
  {
    type: "Listing",
    date: "25 Aug 2026",
    title: "Updated listing information for upcoming hearings",
  },
  {
    type: "Notice",
    date: "24 Aug 2026",
    title: "Registry notification and public information",
  },
];

export default function LatestUpdates() {
  return (
    <section className="sc-section bg-[#F7F5EF]">
      <div className="sc-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <HomeSectionHeading
            eyebrow="Latest information"
            title="Updates from the Court"
            description="Stay informed about notices, administrative information, listings and other important updates."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {updates.map((update, index) => (
              <button
                key={update.title}
                type="button"
                className={`group flex w-full gap-4 p-5 text-left transition hover:bg-slate-50 ${
                  index !== updates.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                  <Bell size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B38A3E]">
                      {update.type}
                    </span>

                    <span className="text-xs text-slate-400">
                      {update.date}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#0B1F33]">
                    {update.title}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="mt-2 shrink-0 text-slate-300 transition group-hover:text-[#B38A3E]"
                />
              </button>
            ))}

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 border-t border-slate-100 py-4 text-sm font-semibold text-[#0B1F33] transition hover:bg-slate-50"
            >
              View all updates
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}