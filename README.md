# XolaCloud Landing Page

A marketing landing page for XolaCloud (multi-branch POS & ERP for restaurants and cafés), built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design

- **Palette:** ink navy `#14213D`, ticket paper `#FBF6EC`, flame orange `#E85D2F` (primary accent), kitchen green `#1F7A5C` (secondary/success), warm neutrals for text and hairlines.
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (receipt/ticket numbers).
- **Signature element:** an animated receipt/KOT ticket in the hero, with a branch-switcher above it to show the multi-tenant/multi-branch idea at a glance.

All "Start free trial" and "Log in" buttons currently point to `https://app.xolacloud.com/login` — update the `LOGIN_URL` constant at the top of each component if you add a separate signup flow.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy on a separate domain

This is a standard Next.js app, so it deploys anywhere Next.js runs (Vercel, Netlify, a Node server, etc.) independently of `app.xolacloud.com`. Point your new marketing domain (e.g. `xolacloud.com` or `www.xolacloud.com`) at this deployment, and keep `app.xolacloud.com` as your existing product/login subdomain — the buttons on this page link straight to it.

## Structure

```
app/
  layout.tsx      – fonts + metadata
  page.tsx        – assembles all sections
  globals.css     – base styles, ticket/receipt texture utilities
components/
  Header.tsx
  Hero.tsx
  LogoStrip.tsx
  Features.tsx
  HowItWorks.tsx
  Stats.tsx
  Testimonials.tsx
  Pricing.tsx
  FAQ.tsx
  CTA.tsx
  Footer.tsx
```

## Before you publish

- Swap the testimonials in `components/Testimonials.tsx` for real customer quotes.
- Confirm pricing figures in `components/Pricing.tsx`.
- Add your real logo/favicon and update `app/layout.tsx` metadata (title, description, OG image).
