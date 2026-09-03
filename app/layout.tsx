import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Shipshape — Accessibility release checklist",
  description:
    "A focused, practical accessibility checklist for frontend teams shipping to production.",
  applicationName: "Shipshape",
  keywords: ["accessibility", "frontend", "checklist", "WCAG", "quality assurance"],
  authors: [{ name: "Ahmed Shaban", url: "https://github.com/ahmedshaban022" }],
  openGraph: {
    title: "Shipshape — Accessibility release checklist",
    description: "Catch accessibility issues before your users do.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e6",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
