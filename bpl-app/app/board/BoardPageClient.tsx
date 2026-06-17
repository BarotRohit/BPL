"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { Phone, MapPin, User, ShieldCheck } from "lucide-react";

export default function BoardPageClient() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-royal/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-glass rounded-full mb-6 glow-gold">
            <ShieldCheck size={48} className="text-gold" />
          </div>
          <p className="font-rajdhani text-cyan uppercase tracking-widest font-semibold mb-2">BPL Organizing Committee</p>
          <h1 className="section-title text-transparent bg-clip-text gradient-text-gold mb-6">
            BOARD MEMBERS
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals working behind the scenes to make Barot Premier League Season 2 the biggest and best cricket festival in our community&apos;s history.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {config.boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Subtle accent border on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal to-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy border border-royal/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors">
                    <User size={32} className="text-gray-400 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-3xl text-white tracking-wide">{member.name}</h3>
                    <p className="font-rajdhani text-cyan font-semibold text-lg">{member.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mt-auto pt-4 border-t border-white/10">
                  <a 
                    href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-royal/20 transition-colors">
                      <Phone size={18} className="text-cyan group-hover/link:text-gold" />
                    </div>
                    <span className="font-inter font-medium tracking-wide">{member.phone}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin size={18} className="text-orange" />
                    </div>
                    <span className="font-inter">{member.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
