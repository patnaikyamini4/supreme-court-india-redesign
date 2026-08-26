import {
  ArrowRight,
  Bell,
  CalendarDays,
  FileText,
  Gavel,
  Megaphone,
} from "lucide-react";

const updates = [
  {
    date: "26 AUG",
    type: "Latest Update",
    title:
      "Revised Circular regarding additional Miscellaneous Day on 02.09.2026 and Revised Listing for Regular Hearing Matters",
  },
  {
    date: "25 AUG",
    type: "Listing Notice",
    title:
      "Advance List of Chamber Matters likely to be listed in the week commencing from 31.08.2026 to 03.09.2026",
  },
  {
    date: "25 AUG",
    type: "Latest Update",
    title:
      "Helpline numbers of Court Masters and Moderators for 25.08.2026",
  },
];

const informationCards = [
  {
    title: "Judgments",
    description:
      "Explore recent judgments and decisions delivered by the Supreme Court of India.",
    icon: Gavel,
    href: "#judgments",
  },
  {
    title: "Orders",
    description:
      "Access recent orders and important directions issued by the Court.",
    icon: FileText,
    href: "#orders",
  },
  {
    title: "Listing Notices",
    description:
      "View notices concerning court listings, benches and scheduled matters.",
    icon: CalendarDays,
    href: "#listing-notices",
  },
];

export default function LatestInformation() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="sc-container">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="sc-eyebrow">
              Latest Information
            </p>

            <h2 className="sc-heading">
              Stay informed with
              <span className="block">
                the latest from the Court.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Find recent updates, judgments, orders and listing
              notices in one clear and accessible view.
            </p>
          </div>

          <a
            href="#all-information"
            className="group hidden items-center gap-2 text-sm font-semibold text-[#B38A3E] md:flex"
          >
            View all information

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Updates panel */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-[#F7F5EF]">
          {/* Panel header */}
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center md:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1F33] text-[#D8B86A]">
                <Bell size={18} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0B1F33]">
                  Updates
                </h3>

                <p className="text-xs text-slate-500">
                  Notices, circulars and recent announcements
                </p>
              </div>
            </div>

            <a
              href="#all-updates"
              className="group flex items-center gap-2 text-sm font-semibold text-[#B38A3E]"
            >
              View all

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Update list */}
          <div className="divide-y divide-slate-200">
            {updates.map((update, index) => (
              <a
                key={index}
                href="#update"
                className="group grid gap-5 px-6 py-6 transition-colors hover:bg-white md:grid-cols-[100px_1fr_auto] md:items-center md:px-8"
              >
                {/* Date */}
                <div>
                  <p className="sc-serif text-xl font-bold text-[#0B1F33]">
                    {update.date}
                  </p>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    2026
                  </p>
                </div>

                {/* Content */}
                <div>
                  <span className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#B38A3E]">
                    {update.type}
                  </span>

                  <h4 className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slate-700 transition-colors group-hover:text-[#0B1F33] md:text-base">
                    {update.title}
                  </h4>
                </div>

                {/* Arrow */}
                <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-[#B38A3E] group-hover:text-[#B38A3E] md:flex">
                  <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Information cards */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {informationCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B38A3E]/50 hover:shadow-lg hover:shadow-[#0B1F33]/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F5EF] text-[#0B1F33] transition-colors group-hover:bg-[#0B1F33] group-hover:text-[#D8B86A]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#B38A3E]"
                  />
                </div>

                <h3 className="sc-serif mt-7 text-2xl font-bold text-[#0B1F33]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {card.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#B38A3E]">
                  Explore
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile view-all */}
        <a
          href="#all-information"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-[#B38A3E] md:hidden"
        >
          View all information
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}