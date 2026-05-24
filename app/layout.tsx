import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-rouge-nine-10.vercel.app/"),
  title: {
    default: "Djezi Zenki | Fullstack Webdeveloper",
    template: "%s | Djezi Zenki",
  },
  description:
    "Portfolio von Djezi Zenki, Fullstack Webdeveloper für moderne, schnelle und responsive Websites mit Next.js, React und TypeScript.",
  keywords: [
    "Djezi Zenki",
    "Fullstack Webdeveloper",
    "Frontend Developer",
    "Next.js Entwickler",
    "React Entwickler",
    "TypeScript",
    "Portfolio",
    "Webentwicklung",
  ],
  authors: [{ name: "Djezi Zenki" }],
  creator: "Djezi Zenki",
  publisher: "Djezi Zenki",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Djezi Zenki | Fullstack Webdeveloper",
    description:
      "Moderne Webentwicklung mit Next.js, React, TypeScript und sauberem Design.",
    url: "https://portfolio-rouge-nine-10.vercel.app/",
    siteName: "Djezi Zenki Portfolio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Djezi Zenki Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Djezi Zenki | Fullstack Webdeveloper",
    description:
      "Portfolio von Djezi Zenki mit modernen Webprojekten, Skills und Kontakt.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}