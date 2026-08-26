import { ArrowRight, CalendarDays, Clock } from "lucide-react";

const courts = [
  {
    court: "Court No. 1",
    judges: "Chief Justice & Companion Judges",
    time: "10:30 AM",
  },
  {
    court: "Court No. 2",
    judges: "Bench of the Supreme Court",
    time: "10:30 AM",
  },
  {
    court: "Court No. 3",
    judges: "Division Bench",
    time: "10:30 AM",
  },
];

export default function CauseListPreview() {
  return (
    <section className="sc-section bg-white">
      <div className="sc-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="sc-eyebrow">
              Daily proceedings
            </p>

            <h2 className="sc-heading">
              Cause List
            </h2>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start text-sm font-semibold text-[#0B1F33] hover:text-[#B38A3E] md:self-auto"
          >
            View complete cause list
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {courts.map((court) => (
            <article
              key={court.court}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#B38A3E]/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#0B1F33]">
                  {court.court}
                </span>

                <span className="rounded-full bg-[#F7F5EF] px-3 py-1 text-[11px] font-semibold text-[#B38A3E]">
                  Today
                </span>
              </div>

              <p className="mt-7 text-sm leading-6 text-slate-500">
                {court.judges}
              </p>

              <div className="mt-6 flex items-center gap-5 border-t border-slate-100 pt-5 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <Clock size={15} />
                  {court.time}
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  Today's list
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}