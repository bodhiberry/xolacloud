import {
  Receipt,
  Utensils,
  Boxes,
  ChefHat,
  Users,
  Gift,
  BarChart3,
  Truck,
  Network,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    tag: "Point of Sale",
    title: "Point of Sale",
    desc: "Process orders in seconds with a fast, intuitive POS. Support dine-in, takeaway, delivery, split bills, discounts, modifiers, and offline operation across any device.",
  },
  {
    icon: Utensils,
    tag: "Tables & Orders",
    title: "Table & Order Management",
    desc: "Manage tables, reservations, QR ordering, kitchen tickets, and real-time order tracking to deliver a seamless dining experience.",
  },
  {
    icon: Boxes,
    tag: "Inventory",
    title: "Inventory & Purchasing",
    desc: "Track ingredients and stock in real time. Automate purchase orders, monitor supplier transactions, reduce waste, and receive low-stock alerts.",
  },
  {
    icon: ChefHat,
    tag: "Kitchen",
    title: "Kitchen Operations",
    desc: "Streamline food preparation with Kitchen Display System (KDS), order prioritization, and real-time communication between the front of house and kitchen.",
  },
  {
    icon: Users,
    tag: "Staff",
    title: "Staff & Role Management",
    desc: "Schedule shifts, assign roles and permissions, track attendance, manage payroll exports, and monitor staff performance.",
  },
  {
    icon: Gift,
    tag: "Loyalty",
    title: "Customer & Loyalty",
    desc: "Build lasting customer relationships with profiles, loyalty points, rewards, promotions, gift cards, and purchase history.",
  },
  {
    icon: BarChart3,
    tag: "Reports",
    title: "Reporting & Analytics",
    desc: "Access real-time sales, inventory, customer, and financial reports. Business owners get detailed insights, while administrators can monitor all tenants from one centralized dashboard.",
  },
  {
    icon: Truck,
    tag: "Online & Delivery",
    title: "Online Ordering, Delivery & Payments",
    desc: "Accept online orders, integrate with delivery platforms, process multiple payment methods, and keep every transaction synchronized in one system.",
  },
  {
    icon: Network,
    tag: "Multi-Tenant",
    title: "Multi-Tenant Architecture",
    desc: "Each restaurant, café, or franchise operates in its own secure environment with isolated data, while administrators can manage every tenant, branch, and brand from a single platform.",
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
          Features of Our Restaurant POS &amp; ERP
        </h2>
        <p className="mt-4 text-char/70">
          Manage one location or hundreds of restaurants from a single login.
          Every tenant operates in a secure, isolated workspace with complete
          control over their own data.
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