import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";

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

export const metadata = {
  title: "RoboFiesta 2025 - Technoverse: Beyond Boundaries",
  description: "Experience the ultimate tech hackathon where innovation meets the cosmos. Join us for RoboFiesta 2025 and push the boundaries of technology in our cosmic arena.",
  keywords: "hackathon, robotics, AI, technology, innovation, coding, programming, competition",
  openGraph: {
    title: "RoboFiesta 2025 - Technoverse: Beyond Boundaries",
    description: "Experience the ultimate tech hackathon where innovation meets the cosmos.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased relative min-h-screen`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
