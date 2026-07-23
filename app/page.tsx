"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import WelcomeModal from "@/components/WelcomeModal";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LOGIN_URL = "https://app.xolacloud.com/login";
const SIGNUP_URL = "https://app.xolacloud.com/signup";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  {
    name: "Point of Sale",
    detail:
      "Process orders in seconds with a fast, intuitive POS. Support dine-in, takeaway, delivery, split bills, discounts, modifiers, and offline operation across any device.",
  },
  {
    name: "Table & Order Management",
    detail:
      "Manage tables, reservations, QR ordering, kitchen tickets, and real-time order tracking to deliver a seamless dining experience.",
  },
  {
    name: "Inventory & purchasing",
    detail:
      "Track ingredients and stock in real time. Automate purchase orders, monitor supplier transactions, reduce waste, and receive low-stock alerts.",
  },
  {
    name: "Kitchen Operations",
    detail:
      "Streamline food preparation with Kitchen Display System (KDS), order prioritization, and real-time communication between the front of house and kitchen.",
  },
  {
    name: "Staff & Role Management",
    detail:
      "Schedule shifts, assign roles and permissions, track attendance, manage payroll exports, and monitor staff performance.",
  },
  {
    name: "Customer & Loyalty",
    detail:
      "Build lasting customer relationships with profiles, loyalty points, rewards, promotions, gift cards, and purchase history.",
  },
  {
    name: "Reporting & Analytics",
    detail:
      "Access real-time sales, inventory, customer, and financial reports. Business owners get detailed insights, while administrators can monitor all tenants from one centralized dashboard.",
  },
  {
    name: "Online Ordering, Delivery & Payments",
    detail:
      "Accept online orders, integrate with delivery platforms, process multiple payment methods, and keep every transaction synchronized in one system.",
  },
  {
    name: "Multi-Tenant Architecture",
    detail:
      "Each restaurant, café, or franchise operates in its own secure environment with isolated data, while administrators can manage every tenant, branch, and brand from a single platform.",
  },
];

const FAQS = [
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a 3-month free demo account so you can explore Xola POS & ERP and experience its features before subscribing.",
  },
  {
    q: "What's included in the free demo?",
    a: "The demo gives you access to Xola's core features, including POS, inventory management, staff management, reporting, and more. Our team will also help you with the initial setup.",
  },
  {
    q: "Does it work without internet?",
    a: "No. Xola is a fully cloud-based POS & ERP system and requires an active internet connection to operate.",
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
    a: "Simply contact us or click 'Request a Free Demo.' We'll create your 3-month free demo account so you can explore Xola with no obligation.",
  },
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

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-ink">
      <WelcomeModal />
      <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:opacity-90"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={LOGIN_URL}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink/70 transition hover:bg-mist hover:text-ink"
            >
              Sign In
            </a>

            <a
              href="#contact"
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

          {/* Mobile Button */}
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

        {/* Mobile Navigation */}
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
                href="#contact"
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

      <section className="px-6 pb-16 pt-20 text-center sm:pt-28">
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="font-script text-5xl font-semibold text-sky sm:text-6xl">
            All-in-one
          </span>{" "}
          <span className="text-ink">multi-tenant POS &amp; ERP</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-ink/60 sm:text-lg">
          Xola gives every business a complete POS and ERP solution with
          inventory management, staff scheduling, reporting, and delivery
          platform integrations. Each tenant&apos;s data is securely isolated, while
          everything is managed from a single login.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={LOGIN_URL}
            className="rounded-md bg-plum px-7 py-3 font-display text-sm font-semibold text-white transition hover:bg-plum-dark"
          >
            Start now - it&apos;s free
          </a>
          <a
            href="mailto:info@xolacloud.com"
            className="rounded-md bg-mist px-7 py-3 font-display text-sm font-semibold text-ink transition hover:bg-line"
          >
            Meet an advisor
          </a>
        </div>

        {/* Real product screenshots */}
        <div className="relative mx-auto mt-20 w-full max-w-3xl px-6 pb-16 sm:px-10">
          {/* Back screenshot: table/floor view */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-[90%] overflow-hidden rounded-xl border border-line bg-white text-left shadow-[0_25px_60px_-20px_rgba(20,33,61,0.35)]"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-[10px] text-char/40">
                app.xolacloud.com/orders
              </span>
            </div>
            <Image
              src="/screenshots/orders-tables.png"
              alt="Xola floor plan showing tables grouped by area, with live status"
              width={1660}
              height={903}
              className="h-auto w-full"
              priority
            />
          </motion.div>

          {/* Front screenshot: order/menu panel, layered on top */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-4 left-4 w-[60%] overflow-hidden rounded-xl border border-line bg-white text-left shadow-[0_25px_60px_-20px_rgba(20,33,61,0.4)] sm:left-8 sm:w-[55%]"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-[10px] text-char/40">
                Outside Table-01 &middot; Menu
              </span>
            </div>
            <Image
              src="/screenshots/order-menu.png"
              alt="Xola order screen showing the coffee menu and active order panel"
              width={1660}
              height={903}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      <section id="features" className="border-y border-line bg-mist px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Features
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Everything your café or restaurant needs, in one place.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.name} className="rounded-xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-semibold text-ink">
                  {f.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-forest sm:text-5xl">
              Ready to Experience Xola?
            </h2>
            <p className="mt-6 max-w-md font-body text-ink/60">
              Discover how Xola can streamline your restaurant operations, reduce
              costs, and improve customer service. Our implementation specialists
              will configure your menus, tables, inventory, staff, and business
              settings, ensuring you&apos;re ready to start selling from day one.
              As your business grows, Xola grows with you.
            </p>
            <p className="mt-8 font-display text-sm font-semibold text-ink/50">
              Talk to Our Team
            </p>
            <p className="font-display text-xl font-semibold text-forest">
              +977 9763681795
            </p>
            <a
              href="mailto:info@xolacloud.com"
              className="mt-6 inline-block rounded-md border border-forest px-6 py-3 font-display text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
            >
              Schedule a Free Demo
            </a>
          </div>
          {/* Image Container */}
          <div className="relative h-full w-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl lg:min-h-[500px]">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business team discussing system integration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-forest/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-line bg-mist px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Simple, Transparent Pricing
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-ink">
              Pricing Plans
            </h2>

            <p className="mt-5 font-body text-lg text-ink/60">
              Choose the perfect plan for your business. Start with a free trial and
              upgrade whenever you&apos;re ready.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* BASIC */}
            <div className="group rounded-2xl border border-line bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <span className="inline-flex rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky">
                Basic
              </span>

              <div className="mt-6">
                <span className="font-display text-5xl font-bold text-ink">
                  $19
                </span>
                <span className="ml-1 text-lg text-ink/50">/month</span>
              </div>

              <p className="mt-5 text-sm leading-6 text-ink/60">
                Perfect for small cafés, bakeries, and restaurants starting with
                Xola.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-ink/70">
                <li>✓ POS &amp; Billing</li>
                <li>✓ Inventory Management</li>
                <li>✓ Sales Reports</li>
                <li>✓ Staff Management</li>
                <li>✓ Email Support</li>
              </ul>

              <a
                href={SIGNUP_URL}
                className="mt-8 block rounded-lg border border-line py-3 text-center font-semibold transition hover:bg-mist"
              >
                Start Free Trial
              </a>
            </div>

            {/* BUSINESS */}
            <div className="relative scale-[1.03] rounded-2xl border-2 border-plum bg-plum p-8 text-white shadow-2xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                Most Popular
              </span>

              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Business
              </span>

              <div className="mt-6">
                <span className="font-display text-5xl font-bold">$39</span>
                <span className="ml-1 text-lg text-white/70">/month</span>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/80">
                Built for growing cafés and restaurant chains with multiple
                locations.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                <li>✓ Everything in Basic</li>
                <li>✓ Multi-Branch Support</li>
                <li>✓ Advanced Inventory</li>
                <li>✓ Kitchen Display System</li>
                <li>✓ Priority Support</li>
              </ul>

              <a
                href={SIGNUP_URL}
                className="mt-8 block rounded-lg bg-white py-3 text-center font-semibold text-plum transition hover:bg-gray-100"
              >
                Start Free Trial
              </a>
            </div>

            {/* PREMIUM */}
            <div className="group rounded-2xl border border-line bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <span className="inline-flex rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
                Premium
              </span>

              <div className="mt-6">
                <span className="font-display text-5xl font-bold text-ink">
                  $69
                </span>
                <span className="ml-1 text-lg text-ink/50">/month</span>
              </div>

              <p className="mt-5 text-sm leading-6 text-ink/60">
                Designed for franchises and enterprise businesses needing maximum
                flexibility.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-ink/70">
                <li>✓ Everything in Business</li>
                <li>✓ Unlimited Branches</li>
                <li>✓ Custom Integrations</li>
                <li>✓ API Access</li>
                <li>✓ Dedicated Account Manager</li>
              </ul>

              <a
                href={SIGNUP_URL}
                className="mt-8 block rounded-lg border border-line py-3 text-center font-semibold transition hover:bg-mist"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-sky/10 px-4 py-1 text-sm font-semibold text-sky">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold text-ink sm:text-5xl">
              Everything You Need to Know
            </h2>

            <p className="mt-5 text-lg leading-8 text-ink/60">
              Still have questions? We&apos;ve answered the most common ones below.
            </p>
          </div>

          <div className="space-y-5">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-6">
                  <span className="pr-6 font-display text-lg font-semibold text-ink">
                    {f.q}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum/10 text-xl font-bold text-plum transition duration-300 group-open:rotate-45 group-open:bg-plum group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="border-t border-line px-7 pb-6 pt-5">
                  <p className="leading-7 text-ink/65">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-line bg-gradient-to-b from-mist to-white px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full bg-sky/10 px-4 py-1 text-sm font-semibold text-sky">
                Get in Touch
              </span>

              <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Ready to Grow Your Business with Xola?
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-ink/60">
                Whether you&apos;re opening your first café or managing multiple
                restaurant locations, our team is ready to help you choose the
                right Xola POS &amp; ERP solution.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-plum/10">
                    📧
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink/40">
                      Email
                    </p>

                    <a
                      href="mailto:info@xolacloud.com"
                      className="font-semibold text-plum hover:underline"
                    >
                      info@xolacloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10">
                    📞
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink/40">
                      Phone
                    </p>

                    <p className="font-semibold text-ink">+977 9763681795</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-plum p-6 text-white shadow-xl">
                <p className="text-sm uppercase tracking-widest text-white/70">
                  Free Demo
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Try Xola Free for 90 Days
                </h3>

                <p className="mt-3 text-white/80">
                  No credit card required. Experience the complete cloud POS &amp;
                  ERP platform before making a decision.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-3xl border border-line bg-white p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-ink/60">
                  Fill out the form below and we&apos;ll get back to you within one
                  business day.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            {/* Company */}
            <div>
              <Link href="#" className="inline-block">
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

            {/* Product */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                Product
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-ink/60">
                <li>
                  <a href="#features" className="transition hover:text-plum">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition hover:text-plum">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition hover:text-plum">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-ink/60">
                <li>
                  <a href="#contact" className="transition hover:text-plum">
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

            {/* Support */}
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
                  </a>
                </li>
                <li>
                  <Link href="/terms" className="transition hover:text-plum">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-ink/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} <strong>Xola Cloud</strong>. All
              rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/" className="transition hover:text-plum">
                Home
              </Link>
              <a href="#features" className="transition hover:text-plum">
                Features
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
