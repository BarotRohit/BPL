"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { config } from "@/lib/config";

const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const WhatsappIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>;
const YoutubeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/teams", label: "Teams" },
  { href: "/gallery", label: "Gallery" },
  { href: "/journey", label: "Journey" },
  { href: "/board", label: "Contact Us" },
  { href: "/register", label: "Register" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060918] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-royal to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-royal/5 rounded-full filter blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan/5 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏆</span>
              <div>
                <div className="font-bebas text-3xl tracking-widest gradient-text-gold">BPL</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm font-inter leading-relaxed mb-6">
              Barot Premier League — bringing the Barot family together through the love of cricket. 
              Season 2 is going to be bigger, better, and more exciting!
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
              { href: config.social.instagram, icon: <InstagramIcon />, color: "hover:text-pink-400 hover:border-pink-400" },
                { href: config.social.whatsapp, icon: <WhatsappIcon />, color: "hover:text-green-400 hover:border-green-400" },
                { href: config.social.youtube, icon: <YoutubeIcon />, color: "hover:text-red-400 hover:border-red-400" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 transition-all duration-300 ${s.color}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rajdhani font-700 text-lg tracking-widest text-white uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-cyan-400 font-rajdhani font-500 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-royal/50 group-hover:w-6 group-hover:bg-cyan-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-rajdhani font-700 text-lg tracking-widest text-white uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-white/40 font-inter">Direct Contact</div>
                  <Link href="/board" className="text-white/70 hover:text-cyan-400 font-rajdhani transition-colors flex items-center gap-1 group">
                    <span>View Board Members Directory</span>
                    <span className="text-white/30 group-hover:text-cyan-400 transition-colors">→</span>
                  </Link>
                </div>
              </li>

            </ul>
          </div>

          {/* Register CTA */}
          <div>
            <h4 className="font-rajdhani font-700 text-lg tracking-widest text-white uppercase mb-6">
              Join BPL-2
            </h4>
            <div className="glass rounded-2xl p-6 text-center border border-royal/30">
              <div className="text-4xl mb-3">🏏</div>
              <p className="text-white/70 font-inter text-sm mb-4 leading-relaxed">
                Registration for BPL Season 2 is open! Don&apos;t miss your chance to be part of history.
              </p>
              <Link href="/register">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary text-sm px-5 py-2.5 w-full justify-center"
                >
                  <span>Register Now →</span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-inter text-center md:text-left">
            © 2025 Barot Premier League. All rights reserved. Made with ❤️ for the Barot Family.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm font-inter">
            <span className="text-gold">🏆</span>
            <span>BPL Season 2 — Coming Soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
