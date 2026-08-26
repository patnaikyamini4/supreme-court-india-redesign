export default function Loading() {
  return (
    <div
      className="min-h-[50vh] bg-[#F7F5EF]"
      aria-label="Loading"
    >
      <div className="sc-container py-16 md:py-20">
        <div className="animate-pulse">
          <div className="h-3 w-32 rounded bg-slate-200" />

          <div className="mt-5 h-12 max-w-xl rounded bg-slate-200" />

          <div className="mt-4 h-5 max-w-2xl rounded bg-slate-200" />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="h-40 rounded-2xl bg-white" />
            <div className="h-40 rounded-2xl bg-white" />
            <div className="h-40 rounded-2xl bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}