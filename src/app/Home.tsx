'use client';

import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <Container fluid className="text-center py-5 bg-light" style={{ minHeight: "85vh" }}>
      {/* Hero Section */}
      <section aria-label="Hero Section">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold mb-3">🌿 Vignan Plants</h1>
          <p className="lead text-muted mb-4">
            Explore 140+ plants with their uses, habitats, and scientific details.
          </p>
          <Link href="/plants" passHref>
            <Button variant="success" size="lg" className="shadow">
              View All Plants
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Plants Preview */}
      <section aria-label="Featured Plant Categories" className="mt-5">
        <Row>
          {[
            {
              title: "Medicinal Plants",
              description:
                "Discover plants with healing properties used in Ayurveda and folk medicine.",
            },
            {
              title: "Fruit-Bearing Plants",
              description:
                "Explore plants that provide fruits, nutrition, and economic value.",
            },
            {
              title: "Rare & Exotic Plants",
              description:
                "Learn about rare species and their importance in biodiversity.",
            },
          ].map((plant, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <motion.div
                className="p-3 bg-white shadow rounded h-100"
                whileHover={{ scale: 1.05 }}
              >
                <h4>{plant.title}</h4>
                <p className="text-muted">{plant.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}
