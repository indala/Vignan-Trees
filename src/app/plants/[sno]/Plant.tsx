'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

interface PlantData {
    sno: number; // or string, matching your sheetData
    CommonName: string;
    ScientificName: string;
    uses: string;
    Habitat: string;
    url: string;
    
}
interface PlantProps {
    plant: PlantData; 
}


export default function Plant({ plant }: PlantProps) {
  const router = useRouter();
  const siteUrl = "https://vignantrees.vercel.app";
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(plant.CommonName)}`;

  // JSON-LD structured data for SEO
  const plantStructuredData = {
    "@context": "https://schema.org",
    "@type": "Plant",
    name: plant.CommonName,
    alternateName: plant.ScientificName,
    description: plant.uses,
    url: `${siteUrl}/plants/${plant.sno}`,
    habitat: plant.Habitat,
    image: plant.url,
    author: {
      "@type": "Person",
      name: "Mohan Kumar Indala",
      url: "https://linkedin.com/in/indalamohankumar"
    }
  };

  return (
    <Container className="py-4">
      <Row className="align-items-center">
        <Col md={6} className="mb-3 mb-md-0">
          <motion.div
            className="p-3 bg-white shadow rounded"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8, x: "-100vw" }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Click image to know more</Tooltip>}
            >
              <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={plant.url}
                  alt={plant.CommonName}
                  className="img-fluid rounded shadow w-100"
                  loading="lazy"
                  style={{ aspectRatio: "1/1", objectFit: "cover", cursor: "pointer" }}
                  width={800}
                  height={800}
                />
              </a>
            </OverlayTrigger>
          </motion.div>
        </Col>

        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fw-bold">{plant.CommonName}</h2>
            <h5 className="text-muted mb-3">{plant.ScientificName}</h5>
            <p><strong>Uses:</strong> {plant.uses}</p>
            <p><strong>Habitat:</strong> {plant.Habitat}</p>

            <Button variant="success" onClick={() => router.back()}>
              ← Go Back
            </Button>
          </motion.div>
        </Col>
      </Row>

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plantStructuredData) }}
      />
    </Container>
  );
}
