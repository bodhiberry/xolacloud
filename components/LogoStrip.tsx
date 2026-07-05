const cities = [
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Biratnagar",
  "Butwal",
  "Chitwan",
  "Dharan",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-line bg-paperDim/60">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <p className="text-center text-xs font-medium uppercase tracking-wide text-char/45">
          Running the counter for restaurants and cafés in
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {cities.map((c) => (
            <span
              key={c}
              className="font-display text-sm font-500 text-char/55"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
