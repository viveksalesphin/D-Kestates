import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Analytics from "@/components/analytics/Analytics";
import UtmCapture from "@/components/analytics/UtmCapture";
import { BRAND, SITE_URL } from "@/lib/config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "D&K Estates | Real Estate Advisory in Gurugram",
    template: "%s | D&K Estates",
  },
  description:
    "D&K Estates helps homebuyers and investors discover residential, commercial, land and investment property opportunities across Gurugram, NCR and Haryana.",
  applicationName: BRAND.name,
  alternates: { canonical: "/" },
  keywords: [
    "real estate advisory Gurugram",
    "property consultant Gurugram",
    "residential property Gurugram",
    "D&K Estates",
  ],
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: "D&K Estates | Real Estate Advisory in Gurugram",
    description:
      "A Gurugram-based real estate advisory helping homebuyers and investors discover carefully selected property opportunities across Gurugram, NCR, Haryana and Chandigarh.",
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "D&K Estates | Real Estate Advisory in Gurugram",
    description:
      "Carefully selected property opportunities across Gurugram, NCR, Haryana and Chandigarh.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <UtmCapture />
        <Analytics />
      </body>
    </html>
  );
}
