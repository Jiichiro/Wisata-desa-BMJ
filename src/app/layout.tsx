import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Wisata Desa BMJ',
    template: '%s - Wisata Desa BMJ'
  },
  description: "Wisata Desa Bumi Mulyo Jati (BMJ) adalah tempat wisata yang berada di desa Randugenengan Kecamatan Dlanggu. Wisata ini memiliki kolam renang sebagai tujuan utama dan ada kebun cokelat yang berada dibelakang kolam renang",
  keywords: ['wisata desa', 'wisata desa bmj', 'wisata desa mojopahit', 'wisata desa majapahit', 'wisata desa di jawa timur', 'wisata cokelat'],
  openGraph: {
    images: "",
    type: "article",
    locale: "id_ID"
  }
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
        <Navbar />  
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
