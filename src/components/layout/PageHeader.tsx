import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-[#F7F5EF]">
      <div className="sc-container py-10 md:py-14">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-500"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#B38A3E]"
            >
              Home
            </Link>

            {breadcrumbs.map((item, index) => (
              <span
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                <ChevronRight size={13} />

                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#B38A3E]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#0B1F33]">
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="sc-eyebrow text-[#B38A3E]">
            {eyebrow}
          </p>
        )}

        <h1 className="sc-serif mt-3 max-w-4xl text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
        )}

        <div className="sc-divider mt-7" />
      </div>
    </section>
  );
}