import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
} from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const notices = [
  {
    title: "Notice regarding listing of matters",
    date: "26 August 2026",
    type: "Court Notice",
  },
  {
    title: "Important administrative directions",
    date: "24 August 2026",
    type: "Administrative",
  },
  {
    title: "Registry notice for advocates and parties",
    date: "22 August 2026",
    type: "Registry",
  },
  {
    title: "Updated filing and procedural information",
    date: "20 August 2026",
    type: "Information",
  },
];

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Court Information"
        title="Notices"
        description="View important notices, announcements and updates from the Supreme Court."
        breadcrumbs={[
          {
            label: "Notices",
          },
        ]}
      />

      <PageContainer>
        <div className="grid gap-4">
          {notices.map((notice, index) => (
            <article
              key={notice.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-sm"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                  <Bell size={21} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#F7F5EF] px-3 py-1 text-xs font-semibold text-[#B38A3E]">
                      {notice.type}
                    </span>

                    <span className="text-xs text-slate-400">
                      Notice {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="sc-serif mt-3 text-xl font-bold text-[#0B1F33]">
                    {notice.title}
                  </h2>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={14} />
                    {notice.date}
                  </p>
                </div>

                <Link
                  href="/search"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E]"
                >
                  Read notice
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}