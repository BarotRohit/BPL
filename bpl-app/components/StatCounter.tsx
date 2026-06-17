"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number | string;
  suffix?: string;
  label: string;
  description?: string;
  delay?: number;
  color?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  description,
  delay = 0,
  color = "#f5c518",
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const isNumeric = typeof value === "number";

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    
    const duration = 2000;
    const steps = 60;
    let current = 0;
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor((value as number) * eased);
      setCount(current);
      if (progress >= 1) {
        setCount(value as number);
        clearInterval(timer);
      }
    }, 1000 / steps);

    return () => clearInterval(timer);
  }, [isInView, value, isNumeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="stat-card group"
    >
      <div
        className="text-5xl md:text-6xl font-bebas tracking-wider mb-2"
        style={{ color, textShadow: `0 0 30px ${color}66` }}
      >
        {isNumeric ? count : value}
        {suffix}
      </div>
      <div className="font-rajdhani font-700 text-xl text-white tracking-wide mb-1">{label}</div>
      {description && (
        <div className="font-inter text-sm text-white/40">{description}</div>
      )}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: delay + 0.3 }}
      />
    </motion.div>
  );
}
