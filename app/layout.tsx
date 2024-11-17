import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/Navbar/page"
import Contact from "@/app/Contact/page"
import Head from "next/head";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mehmood Ahmed Portfolio",
  description: "My portfolio wesbite, it contains my projects, skills and some information about my expertise.",
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
        
        <link rel='icon' href='/MA logo.png' />
        <Navbar />
        {children}
        <Contact />
        
      </body>
    </html>
  );
}
