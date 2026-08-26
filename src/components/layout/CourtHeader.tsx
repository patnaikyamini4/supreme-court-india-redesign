"use client";

import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

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

const serviceLinks = [
  {
    label: "Case Status",
    href: "/cases",
  },
  {
    label: "Judgments",
    href: "/judgments",
  },
  {
    label: "Daily Orders",
    href: "/orders",
  },
  {
    label: "Cause List",
    href: "/cause-list",
  },
];

export default function CourtHeader() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="sc-header-shadow sticky top-0 z-50 bg-white">
      {/* Government strip */}
      <div className="bg-[#0B1F33] text-white">
        <div className="sc-container flex min-h-9 items-center justify-between gap-4">
          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-xs">
            Government of India
          </p>

          <div className="hidden items-center gap-4 text-[10px] font-medium text-white/60 sm:flex sm:text-xs">
            <span>Official Website</span>
            <span aria-hidden="true">•</span>
            <span>भारत सरकार</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-slate-200 bg-[#F7F5EF]">
        <div className="sc-container flex min-h-[92px] items-center justify-between gap-4 py-4">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 items-center gap-3 sm:gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#B38A3E] bg-white text-[#0B1F33] sm:h-14 sm:w-14">
              <span className="sc-serif text-xl font-bold sm:text-2xl">
                SC
              </span>
            </div>

            <div className="min-w-0">
              <p className="sc-eyebrow truncate text-[#B38A3E]">
                The Apex Court of India
              </p>

              <h1 className="sc-serif truncate text-xl font-bold text-[#0B1F33] sm:text-2xl md:text-3xl">
                Supreme Court of India
              </h1>

              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                न्याय की ओर एक कदम
              </p>
            </div>
          </Link>

          {/* Desktop search */}
          <Link
            href="/search"
            className="hidden min-h-11 w-64 items-center gap-3 rounded-full border border-slate-300 bg-white px-5 text-sm text-slate-500 transition hover:border-[#B38A3E] hover:text-[#0B1F33] lg:flex"
          >
            <Search size={17} />

            <span>
              Search judgments, cases & notices
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-[#0B1F33] transition hover:border-[#B38A3E] lg:hidden"
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav
        aria-label="Primary navigation"
        className="hidden border-b border-slate-200 bg-white lg:block"
      >
        <div className="sc-container flex min-h-14 items-center justify-between">
          <div className="flex items-center gap-1">
            {navigation.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                  >
                    <Link
                      href={item.href}
                      className="flex min-h-14 items-center gap-1.5 px-3 text-sm font-medium text-slate-700 transition hover:text-[#B38A3E]"
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </Link>

                    <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-[#F7F5EF] hover:text-[#B38A3E]"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex min-h-14 items-center px-3 text-sm font-medium text-slate-700 transition hover:text-[#B38A3E]"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/search"
            className="flex items-center gap-2 text-sm font-semibold text-[#B38A3E] transition hover:text-[#0B1F33]"
          >
            <Search size={16} />
            Search
          </Link>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-90px)] overflow-y-auto border-b border-slate-200 bg-white shadow-xl lg:hidden">
          <div className="sc-container py-4">
            <Link
              href="/search"
              onClick={closeMobileMenu}
              className="mb-4 flex min-h-12 items-center gap-3 rounded-xl border border-slate-200 bg-[#F7F5EF] px-4 text-sm text-slate-600"
            >
              <Search
                size={17}
                className="text-[#B38A3E]"
              />

              <span>Search the Court</span>
            </Link>

            <nav
              aria-label="Mobile navigation"
              className="space-y-1"
            >
              {navigation.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setServicesOpen(
                            (value) => !value
                          )
                        }
                        aria-expanded={servicesOpen}
                        className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left text-sm font-semibold text-[#0B1F33] transition hover:bg-[#F7F5EF]"
                      >
                        <span>Services</span>

                        <ChevronDown
                          size={17}
                          className={`transition-transform ${
                            servicesOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {servicesOpen && (
                        <div className="ml-3 border-l border-slate-200 pl-3">
                          {serviceLinks.map(
                            (service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={
                                  closeMobileMenu
                                }
                                className="flex min-h-11 items-center rounded-lg px-4 text-sm text-slate-600 hover:bg-[#F7F5EF] hover:text-[#B38A3E]"
                              >
                                {service.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex min-h-12 items-center rounded-xl px-4 text-sm font-semibold text-[#0B1F33] transition hover:bg-[#F7F5EF] hover:text-[#B38A3E]"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}