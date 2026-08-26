interface HomeSectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function HomeSectionHeading({
  eyebrow,
  title,
  description,
}: HomeSectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="sc-eyebrow">{eyebrow}</p>

      <h2 className="sc-heading">{title}</h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}