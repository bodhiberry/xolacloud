import type { Metadata } from "next";
import { Poppins, Caveat, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const scriptFont = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xolacloud.com"),

  title: "Xola Cloud | Restaurant POS & ERP Software for Cafés & Restaurants",

  description:
    "Xola Cloud is an all-in-one cloud POS & ERP for cafés, restaurants, and franchises with inventory, KDS, staff management, online ordering, reporting, and multi-tenant management.",

  keywords: [
    "Xola Cloud",
    "Xola POS",
    "Restaurant POS Software",
    "Restaurant ERP",
    "Cafe POS",
    "Cafe ERP",
    "Cloud POS",
    "Restaurant Management Software",
    "Inventory Management",
    "Kitchen Display System",
    "KDS",
    "QR Ordering",
    "Online Ordering",
    "Delivery Integration",
    "Staff Management",
    "Payroll",
    "Customer Loyalty",
    "Restaurant Analytics",
    "Multi-Tenant POS",
    "Franchise POS",
    "Hospitality Software",
    "Restaurant Inventory Software",
    "Cloud ERP",
    "Restaurant Billing Software",
  ],

  authors: [{ name: "Xola Cloud" }],
  creator: "Xola Cloud",
  publisher: "Xola Cloud",
  applicationName: "Xola Cloud",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xolacloud.com",
    siteName: "Xola Cloud",
    title: "Xola Cloud | Restaurant POS & ERP Software for Cafés & Restaurants",
    description:
      "Xola Cloud is an all-in-one cloud POS & ERP for cafés, restaurants, and franchises with inventory, KDS, staff management, online ordering, reporting, and multi-tenant management.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xola Cloud | Restaurant POS & ERP Software for Cafés & Restaurants",
    description:
      "Xola Cloud is an all-in-one cloud POS & ERP for cafés, restaurants, and franchises with inventory, KDS, staff management, online ordering, reporting, and multi-tenant management.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${scriptFont.variable} ${monoFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-body bg-paper text-ink">{children}</body>
    </html>
  );
}
