import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Xola Cloud",
  description: "The terms that apply when you use Xola Cloud POS and ERP for your restaurant or café.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title: "Terms of Service | Xola Cloud" },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
