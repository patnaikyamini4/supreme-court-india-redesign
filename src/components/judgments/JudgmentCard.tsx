import {
  ArrowUpRight,
  CalendarDays,
  FileText,
} from "lucide-react";
import type { Judgment } from "@/data/judgments";

interface JudgmentCardProps {
  judgment: Judgment;
}

export default function JudgmentCard({
  judgment,
}: JudgmentCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
          <FileText size={19} strokeWidth={1.8} />
        </div>

        <span className="rounded-full bg-[#F7F5EF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#B38A3E]">
          {judgment.category}
        </span>
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {judgment.caseNumber}
      </p>

      <h3 className="mt-3 text-lg font-bold leading-7 text-[#0B1F33]">
        {judgment.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
        {judgment.summary}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays size={14} />
          {judgment.date}
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] transition group-hover:text-[#B38A3E]"
        >
          Read
          <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}