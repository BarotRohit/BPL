import type { Metadata } from "next";
import BoardPageClient from "./BoardPageClient";

export const metadata: Metadata = {
  title: "Board Members | BPL Season 2 — Barot Premier League",
  description: "Meet the board members and organizing committee behind the Barot Premier League Season 2.",
};

export default function BoardPage() {
  return <BoardPageClient />;
}
