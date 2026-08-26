"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Court",
    href: "/court",
  },
  {
    label: "Cases",
    href: "/cases",
  },
  {
    label: "Judgments",
    href: "/judgments",
  },
  {
    label: "Orders",
    href: "/orders",
  },
  {
    label: "Notices",
    href: "/notices",
  },
  {
    label: "Cause List",
    href: "/cause-list",
  },
  {
    label: "Services",
    href: "/services",
  },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden border-b border-slate-200 bg-white lg:block"
    >
      <div className="sc-container">
        <div className="flex min-h-[58px] items-center gap-8">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex min-h-[58px] items-center text-sm font-medium transition ${
                  isActive
                    ? "text-[#B38A3E]"
                    : "text-[#0B1F33] hover:text-[#B38A3E]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#B38A3E] transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}