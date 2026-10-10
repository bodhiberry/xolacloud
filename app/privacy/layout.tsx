import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xola Cloud",
  description: "How Xola Cloud collects, uses and protects data for restaurants, cafés and their customers.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: "Privacy Policy | Xola Cloud" },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
