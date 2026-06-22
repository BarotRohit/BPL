"use client";

import { motion } from "framer-motion";
import MasonryGallery from "@/components/MasonryGallery";

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
            Relive the magic of BPL Season 1 — community celebrations and the spirit of cricket.
          </motion.p>
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
