export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Government Strip */}
      <div className="bg-[#071624] text-white">
        <div className="sc-container flex min-h-9 items-center justify-between text-xs">
          <span className="text-white/70">
            Government of India
          </span>

          <div className="flex items-center gap-5 text-white/60">
            <span>Accessibility</span>
            <span>हिंदी</span>
          </div>
        </div>
      </div>

      {/* Identity Header */}
      <header className="border-b border-slate-200 bg-[#F7F5EF]">
        <div className="sc-container flex items-center justify-between py-7">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#B38A3E] bg-white">
              <span className="sc-serif text-xl font-bold text-[#0B1F33]">
                SC
              </span>
            </div>

            <div>
              <p className="sc-eyebrow">
                The Apex Court of India
              </p>

              <h1 className="sc-serif mt-1 text-2xl font-bold text-[#0B1F33] md:text-3xl">
                Supreme Court of India
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                न्याय की ओर एक कदम
              </p>
            </div>
          </div>

          <div className="hidden rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-500 md:block">
            Search judgments, cases & notices
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="sc-container flex h-14 items-center gap-8 overflow-x-auto">
          {[
            "Home",
            "Court",
            "Cases",
            "Judgments",
            "Orders",
            "Notices",
            "Cause List",
            "Services",
          ].map((item, index) => (
            <span
              key={item}
              className={`whitespace-nowrap text-sm font-medium ${
                index === 0
                  ? "text-[#B38A3E]"
                  : "text-slate-600"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* Design System Preview */}
      <section className="sc-navy-bg relative overflow-hidden text-white">
        <div className="sc-container py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="sc-eyebrow text-[#D8B86A]">
              Justice • Access • Transparency
            </p>

            <h2 className="sc-serif mt-5 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Supreme Court
              <span className="block text-[#D8B86A]">
                of India
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              A clearer, more accessible digital experience for
              discovering judgments, cases, notices, court
              schedules and essential judicial services.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#B38A3E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9c7734]">
                Explore Court Services
              </button>

              <button className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D8B86A]">
                View Judgments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Color / Typography demonstration */}
      <section className="sc-section bg-[#F7F5EF]">
        <div className="sc-container">
          <p className="sc-eyebrow">
            Design Language
          </p>

          <h2 className="sc-heading">
            Institutional clarity with modern accessibility
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-[#0B1F33] p-6 text-white">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Primary
              </p>

              <p className="mt-8 font-semibold">
                Court Navy
              </p>

              <p className="mt-2 text-sm text-white/50">
                #0B1F33
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Background
              </p>

              <p className="mt-8 font-semibold text-[#0B1F33]">
                Warm Ivory
              </p>

              <p className="mt-2 text-sm text-slate-400">
                #F7F5EF
              </p>
            </div>

            <div className="rounded-2xl bg-[#B38A3E] p-6 text-white">
              <p className="text-xs uppercase tracking-wider text-white/60">
                Accent
              </p>

              <p className="mt-8 font-semibold">
                Judicial Gold
              </p>

              <p className="mt-2 text-sm text-white/60">
                #B38A3E
              </p>
            </div>

            <div className="rounded-2xl bg-[#071624] p-6 text-white">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Deep
              </p>

              <p className="mt-8 font-semibold">
                Deep Navy
              </p>

              <p className="mt-2 text-sm text-white/50">
                #071624
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}