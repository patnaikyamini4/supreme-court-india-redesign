import {
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  FileText,
  Gavel,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Case Status",
    description:
      "Find case information using case number, diary number, party name and other details.",
    icon: Search,
    href: "#case-status",
    number: "01",
  },
  {
    title: "Judgments",
    description:
      "Explore judgments and decisions published by the Supreme Court of India.",
    icon: Gavel,
    href: "#judgments",
    number: "02",
  },
  {
    title: "Daily Orders",
    description:
      "Access daily orders and information issued by the Court.",
    icon: FileText,
    href: "#daily-orders",
    number: "03",
  },
  {
    title: "Cause List",
    description:
      "View court listings, sessions, judges and scheduled matters.",
    icon: CalendarDays,
    href: "#cause-list",
    number: "04",
  },
  {
    title: "Listing Notices",
    description:
      "Stay informed about listing changes, notices and court updates.",
    icon: ClipboardList,
    href: "#listing-notices",
    number: "05",
  },
  {
    title: "Office Reports",
    description:
      "Access reports and important registry-related information.",
    icon: FileText,
    href: "#office-reports",
    number: "06",
  },
];

export default function QuickAccess() {
  return (
    <section className="bg-[#F7F5EF] py-20 md:py-24">
      <div className="sc-container">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="sc-eyebrow">
              Quick Access
            </p>

            <h2 className="sc-heading">
              Essential court services,
              <span className="block">
                one place.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              Quickly access the information and services most
              frequently used by litigants, advocates, researchers
              and members of the public.
            </p>
          </div>

          <span className="hidden text-sm font-medium text-[#B38A3E] md:block">
            Explore court services
          </span>
        </div>

        {/* Service grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href={service.href}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#B38A3E]/50
                  hover:shadow-xl
                  hover:shadow-[#0B1F33]/5
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#B38A3E]
                  focus:ring-offset-2
                "
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                    {service.number}
                  </span>

                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl
                      bg-[#F7F5EF]
                      text-[#0B1F33]
                      transition-colors
                      group-hover:bg-[#0B1F33]
                      group-hover:text-[#D8B86A]
                    "
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="sc-serif mt-8 text-2xl font-bold text-[#0B1F33]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* Action */}
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#B38A3E]">
                  Explore

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Decorative line */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-1 w-0
                    bg-[#B38A3E]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}