export default function GovernmentBar() {
  return (
    <div className="bg-[#071624] text-white">
      <div className="sc-container flex min-h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="font-medium text-white/85">
            Government of India
          </span>

          <span className="hidden text-white/30 sm:inline">
            |
          </span>

          <span className="hidden text-white/55 sm:inline">
            न्यायपालिका
          </span>
        </div>

        <div className="flex items-center gap-4 text-white/65">
          <button
            type="button"
            className="transition hover:text-white"
          >
            Accessibility
          </button>

          <button
            type="button"
            className="transition hover:text-white"
          >
            हिंदी
          </button>
        </div>
      </div>
    </div>
  );
}