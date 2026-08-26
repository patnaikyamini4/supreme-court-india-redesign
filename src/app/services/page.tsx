import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  FileSearch,
  FileText,
  Gavel,
  Search,
  Scale,
} from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const services = [
  {
    title: "Case Status",
    description:
      "Search and explore information about cases before the Court.",
    icon: FileSearch,
    href: "/cases",
  },
  {
    title: "Judgments",
    description:
      "Browse judicial decisions and judgment information.",
    icon: Scale,
    href: "/judgments",
  },
  {
    title: "Daily Orders",
    description:
      "Access daily court orders and procedural records.",
    icon: FileText,
    href: "/orders",
  },
  {
    title: "Cause List",
    description:
      "View court listings and scheduled matters.",
    icon: CalendarDays,
    href: "/cause-list",
  },
  {
    title: "Court Information",
    description:
      "Explore information about the Court and its structure.",
    icon: Gavel,
    href: "/court",
  },
  {
    title: "Search",
    description:
      "Search important information across the redesigned website.",
    icon: Search,
    href: "/search",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="Digital Access"
        title="Court Services"
        description="Access digital court services and important online resources from one organized directory."
        breadcrumbs={[
          {
            label: "Services",
          },
        ]}
      />

      <PageContainer>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                  <Icon size={22} />
                </div>

                <h2 className="sc-serif mt-6 text-xl font-bold text-[#0B1F33]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E]">
                  Open service
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[#B38A3E]/30 bg-white p-6 md:p-8">
          <p className="sc-eyebrow text-[#B38A3E]">
            Frontend Demonstration
          </p>

          <h2 className="sc-serif mt-3 text-2xl font-bold text-[#0B1F33]">
            No backend connection
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            These service cards demonstrate the redesigned
            navigation and information architecture. They
            do not connect to the Supreme Court's live
            systems or retrieve real-time data.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}