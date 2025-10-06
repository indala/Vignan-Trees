import sheetData from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import type { Metadata } from "next";

const siteUrl = "https://vignantrees.vercel.app";

// Page-specific metadata
export const generateMetadata = (): Metadata => ({
  title: "Vignan Plants | All Plants",
  description: "Explore 140+ plants at Vignan University, including medicinal, fruit-bearing, and rare species.",
  openGraph: {
    title: "Vignan Plants | Explore University Flora",
    description: "Discover 140+ plant species at Vignan University with detailed info.",
    url: `${siteUrl}/plants`,
    siteName: "Vignan Plants",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Vignan Trees - Explore University Flora" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignan Plants | Explore University Flora",
    description: "Explore over 140 unique plant species growing on the Vignan University campus.",
    images: ["/og-image.png"],
    creator: "@Mr_Indala",
  },
});

export default function PlantsPage() {
  // Structured Data JSON-LD for all plants
  const plantsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vignan Plants",
    "description": "All plants listed at Vignan University with scientific names and uses.",
    "url": `${siteUrl}/plants`,
    "numberOfItems": sheetData.length,
    "itemListElement": sheetData.map((plant, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteUrl}/plants#${plant.sno}`,
      "name": plant.CommonName,
      "alternateName": plant.ScientificName,
      "description": plant.uses || "",
    })),
  };

  return (
    <Container>
      <h1 className="text-center fw-bold my-3">Vignan Plants</h1>

      <Row>
        {sheetData.map((plant) => (
          <Col sm={6} md={6} lg={4} xl={3} className="my-2 p-5 p-sm-3" key={plant.sno}>
            <PlantCard plant={plant} />
          </Col>
        ))}
      </Row>

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plantsStructuredData) }}
      />
    </Container>
  );
}
