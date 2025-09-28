import "./globals.css";
// ✅ 1. Cleaned up and consolidated all font imports at the top.
import { Geist, Geist_Mono, Orbitron, Oxanium } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: "RoboFiesta 2025 - Technoverse: Beyond Boundaries",
  description:
    "Experience the ultimate tech hackathon where innovation meets the cosmos.",
};

// ✅ 2. RootLayout is now a clean Server Component.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${oxanium.variable} antialiased relative min-h-screen`}
      >
        {/* ✅ 3. All logic (like the loading screen) is correctly delegated to the ClientLayout component. */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}