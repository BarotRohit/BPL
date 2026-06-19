"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Disable custom cursor logic on touch devices or small screens
    if (typeof window !== "undefined" && window.matchMedia("(hover: none), (max-width: 768px)").matches) {
      return;
    }

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isVisible = false;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        if (dot) dot.style.opacity = "1";
        if (ring) ring.style.opacity = "1";
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX - 4 + "px";
        dot.style.top = mouseY - 4 + "px";
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX - 16 + "px";
        ring.style.top = ringY - 16 + "px";
      }
      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", moveCursor);
    animateRing();

    // Scale on hover
    const handleMouseEnter = () => {
      if (ring) {
        ring.style.transform = "scale(1.2)";
        ring.style.boxShadow = "0 0 20px rgba(245, 197, 24, 0.8), 2px 2px 8px rgba(0, 0, 0, 0.5)";
      }
      if (dot) dot.style.transform = "scale(0.5)";
    };
    const handleMouseLeave = () => {
      if (ring) {
        ring.style.transform = "scale(1)";
        ring.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.5)";
      }
      if (dot) dot.style.transform = "scale(1)";
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        handleMouseEnter();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        handleMouseLeave();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" style={{ position: "fixed", pointerEvents: "none", zIndex: 9999, opacity: 0, transition: "opacity 0.3s" }} />
      <div id="cursor-ring" style={{ position: "fixed", pointerEvents: "none", zIndex: 9998, opacity: 0, transition: "opacity 0.3s" }} />
    </>
  );
}
