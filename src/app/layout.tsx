import React from "react";
import type { Metadata } from "next";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Base site URL for SEO
const siteUrl = "https://vignantrees.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Vignan Plants | Explore University Flora",
    template: "%s | Vignan Plants",
  },
  description:
    "Explore over 140 plant species on the Vignan University campus. Discover details about each tree’s common and scientific names, uses, and habitat.",
  keywords: [
    "Vignan Institute of Information Technology",
    "Vignan University",
    "Vignan Campus",
    "Vignan Plants",
    "University Flora",
    "University Plants",
    "plants",
    "trees",
    "flora",
    "botany",
    "Vignan campus",
    "medicinal plants",
    "exotic plants",
  ],

  // Authors (GitHub + LinkedIn)
  authors: [
    { name: "Mohan Kumar Indala", url: "https://github.com/indala" },
    { name: "Mohan Kumar Indala", url: "https://linkedin.com/in/indalamohankumar" },
  ],

  // Icons / favicon
  icons: {
    icon: "/tree_icon.png",
    shortcut: "/tree_icon.png",
    apple: "/tree_icon.png",
  },

  // Open Graph
  openGraph: {
    title: "Vignan Plants | Explore University Flora",
    description:
      "A comprehensive guide to 140+ plant species at Vignan University. Learn about each plant’s scientific classification, origin, and uses.",
    url: siteUrl,
    siteName: "Vignan Plants",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vignan Trees - Explore University Flora",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Vignan Plants | Explore University Flora",
    description:
      "Explore over 140 unique plant species growing on the Vignan University campus.",
    images: ["/og-image.png"],
    creator: "@Mr_Indala",
  },

  // Robots & Canonical
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vignan Trees",
    "url": siteUrl,
    "description": "Explore over 140 plant species on the Vignan University campus.",
    "author": {
      "@type": "Person",
      "name": "Mohan Kumar Indala",
      "url": "https://linkedin.com/in/indalamohankumar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vignan University",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/tree_icon.png`
      }
    }
  };

  return (
    <html lang="en">
      <body>
        <AppNavbar />
        <main >{children}</main>
        <Footer />
        <ScrollToTopButton containerRef={null} />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
