"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] bg-[#F7F5EF]">
      <div className="sc-container flex min-h-[60vh] items-center justify-center py-16">
        <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F5EF] text-[#B38A3E]">
            <AlertTriangle size={26} />
          </div>

          <p className="sc-eyebrow mt-6 text-[#B38A3E]">
            Temporary error
          </p>

          <h1 className="sc-serif mt-3 text-3xl font-bold text-[#0B1F33]">
            Something went wrong
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            We could not load this section right now.
            Please try again.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B1F33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#102A43]"
          >
            <RotateCcw size={16} />
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}