"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import WelcomeModal from "@/components/WelcomeModal";
import Image from "next/image";
import { motion } from "framer-motion";
const LOGIN_URL = "https://app.xolacloud.com/login";
const SIGNUP_URL ="https://app.xolacloud.com/signup";
const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  { name: "Point of Sale", detail: "Process orders in seconds with a fast, intuitive POS. Support dine-in, takeaway, delivery, split bills, discounts, modifiers, and offline operation across any device." },
  { name: "Table & Order Management", detail: "Manage tables, reservations, QR ordering, kitchen tickets, and real-time order tracking to deliver a seamless dining experience." },
  { name: "Inventory & purchasing", detail: "Track ingredients and stock in real time. Automate purchase orders, monitor supplier transactions, reduce waste, and receive low-stock alerts." },
  { name: "Kitchen Operations", detail: "Streamline food preparation with Kitchen Display System (KDS), order prioritization, and real-time communication between the front of house and kitchen." },
  { name: "Staff & Role Management", detail: "Schedule shifts, assign roles and permissions, track attendance, manage payroll exports, and monitor staff performance." },
  { name: "Customer & Loyalty", detail: "Build lasting customer relationships with profiles, loyalty points, rewards, promotions, gift cards, and purchase history." },
  { name: "Reporting & Analytics", detail: "Access real-time sales, inventory, customer, and financial reports. Business owners get detailed insights, while administrators can monitor all tenants from one centralized dashboard." },
 { name: "Online Ordering, Delivery & Payments", detail: "Accept online orders, integrate with delivery platforms, process multiple payment methods, and keep every transaction synchronized in one system." },
{ name: "Multi-Tenant Architecture", detail: "Each restaurant, café, or franchise operates in its own secure environment with isolated data, while administrators can manage every tenant, branch, and brand from a single platform." },

];

const MENU_ITEMS = [
  { name: "Bacon Burger", price: "8.63", tone: "#F4B8A0" },
  { name: "Cheese Burger", price: "8.05", tone: "#F6C88E" },
  { name: "Club Sandwich", price: "3.91", tone: "#E8D18A" },
  { name: "Margherita", price: "8.05", tone: "#F0A9A9" },
  { name: "Lunch Salmon", price: "15.87", tone: "#F3B7C4" },
  { name: "Iced Tea", price: "2.53", tone: "#B7DDD0" },
];

const ORDER_LINES = [
  { name: "Pasta 4 formaggi", qty: "1.00 Units x $ 6.33", price: "$ 6.33" },
  { name: "Vegetarian", qty: "1.00 Units x $ 8.05", price: "$ 8.05" },
  { name: "Ice Tea", qty: "1.00 Units x $ 2.53", price: "$ 2.53" },
];

const PLANS = [
  {
    name: "Monthly",
    was: "1,499",
    now: "499",
    cadence: "Monthly Plan — ₹499 / month",
    tone: "bg-sky/10 text-sky",
  },
  {
    name: "Yearly",
    was: "9,999",
    now: "5,499",
    cadence: "Yearly Plan — ₹5,499 / year",
    tone: "bg-forest/10 text-forest",
    featured: true,
  },
  {
    name: "5 Years",
    was: "29,999",
    now: "14,999",
    cadence: "5-Year Plan — ₹14,999 one-time",
    tone: "bg-plum/10 text-plum",
  },
];

const FAQS = [
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a 1-month free demo account so you can explore Xola POS & ERP and experience its features before subscribing.",
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
    a: "Simply contact us or click 'Request a Free Demo.' We'll create your 1-month free demo account so you can explore Xola with no obligation.",
  },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`font-display text-2xl font-semibold tracking-[0.08em] ${dark ? "text-white" : "text-ink"}`}
    >
      XOLA
    </span>
  );
}

function POSPreview() {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-line bg-white shadow-[0_20px_50px_-20px_rgba(20,20,22,0.25)]">
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-[1.1fr_1.4fr]">
        <div className="border-b border-line p-6 sm:border-b-0 sm:border-r">
          <ul className="space-y-4">
            {ORDER_LINES.map((line) => (
              <li key={line.name} className="border-l-2 border-forest pl-3">
                <p className="font-body text-sm font-medium text-ink">{line.name}</p>
                <p className="font-mono text-xs text-ink/50">{line.qty}</p>
              </li>
            ))}
          </ul>
          <div className="dashed-rule my-4 text-line" />
          <div className="flex items-baseline justify-between font-display text-lg font-semibold text-ink">
            <span>Total</span>
            <span>$ 16.91</span>
          </div>
          <p className="mt-1 font-mono text-xs text-ink/40">Taxes $ 2.20</p>
          <button className="mt-5 w-full rounded-md bg-plum py-2.5 font-display text-sm font-semibold text-white transition hover:bg-plum-dark">
            Charge payment
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 p-6 sm:grid-cols-3">
          {MENU_ITEMS.map((item) => (
            <div key={item.name} className="rounded-lg border border-line p-2.5 transition hover:border-plum/40">
              <div className="mb-2 h-14 rounded-md" style={{ backgroundColor: item.tone }} />
              <p className="font-body text-xs font-medium text-ink">{item.name}</p>
              <p className="font-mono text-xs text-forest">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConsultIllustration() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-mist">
      <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Illustration of a shop counter with a laptop showing the Xola dashboard">
        <rect width="400" height="300" fill="#F6F5F3" />
        <rect x="30" y="190" width="340" height="14" rx="4" fill="#E7E5E1" />
        <rect x="60" y="120" width="120" height="70" rx="6" fill="#4A2447" opacity="0.08" />
        <rect x="150" y="150" width="180" height="60" rx="8" fill="#141416" />
        <rect x="160" y="158" width="160" height="40" rx="4" fill="#FFFFFF" />
        <rect x="168" y="165" width="60" height="6" rx="3" fill="#2F9BE0" />
        <rect x="168" y="176" width="90" height="6" rx="3" fill="#E7E5E1" />
        <rect x="168" y="186" width="70" height="6" rx="3" fill="#1E7145" />
        <circle cx="95" cy="95" r="30" fill="#F2A93B" opacity="0.25" />
        <circle cx="95" cy="80" r="16" fill="#F2A93B" opacity="0.55" />
        <rect x="70" y="96" width="50" height="46" rx="14" fill="#F2A93B" opacity="0.55" />
        <rect x="260" y="70" width="90" height="110" rx="10" fill="#4A2447" opacity="0.06" />
        <rect x="275" y="90" width="60" height="8" rx="4" fill="#4A2447" opacity="0.35" />
        <rect x="275" y="106" width="40" height="8" rx="4" fill="#4A2447" opacity="0.2" />
        <rect x="275" y="122" width="55" height="8" rx="4" fill="#4A2447" opacity="0.2" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-ink">
      <WelcomeModal/>
      <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 font-body text-sm font-medium text-ink/70 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href={LOGIN_URL} className="hidden font-body text-sm font-medium text-ink/70 transition hover:text-ink sm:inline">
              Sign in
            </a>
             <a href={SIGNUP_URL} className="hidden font-body text-sm font-medium text-ink/70 transition hover:text-ink sm:inline">
            </a>
            <a
              href={SIGNUP_URL}
              className="hidden rounded-md bg-plum px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-plum-dark sm:inline-block"
            >
                            Sign Up
& Try it free
            </a>
            {/* Hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
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
        </div>

        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="absolute inset-x-0 top-full z-40 border-b border-line bg-white px-6 pb-6 pt-2 shadow-lg md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 font-body text-sm font-medium text-ink/70 transition hover:bg-mist hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <div className="dashed-rule my-3 text-line" />
              <a href={LOGIN_URL} className="rounded-md px-3 py-2.5 font-body text-sm font-medium text-ink/70 transition hover:bg-mist hover:text-ink">
                Sign in
              </a>
              <a
                href={LOGIN_URL}
                className="mt-1 rounded-md bg-plum px-5 py-3 text-center font-display text-sm font-semibold text-white transition hover:bg-plum-dark"
              >
                Try it free
              </a>
            </nav>
          </div>
        )}
      </header>

<section className="px-6 pb-16 pt-20 text-center sm:pt-28">
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="font-script text-5xl font-semibold text-sky sm:text-6xl">All-in-one</span>{" "}
          <span className="text-ink">multi-tenant POS &amp; ERP</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-ink/60 sm:text-lg">
         Xola gives every business a complete POS and ERP solution with inventory management, staff scheduling, reporting, and delivery platform integrations. Each tenant's data is securely isolated, while everything is managed from a single login.
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

        {/* Real product screenshots, replacing POSPreview */}
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
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">Features</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Everything your café or restaurant needs, in one place.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.name} className="rounded-xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-semibold text-ink">{f.name}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{f.detail}</p>
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
        Discover how Xola can streamline your restaurant operations, reduce costs, and improve
        customer service. Our implementation specialists will configure your menus, tables,
        inventory, staff, and business settings, ensuring you&apos;re ready to start selling
        from day one. As your business grows, Xola grows with you.
      </p>
      <p className="mt-8 font-display text-sm font-semibold text-ink/50">Talk to Our Team</p>
      <p className="font-display text-xl font-semibold text-forest">+977 9763681795</p>
      <a
        href="mailto:info@xolacloud.com"
        className="mt-6 inline-block rounded-md border border-forest px-6 py-3 font-display text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
      >
        Schedule a Free Demo
      </a>
    </div>
    {/* Updated Image Container */}
    <div className="relative h-full w-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl lg:min-h-[500px]">
      <img
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Business team discussing system integration"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtle overlay to tie the image into your color theme */}
      <div className="absolute inset-0 bg-forest/10 mix-blend-multiply"></div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
    </div>
  </div>
</section>

      <section id="how-it-works" className="border-t border-line bg-mist px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl text-center sm:mx-auto">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">PRICING</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Get started in three simple steps
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-ink/60">
              No complex installations or long training hours required. We get your branches live and synced fast.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-8 relative overflow-hidden">
              <span className="font-mono text-5xl font-bold text-sky/10 absolute -right-2 -top-2 select-none">01</span>
              <h3 className="font-display text-lg font-semibold text-ink">1. Register your account</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                Sign up in minutes. Configure your brand hierarchy, branches, and staff permissions from one master dashboard.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-8 relative overflow-hidden">
              <span className="font-mono text-5xl font-bold text-sky/10 absolute -right-2 -top-2 select-none">02</span>
              <h3 className="font-display text-lg font-semibold text-ink">2. Load menu & stock</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                Import your items, departments, stock levels, and pricing. Custom-tailor menus for different branches if needed.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-8 relative overflow-hidden">
              <span className="font-mono text-5xl font-bold text-sky/10 absolute -right-2 -top-2 select-none">03</span>
              <h3 className="font-display text-lg font-semibold text-ink">3. Ring up sales</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                Launch the till on any tablet, phone, or computer. Enjoy fast offline checkouts and automatic real-time sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions we get a lot.
          </h2>
          <div className="mt-10 divide-y divide-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-ink">
                  {f.q}
                  <span className="ml-4 text-plum transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-ink/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-mist px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">Get in touch</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
               Ready to Get Started with Xola?
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-ink/60">
                Have questions about Xola or need help finding the right solution for your business? Send us a message, and our team will be happy to help. We'll get back to you as soon as possible.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink/40">Email us</p>
                  <a href="mailto:info@xolacloud.com" className="mt-1 inline-block font-body text-base font-medium text-plum hover:underline">
                    info@xolacloud.com
                  </a>
                </div>
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink/40">Call support</p>
                  <p className="mt-1 font-body text-base font-medium text-ink">+9779763681795</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-mist px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-body text-sm text-ink/50">
              Multi-tenant point of sale and ERP for restaurant groups, retail chains, and the
              platforms that run them.
            </p>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink/40">Product</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-ink/70">
              <li><a href="#features" className="hover:text-ink">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-ink">Pricing</a></li>
              <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink/40">Company</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-ink/70">
              <li><a href="#contact" className="hover:text-ink">Contact</a></li>
              <li><a href={LOGIN_URL} className="hover:text-ink">Sign in</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink/40">Legal</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-ink/70">
              <li><a href="#" className="hover:text-ink">Privacy policy</a></li>
              <li><a href="#" className="hover:text-ink">Terms of service</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-line pt-6 font-mono text-xs text-ink/30">
          © {new Date().getFullYear()} Xola Cloud. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
