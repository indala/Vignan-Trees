// src/components/PlantCard.jsx

'use client'; // <-- REQUIRED: Add this directive

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
    
export default function PlantCard({ plant }:{ plant: { sno: number; CommonName: string; url: string; } }) {
  // const navigate = useNavigate(); // <-- REMOVE: React Router Hook
  const router = useRouter(); // <-- CHANGE 2: Next.js Router Hook
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ... (Your resize logic is fine as it uses browser APIs)
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ perspective: 1000 }} className="rounded-xl overflow-hidden">
      <motion.div
        role="button"
        aria-label={plant.CommonName}
        // <-- CHANGE 3: Update click handler to use Next.js router.push()
        onClick={() => router.push(`/plants/${plant.sno}`)} 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
      <motion.div
          style={{ transformStyle: "preserve-3d" }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.09 }}
          whileTap={isMobile ? { scale: 0.9 } : { scale: 0, rotateY: 360 }}
        >
          <Image
            src={plant.url}
            alt={plant.CommonName}
            className="w-100 rounded-5 p-2"
            style={{ aspectRatio: "1/1" }}
            height={300}
            width={300}
            loading="lazy"
            draggable="false"
          />
        </motion.div>
        <div
          className="p-2 text-center fw-bold"
          style={{ fontSize: "1.2rem", backgroundColor: "#e0e0e0" }}
        >
          {plant.CommonName}
        </div>      </motion.div>
    </div>
  );
}
