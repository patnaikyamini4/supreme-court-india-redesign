import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Download,
  FileText,
} from "lucide-react";

interface JudgmentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JudgmentDetailPage({
  params,
}: JudgmentPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-14">
          <Link
            href="/judgments"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D8B86A]"
          >
            <ArrowLeft size={16} />
            Back to judgments
          </Link>

          <p className="mt-10 text-[10px] font-bold uppercase tracking-widest text-[#D8B86A]">
            Judgment
          </p>

          <h1 className="sc-serif mt-3 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Judgment Record
          </h1>

          <p className="mt-4 text-sm text-white/50">
            Record ID: {id}
          </p>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                <FileText size={20} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B38A3E]">
                  Supreme Court of India
                </p>

                <h2 className="mt-2 text-xl font-bold text-[#0B1F33] md:text-2xl">
                  Judgment information
                </h2>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-8">
              <p className="text-sm leading-8 text-slate-600">
                This frontend page is designed as the
                presentation layer for a Supreme Court judgment.
                The final implementation can connect this
                interface to the official judgment record without
                changing the visual structure.
              </p>

              <div className="mt-8 rounded-xl bg-[#F7F5EF] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Judgment content
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Official judgment text, case metadata and
                  downloadable documents can be displayed in
                  this area when the frontend is connected to
                  the required data source.
                </p>
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-[#0B1F33]">
                Case information
              </h3>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-slate-400">
                    Case number
                  </dt>
                  <dd className="mt-1 font-medium">
                    C.A. No. ——
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-400">
                    Diary number
                  </dt>
                  <dd className="mt-1 font-medium">
                    ——
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-400">
                    Judgment date
                  </dt>
                  <dd className="mt-1 flex items-center gap-2 font-medium">
                    <CalendarDays size={14} />
                    ——
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#102A43]"
            >
              <Download size={16} />
              Download judgment
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}