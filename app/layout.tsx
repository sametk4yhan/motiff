import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBaseUrl = siteUrl ?? "https://motiff-alpha.vercel.app";
const siteTitle = "Motiff - Interface Pattern Catalog";
const siteDescription =
  "A focused catalog of interface references for designers and frontend teams building calmer, sharper products.";
const siteImage = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: siteTitle,
    template: "%s - Motiff",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Motiff",
    type: "website",
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Motiff preview-first interface catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable + " " + jetbrains.variable}>{children}</body>
    </html>
  );
}
