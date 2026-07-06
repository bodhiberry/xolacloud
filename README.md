# Xola landing page (Next.js)

A single-page marketing site for Xola, a multi-tenant POS + ERP product. Built with
Next.js (App Router) and Tailwind CSS. No backend — every "Sign in" / "Try it free"
button links straight to `https://app.xolacloud.com/login`.

## Design concept

Instead of a generic SaaS look, the whole page borrows the vocabulary of a cash
register receipt and ledger book, since that's the actual product:

- **Palette** — deep register-drawer green (`#12312A`) as the base, receipt-paper
  cream (`#F6F1E4`) for contrast panels, ink-stamp red (`#C1272D`) for actions, and
  brass (`#C9A227`) for accents.
- **Type** — Space Grotesk for headlines, JetBrains Mono for anything numeric
  (prices, stats, line items), Inter for body copy.
- **Signature element** — the hero shows a "live receipt" that prints its line
  items in on load (`ReceiptTicket` component), and pricing cards use the same
  perforated-edge notch you'd see on a torn-off ticket.

Feel free to swap the copy, plans, and FAQ content in `app/page.tsx` — they're all
plain data arrays (`LEDGER_FEATURES`, `PLANS`, `FAQS`) near the top of the file.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Customize

- **Login/signup URL** — change the `LOGIN_URL` constant at the top of `app/page.tsx`.
- **Colors** — edit the `ledger`, `paper`, `stamp`, `brass` tokens in
  `tailwind.config.ts`.
- **Copy** — headline, subhead, feature list, pricing tiers, and FAQ are all in
  `app/page.tsx`.
- **Contact email** — replace `hello@xolacloud.com` where it appears.

## Deploy

Works out of the box on Vercel: `vercel deploy`, or any host that supports Next.js
(Netlify, your own Node server via `npm run build && npm run start`).
