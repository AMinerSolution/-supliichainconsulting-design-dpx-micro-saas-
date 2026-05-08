import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DPX — Supply Intelligence | AI-Powered Supply Chain Platform",
  description:
    "The world's most advanced AI-powered supply chain management platform. Optimize operations, predict disruptions, and unlock $1B+ in value with DPX.",
  keywords:
    "supply chain, AI, supply chain management, inventory optimization, logistics, DPX, micro-SaaS",
  openGraph: {
    title: "DPX — Supply Intelligence",
    description: "AI-Powered Supply Chain Platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
