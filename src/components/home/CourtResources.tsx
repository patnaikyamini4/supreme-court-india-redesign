import {
  ArrowUpRight,
  BookOpen,
  Building2,
  FileArchive,
  Landmark,
  Scale,
  Users,
} from "lucide-react";

const resources = [
  {
    title: "Constitution",
    description:
      "Explore constitutional resources and information relevant to the Court.",
    icon: Landmark,
  },
  {
    title: "Judges",
    description:
      "Learn about the current Bench, former judges and judicial information.",
    icon: Users,
  },
  {
    title: "Court History",
    description:
      "Discover the history and evolution of the Supreme Court of India.",
    icon: BookOpen,
  },
  {
    title: "Acts & Rules",
    description:
      "Access important Acts, Rules and legal resources available through the Court.",
    icon: Scale,
  },
  {
    title: "Court Library",
    description:
      "Explore library resources and information services.",
    icon: FileArchive,
  },
  {
    title: "Registry",
    description:
      "Find information about Registry functions, officers and services.",
    icon: Building2,
  },
];

export default function CourtResources() {
  return (
    <section className="bg-[#F7F5EF] py-20 md:py-24">
      <div className="sc-container">
        <div className="max-w-3xl">
          <p className="sc-eyebrow">
            Explore
          </p>

          <h2 className="sc-heading">
            Discover more about
            <span className="block">
              the Supreme Court.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500">
            Explore institutional information, legal resources,
            judicial information and other essential sections of
            the Court.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <a
                key={resource.title}
                href="#resource"
                className="group bg-white p-7 transition-colors hover:bg-[#0B1F33] hover:text-white"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#0B1F33] transition-colors group-hover:bg-white/10 group-hover:text-[#D8B86A]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-colors group-hover:text-[#D8B86A]"
                  />
                </div>

                <h3 className="sc-serif mt-8 text-2xl font-bold text-[#0B1F33] group-hover:text-white">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 group-hover:text-white/55">
                  {resource.description}
                </p>

                <div className="mt-7 text-sm font-semibold text-[#B38A3E]">
                  Explore resource
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}