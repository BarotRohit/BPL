"use client";

import { motion } from "framer-motion";
import MasonryGallery from "@/components/MasonryGallery";
import { config } from "@/lib/config";

import { GalleryImage } from "./page";

interface GalleryPageClientProps {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryPageClient({ images, categories }: GalleryPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
        style={{ background: "radial-gradient(ellipse at center top, #1a1a00 0%, #0a0e27 60%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-64 rounded-full filter blur-3xl opacity-20"
            style={{ background: "#f5c518" }} />
          <div className="absolute top-0 right-1/4 w-80 h-64 rounded-full filter blur-3xl opacity-10"
            style={{ background: "#ff6b35" }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          <motion.div className="text-6xl mb-6" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring" }}>
            📸
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bebas text-6xl md:text-8xl gradient-text-gold tracking-wider mb-4"
          >
            GALLERY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-white/50 max-w-xl mx-auto"
          >
            Relive the magic of BPL Season 1 — champions, memorable moments, 
            community celebrations, and the spirit of cricket.
          </motion.p>
        </div>
      </section>

      {/* ===== SEASON 1 CHAMPION ===== */}
      <section className="py-20" style={{ background: "#0a0e27" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title gradient-text-gold mb-4">SEASON 1 CHAMPIONS</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Champion */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative rounded-3xl overflow-hidden border border-gold/30 p-8 flex flex-col items-center text-center gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(245,197,24,0.1), rgba(245,197,24,0.05))",
                boxShadow: "0 20px 60px rgba(245,197,24,0.15)",
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{ background: "radial-gradient(circle at center, #f5c518, transparent)" }}
              />
              <motion.div
                animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-8xl"
              >
                🏆
              </motion.div>
              <div className="font-rajdhani font-700 text-xs tracking-[4px] text-gold/70 uppercase">
                Season 1 Champions
              </div>
              <h3 className="font-bebas text-4xl gradient-text-gold tracking-wider">
                {config.season1.champion.teamName}
              </h3>
              <p className="font-inter text-white/50 text-sm">{config.season1.champion.tagline}</p>
              <div className="mt-2 px-6 py-2 rounded-full border border-gold/30 bg-gold/10">
                <span className="font-rajdhani font-600 text-gold text-sm tracking-wide">👑 Champions</span>
              </div>
            </motion.div>

            {/* Runner Up */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative rounded-3xl overflow-hidden border border-gray-500/30 p-8 flex flex-col items-center text-center gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(156,163,175,0.08), rgba(156,163,175,0.03))",
              }}
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl"
              >
                🥈
              </motion.div>
              <div className="font-rajdhani font-700 text-xs tracking-[4px] text-gray-400/70 uppercase">
                Runner Up
              </div>
              <h3 className="font-bebas text-4xl text-gray-300 tracking-wider">
                {config.season1.runnerUp.teamName}
              </h3>
              <p className="font-inter text-white/50 text-sm">{config.season1.runnerUp.tagline}</p>
              <div className="mt-2 px-6 py-2 rounded-full border border-gray-500/30 bg-gray-500/10">
                <span className="font-rajdhani font-600 text-gray-400 text-sm tracking-wide">🥈 Runner-Up</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0f1535, #1a0a3e, #0f1535)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title gradient-text-gold mb-4">SEASON 1 AWARDS</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏏",
                award: "Best Batsman",
                name: config.season1.awards.bestBatsman.name,
                stat: config.season1.awards.bestBatsman.runs,
                statLabel: "Runs",
                color: "#00d4ff",
              },
              {
                icon: "⚾",
                award: "Best Bowler",
                name: config.season1.awards.bestBowler.name,
                stat: config.season1.awards.bestBowler.wickets,
                statLabel: "Wickets",
                color: "#ff6b35",
              },
              {
                icon: "⭐",
                award: "Player of the Tournament",
                name: config.season1.awards.playerOfTournament.name,
                stat: "Champion",
                statLabel: "Performance",
                color: "#f5c518",
              },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -12 }}
                className="award-card text-center"
              >
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 0%, rgba(245,197,24,0.05) 50%, transparent 100%)",
                  }}
                />
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="text-6xl mb-4"
                  style={{ filter: `drop-shadow(0 0 20px ${award.color}88)` }}
                >
                  {award.icon}
                </motion.div>
                <div className="font-inter text-[10px] text-white/30 uppercase tracking-[3px] mb-2">
                  {award.award}
                </div>
                <div className="font-bebas text-3xl mb-1" style={{ color: award.color }}>
                  {award.name}
                </div>
                <div className="flex items-center justify-center gap-2 mt-3 px-4 py-2 rounded-full" style={{ background: `${award.color}15`, border: `1px solid ${award.color}30` }}>
                  <span className="font-bebas text-xl" style={{ color: award.color }}>{award.stat}</span>
                  <span className="font-inter text-xs text-white/40">{award.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/20 text-xs font-inter mt-8 italic">
            * Awards details will be updated with actual Season 1 data
          </p>
        </div>
      </section>

      {/* ===== MOMENTS GALLERY ===== */}
      <section className="py-20" style={{ background: "#0a0e27" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title gradient-text-royal mb-4">MOMENTS GALLERY</h2>
            <div className="section-divider" />
            <p className="font-inter text-white/50 max-w-xl mx-auto text-sm">
              A collection of unforgettable moments from BPL Season 1 — on the field and beyond.
            </p>
          </motion.div>
          <MasonryGallery images={images} categories={categories} />
        </div>
      </section>
    </>
  );
}
