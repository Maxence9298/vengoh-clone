import type { Metadata } from "next";
import { Baskervville, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ai/ChatWidget";

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vengoh Equestrian | Premium Riding Wear",
  description:
    "Discover luxury equestrian fashion by Vengoh. Premium base layers, breeches, vests, and accessories designed in Luxembourg for the modern rider.",
  keywords: [
    "equestrian",
    "riding wear",
    "breeches",
    "base layers",
    "horse riding",
    "luxury equestrian",
    "Vengoh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baskervville.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
