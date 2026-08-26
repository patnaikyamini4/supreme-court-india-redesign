import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileText,
} from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const orders = [
  {
    number: "Order No. 184/2026",
    title: "Listing and procedural directions",
    date: "26 August 2026",
    bench: "Court No. 1",
  },
  {
    number: "Order No. 179/2026",
    title: "Directions regarding filing of documents",
    date: "25 August 2026",
    bench: "Court No. 4",
  },
  {
    number: "Order No. 172/2026",
    title: "Administrative and listing directions",
    date: "24 August 2026",
    bench: "Court No. 7",
  },
  {
    number: "Order No. 166/2026",
    title: "Procedural order in pending matter",
    date: "22 August 2026",
    bench: "Court No. 9",
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Court Records"
        title="Daily Orders"
        description="Access daily orders and court records through a structured and easy-to-navigate interface."
        breadcrumbs={[
          {
            label: "Orders",
          },
        ]}
      />

      <PageContainer>
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#0B1F33] p-6 text-white md:flex-row md:items-center md:p-8">
          <div>
            <p className="sc-eyebrow text-[#D8B86A]">
              Daily Record
            </p>

            <h2 className="sc-serif mt-2 text-2xl font-bold md:text-3xl">
              Court Orders
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
              Browse a simplified presentation of recent
              daily court orders.
            </p>
          </div>

          <CalendarDays
            size={38}
            className="hidden text-[#D8B86A] md:block"
          />
        </div>

        <div className="grid gap-4">
          {orders.map((order) => (
            <article
              key={order.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#B38A3E]/50 hover:shadow-sm"
            >
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B38A3E]">
                    {order.number}
                  </p>

                  <h3 className="sc-serif mt-2 text-xl font-bold text-[#0B1F33]">
                    {order.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={15} />
                      {order.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <FileText size={15} />
                      {order.bench}
                    </span>
                  </div>
                </div>

                <Link
                  href="/search"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E]"
                >
                  View record
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