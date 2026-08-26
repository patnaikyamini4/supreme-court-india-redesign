import { ArrowRight } from "lucide-react";
import { latestJudgments } from "@/data/judgments";
import JudgmentCard from "./JudgmentCard";

export default function LatestJudgments() {
  return (
    <section className="sc-section bg-[#F7F5EF]">
      <div className="sc-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="sc-eyebrow">
              Decisions of the Court
            </p>

            <h2 className="sc-heading">
              Latest Judgments
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Explore recently published decisions and
              access information about cases heard by the
              Supreme Court.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start text-sm font-semibold text-[#0B1F33] transition hover:text-[#B38A3E] md:self-auto"
          >
            Browse all judgments
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {latestJudgments.map((judgment) => (
            <JudgmentCard
              key={judgment.id}
              judgment={judgment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}