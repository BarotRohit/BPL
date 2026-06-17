"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveCursor = (e: MouseEvent) => {
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
        ring.style.transform = "scale(1.8)";
        ring.style.borderColor = "rgba(245, 197, 24, 0.8)";
      }
      if (dot) dot.style.transform = "scale(0.5)";
    };
    const handleMouseLeave = () => {
      if (ring) {
        ring.style.transform = "scale(1)";
        ring.style.borderColor = "rgba(108, 53, 222, 0.6)";
      }
      if (dot) dot.style.transform = "scale(1)";
    };

    const interactiveEls = document.querySelectorAll("a, button, [role='button']");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }} />
      <div id="cursor-ring" style={{ position: "fixed", pointerEvents: "none", zIndex: 9998 }} />
    </>
  );
}
