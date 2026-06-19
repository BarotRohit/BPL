"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import LoadingScreen from "@/components/LoadingScreen";
import { config } from "@/lib/config";
import { Phone, ChevronDown } from "lucide-react";

const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const WhatsappIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>;
const YoutubeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;

// Floating particles component (inline)
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => {
        const pseudoRandom1 = (i * 17) % 100 / 100;
        const pseudoRandom2 = (i * 23) % 100 / 100;
        const pseudoRandom3 = (i * 31) % 100 / 100;
        const pseudoRandom4 = (i * 37) % 100 / 100;
        const colors = ["#f5c518", "#6c35de", "#00d4ff", "#ff6b35"];
        const color = colors[i % 4];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: pseudoRandom1 * 8 + 2,
              height: pseudoRandom1 * 8 + 2,
              left: `${pseudoRandom2 * 100}%`,
              top: `${pseudoRandom3 * 100}%`,
              background: color,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, pseudoRandom4 * 40 - 20, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: pseudoRandom1 * 6 + 4,
              repeat: Infinity,
              delay: pseudoRandom2 * 5,
            }}
          />
        );
      })}
    </div>
  );
}

// Stadium lights
function StadiumLights() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left light */}
      <div className="absolute top-0 left-8 w-0.5 h-64 origin-top rotate-12 opacity-10"
        style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }} />
      {/* Right light */}
      <div className="absolute top-0 right-8 w-0.5 h-64 origin-top -rotate-12 opacity-10"
        style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }} />
      {/* Top glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-5"
        style={{ background: "white" }} />
      {/* Purple glow left */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full filter blur-3xl opacity-20"
        style={{ background: "#6c35de" }} />
      {/* Cyan glow right */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full filter blur-3xl opacity-15"
        style={{ background: "#00d4ff" }} />
      {/* Bottom orange */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full filter blur-3xl opacity-10"
        style={{ background: "#ff6b35" }} />
    </div>
  );
}

function HomeContent() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
        id="hero"
      >
        <StadiumLights />
        <FloatingParticles />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
        >
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="coming-soon-badge">🏏 Coming Soon</span>
          </motion.div>

          {/* Trophy */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="text-7xl md:text-9xl mb-6 inline-block float-anim"
            style={{
              filter: "drop-shadow(0 0 30px rgba(245,197,24,0.6))",
            }}
          >
            🏆
          </motion.div>

          {/* Season badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-rajdhani font-700 text-sm md:text-base tracking-[6px] text-cyan-400 uppercase mb-4"
          >
            Barot Premier League
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-bebas text-6xl sm:text-8xl md:text-[110px] leading-none tracking-wider mb-4"
          >
            <span className="gradient-text-gold">BPL</span>
            <br />
            <span className="text-white">SEASON</span>
            <span className="gradient-text-fire"> 2</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-rajdhani font-600 text-xl md:text-2xl text-white/80 mb-4 tracking-wide"
          >
            The Biggest Cricket Festival of the Barot Family is Coming Soon!
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-inter text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            After the huge success of BPL Season 1, we are back with an even bigger and more exciting Season 2. 
            Get ready for fierce competition, unforgettable memories, and the celebration of cricket 
            with the entire Barot family.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/register">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-lg px-10 py-4"
              >
                <span>🏏 Register Now</span>
              </motion.div>
            </Link>
            <Link href="/teams">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-lg px-10 py-4"
              >
                Explore Teams →
              </motion.div>
            </Link>
          </motion.div>

          {/* Animated cricket elements */}
          <div className="absolute top-1/4 -left-8 text-4xl opacity-20 hidden lg:block">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ⚾
            </motion.span>
          </div>
          <div className="absolute top-1/3 -right-8 text-4xl opacity-20 hidden lg:block">
            <motion.span
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🏏
            </motion.span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-rajdhani text-xs tracking-widest uppercase">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* ===== COMING SOON BANNER ===== */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1535, #1a0a3e, #0f1535)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full filter blur-3xl opacity-20"
            style={{ background: "radial-gradient(ellipse, #6c35de, #00d4ff)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-5xl mb-6">⏳</div>
            <h2 className="font-bebas text-5xl md:text-7xl gradient-text-royal tracking-wider mb-4">
              COMING SOON
            </h2>
            <p className="font-rajdhani font-600 text-xl text-white/60 mb-8">
              The tournament date will be announced soon. Stay tuned!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
                <motion.div
                  key={unit}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="glass rounded-2xl w-24 h-24 flex items-center justify-center border border-royal/30 glow-royal mb-2">
                    <span className="font-bebas text-5xl gradient-text-gold">?</span>
                  </div>
                  <span className="font-rajdhani font-600 text-xs tracking-[3px] text-white/40 uppercase">{unit}</span>
                </motion.div>
              ))}
            </div>
            <p className="font-inter text-white/30 text-sm mt-8">
              🔔 Register now to get notified when the date is announced!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY JOIN BPL ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#0a0e27" }}>
        <FloatingParticles />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="coming-soon-badge mb-4">Why Join BPL?</div>
            <h2 className="section-title gradient-text-gold mb-4">
              BE PART OF SOMETHING LEGENDARY
            </h2>
            <div className="section-divider" />
            <p className="font-inter text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
              BPL Season 2 isn&apos;t just a cricket tournament — it&apos;s a movement. 
              A celebration. A memory in the making.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-400 group animated-border cursor-default"
              >
                <div
                  className="text-5xl mb-4 inline-block transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 0 15px ${feature.color}88)` }}
                >
                  {feature.icon}
                </div>
                <div
                  className="w-10 h-0.5 rounded-full mb-4"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                />
                <h3 className="font-rajdhani font-700 text-xl text-white mb-2 tracking-wide">{feature.title}</h3>
                <p className="font-inter text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1535, #1a0a3e, #0f1535)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full filter blur-3xl opacity-10"
            style={{ background: "radial-gradient(ellipse, #6c35de, #00d4ff, transparent)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white mb-4">BPL BY THE NUMBERS</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {config.stats.map((stat, i) => (
              <StatCounter
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                delay={i * 0.15}
                color={["#f5c518", "#00d4ff", "#6c35de", "#ff6b35"][i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HALL OF FAME ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#0a0e27" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="coming-soon-badge mb-4">Season 1 Legends</div>
            <h2 className="section-title gradient-text-gold mb-4">HALL OF FAME</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", label: "Season 1 Champions", value: config.season1.champion.teamName, sub: "Champions", color: "#f5c518" },
              { icon: "🥈", label: "Runner Up", value: config.season1.runnerUp.teamName, sub: "Runner-Up", color: "#9ca3af" },
              { icon: "🏏", label: "Best Batsman", value: config.season1.awards.bestBatsman.name, sub: `${config.season1.awards.bestBatsman.runs} Runs`, color: "#00d4ff" },
              { icon: "⚾", label: "Best Bowler", value: config.season1.awards.bestBowler.name, sub: `${config.season1.awards.bestBowler.wickets} Wickets`, color: "#ff6b35" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="award-card text-center"
              >
                <motion.div
                  animate={{ rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="text-5xl mb-4 inline-block"
                  style={{ filter: `drop-shadow(0 0 15px ${item.color}88)` }}
                >
                  {item.icon}
                </motion.div>
                <div className="font-inter text-xs text-white/40 uppercase tracking-widest mb-2">{item.label}</div>
                <div className="font-bebas text-2xl tracking-wide mb-1" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div className="font-rajdhani text-sm text-white/50">{item.sub}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/20 text-xs font-inter mt-8 italic">
            * BPL Season 1 award details will be updated soon
          </p>
        </div>
      </section>

      {/* ===== REGISTER CTA ===== */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0a3e, #0a1a3e, #1a1a0a)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(108,53,222,0.2) 0%, transparent 70%)"
            }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 md:p-16 border border-royal/30"
          >
            <div className="text-7xl mb-6">
              <motion.span
                animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block"
              >
                🏏
              </motion.span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl gradient-text-fire mb-4 tracking-wider">
              READY TO PLAY?
            </h2>
            <p className="font-rajdhani text-xl text-white/60 mb-8 max-w-lg mx-auto">
              Registration for BPL Season 2 is open! Secure your spot in cricket history.
              Be part of the Barot family&apos;s biggest sporting event.
            </p>
            <Link href="/register">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-xl px-12 py-5 inline-flex"
              >
                <span>🏆 Register for BPL Season 2</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#0a0e27" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="coming-soon-badge mb-4">What They Say</div>
            <h2 className="section-title gradient-text-royal mb-4">VOICES OF BPL</h2>
            <div className="section-divider" />
          </motion.div>
          <TestimonialsGrid testimonials={config.testimonials} />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1535, #1a0a3e)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title gradient-text-gold mb-4">GET IN TOUCH</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 h-full">
              <motion.a
                href="/board"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-300 group flex flex-col justify-center items-center text-center h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <Phone size={32} className="text-gold" />
                </div>
                <h3 className="font-bebas text-3xl tracking-wide text-white mb-3">Contact the Board</h3>
                <p className="font-inter text-white/60 mb-8 max-w-sm">
                  View the directory of our organizing committee and board members to get in touch regarding sponsorships, registrations, or general inquiries.
                </p>
                <div className="btn-primary">
                  <span>View Board Members</span>
                </div>
              </motion.a>
            </div>

            {/* Social + Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Social */}
              <div className="glass rounded-2xl p-6 border border-white/10 flex-1">
                <h3 className="font-rajdhani font-700 text-lg text-white tracking-wide mb-4">Follow BPL</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: <InstagramIcon />, label: "Instagram", href: config.social.instagram, color: "#e1306c" },
                    { icon: <WhatsappIcon />, label: "WhatsApp", href: config.social.whatsapp, color: "#25D366" },
                    { icon: <YoutubeIcon />, label: "YouTube", href: config.social.youtube, color: "#ff0000" },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank"
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <div style={{ color: s.color }}>{s.icon}</div>
                      <span className="font-rajdhani font-600 text-white/70 group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                      <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors">→</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Message Box */}
              <div className="glass rounded-2xl p-6 border border-gold/20 bg-gold/5">
                <div className="text-3xl mb-3">📣</div>
                <h4 className="font-rajdhani font-700 text-white mb-2">Stay Updated!</h4>
                <p className="font-inter text-white/50 text-sm leading-relaxed">
                  Follow BPL on all social media platforms to get the latest updates about 
                  Season 2, team announcements, match schedules, and more!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setIsReady(true)} />
      {isReady && <HomeContent />}
    </>
  );
}
