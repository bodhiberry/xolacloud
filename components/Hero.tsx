"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wifi, WifiOff } from "lucide-react";

const LOGIN_URL = "https://app.xolacloud.com/login";

const branches = ["Thamel", "Pokhara", "Baneshwor"];

const items = [
  { qty: 2, name: "Chicken Momo", price: "360" },
  { qty: 1, name: "Thakali Set", price: "420" },
  { qty: 3, name: "Masala Tea", price: "150" },
  { qty: 1, name: "Chow Mein", price: "280" },
];

const subtotal = 1210;
const tax = 157;
const total = subtotal + tax;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-14 md:grid-cols-2 md:items-center md:pb-28 md:pt-20">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-xs font-medium text-char/70">
            Built for restaurants &amp; cafés in Nepal
          </span>

          <h1 className="mt-5 font-display text-4xl font-700 leading-[1.08] tracking-tight text-ink balance sm:text-5xl">
            One dashboard.
            <br />
            Every branch,
            <br />
            <span className="text-flame">billed and tracked.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-char/75">
            XolaCloud is multi-branch POS and ERP in one system — billing, KOT,
            inventory, staff, and accounts for every outlet, synced live from
            a single cloud dashboard. Works offline at the counter, syncs the
            moment you&apos;re back online.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={LOGIN_URL}
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Start free 14-day trial
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={LOGIN_URL}
              className="text-sm font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-flame"
            >
              Log in to your dashboard
            </a>
          </div>

          <p className="mt-6 text-xs text-char/50">
            No credit card needed &middot; eSewa &amp; Khalti built in &middot;
            Setup support in Nepali &amp; English
          </p>
        </div>

        {/* Right: signature receipt ticket */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* branch tabs representing multi-tenant branches on one account */}
          <div className="mb-3 flex items-center gap-2">
            {branches.map((b, i) => (
              <span
                key={b}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  i === 0
                    ? "bg-ink text-paper"
                    : "bg-white/70 text-char/50 border border-line"
                }`}
              >
                {b}
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1 text-[11px] font-medium text-kitchen">
              <Wifi size={13} /> synced
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="tear-edge relative rounded-sm bg-white px-6 pb-6 pt-5 shadow-[0_20px_50px_-15px_rgba(20,33,61,0.35)]"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-char/50">
              <span>XolaCloud POS</span>
              <span>Table 07</span>
            </div>
            <div className="mt-1 font-mono text-[11px] text-char/40">
              Thamel Branch &middot; #KOT-1042
            </div>

            <div className="dashed-rule my-4" />

            <ul className="space-y-2.5 font-mono text-[13px] text-char">
              {items.map((it, i) => (
                <motion.li
                  key={it.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.18, duration: 0.35 }}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span className="truncate">
                    <span className="text-char/40">{it.qty}&times;</span>{" "}
                    {it.name}
                  </span>
                  <span className="shrink-0 tabular-nums">Rs {it.price}</span>
                </motion.li>
              ))}
            </ul>

            <div className="dashed-rule my-4" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="space-y-1.5 font-mono text-[13px]"
            >
              <div className="flex justify-between text-char/50">
                <span>Subtotal</span>
                <span>Rs {subtotal}</span>
              </div>
              <div className="flex justify-between text-char/50">
                <span>Tax (13%)</span>
                <span>Rs {tax}</span>
              </div>
              <div className="flex justify-between pt-1 text-base font-semibold text-ink">
                <span>Total</span>
                <span>Rs {total}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-sm bg-kitchen/10 py-2 text-xs font-semibold text-kitchen"
            >
              Paid via eSewa
            </motion.div>
          </motion.div>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-char/40">
            <WifiOff size={12} />
            Counter still bills when the internet drops
          </div>
        </div>
      </div>
    </section>
  );
}
