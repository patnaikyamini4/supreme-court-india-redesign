import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Court", href: "/court" },
  { label: "Cases", href: "/cases" },
  { label: "Judgments", href: "/judgments" },
  { label: "Orders", href: "/orders" },
  { label: "Notices", href: "/notices" },
  { label: "Cause List", href: "/cause-list" },
  { label: "Services", href: "/services" },
];

export default function DesktopNav() {
  return (
    <nav
      className="hidden border-b border-slate-200 bg-white md:block"
      aria-label="Primary navigation"
    >
      <div className="sc-container">
        <div className="flex h-14 items-center gap-7 overflow-x-auto">
          {navigationItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                relative flex h-full shrink-0 items-center
                text-sm font-medium transition-colors
                ${
                  index === 0
                    ? "text-[#B38A3E]"
                    : "text-slate-600 hover:text-[#0B1F33]"
                }
              `}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B38A3E]" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}