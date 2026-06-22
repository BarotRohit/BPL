"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/lib/config";

type SeasonKey = "season1" | "season2";

export default function TournamentPageClient() {
  const [activeSeason, setActiveSeason] = useState<SeasonKey>("season2");
  
  const seasonData = config[activeSeason];

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20"
        style={{ background: "radial-gradient(ellipse at center top, #1a1a00 0%, #0a0e27 60%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-64 rounded-full filter blur-3xl opacity-20"
            style={{ background: "#f5c518" }} />
          <div className="absolute top-0 right-1/4 w-80 h-64 rounded-full filter blur-3xl opacity-10"
            style={{ background: "#ff6b35" }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-10">
          <motion.div className="text-6xl mb-4" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring" }}>
            🏆
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-5xl md:text-7xl gradient-text-gold tracking-wider mb-4"
          >
            TOURNAMENT HISTORY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-white/50 max-w-xl mx-auto mb-10"
          >
            Explore the legacy of Barot Premier League. Toggle between seasons to view our glorious champions, awards, and the amazing sponsors who make it possible.
          </motion.p>
          
          {/* Season Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10"
          >
            <button
              onClick={() => setActiveSeason("season1")}
              className={`px-8 py-3 rounded-full font-rajdhani font-bold tracking-widest text-sm transition-all duration-300 ${
                activeSeason === "season1" 
                  ? "bg-gold text-navy shadow-[0_0_20px_rgba(245,197,24,0.4)]" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              SEASON 1
            </button>
            <button
              onClick={() => setActiveSeason("season2")}
              className={`px-8 py-3 rounded-full font-rajdhani font-bold tracking-widest text-sm transition-all duration-300 ${
                activeSeason === "season2" 
                  ? "bg-cyan text-navy shadow-[0_0_20px_rgba(0,212,255,0.4)]" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              SEASON 2
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSeason}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* ===== CHAMPIONS ===== */}
          <section className="py-20" style={{ background: "#0a0e27" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="section-title gradient-text-gold mb-4">
                  {activeSeason === "season1" ? "SEASON 1 CHAMPIONS" : "SEASON 2 CHAMPIONS"}
                </h2>
                <div className="section-divider" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Champion */}
                <motion.div
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
                    Champion
                  </div>
                  <h3 className="font-bebas text-4xl gradient-text-gold tracking-wider">
                    {seasonData.champion.teamName}
                  </h3>
                  <p className="font-inter text-white/50 text-sm">{seasonData.champion.tagline}</p>
                  <div className="mt-2 px-6 py-2 rounded-full border border-gold/30 bg-gold/10">
                    <span className="font-rajdhani font-600 text-gold text-sm tracking-wide">👑 Title Holder</span>
                  </div>
                </motion.div>

                {/* Runner Up */}
                <motion.div
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
                    {seasonData.runnerUp.teamName}
                  </h3>
                  <p className="font-inter text-white/50 text-sm">{seasonData.runnerUp.tagline}</p>
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
              <div className="text-center mb-12">
                <h2 className="section-title gradient-text-gold mb-4">
                  {activeSeason === "season1" ? "SEASON 1 AWARDS" : "SEASON 2 AWARDS"}
                </h2>
                <div className="section-divider" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🏏",
                    award: "Best Batsman",
                    name: seasonData.awards.bestBatsman.name,
                    stat: seasonData.awards.bestBatsman.runs,
                    statLabel: "Runs",
                    color: "#00d4ff",
                  },
                  {
                    icon: "⚾",
                    award: "Best Bowler",
                    name: seasonData.awards.bestBowler.name,
                    stat: seasonData.awards.bestBowler.wickets,
                    statLabel: "Wickets",
                    color: "#ff6b35",
                  },
                  {
                    icon: "⭐",
                    award: "Player of the Tournament",
                    name: seasonData.awards.playerOfTournament.name,
                    stat: "Champion",
                    statLabel: "Performance",
                    color: "#f5c518",
                  },
                ].map((award, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                  >
                    <div className="text-5xl mb-4">{award.icon}</div>
                    <div className="font-rajdhani font-700 text-sm tracking-[2px] uppercase mb-2" style={{ color: award.color }}>
                      {award.award}
                    </div>
                    <h4 className="font-bebas text-3xl tracking-wide text-white mb-2">{award.name}</h4>
                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 text-sm font-inter text-white/70">
                      {award.stat} {award.statLabel}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== SPONSORS ===== */}
          <section className="py-20" style={{ background: "#0a0e27" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="section-title gradient-text-gold mb-4">
                  {activeSeason === "season1" ? "SEASON 1 SPONSORS" : "SEASON 2 SPONSORS"}
                </h2>
                <div className="section-divider" />
                <p className="text-white/50 font-inter mt-4 max-w-2xl mx-auto">
                  We are deeply grateful to our sponsors for their generous support in making the Barot Premier League a massive success.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {seasonData.sponsors.map((sponsor, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center min-w-[250px] text-center"
                  >
                    {activeSeason === "season1" && sponsor.logo ? (
                      <div className="w-48 h-28 relative mb-4 rounded-xl overflow-hidden border border-white/20 bg-white flex items-center justify-center p-3 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain drop-shadow-sm" />
                      </div>
                    ) : (
                      <div className="w-48 h-28 relative mb-4 rounded-xl overflow-hidden border border-dashed border-white/20 bg-white/5 flex items-center justify-center">
                        <span className="font-rajdhani font-bold text-white/30 tracking-widest text-xl">TBD</span>
                      </div>
                    )}
                    <h4 className="font-bebas text-2xl tracking-widest text-white/80">{sponsor.name}</h4>
                    <p className="text-xs font-rajdhani text-gold uppercase tracking-[2px] mt-1">Official Sponsor</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
