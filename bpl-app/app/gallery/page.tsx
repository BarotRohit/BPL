import fs from 'fs';
import path from 'path';
import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | BPL Season 2 — Barot Premier League",
  description: "Relive the magic of BPL Season 1. Champions, awards, match moments, celebrations, and memories from the Barot Premier League.",
};

export interface GalleryImage {
  id: string;
  src: string;
  category: string;
  height: "short" | "medium" | "tall";
}

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const images: GalleryImage[] = [];
  const categories: string[] = ["All"];

  if (fs.existsSync(galleryDir)) {
    const folders = fs.readdirSync(galleryDir, { withFileTypes: true })
      .filter(dirent => 
        dirent.isDirectory() && 
        dirent.name !== "Team Photos" && 
        dirent.name !== "Trophy Moments"
      );

    folders.forEach((folder, folderIndex) => {
      categories.push(folder.name);
      const folderPath = path.join(galleryDir, folder.name);
      
      const files = fs.readdirSync(folderPath)
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
      
      files.forEach((file, fileIndex) => {
        const heightOptions: ("short" | "medium" | "tall")[] = ["short", "medium", "tall"];
        const height = heightOptions[(folderIndex + fileIndex) % 3];

        images.push({
          id: `${folder.name}-${file}`,
          src: `/gallery/${folder.name}/${file}`,
          category: folder.name,
          height: height
        });
      });
    });
  }

  return <GalleryPageClient images={images} categories={categories} />;
}
