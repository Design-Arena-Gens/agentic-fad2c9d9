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
  title: "Mithila Makhana | Artisan Lotus Seeds from Bihar",
  description:
    "Discover Mithila Makhana, hand-harvested lotus seeds from the wetlands of North Bihar. Shop premium snacks rich in protein and tradition.",
  openGraph: {
    title: "Mithila Makhana | Artisan Lotus Seeds from Bihar",
    description:
      "Experience the purity of Mithila Makhana, slow-roasted and spiced with regional flavors for mindful snacking.",
    url: "https://agentic-fad2c9d9.vercel.app",
    siteName: "Mithila Makhana",
    images: [
      {
        url: "/makhana-pack.svg",
        width: 1200,
        height: 630,
        alt: "Mithila Makhana artisan lotus seeds packaging",
      },
    ],
  },
  metadataBase: new URL("https://agentic-fad2c9d9.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
