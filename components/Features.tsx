import {
  Receipt,
  Building2,
  Boxes,
  QrCode,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    tag: "Billing & KOT",
    title: "Bill a table in three taps",
    desc: "Orders move straight from the floor to the kitchen printer or KDS. Split bills, apply discounts, and close a table without leaving the screen.",
  },
  {
    icon: Building2,
    tag: "Multi-branch",
    title: "Every outlet, one login",
    desc: "Switch between branches from a single account. Set menu and pricing per branch, or push a change to all of them at once.",
  },
  {
    icon: Boxes,
    tag: "Inventory",
    title: "Know what's left in the store",
    desc: "Recipes deduct stock automatically as items sell. Get a low-stock alert before the kitchen runs out mid-service.",
  },
  {
    icon: QrCode,
    tag: "QR & online orders",
    title: "A menu guests order from directly",
    desc: "Table QR ordering and a branded online ordering page, both feeding the same kitchen queue as walk-in orders.",
  },
  {
    icon: Users,
    tag: "Staff",
    title: "Shifts, roles, and access in one place",
    desc: "Give a waiter order access and a manager full reports, from a permission list you set once per role.",
  },
  {
    icon: BarChart3,
    tag: "Accounts & reports",
    title: "The books close themselves",
    desc: "Daily sales, expenses, and vendor payments post to a ledger automatically, so month-end is a review, not a rebuild.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-flame">
          What&apos;s included
        </span>
        <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl">
          Everything the counter and the back office both need
        </h2>
        <p className="mt-4 text-char/70">
          POS and ERP are usually two different systems bolted together.
          XolaCloud keeps them as one, so a sale on the floor and a line in
          your accounts are the same event.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group bg-paper p-7 transition-colors hover:bg-white">
            <f.icon size={20} strokeWidth={1.75} className="text-flame" />
            <div className="mt-4 font-mono text-[11px] font-medium uppercase tracking-wide text-char/40">
              {f.tag}
            </div>
            <h3 className="mt-2 font-display text-lg font-600 text-ink">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-char/65">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
