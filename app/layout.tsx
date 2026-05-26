import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-rouge-nine-10.vercel.app/"),
  title: {
    default: "Zemax Digital | Digital Web Studio",
    template: "%s | Zemax Digital",
  },
  description:
    "Zemax Digital entwickelt moderne, schnelle und responsive Websites mit Next.js, React und TypeScript.",
  keywords: [
    "Zemax Digital",
    "Digital Web Studio",
    "Webdesign",
    "Webentwicklung",
    "Digital Web Studio",
    "Next.js Entwickler",
    "React Entwickler",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Zemax Digital" }],
  creator: "Zemax Digital",
  publisher: "Zemax Digital",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Zemax Digital | Digital Web Studio",
    description:
      "Moderne Webentwicklung mit Next.js, React, TypeScript und sauberem Design.",
    url: "https://portfolio-rouge-nine-10.vercel.app/",
    siteName: "Zemax Digital",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zemax Digital Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zemax Digital | Digital Web Studio",
    description:
      "Portfolio von Zemax Digital mit modernen Webprojekten, Skills und Kontakt.",
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