import "./globals.css";
import type { Metadata } from "next";
import { usePersonStore } from "@/state/store";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "CurrencyPro - Currency Converter",
  description: "Currency Converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = usePersonStore.getState().isDarkMode;

  return (
    <html className={`${isDarkMode ? "dark" : ""}`} lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden pt-[60px] md:pt-[72px] lg:pt-[96px]`}
      >
        <Header />
        <MobileMenu />

        {children}

        <Footer />
      </body>
    </html>
  );
}
