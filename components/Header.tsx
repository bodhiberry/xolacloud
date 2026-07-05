"use client";

import { useEffect, useState } from "react";
import { Menu, X, Receipt } from "lucide-react";

const LOGIN_URL = "https://app.xolacloud.com/login";

const links = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-700 tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-paper">
            <Receipt size={16} strokeWidth={2.25} />
          </span>
          XolaCloud
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-char/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LOGIN_URL}
            className="text-sm font-medium text-char/80 transition-colors hover:text-ink"
          >
            Log in
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-md bg-flame px-4 py-2 text-sm font-semibold text-paper shadow-sm shadow-flame/20 transition-transform hover:-translate-y-0.5 hover:bg-flameDark"
          >
            Start free trial
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-char/80"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-line pt-4">
              <a href={LOGIN_URL} className="text-sm font-medium text-char/80">
                Log in
              </a>
              <a
                href={LOGIN_URL}
                className="rounded-md bg-flame px-4 py-2 text-center text-sm font-semibold text-paper"
              >
                Start free trial
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
