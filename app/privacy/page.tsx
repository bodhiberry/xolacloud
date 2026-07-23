"use client";

import { useState } from "react";
import Link from "next/link";

const LOGIN_URL = "https://app.xolacloud.com/login";
const SIGNUP_URL = "https://app.xolacloud.com/signup";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`font-display text-2xl font-semibold tracking-[0.08em] ${
        dark ? "text-white" : "text-ink"
      }`}
    >
      XOLA
    </span>
  );
}

export default function PrivacyPolicy() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-ink">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:opacity-90"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-sm font-medium text-ink/70 transition hover:text-plum"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={LOGIN_URL}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink/70 transition hover:bg-mist hover:text-ink"
            >
              Sign In
            </a>

            <a
              href="/#contact"
              className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition hover:bg-mist"
            >
              Request Demo
            </a>

            <a
              href={SIGNUP_URL}
              className="rounded-lg bg-plum px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-plum-dark hover:shadow-lg"
            >
              Start Free Trial
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line transition hover:bg-mist lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-line bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 font-medium text-ink/70 transition hover:bg-mist hover:text-plum"
                >
                  {link.label}
                </a>
              ))}

              <div className="my-3 border-t border-line"></div>

              <a
                href={LOGIN_URL}
                className="rounded-lg px-4 py-3 font-medium text-ink transition hover:bg-mist"
              >
                Sign In
              </a>

              <a
                href="/#contact"
                className="rounded-lg border border-line px-4 py-3 text-center font-medium transition hover:bg-mist"
              >
                Request Demo
              </a>

              <a
                href={SIGNUP_URL}
                className="rounded-lg bg-plum px-5 py-3 text-center font-semibold text-white transition hover:bg-plum-dark"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </header>

      {/* BODY CONTENT */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="border-b border-line pb-8">
            <span className="inline-flex rounded-full bg-sky/10 px-4 py-1 text-sm font-semibold text-sky">
              Legal Information
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-body text-sm text-ink/50">
              Last Updated: July 23, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 font-body text-base leading-relaxed text-ink/75">
            <div>
              <p>
                At <strong>Xola Cloud</strong> (“we,” “our,” or “us”), operating via{" "}
                <code className="rounded bg-mist px-1.5 py-0.5 text-sm font-mono">
                  xolacloud.com
                </code>
                , we respect your privacy and are committed to protecting the
                personal information of our business clients (“Tenants”), their
                staff, and end customers.
              </p>
              <p className="mt-4">
                This Privacy Policy outlines how we collect, use, store, and safeguard
                data processed across our multi-tenant cloud POS, ERP system, kitchen
                display systems (KDS), and online ordering platforms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                1. Multi-Tenant Data Isolation
              </h2>
              <p className="mt-3">
                Xola Cloud runs on a multi-tenant platform architecture. Each
                restaurant, café, or franchise tenant operates within its own
                logically isolated database container.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-ink/70">
                <li>
                  Your sales, inventory recipes, customer details, and staff shifts are strictly isolated.
                </li>
                <li>
                  No other merchant tenant on Xola Cloud can access or view your business records.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                2. Information We Collect
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-ink">A. Information You Provide</h3>
                  <p className="mt-1">
                    When registering for an account or subscribing to Xola Cloud, we collect account details (business name, owner name, phone number, email address, physical location, and billing credentials).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">B. Business &amp; Operations Data</h3>
                  <p className="mt-1">
                    To deliver our POS & ERP services, we process data uploaded by you, including menu items, ingredient costs, inventory levels, supplier invoices, shift schedules, and employee roles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">C. End-Customer Data</h3>
                  <p className="mt-1">
                    When taking dine-in, delivery, or online takeaway orders, we process customer names, phone numbers, delivery addresses, transaction histories, and loyalty points on behalf of the Tenant.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                3. How We Use Your Data
              </h2>
              <p className="mt-3">We process data for the following purposes:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-ink/70">
                <li>Providing and synchronizing real-time POS, ERP, KDS, and online orders.</li>
                <li>Processing transactions securely via integrated third-party payment gateways.</li>
                <li>Generating sales, inventory, tax, and multi-branch analytics reports for account administrators.</li>
                <li>Providing ongoing technical support, software updates, and platform maintenance.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                4. Data Security & Retention
              </h2>
              <p className="mt-3">
                We implement strict administrative, physical, and technical controls (TLS encryption for data in transit and AES encryption at rest) to safeguard stored data. We store data as long as your account remains active or as required by statutory accounting laws.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                5. Contact Us
              </h2>
              <p className="mt-3">
                For questions regarding this Privacy Policy or your data, reach out to us at:
              </p>
              <div className="mt-4 rounded-xl border border-line bg-mist p-6">
                <p className="font-semibold text-ink">Xola Cloud Support</p>
                <p className="mt-1 text-ink/70">Email: info@xolacloud.com</p>
                <p className="mt-1 text-ink/70">Phone: +977 9763681795</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-block">
                <Logo />
              </Link>
              <p className="mt-5 max-w-sm font-body leading-7 text-ink/60">
                Xola Cloud is an all-in-one cloud POS &amp; ERP platform designed for
                cafés, restaurants, food chains, and franchises. Manage sales,
                inventory, staff, reporting, and multiple locations from anywhere.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href={SIGNUP_URL}
                  className="rounded-lg bg-plum px-5 py-3 font-semibold text-white transition hover:bg-plum-dark"
                >
                  Start Free Trial
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                Product
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-ink/60">
                <li>
                  <a href="/#features" className="transition hover:text-plum">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="transition hover:text-plum">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="transition hover:text-plum">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                Company
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-ink/60">
                <li>
                  <a href="/#contact" className="transition hover:text-plum">
                    Contact
                  </a>
                </li>
                <li>
                  <a href={LOGIN_URL} className="transition hover:text-plum">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href={SIGNUP_URL} className="transition hover:text-plum">
                    Create Account
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                Support
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-ink/60">
                <li>
                  <a
                    href="mailto:info@xolacloud.com"
                    className="transition hover:text-plum"
                  >
                    info@xolacloud.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9779763681795"
                    className="transition hover:text-plum"
                  >
                    +977 9763681795
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="transition hover:text-plum">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition hover:text-plum">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-ink/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} <strong>Xola Cloud</strong>. All
              rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/" className="transition hover:text-plum">
                Home
              </Link>
              <a href="/#features" className="transition hover:text-plum">
                Features
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
