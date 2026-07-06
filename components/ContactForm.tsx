"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to send message.");
      }

      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block font-display text-sm font-semibold text-ink mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block font-display text-sm font-semibold text-ink mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-display text-sm font-semibold text-ink mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your business and what you're looking for..."
          className="w-full resize-none rounded-lg border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-plum focus:ring-2 focus:ring-plum/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-plum py-3 font-display text-sm font-semibold text-white transition hover:bg-plum-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "sent" && (
        <p className="rounded-lg bg-forest/10 px-4 py-3 text-center font-body text-sm font-medium text-forest">
          ✓ Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-center font-body text-sm font-medium text-red-600">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
