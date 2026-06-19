"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GalleryImage } from "@/app/gallery/page";

interface MasonryGalleryProps {
  images?: GalleryImage[];
  categories?: string[];
}

const heightMap = { short: "h-40", medium: "h-56", tall: "h-72" };

export default function MasonryGallery({ images = [], categories = ["All"] }: MasonryGalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? images : images.filter(img => img.category === filter);

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
      {images.length === 0 ? (
        <p className="text-center text-white/30 text-sm font-inter mt-8 italic">
          📸 Upload images into the public/gallery folders to see them here!
        </p>
      ) : (
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
              className={`masonry-item ${heightMap[img.height]} relative overflow-hidden rounded-xl cursor-pointer group bg-white/5`}
            >
              <Image
                src={img.src}
                alt={img.id}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <div className="font-bebas text-lg tracking-wide text-white">{img.id.split('-').slice(1).join('-').split('.')[0]}</div>
                  <div className="font-inter text-xs text-white/80">{img.category}</div>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-sm">🔍</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] mx-4 flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-50 backdrop-blur-md"
              >
                ✕
              </button>
              <div className="relative w-full h-[80vh] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <Image
                  src={selected.src}
                  alt={selected.id}
                  fill
                  className="object-contain bg-black/50 backdrop-blur-xl"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/50 backdrop-blur-md rounded-full text-white font-rajdhani tracking-wider text-sm">
                {selected.category}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
