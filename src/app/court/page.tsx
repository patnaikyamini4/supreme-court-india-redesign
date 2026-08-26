import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Gavel,
  Landmark,
  Users,
} from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import PageContainer from "@/components/layout/PageContainer";

const sections = [
  {
    title: "The Court",
    description:
      "Explore the role, structure and constitutional position of the Supreme Court of India.",
    icon: Landmark,
    href: "/court",
  },
  {
    title: "Judges",
    description:
      "Discover information about the judges and judicial structure of the Court.",
    icon: Users,
    href: "/court",
  },
  {
    title: "Courtrooms",
    description:
      "Understand court listings, benches and courtroom information.",
    icon: Building2,
    href: "/cause-list",
  },
  {
    title: "Judicial Work",
    description:
      "Access judgments, orders and other judicial records.",
    icon: Gavel,
    href: "/judgments",
  },
];

export default function CourtPage() {
  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <PageHeader
        eyebrow="The Court"
        title="Supreme Court of India"
        description="Learn about the Court, its judges, constitutional role and judicial structure."
        breadcrumbs={[
          {
            label: "Court",
          },
        ]}
      />

      <PageContainer>
        <section className="rounded-3xl bg-[#0B1F33] p-7 text-white md:p-10">
          <p className="sc-eyebrow text-[#D8B86A]">
            Constitutional Institution
          </p>

          <h2 className="sc-serif mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            The highest judicial authority in the
            Republic of India.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
            This redesigned interface organizes core
            institutional information into clear sections
            so visitors can reach important information
            without navigating through a dense hierarchy.
          </p>
        </section>

        <section className="mt-12">
          <div>
            <p className="sc-eyebrow text-[#B38A3E]">
              Explore
            </p>

            <h2 className="sc-serif mt-2 text-3xl font-bold text-[#0B1F33]">
              Court Information
            </h2>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                    <Icon size={21} />
                  </div>

                  <h3 className="sc-serif mt-5 text-xl font-bold text-[#0B1F33]">
                    {section.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {section.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B38A3E]">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}