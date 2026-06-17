import type { Metadata } from "next";
import RegisterPageClient from "./RegisterPageClient";

export const metadata: Metadata = {
  title: "Register | BPL Season 2 — Barot Premier League",
  description: "Register now for Barot Premier League Season 2. Fill in your details and be part of the biggest cricket festival in the Barot community.",
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
