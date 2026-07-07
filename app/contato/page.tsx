import type { Metadata } from "next";
import { Contato } from "@/components/sections/Contato";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale conosco — Núcleo de Pesquisas Aeroespaciais.",
};

export default function ContatoPage() {
  return <Contato />;
}
