import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  FileCheck2,
  FileText,
  Globe2,
  Monitor,
  Scale,
  Search,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "e-Filing",
    description:
      "Digital filing services for cases and court documents.",
    category: "Digital Filing",
    icon: FileText,
  },
  {
    title: "Online Appearance Slips",
    description:
      "Access online facilities relating to appearance slips.",
    category: "Court Access",
    icon: BadgeCheck,
  },
  {
    title: "SuSwagatam",
    description:
      "Digital e-Pass and visitor access service.",
    category: "Visitor Services",
    icon: ShieldCheck,
  },
  {
    title: "Grievance Status",
    description:
      "Access information regarding submitted grievances.",
    category: "Citizen Services",
    icon: Search,
  },
  {
    title: "Online RTI Portal",
    description:
      "Access the online Right to Information service.",
    category: "Transparency",
    icon: Globe2,
  },
  {
    title: "Certified Copy",
    description:
      "Information and access related to certified copies.",
    category: "Registry",
    icon: FileCheck2,
  },
  {
    title: "National Judicial Data Grid",
    description:
      "Access judicial data and statistical information.",
    category: "Judicial Data",
    icon: Monitor,
  },
  {
    title: "Supreme Court Reports",
    description:
      "Explore the Supreme Court Reports resource.",
    category: "Legal Research",
    icon: BookOpen,
  },
  {
    title: "Neutral Citation",
    description:
      "Access neutral citation resources for judgments.",
    category: "Legal Research",
    icon: Scale,
  },
  {
    title: "Verdict Finder",
    description:
      "Search and discover judicial decisions.",
    category: "Legal Research",
    icon: Search,
  },
];

const categories = [
  "All",
  "Digital Filing",
  "Court Access",
  "Citizen Services",
  "Legal Research",
  "Registry",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <section className="bg-[#0B1F33] text-white">
        <div className="sc-container py-16 md:py-20">
          <p className="sc-eyebrow text-[#D8B86A]">
            Digital access
          </p>

          <h1 className="sc-serif mt-3 text-4xl font-bold md:text-6xl">
            e-Services
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            A single access point for digital services,
            research tools and online facilities.
          </p>
        </div>
      </section>

      <section className="sc-container py-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                index === 0
                  ? "bg-[#0B1F33] text-white"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-[#B38A3E]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                    <Icon size={19} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-300 transition group-hover:text-[#B38A3E]"
                  />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
                  {service.category}
                </p>

                <h2 className="mt-2 text-lg font-bold text-[#0B1F33]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="mt-6 text-sm font-semibold text-[#0B1F33] hover:text-[#B38A3E]"
                >
                  Open service →
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[#B38A3E]/20 bg-white p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B38A3E]">
            Frontend notice
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
            These interfaces are part of the frontend redesign.
            They do not submit forms or retrieve live information.
            Official services can be connected later without
            changing the visual architecture.
          </p>
        </div>
      </section>
    </main>
  );
}