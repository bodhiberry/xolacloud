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
    q: "Do you offer a free trial?",
    a: "Yes! We offer a 1-month free demo account so you can explore Xola POS & ERP and experience its features before subscribing.",
  },
  {
    q: "What's included in the free demo?",
    a: "The demo gives you access to Xola's core features, including POS, inventory management, staff management, reporting, and more. Our team will also help you with the initial setup.",
  },
  {
    q: "Is Xola cloud-based?",
    a: "Yes. Xola is a fully cloud-based POS & ERP system, allowing you to access your business securely from anywhere with an internet connection.",
  },
  {
    q: "Can I manage multiple branches?",
    a: "Absolutely. Xola is designed for single restaurants, cafés, multiple branches, and franchises. Manage all your locations from one centralized dashboard.",
  },
  {
    q: "Can I access Xola from any device?",
    a: "Yes. Xola works on desktops, laptops, tablets, and mobile devices through a modern web browser—no software installation required.",
  },
  {
    q: "Can I migrate from my current POS?",
    a: "Yes. Our team can help you import your menu, inventory, customers, and other supported business data for a smooth transition.",
  },
  {
    q: "Do you provide training and support?",
    a: "Yes. We provide onboarding, training, and ongoing support to ensure you get the most out of Xola.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Each business has its own secure workspace with isolated data, regular backups, and role-based access controls to keep your information safe.",
  },
  {
    q: "How do I get my free demo account?",
    a: "Simply contact us or click Request a Free Demo. We'll create your 1-month free demo account so you can explore Xola with no obligation.",
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