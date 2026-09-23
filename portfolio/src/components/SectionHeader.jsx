export default function SectionHeader({ index, title, jp }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-comment mb-3">
        <span className="text-accent">{index}</span> — {jp}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      <div className="mt-6 h-px w-12 bg-line" />
    </div>
  );
}