import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileText,
  Gavel,
  Search,
  Scale,
} from "lucide-react";

const services = [
  {
    title: "Case Status",
    description: "Track cases and proceedings",
    icon: Search,
  },
  {
    title: "Judgments",
    description: "Search published judgments",
    icon: Gavel,
  },
  {
    title: "Cause List",
    description: "View daily court listings",
    icon: CalendarDays,
  },
  {
    title: "Orders",
    description: "Access court orders",
    icon: FileText,
  },
  {
    title: "Notices",
    description: "Latest court notifications",
    icon: BookOpen,
  },
  {
    title: "Court Services",
    description: "Explore digital services",
    icon: Scale,
  },
];

export default function QuickAccess() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="sc-container py-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="sc-eyebrow">
              Quick access
            </p>

            <h2 className="sc-serif mt-2 text-3xl font-bold text-[#0B1F33]">
              Find what you need
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Frequently used court information and digital
            services, organized for faster discovery.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.title}
                type="button"
                className="group flex min-h-32 items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#B38A3E]/50 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#B38A3E]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-[#0B1F33]">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-300 transition group-hover:text-[#B38A3E]"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}