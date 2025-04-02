"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 sm:block hidden left-0 z-[9999] h-6 w-6 rounded-full bg-primary mix-blend-difference pointer-events-none"
      animate={{
        x: position.x - 12, // Center the cursor
        y: position.y - 12,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    />
  );
}
