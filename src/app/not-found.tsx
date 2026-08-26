import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] bg-[#F7F5EF]">
      <div className="sc-container flex min-h-[65vh] items-center justify-center py-16">
        <div className="w-full max-w-2xl text-center">
          <p className="sc-serif text-8xl font-bold text-[#B38A3E] md:text-9xl">
            404
          </p>

          <p className="sc-eyebrow mt-6 text-[#B38A3E]">
            Page not found
          </p>

          <h1 className="sc-serif mt-3 text-3xl font-bold text-[#0B1F33] md:text-4xl">
            This page could not be found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            The page you are looking for may have moved,
            been removed, or may not exist.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#102A43]"
            >
              <Home size={16} />
              Return home
            </Link>

            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F33] transition hover:border-[#B38A3E]"
            >
              <Search size={16} />
              Search the site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}