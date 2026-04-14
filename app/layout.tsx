import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odd Marketing — Creative Content for Bold Brands",
  description:
    "Odd Marketing helps businesses stand out with creative content generation. A highly talented team of content creators crafting social media, ads, branding, and campaigns.",
  keywords: [
    "creative marketing",
    "content creation",
    "brand storytelling",
    "social media content",
    "ad copywriting",
  ],
  openGraph: {
    title: "Odd Marketing — Creative Content for Bold Brands",
    description:
      "We help businesses stand out with creative storytelling and content that actually works.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#fafafa] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
