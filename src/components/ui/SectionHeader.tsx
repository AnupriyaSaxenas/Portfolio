export function SectionHeader({
  id,
  eyebrow,
  heading,
  subhead,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  subhead?: string;
}) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">{eyebrow}</p>
      <h2 id={id} className="text-3xl md:text-4xl font-semibold tracking-tight text-fg mb-4">
        {heading}
      </h2>
      {subhead && (
        <p className="text-lg text-muted leading-relaxed">{subhead}</p>
      )}
    </div>
  );
}
