import { Metadata } from "next";
import TournamentPageClient from "./TournamentPageClient";

export const metadata: Metadata = {
  title: "Tournament | BPL Season 2 — Barot Premier League",
  description: "Explore the tournament history, champions, awards, and sponsors of the Barot Premier League.",
};

export default function TournamentPage() {
  return <TournamentPageClient />;
}
