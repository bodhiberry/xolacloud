const quotes = [
  {
    quote:
      "We run three branches and used to reconcile each one by hand at night. Now I see all three on one screen before I've finished my tea.",
    name: "Sunita Shrestha",
    role: "Owner, 3-branch café chain — Kathmandu",
  },
  {
    quote:
      "The kitchen printer used to be the bottleneck during dinner rush. KOTs go straight through now, and stock actually matches what we sell.",
    name: "Bikash Gurung",
    role: "Manager, multi-cuisine restaurant — Pokhara",
  },
  {
    quote:
      "Staff pick it up in a day. eSewa and Khalti both work at the till, so we stopped turning away digital payments.",
    name: "Anjali Rai",
    role: "Owner, roadside dining — Butwal",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paperDim/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-flame">
          From the floor
        </span>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl">
          What changes once the counter runs on XolaCloud
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex h-full flex-col justify-between rounded-lg border border-line bg-white p-7"
            >
              <blockquote className="text-[15px] leading-relaxed text-char/80">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="text-sm font-semibold text-ink">{q.name}</div>
                <div className="text-xs text-char/50">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
