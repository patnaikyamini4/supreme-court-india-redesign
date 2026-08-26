import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Download,
  FileText,
} from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

interface JudgmentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JudgmentDetailPage({
  params,
}: JudgmentDetailPageProps) {
  const { id } = await params;

  const formattedId = id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Judgment"
        title="Judgment Details"
        description="View the complete details and available documents associated with this judgment."
        breadcrumbs={[
          {
            label: "Judgments",
            href: "/judgments",
          },
          {
            label: "Judgment Details",
          },
        ]}
      />

      <PageContainer>
        <Link
          href="/judgments"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E] transition hover:text-[#0B1F33]"
        >
          <ArrowLeft size={16} />
          Back to judgments
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
            <div className="border-b border-slate-200 pb-7">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B38A3E]">
                2026 INSC 245
              </p>

              <h2 className="sc-serif mt-3 text-3xl font-bold leading-tight text-[#0B1F33] md:text-4xl">
                {formattedId}
              </h2>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={15} />
                  18 August 2026
                </span>

                <span className="inline-flex items-center gap-2">
                  <FileText size={15} />
                  Constitution Bench
                </span>
              </div>
            </div>

            <div className="prose prose-slate mt-8 max-w-none">
              <h3 className="sc-serif text-2xl font-bold text-[#0B1F33]">
                Summary
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                This frontend demonstration presents
                how judgment information can be organized
                for easier reading and discovery.
              </p>

              <h3 className="sc-serif mt-9 text-2xl font-bold text-[#0B1F33]">
                Matter
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The matter concerns constitutional
                interpretation, legal principles and the
                rights and obligations of the parties
                before the Court.
              </p>

              <h3 className="sc-serif mt-9 text-2xl font-bold text-[#0B1F33]">
                Decision
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The Court considered the submissions and
                applicable legal principles before
                delivering its decision.
              </p>
            </div>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="sc-eyebrow text-[#B38A3E]">
              Documents
            </p>

            <h3 className="sc-serif mt-2 text-xl font-bold text-[#0B1F33]">
              Available Files
            </h3>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:border-[#B38A3E]"
              >
                <span className="flex items-center gap-3">
                  <FileText
                    size={18}
                    className="text-[#B38A3E]"
                  />

                  <span>
                    <span className="block text-sm font-semibold text-[#0B1F33]">
                      Judgment
                    </span>

                    <span className="text-xs text-slate-500">
                      PDF document
                    </span>
                  </span>
                </span>

                <Download size={16} />
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:border-[#B38A3E]"
              >
                <span className="flex items-center gap-3">
                  <FileText
                    size={18}
                    className="text-[#B38A3E]"
                  />

                  <span>
                    <span className="block text-sm font-semibold text-[#0B1F33]">
                      Cause List
                    </span>

                    <span className="text-xs text-slate-500">
                      Related document
                    </span>
                  </span>
                </span>

                <Download size={16} />
              </button>
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-400">
              Documents shown here are frontend
              demonstration elements. No backend or
              document service is connected.
            </p>
          </aside>
        </div>
      </PageContainer>
    </div>
  );
}