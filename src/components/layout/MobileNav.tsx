"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="border-b border-slate-200 bg-white lg:hidden">
      <div className="sc-container">
        <div className="flex min-h-[58px] items-center justify-between">
          <Link
            href="/search"
            onClick={closeMenu}
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#0B1F33] transition hover:bg-[#F7F5EF] hover:text-[#B38A3E]"
          >
            <Search size={19} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#0B1F33] transition hover:bg-[#F7F5EF] hover:text-[#B38A3E]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-100 py-3"
          >
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`flex min-h-[48px] items-center justify-between border-b border-slate-100 px-2 text-sm font-medium last:border-b-0 ${
                    isActive
                      ? "text-[#B38A3E]"
                      : "text-[#0B1F33]"
                  }`}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#B38A3E]" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/search"
              onClick={closeMenu}
              className="mt-3 flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0B1F33] px-4 text-sm font-semibold text-white"
            >
              <Search size={16} />
              Search
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}