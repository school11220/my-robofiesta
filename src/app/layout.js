import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";

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
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "RoboFiesta 2025 — Technoverse: Beyond Boundaries",
  description:
    "RoboFiesta 2025 is a futuristic, space-themed hackathon in Bengaluru, India. Join Dec 12–14 for AI, Robotics, and Space-tech challenges!",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RoboFiesta 2025 — Technoverse: Beyond Boundaries",
    description:
      "A futuristic, space-themed hackathon in Bengaluru. Dec 12–14, 2025.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
      >
        {/* Starfield background */}
        <div className="stars" aria-hidden="true" />
        <div className="twinkling" aria-hidden="true" />
        <div className="clouds" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
