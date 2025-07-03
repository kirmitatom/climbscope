import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../componenets/Navbar";
import Footer from "../../componenets/Footer";
import Navbar1 from "../../componenets/NavBar1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "climbingscope",
  description: "created by hussein alshoabi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar1></Navbar1>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
