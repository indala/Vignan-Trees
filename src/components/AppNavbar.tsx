'use client';

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

// --- Constants ---
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Plants", path: "/plants" },
  { label: "About", path: "/about" },
];

// --- Main Component ---
export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // <--- RELY DIRECTLY ON THIS

  // Close navbar after navigation (mobile view)
  const handleNavClick = (path: string) => {
    setExpanded(false);
    router.push(path); // navigate programmatically
  };

  // Determine if link is active
  const getIsActive = (linkPath: string) => {
    // *** USE 'pathname' DIRECTLY HERE ***
    if (linkPath === "/") {
      return pathname === "/";
    } else {
      return (
        // Robust prefix check (prevents /plantings matching /plants)
        pathname.startsWith(linkPath) &&
        (pathname.length === linkPath.length ||
          pathname.charAt(linkPath.length) === "/")
      );
    }
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Navbar
        bg="success"
        variant="dark"
        expand="md"
        sticky="top"
        expanded={expanded}
        onToggle={setExpanded}
        className="header shadow-sm py-3 py-md-4"
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => handleNavClick("/")}
            className="fw-bold"
            style={{ cursor: "pointer" }}
          >
            🌿 Vignan Plants
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-uppercase fw-semibold text-center text-md-start d-flex flex-column flex-md-row gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = getIsActive(link.path);

                return (
                  <motion.div
                    key={link.path}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    {/* We no longer need the Link component since we are using router.push in onClick */}
                    <Nav.Link
                      onClick={() => handleNavClick(link.path)}
                      className={`fw-bold nav-link-custom ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {link.label}
                    </Nav.Link>
                  </motion.div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}