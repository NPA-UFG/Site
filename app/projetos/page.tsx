import type { Metadata } from "next";
import { ProjetosIntro } from "@/components/sections/ProjetosIntro";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ProjectsList } from "@/components/sections/ProjectsList";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos e áreas de atuação do Núcleo de Pesquisas Aeroespaciais.",
};

export default function ProjetosPage() {
  return (
    <>
      <ProjetosIntro />
      <ProjectShowcase>
        <ProjectsList />
      </ProjectShowcase>
    </>
  );
}
