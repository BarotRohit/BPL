"use client";

import { motion } from "framer-motion";
import RegistrationForm from "@/components/RegistrationForm";
import { CheckCircle } from "lucide-react";

const perks = [
  { icon: "🏆", text: "Compete for the BPL Trophy" },
  { icon: "🌟", text: "Individual awards & recognition" },
  { icon: "👥", text: "Join a legendary team" },
  { icon: "📸", text: "Professional match coverage" },
  { icon: "🎉", text: "Be part of community history" },
  { icon: "📱", text: "Updates via WhatsApp & SMS" },
];

export default function RegisterPageClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at center top, #1a0a3e 0%, #0a0e27 60%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full filter blur-3xl opacity-15"
            style={{ background: "#ff6b35" }} />
          <div className="absolute top-0 right-1/4 w-96 h-64 rounded-full filter blur-3xl opacity-10"
            style={{ background: "#f5c518" }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ["#f5c518", "#ff6b35", "#6c35de"][Math.floor(Math.random() * 3)],
              }}
              animate={{ y: [0, -80, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-7xl mb-4"
          >
            🏏
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="coming-soon-badge mb-4"
          >
            Registration Open
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bebas text-6xl md:text-8xl gradient-text-fire tracking-wider mb-4"
          >
            JOIN BPL SEASON 2
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-white/50 max-w-xl mx-auto text-base leading-relaxed"
          >
            Fill in your details below and secure your spot in Barot Premier League Season 2. 
            Our team will contact you on your mobile number with further details.
          </motion.p>
        </div>
      </section>

      {/* Form + Perks */}
      <section className="py-20" style={{ background: "#0a0e27" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-bebas text-4xl gradient-text-gold tracking-wider mb-2">
                  WHY REGISTER?
                </h2>
                <p className="font-inter text-white/40 text-sm leading-relaxed">
                  BPL Season 2 is going to be the biggest cricket event in Barot history. 
                  Don&apos;t miss your chance to be part of it.
                </p>
              </div>

              <div className="space-y-4">
                {perks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-white/10 hover:border-royal/30 transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{perk.icon}</span>
                    <span className="font-rajdhani font-600 text-white/80 group-hover:text-white transition-colors">
                      {perk.text}
                    </span>
                    <CheckCircle size={16} className="ml-auto text-royal/60 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="glass rounded-2xl p-6 border border-gold/20 bg-gold/5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-rajdhani font-700 text-white mb-1">Your Data is Safe</h4>
                    <p className="font-inter text-white/40 text-xs leading-relaxed">
                      Your personal information is collected only for BPL registration purposes and 
                      will only be used to contact you about the tournament.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-dark rounded-3xl border border-royal/20 overflow-hidden"
              style={{ boxShadow: "0 20px 80px rgba(108, 53, 222, 0.2)" }}
            >
              {/* Form header */}
              <div
                className="p-6 text-center border-b border-white/10"
                style={{ background: "linear-gradient(135deg, rgba(108,53,222,0.15), rgba(0,212,255,0.05))" }}
              >
                <div className="text-3xl mb-2">📋</div>
                <h3 className="font-bebas text-3xl gradient-text-gold tracking-wider">
                  REGISTRATION FORM
                </h3>
                <p className="font-inter text-white/40 text-xs mt-1">
                  Barot Premier League Season 2
                </p>
              </div>
              
              <div className="p-6 md:p-8">
                <RegistrationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom info */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f1535, #1a0a3e)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-inter text-white/40 text-sm leading-relaxed">
              📞 For any queries or assistance with registration, please{" "}
              <a href="/board" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4">
                contact our Board Members
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
