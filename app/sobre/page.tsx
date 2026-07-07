import type { Metadata } from "next";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Missao } from "@/components/sections/Missao";
import { MissaoTripartite } from "@/components/sections/MissaoTripartite";
import { Oportunidade } from "@/components/sections/Oportunidade";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre o Núcleo de Pesquisas Aeroespaciais: missão, pilares e oportunidades.",
};

export default function SobrePage() {
  return (
    <>
      <QuemSomos variant="photo" />
      <Missao />
      <MissaoTripartite />
      <Oportunidade />
    </>
  );
}
