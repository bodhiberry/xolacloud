const stats = [
  { value: "300+", label: "branches on XolaCloud" },
  { value: "Rs 40Cr+", label: "billed through the platform" },
  { value: "13,000+", label: "orders processed daily" },
  { value: "99.9%", label: "uptime, offline billing included" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="dashed-rule" />
      <div className="grid grid-cols-2 gap-y-10 py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1.5 text-xs text-char/55 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="dashed-rule" />
    </section>
  );
}
