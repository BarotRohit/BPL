"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  emoji: string;
  title: string;
  category: string;
  color: string;
  height: "short" | "medium" | "tall";
}

const galleryImages: GalleryImage[] = [
  { id: 1, emoji: "🏏", title: "Epic Boundary", category: "Match Moments", color: "#6c35de", height: "tall" },
  { id: 2, emoji: "🎉", title: "Championship Celebration", category: "Celebrations", color: "#f5c518", height: "medium" },
  { id: 3, emoji: "👥", title: "Team Photo", category: "Team Photos", color: "#00d4ff", height: "short" },
  { id: 4, emoji: "🏆", title: "Trophy Lift", category: "Trophy Moments", color: "#ff6b35", height: "tall" },
  { id: 5, emoji: "👨‍👩‍👧", title: "Family Cheering", category: "Crowd Moments", color: "#10b981", height: "medium" },
  { id: 6, emoji: "⚾", title: "Perfect Delivery", category: "Match Moments", color: "#8b5cf6", height: "short" },
  { id: 7, emoji: "🎊", title: "Opening Ceremony", category: "Celebrations", color: "#f5c518", height: "medium" },
  { id: 8, emoji: "🌟", title: "Player of Match", category: "Awards", color: "#ff6b35", height: "tall" },
  { id: 9, emoji: "👶", title: "Young Fans", category: "Crowd Moments", color: "#00d4ff", height: "short" },
  { id: 10, emoji: "🤝", title: "Team Spirit", category: "Team Photos", color: "#6c35de", height: "medium" },
  { id: 11, emoji: "🎯", title: "Wicket Taken!", category: "Match Moments", color: "#ef4444", height: "tall" },
  { id: 12, emoji: "🎵", title: "Victory Dance", category: "Celebrations", color: "#f5c518", height: "short" },
];

const heightMap = { short: "h-40", medium: "h-56", tall: "h-72" };

export default function MasonryGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Match Moments", "Celebrations", "Team Photos", "Crowd Moments", "Awards", "Trophy Moments"];

  const filtered = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map(cat => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-rajdhani font-600 text-sm transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-royal to-cyan text-white shadow-royal"
                : "bg-white/5 border border-white/10 text-white/60 hover:border-royal/40 hover:text-white"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filtered.map((img, i) => (
          <motion.div
            key={img.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setSelected(img)}
            className={`masonry-item ${heightMap[img.height]} flex items-center justify-center relative overflow-hidden`}
            style={{
              background: `radial-gradient(ellipse at center, ${img.color}22, ${img.color}08)`,
              border: `1px solid ${img.color}22`,
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: `radial-gradient(circle at center, ${img.color}, transparent 70%)` }}
            />
            
            {/* Emoji */}
            <div className="text-6xl z-10 transition-transform duration-300 group-hover:scale-110">
              {img.emoji}
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <div className="font-bebas text-lg tracking-wide text-white">{img.title}</div>
                <div className="font-inter text-xs text-white/60">{img.category}</div>
              </div>
              <div className="ml-auto">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm">🔍</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder note */}
      <p className="text-center text-white/30 text-sm font-inter mt-8 italic">
        📸 Real match photos from BPL Season 1 will be added here soon!
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass rounded-3xl p-12 max-w-md w-full mx-4 text-center relative"
              style={{ border: `1px solid ${selected.color}44` }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                ✕
              </button>
              <div className="text-9xl mb-6">{selected.emoji}</div>
              <h3 className="font-bebas text-3xl text-white mb-2">{selected.title}</h3>
              <p className="font-rajdhani text-white/50 tracking-widest text-sm uppercase">{selected.category}</p>
              <p className="text-white/30 text-xs font-inter mt-4 italic">
                Real photo coming soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
