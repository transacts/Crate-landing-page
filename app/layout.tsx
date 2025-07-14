import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRATE - Commerce Retail Automation and Task Engine",
  description: "AI-powered operational agent for e-commerce brands. Connect Shopify, Amazon, Meta Ads, and QuickBooks. Automate campaigns, financial reporting, and smart task deployment from a unified dashboard.",
  keywords: ["e-commerce automation", "AI agent", "Shopify integration", "Amazon automation", "Meta Ads", "QuickBooks", "commerce automation", "retail automation"],
  authors: [{ name: "CRATE Team" }],
  creator: "CRATE",
  publisher: "CRATE",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "CRATE - Automate Your Store. Grow Faster.",
    description: "Connect Shopify, Amazon, Meta Ads, and QuickBooks. Run campaigns, create content, and manage it all with AI—no busywork.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRATE - Commerce Retail Automation and Task Engine",
    description: "AI-powered operational agent for e-commerce brands. Automate campaigns, financial reporting, and smart task deployment.",
  },
  icons: {
    icon: [
      { url: "/crate logos/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/crate logos/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/crate logos/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/crate logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/crate logos/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/crate logos/android-chrome-512x512.png" }
    ]
  },
  manifest: "/crate logos/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
