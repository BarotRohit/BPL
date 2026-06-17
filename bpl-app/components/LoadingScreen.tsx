"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = sessionStorage.getItem("bpl-loaded");
    if (hasLoaded) {
      setIsLoading(false);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("bpl-loaded", "true");
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at center, #141b45 0%, #0a0e27 60%, #000 100%)",
          }}
        >
          {/* Stadium light beams */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-0.5 opacity-20"
                style={{
                  left: `${15 + i * 14}%`,
                  height: "100%",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, transparent 60%)",
                  transform: `rotate(${(i - 2.5) * 3}deg)`,
                  transformOrigin: "top center",
                }}
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => {
              // Deterministic values for SSR hydration matching
              const pseudoRandom1 = (i * 17) % 100 / 100;
              const pseudoRandom2 = (i * 23) % 100 / 100;
              const pseudoRandom3 = (i * 31) % 100 / 100;
              const colors = ["#f5c518", "#6c35de", "#00d4ff", "#ff6b35"];
              const color = colors[i % 4];

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: pseudoRandom1 * 6 + 2,
                    height: pseudoRandom1 * 6 + 2,
                    left: `${pseudoRandom2 * 100}%`,
                    top: `${pseudoRandom3 * 100}%`,
                    background: color,
                  }}
                  animate={{
                    y: [0, -200],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: pseudoRandom1 * 3 + 2,
                    repeat: Infinity,
                    delay: pseudoRandom2 * 3,
                  }}
                />
              );
            })}
          </div>

          {/* Main content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 relative z-10"
          >
            {/* Trophy Icon */}
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl"
            >
              🏆
            </motion.div>

            {/* BPL Text */}
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-rajdhani font-bold tracking-[6px] text-cyan-400 uppercase mb-2"
              >
                Barot Premier League
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-bebas text-7xl md:text-9xl tracking-widest gradient-text-gold"
              >
                BPL
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-rajdhani text-2xl font-bold tracking-[4px] text-white/80 mt-1"
              >
                SEASON 2
              </motion.div>
            </div>

            {/* Cricket ball spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="text-3xl"
            >
              🏏
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-80">
              <div className="flex justify-between text-xs font-rajdhani text-white/50 mb-2">
                <span>Loading Experience...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #6c35de, #00d4ff, #f5c518)",
                    width: `${Math.min(progress, 100)}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
