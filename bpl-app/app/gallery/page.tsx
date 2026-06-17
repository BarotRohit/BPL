import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | BPL Season 2 — Barot Premier League",
  description: "Relive the magic of BPL Season 1. Champions, awards, match moments, celebrations, and memories from the Barot Premier League.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
