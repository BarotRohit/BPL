import type { Metadata } from "next";
import JourneyPageClient from "./JourneyPageClient";

export const metadata: Metadata = {
  title: "Journey | BPL Season 2 — Barot Premier League",
  description: "The inspiring story of how BPL was born — from a dream to a reality. The journey of cricket, community, and togetherness in Barot.",
};

export default function JourneyPage() {
  return <JourneyPageClient />;
}
