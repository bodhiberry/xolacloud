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
  title: "Xola — Multi-tenant POS & ERP for growing businesses",
  description:
    "Xola runs point of sale, inventory, staff, and reporting across every location and every tenant, from one system. Sign in or start free.",
  keywords: [
    "Xola",
    "POS",
    "ERP",
    "Multi-tenant POS",
    "Point of Sale",
    "Cloud POS",
    "Inventory Management",
    "Staff Scheduling",
    "Restaurant POS",
    "Retail POS"
  ],
  authors: [{ name: "Xola Cloud" }],
  creator: "Xola Cloud",
  publisher: "Xola Cloud",
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
    title: "Xola — Multi-tenant POS & ERP for growing businesses",
    description: "Xola runs point of sale, inventory, staff, and reporting across every location and every tenant, from one system.",
    siteName: "Xola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xola — Multi-tenant POS & ERP for growing businesses",
    description: "Xola runs point of sale, inventory, staff, and reporting across every location and every tenant, from one system.",
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
