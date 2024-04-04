import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import React from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monash Automation",
  description: "Monash University engineering student team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "px-8 py-10 font-sans text-lg",
          "bg-gradient-to-tl from-orange-200 via-blue-400 to-indigo-600",
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
