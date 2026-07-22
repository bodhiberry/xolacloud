"use client";
import { useEffect, useState } from "react";

function X({ size = 18, className = "" }: { size?: number; className?: string }) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show once per browser session, shortly after the page loads
    const seen = sessionStorage.getItem("xola_welcome_seen");
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    sessionStorage.setItem("xola_welcome_seen", "1");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-xl sm:p-10"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-char/40 transition hover:bg-mist hover:text-ink"
        >
          <X size={18} />
        </button>

        <span className="text-xs font-semibold uppercase tracking-wide text-flame">
          Get started
        </span>
        <h2
          id="welcome-modal-title"
          className="mt-3 font-display text-2xl font-700 tracking-tight text-ink sm:text-3xl"
        >
         Try Xola for free for 3 months.
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-char/65">
          Start your free 3-month Xola trial—no credit card required, no obligation. Explore POS, inventory, staff management, and powerful reporting with guided setup from our team.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href="https://app.xolacloud.com/signup"
            onClick={close}
            className="inline-flex items-center justify-center rounded-lg bg-plum px-6 py-3 font-display text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </a>
          <div className="flex items-center justify-center gap-2 text-sm font-body text-char/65">
            <span>or</span>
            <a
              href="https://app.xolacloud.com/login"
              onClick={close}
              className="font-semibold text-plum hover:underline"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
