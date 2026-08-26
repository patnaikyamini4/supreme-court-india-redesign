import CourtHeader from "@/components/layout/CourtHeader";

export default function Home() {
  return (
    <>
      <CourtHeader />

      <main>
        <section className="sc-navy-bg text-white">
          <div className="sc-container py-24 md:py-32">
            <p className="sc-eyebrow text-[#D8B86A]">
              Justice • Access • Transparency
            </p>

            <h2 className="sc-serif mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Supreme Court
              <span className="block text-[#D8B86A]">
                of India
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              A clearer digital experience for discovering
              judgments, cases, notices, court schedules and
              essential judicial services.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}