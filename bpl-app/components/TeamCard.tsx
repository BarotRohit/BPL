"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Team } from "@/lib/config";

interface TeamCardProps {
  team: Team;
  index: number;
}

export default function TeamCard({ team, index }: TeamCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="team-card animated-border group cursor-pointer"
      whileHover={{ y: -15, scale: 1.02 }}
    >
      {/* Team color top bar */}
      <div
        className="h-2 w-full"
        style={{ background: `linear-gradient(90deg, ${team.primaryColor}, ${team.secondaryColor})` }}
      />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 60px ${team.glowColor}33` }}
      />

      <div className="p-6 flex flex-col items-center text-center gap-4">
        {/* Logo Placeholder */}
        <motion.div
          className="w-24 h-24 rounded-full flex items-center justify-center text-5xl relative"
          style={{
            background: `radial-gradient(circle, ${team.primaryColor}33, ${team.secondaryColor}22)`,
            border: `2px solid ${team.primaryColor}44`,
          }}
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          animate={{ boxShadow: [`0 0 20px ${team.glowColor}33`, `0 0 40px ${team.glowColor}55`, `0 0 20px ${team.glowColor}33`] }}
        >
          {team.emoji}
          {/* Badge */}
          <div
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bebas font-bold text-navy"
            style={{ background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})` }}
          >
            {team.shortName.slice(0, 1)}
          </div>
        </motion.div>

        {/* Team Name */}
        <div>
          <div
            className="font-bebas text-2xl tracking-wider"
            style={{ color: team.primaryColor, textShadow: `0 0 20px ${team.glowColor}88` }}
          >
            {team.name}
          </div>
          <div className="font-rajdhani text-xs font-semibold tracking-[3px] text-white/40 uppercase mt-0.5">
            {team.shortName}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-12 h-0.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${team.primaryColor}, ${team.secondaryColor})` }}
        />

        {/* Captain */}
        <div className="w-full glass rounded-xl px-4 py-2.5">
          <div className="text-[10px] text-white/30 font-inter uppercase tracking-widest mb-1">Captain</div>
          <div className="font-rajdhani font-600 text-white/80 text-sm">
            {team.captain === "TBD" ? (
              <span className="text-white/30 italic">To Be Announced</span>
            ) : (
              team.captain
            )}
          </div>
        </div>

        {/* Motto */}
        <div className="text-center">
          <div className="font-inter text-xs text-white/40 italic leading-relaxed">
            &ldquo;{team.motto}&rdquo;
          </div>
        </div>

        {/* Color chips */}
        <div className="flex gap-2">
          <div
            className="w-6 h-6 rounded-full border-2 border-white/20"
            style={{ background: team.primaryColor }}
            title="Primary Color"
          />
          <div
            className="w-6 h-6 rounded-full border-2 border-white/20"
            style={{ background: team.secondaryColor }}
            title="Secondary Color"
          />
        </div>
      </div>
    </motion.div>
  );
}
