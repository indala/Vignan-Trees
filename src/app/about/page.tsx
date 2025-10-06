import type { Metadata } from "next";
import React from "react";

// ✅ SEO Metadata for the About page
export const metadata: Metadata = {
  title: "About | Vignan Trees",
  description:
    "Learn about Vignan Trees — a digital plant repository developed by the Information Technology 2021 batch, showcasing over 140 plant species with their uses and habitats.",
  openGraph: {
    title: "About | Vignan Trees",
    description:
      "Discover the vision behind Vignan Trees — preserving plant knowledge through digital innovation.",
    url: "https://vignantrees.vercel.app/about",
    siteName: "Vignan Trees",
    type: "website",
    images: [
      {
        url: "/tree_icon.png",
        width: 600,
        height: 600,
        alt: "Vignan Trees Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Vignan Trees",
    description:
      "Learn about the Vignan Trees project by the Information Technology 2021 batch — a digital collection of plants.",
    images: ["/tree_icon.png"],
    creator: "@Mr_Indala",
  },
};

export default function AboutPage() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center p-5"
      style={{ height: "80vh" }}
    >
      <h1 className="display-3 fw-bold mb-4">About Vignan Trees 🌿</h1>
      <p className="lead text-muted" style={{ maxWidth: "700px" }}>
        <strong>Vignan Trees</strong> is a digital initiative developed by the{" "}
        <strong>Information Technology 2021 Batch</strong> to catalog and
        document over 140 plant species with details on their scientific names,
        uses, and habitats. The project aims to promote botanical awareness,
        encourage research, and support environmental education.
      </p>
    </div>
  );
}
