import type { Metadata } from "next";
import TeamsPageClient from "./TeamsPageClient";

export const metadata: Metadata = {
  title: "Teams | BPL Season 2 — Barot Premier League",
  description: "Meet the 8 powerhouse teams competing in Barot Premier League Season 2. Explore team profiles, captains, colors, and mottos.",
};

export default function TeamsPage() {
  return <TeamsPageClient />;
}
