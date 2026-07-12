"use client";
import { useState } from "react";

function Plus({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

const faqs = [
  {
    q: "What is included in your Restaurant POS & ERP system?",
    a: "A complete platform covering point of sale, table and order management, inventory and purchasing, kitchen operations, staff management, customer loyalty, reporting, online ordering, and multi-tenant architecture — all from a single login.",
  },
  {
    q: "Can I manage multiple restaurant locations from one account?",
    a: "Yes. You can manage one location or hundreds of restaurants from a single login. Every tenant operates in a secure, isolated workspace with complete control over their own data.",
  },
  {
    q: "What can the Point of Sale handle?",
    a: "Our POS processes orders in seconds with a fast, intuitive interface. It supports dine-in, takeaway, delivery, split bills, discounts, modifiers, and offline operation across any device.",
  },
  {
    q: "How does table and order management work?",
    a: "You can manage tables, reservations, QR ordering, kitchen tickets, and real-time order tracking to deliver a seamless dining experience from start to finish.",
  },
  {
    q: "Does the system help with inventory and purchasing?",
    a: "Yes. Track ingredients and stock in real time, automate purchase orders, monitor supplier transactions, reduce waste, and receive low-stock alerts automatically.",
  },
  {
    q: "What kitchen tools are included?",
    a: "A Kitchen Display System (KDS) streamlines food preparation with order prioritization and real-time communication between the front of house and kitchen.",
  },
  {
    q: "Can I manage staff schedules and payroll?",
    a: "Yes. Schedule shifts, assign roles and permissions, track attendance, manage payroll exports, and monitor staff performance, all in one place.",
  },
  {
    q: "Does it support customer loyalty and promotions?",
    a: "You can build customer profiles, run loyalty points and rewards programs, manage promotions and gift cards, and access full purchase history.",
  },
  {
    q: "What kind of reporting and analytics are available?",
    a: "Access real-time sales, inventory, customer, and financial reports. Business owners get detailed insights, while administrators can monitor all tenants from one centralized dashboard.",
  },
  {
    q: "Can I accept online orders and multiple payment methods?",
    a: "Yes. Accept online orders, integrate with delivery platforms, process multiple payment methods, and keep every transaction synchronized in one system.",
  },
  {
    q: "How does the multi-tenant architecture work?",
    a: "Each restaurant, café, or franchise operates in its own secure, isolated environment, while administrators can manage every tenant, branch, and brand from a single platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-flame">
          Questions
        </span>
        <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-600 text-ink">
                  {f.q}
                </span>
                <Plus
                  size={18}
                  className={`shrink-0 text-flame transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
                style={{ display: "grid" }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl text-sm leading-relaxed text-char/65">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}