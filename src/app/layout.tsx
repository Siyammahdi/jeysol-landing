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
  title: "JeySol | Innovative Software Solutions",
  description: "Empowering businesses with cutting-edge software development, consultancy, and digital transformation services.",
  keywords: "software development, web development, mobile apps, digital transformation, tech consultancy",
  authors: [{ name: "JeySol Tech" }],
  creator: "JeySol",
  openGraph: {
    title: "JeySol | Innovative Software Solutions",
    description: "Empowering businesses with cutting-edge software development, consultancy, and digital transformation services.",
    url: "https://jeysol.com",
    siteName: "JeySol",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JeySol Software Solutions",
      },
    ],
    locale: "en_US",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0F2C] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
