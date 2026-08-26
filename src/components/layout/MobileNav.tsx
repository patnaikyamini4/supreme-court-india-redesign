"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 bg-white md:hidden">
      <div className="sc-container">
        <div className="flex h-14 items-center justify-between">
          <button
            type="button"
            aria-label="Search"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100"
          >
            <Search size={20} />
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-[#0B1F33] transition hover:bg-slate-100"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav
            className="border-t border-slate-100 py-3"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className={`
                  block rounded-lg px-3 py-3 text-sm font-medium
                  ${
                    index === 0
                      ? "bg-[#F7F5EF] text-[#B38A3E]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0B1F33]"
                  }
                `}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}