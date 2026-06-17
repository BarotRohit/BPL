"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { config } from "@/lib/config";
import Link from "next/link";

export default function TeamsPageClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: "radial-gradient(ellipse at center top, #1a0a3e 0%, #0a0e27 60%, #000 100%)",
        }}
      >
        {/* Stadium light effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full filter blur-3xl opacity-15"
            style={{ background: "radial-gradient(circle, #6c35de, transparent)" }} />
          <div className="absolute top-0 right-1/4 w-96 h-64 rounded-full filter blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-6"
          >
            🛡️
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-rajdhani font-700 text-sm tracking-[6px] text-cyan-400 uppercase mb-4"
          >
            BPL Season 2
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bebas text-6xl md:text-8xl gradient-text-gold tracking-wider mb-4"
          >
            THE TEAMS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-white/50 text-base max-w-xl mx-auto leading-relaxed"
          >
            8 teams. 100+ players. One champion. Meet the warriors who are ready to battle 
            it out on the cricket field for the glory of BPL Season 2.
          </motion.p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20" style={{ background: "#0a0e27" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold/20 text-sm font-inter text-white/50">
              <span className="text-gold">⚠️</span>
              Team captains and rosters will be announced soon. Stay tuned!
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.teams.map((team, i) => (
              <TeamCard key={team.id} team={team} index={i} />
            ))}
          </div>

          {/* Register CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass rounded-3xl p-10 border border-royal/30 max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🏏</div>
              <h3 className="font-bebas text-4xl gradient-text-fire mb-3 tracking-wider">
                WANT TO PLAY?
              </h3>
              <p className="font-inter text-white/50 text-sm mb-6 leading-relaxed">
                Register now and get a chance to represent one of these amazing teams in BPL Season 2!
              </p>
              <Link href="/register">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary inline-flex"
                >
                  <span>Register Now →</span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
