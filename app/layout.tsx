import type { Metadata } from "next";
import { Syne, Figtree } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "koeschu.com — Alexander Königschulte",
  description: "AI driven Consultant. InterimManagement & EinfachKI — digitale Transformation aktiv umsetzen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${syne.variable} ${figtree.variable}`}
        style={{
          backgroundColor: "#171717",
          color: "#ffffff",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-syne), sans-serif",
        }}
      >
        <Navigation />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
