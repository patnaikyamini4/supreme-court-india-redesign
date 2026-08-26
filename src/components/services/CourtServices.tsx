import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileCheck2,
  FileText,
  Gavel,
  Search,
} from "lucide-react";

import { courtServices } from "@/data/services";

const icons = [
  Search,
  Search,
  Gavel,
  FileText,
  CalendarDays,
  BookOpen,
  FileCheck2,
  ClipboardList,
];

export default function CourtServices() {
  return (
    <section className="sc-section bg-[#0B1F33] text-white">
      <div className="sc-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="sc-eyebrow text-[#D8B86A]">
              Digital access
            </p>

            <h2 className="sc-serif mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Court Services
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Access commonly used judicial, registry and digital
              services through a single, clearly organized interface.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start text-sm font-semibold text-white transition hover:text-[#D8B86A] md:self-auto"
          >
            Explore all services
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {courtServices.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <a
                key={service.id}
                href={service.href}
                className="group min-h-48 bg-[#0B1F33] p-6 transition hover:bg-[#102A43]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D8B86A]/20 bg-[#D8B86A]/10 text-[#D8B86A]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/20 transition group-hover:text-[#D8B86A]"
                  />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8B86A]/70">
                  {service.category}
                </p>

                <h3 className="mt-2 text-base font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}