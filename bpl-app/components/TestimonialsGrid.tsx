"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Testimonial } from "@/lib/config";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-royal/30 transition-all duration-300 hover:shadow-royal flex flex-col gap-4 h-full"
    >
      {/* Quote mark */}
      <div className="text-4xl text-royal/40 font-serif leading-none">&ldquo;</div>
      
      {/* Quote */}
      <p className="font-inter text-white/70 text-sm leading-relaxed flex-1">
        {testimonial.quote}
      </p>

      {/* Stars */}
      <StarRating count={testimonial.rating} />

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal to-cyan flex items-center justify-center font-bebas text-lg text-white">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="font-rajdhani font-700 text-white text-sm">{testimonial.name}</div>
          <div className="font-inter text-white/40 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        isInView && <TestimonialCard key={t.id} testimonial={t} index={i} />
      ))}
    </div>
  );
}
