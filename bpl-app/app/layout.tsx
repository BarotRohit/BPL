import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// We'll use system fonts with CSS fallback for Bebas Neue and Rajdhani
// since we're loading them via CSS @import in globals.css

export const metadata: Metadata = {
  title: "BPL Season 2 | Barot Premier League - The Biggest Cricket Festival",
  description:
    "Barot Premier League Season 2 is here! Join the biggest cricket festival of the Barot Family. Register now for BPL-2 and be part of an unforgettable cricketing experience.",
  keywords: [
    "Barot Premier League",
    "BPL Season 2",
    "Cricket Tournament",
    "Barot Family",
    "BPL-2",
    "Cricket Festival",
  ],
  openGraph: {
    title: "BPL Season 2 | Barot Premier League",
    description: "The Biggest Cricket Festival of the Barot Family is Coming Soon!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased bg-navy text-white overflow-x-hidden`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
