import { Check } from "lucide-react";

const LOGIN_URL = "https://app.xolacloud.com/login";

const plans = [
  {
    name: "Single Branch",
    price: "Rs 1,999",
    period: "/month",
    desc: "One outlet, everything it needs to run.",
    features: [
      "Billing, KOT & table management",
      "Inventory & recipe costing",
      "eSewa / Khalti payments",
      "Up to 5 staff logins",
    ],
    highlighted: false,
  },
  {
    name: "Multi-Branch",
    price: "Rs 1,499",
    period: "/branch / month",
    desc: "For chains running two or more outlets on one account.",
    features: [
      "Everything in Single Branch",
      "Unlimited branches, one dashboard",
      "Per-branch menu & pricing control",
      "Consolidated reports & accounts",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    period: "",
    desc: "Custom rollout for large or franchised groups.",
    features: [
      "Everything in Multi-Branch",
      "Dedicated onboarding",
      "Custom integrations & API access",
      "SLA-backed support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-flame">
          Pricing
        </span>
        <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl">
          Priced per branch, not per feature
        </h2>
        <p className="mt-4 text-char/70">
          Every plan includes billing, KOT, inventory, and accounts. Start
          with one outlet and grow into more without switching systems.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-lg p-8 ${
              p.highlighted
                ? "border-2 border-flame bg-white shadow-[0_20px_50px_-20px_rgba(232,93,47,0.35)]"
                : "border border-line bg-white"
            }`}
          >
            {p.highlighted && (
              <span className="mb-4 inline-block w-fit rounded-full bg-flame/10 px-3 py-1 text-xs font-semibold text-flame">
                Most chains choose this
              </span>
            )}
            <h3 className="font-display text-xl font-700 text-ink">
              {p.name}
            </h3>
            <p className="mt-1 text-sm text-char/60">{p.desc}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-3xl font-700 text-ink">
                {p.price}
              </span>
              <span className="text-sm text-char/50">{p.period}</span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-char/75">
                  <Check size={16} className="mt-0.5 shrink-0 text-kitchen" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={LOGIN_URL}
              className={`mt-8 rounded-md px-5 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                p.highlighted
                  ? "bg-flame text-paper hover:bg-flameDark"
                  : "bg-ink text-paper hover:bg-inkSoft"
              }`}
            >
              {p.name === "Enterprise" ? "Talk to sales" : "Start free trial"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
