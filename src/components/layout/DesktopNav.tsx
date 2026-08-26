import Link from "next/link";

const navigationItems = [
  "Home",
  "Court",
  "Cases",
  "Judgments",
  "Orders",
  "Notices",
  "Cause List",
  "Services",
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
              key={item}
              href="#"
              className={`
                relative flex h-full shrink-0 items-center
                text-sm font-medium
                transition-colors
                ${
                  index === 0
                    ? "text-[#B38A3E]"
                    : "text-slate-600 hover:text-[#0B1F33]"
                }
              `}
            >
              {item}

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