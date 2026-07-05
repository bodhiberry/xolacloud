const steps = [
  {
    n: "01",
    title: "Add your branches and menu",
    desc: "Bring in each outlet, its tables, and its menu — or import what you already run in another POS.",
  },
  {
    n: "02",
    title: "Connect the counter",
    desc: "Pair your printer or KDS, set tax and service charge, and turn on eSewa or Khalti for digital payment.",
  },
  {
    n: "03",
    title: "Open for service",
    desc: "Staff log in with their own PIN. Orders, KOTs, and payments start flowing the moment the first table is billed.",
  },
  {
    n: "04",
    title: "Watch it reconcile",
    desc: "Sales, stock, and cash from every branch land in one dashboard — no end-of-day spreadsheet required.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-flame">
            Getting started
          </span>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-paper sm:text-4xl">
            Live on the floor in an afternoon
          </h2>
          <p className="mt-4 text-paper/60">
            Most restaurants finish setup and take their first XolaCloud order
            the same day.
          </p>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-flame">{s.n}</span>
                <div className="h-px flex-1 bg-lineDark" />
              </div>
              <h3 className="mt-4 font-display text-lg font-600 text-paper">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
