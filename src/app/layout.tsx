import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "xpot.ch - Personal Space",
  description: "A personal website with thoughts, dreams, and stories.",
  keywords: ["personal", "blog", "thoughts", "dreams"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Umami Analytics - Privacy-friendly, no cookies */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="78cdec3d-5703-415f-b498-888e710186ff"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.variable}>
        {/* Floating Glass Orbs for ambient effect */}
        <div className="glass-orb glass-orb-1" aria-hidden="true"></div>
        <div className="glass-orb glass-orb-2" aria-hidden="true"></div>
        <div className="glass-orb glass-orb-3" aria-hidden="true"></div>

        <Navigation />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

