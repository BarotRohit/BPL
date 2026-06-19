"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { JourneyItem } from "@/lib/config";

interface TimelineItemProps {
  item: JourneyItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center mb-16 last:mb-0">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center w-full">
        {/* Left side */}
        <div className="flex-1 flex justify-end pr-12">
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass rounded-2xl p-6 max-w-sm w-full border border-white/10 hover:border-white/20 transition-all duration-300 group"
              style={{
                borderTop: `2px solid ${item.color}`,
                boxShadow: isInView ? `0 20px 60px ${item.color}22` : "none",
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div
                className="font-rajdhani font-700 text-sm tracking-[3px] uppercase mb-2"
                style={{ color: item.color }}
              >
                {item.year}
              </div>
              <h3 className="font-bebas text-2xl tracking-wide text-white mb-3">{item.title}</h3>
              <p className="font-inter text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ) : (
            <div className="max-w-sm w-full" />
          )}
        </div>

        {/* Center dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="relative z-10 flex-shrink-0"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2"
            style={{
              background: `radial-gradient(circle, ${item.color}33, ${item.color}11)`,
              borderColor: item.color,
              boxShadow: `0 0 20px ${item.color}44, 0 0 40px ${item.color}22`,
            }}
          >
            {item.icon}
          </div>
        </motion.div>

        {/* Right side */}
        <div className="flex-1 flex justify-start pl-12">
          {!isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass rounded-2xl p-6 max-w-sm w-full border border-white/10 hover:border-white/20 transition-all duration-300"
              style={{
                borderTop: `2px solid ${item.color}`,
                boxShadow: isInView ? `0 20px 60px ${item.color}22` : "none",
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div
                className="font-rajdhani font-700 text-sm tracking-[3px] uppercase mb-2"
                style={{ color: item.color }}
              >
                {item.year}
              </div>
              <h3 className="font-bebas text-2xl tracking-wide text-white mb-3">{item.title}</h3>
              <p className="font-inter text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ) : (
            <div className="max-w-sm w-full" />
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex gap-4"
        >
          {/* Left: dot + line */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 shrink-0"
              style={{
                background: `radial-gradient(circle, ${item.color}33, ${item.color}11)`,
                borderColor: item.color,
                boxShadow: `0 0 15px ${item.color}44`,
              }}
            >
              {item.icon}
            </div>
            {index < 5 && (
              <div className="w-0.5 flex-1 mt-4" style={{ background: `linear-gradient(180deg, ${item.color}, transparent)` }} />
            )}
          </div>
          {/* Content */}
          <div
            className="glass rounded-2xl p-4 flex-1 border border-white/10"
            style={{ borderTop: `2px solid ${item.color}` }}
          >
            <div className="font-rajdhani font-700 text-xs tracking-[3px] uppercase mb-1" style={{ color: item.color }}>
              {item.year}
            </div>
            <h3 className="font-bebas text-xl tracking-wide text-white mb-2">{item.title}</h3>
            <p className="font-inter text-white/60 text-xs leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
