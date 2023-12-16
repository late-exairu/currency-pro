import "./globals.css";
import type { Metadata } from "next";
import { useStore } from "@/state/store";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import Overlay from "@/components/Overlay";
import StateViewer from "@/components/StateViewer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "CurrencyPro - Currency Converter",
  description: "Currency Converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useStore.getState().isDarkMode;

  return (
    <html className={`${isDarkMode ? "dark" : ""}`} lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden bg-surface pt-[60px] md:pt-[72px] lg:pt-[96px]`}
      >
        <Header />
        <Overlay />
        <MobileMenu />

        {children}

        <Footer />
        {/* <StateViewer /> */}
      </body>
    </html>
  );
}
