import {
  ArrowUpRight,
  BookOpen,
  FileArchive,
  FileText,
  Landmark,
  Scale,
} from "lucide-react";

import { courtResources } from "@/data/resources";

const icons = [
  Landmark,
  Scale,
  BookOpen,
  FileText,
  FileArchive,
  FileText,
];

export default function ImportantResources() {
  return (
    <section className="sc-section bg-white">
      <div className="sc-container">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="sc-eyebrow">
              Knowledge & reference
            </p>

            <h2 className="sc-heading">
              Important Resources
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
              Explore important legal, procedural and
              institutional resources through one organized
              access point.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start text-sm font-semibold text-[#0B1F33] transition hover:text-[#B38A3E] md:self-auto"
          >
            View all resources
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Resource grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courtResources.map((resource, index) => {
            const Icon = icons[index % icons.length];

            return (
              <a
                key={resource.id}
                href={resource.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-lg"
              >
                {/* Decorative accent */}
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[#F7F5EF] transition-transform duration-300 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-300 transition group-hover:text-[#B38A3E]"
                    />
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
                    {resource.label}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#0B1F33]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-400 transition group-hover:text-[#B38A3E]">
                    Explore resource
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}