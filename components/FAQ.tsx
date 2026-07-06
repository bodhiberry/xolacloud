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
    q: "Does billing still work if the internet goes down?",
    a: "Yes. The counter keeps billing on the local device and syncs every order to your dashboard automatically once the connection returns.",
  },
  {
    q: "Can each branch have its own menu and prices?",
    a: "Yes. Set a shared menu across all branches, or override items and prices per branch — both from the same account.",
  },
  {
    q: "What payment methods are supported?",
    a: "Cash, card, eSewa, and Khalti are built in at the till, alongside custom payment types you can add for vouchers or credit accounts.",
  },
  {
    q: "Can I move my existing menu and stock data in?",
    a: "Yes. Our onboarding team imports your existing menu, pricing, and stock counts from a spreadsheet or your current POS export.",
  },
  {
    q: "Is there a contract or can I cancel anytime?",
    a: "Plans are billed monthly with no lock-in contract. You can add, remove, or cancel a branch at any time from your dashboard.",
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
          Before you start the trial
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
