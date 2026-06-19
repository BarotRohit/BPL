"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "@/components/TimelineItem";
import { config } from "@/lib/config";
import Link from "next/link";

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const pseudoRandom1 = (i * 17) % 100 / 100;
        const pseudoRandom2 = (i * 23) % 100 / 100;
        const pseudoRandom3 = (i * 31) % 100 / 100;
        const pseudoRandom4 = (i * 37) % 100 / 100;
        const colors = ["#f5c518", "#6c35de", "#00d4ff", "#ff6b35", "#ef4444"];
        const color = colors[i % 5];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: pseudoRandom1 * 6 + 2,
              height: pseudoRandom1 * 6 + 2,
              left: `${pseudoRandom2 * 100}%`,
              top: `${pseudoRandom3 * 100}%`,
              background: color,
            }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
            transition={{
              duration: pseudoRandom1 * 5 + 3,
              repeat: Infinity,
              delay: pseudoRandom4 * 4,
            }}
          />
        );
      })}
    </div>
  );
}

export default function JourneyPageClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: "radial-gradient(ellipse at center top, #1a0a3e 0%, #0a0e27 70%)",
        }}
      >
        <FloatingParticles />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full filter blur-3xl opacity-15"
            style={{ background: "#6c35de" }} />
          <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full filter blur-3xl opacity-10"
            style={{ background: "#00d4ff" }} />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-20">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-7xl mb-6"
          >
            📖
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-rajdhani font-700 text-sm tracking-[6px] text-cyan-400 uppercase mb-4"
          >
            The Story of BPL
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-bebas text-6xl md:text-8xl gradient-text-royal tracking-wider mb-4"
          >
            OUR JOURNEY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-inter text-white/50 text-base leading-relaxed max-w-xl mx-auto"
          >
            Every great tournament has a story. Here&apos;s the journey of how BPL was born 
            from a dream, nurtured by a community, and brought to life by passion and perseverance.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section
        ref={containerRef}
        className="relative py-24 overflow-hidden"
        style={{ background: "#0a0e27" }}
      >
        <FloatingParticles />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline Items */}
          <div className="relative">
            {/* Animated center line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/5">
              <motion.div
                className="absolute top-0 left-0 w-full"
                style={{
                  height: lineHeight,
                  background: "linear-gradient(180deg, #6c35de, #00d4ff, #f5c518, #ff6b35, #ef4444)",
                }}
              />
            </div>

            {config.journey.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
            className="relative z-10 flex flex-col items-center text-center mt-0"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-2 border-gold mb-6"
              style={{
                background: "radial-gradient(circle, rgba(245,197,24,0.2), transparent)",
                boxShadow: "0 0 40px rgba(245,197,24,0.4)",
              }}
            >
              🌟
            </div>
            <h3 className="font-bebas text-4xl gradient-text-gold tracking-wider mb-3">
              AND THE JOURNEY CONTINUES...
            </h3>
            <p className="font-inter text-white/50 max-w-md text-sm leading-relaxed">
              BPL Season 2 is the next chapter. Bigger. Better. More unforgettable. 
              Be part of this incredible journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1535, #1a0a3e, #0f1535)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 border border-royal/30"
          >
            <div className="text-5xl mb-6">❤️</div>
            <blockquote className="font-bebas text-3xl md:text-5xl gradient-text-fire mb-6 leading-tight">
              &ldquo;IT WAS NEVER JUST CRICKET.<br />
              IT WAS A CELEBRATION OF WHO WE ARE.&rdquo;
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-royal to-cyan mx-auto mb-4" />
            <p className="font-rajdhani font-600 text-white/50 tracking-widest">
              — The Spirit of Barot Premier League
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#0a0e27" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bebas text-5xl gradient-text-gold tracking-wider mb-4">
              BE PART OF CHAPTER 2
            </h2>
            <p className="font-inter text-white/50 mb-8">
              Register now and write your name in the BPL story.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/register">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  <span>🏏 Register Now</span>
                </motion.div>
              </Link>
              <Link href="/gallery">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary"
                >
                  View Gallery →
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
