import {
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  RadioTower,
  Telescope,
} from "lucide-react";
import type { AreaCard } from "@/types";

export const areaCards: AreaCard[] = [
  {
    title: "Eletrônica e Sistemas Embarcados",
    description:
      "Projeto de hardware e firmware para CubeSats e estações, integrando sensores, microcontroladores e sistemas de bordo.",
    icon: Cpu,
  },
  {
    title: "Divulgação Científica e Educação",
    description:
      "Levamos a ciência aeroespacial ao público em eventos e ações que democratizam o conhecimento e inspiram novas gerações.",
    icon: GraduationCap,
  },
  {
    title: "Software e Algoritmos",
    description:
      "Desenvolvimento de software para missões: firmware de voo, ferramentas de simulação e algoritmos de controle e processamento.",
    icon: Code2,
  },
  {
    title: "Ciência de Dados e IA",
    description:
      "Análise de dados de satélites e técnicas de ciência de dados e IA, como a estimativa de órbita de pequenos satélites LEO.",
    icon: BrainCircuit,
  },
  {
    title: "Comunicações e RF",
    description:
      "Comunicação com satélites e radiofrequência, incluindo a estação SatNOGS para recepção de sinais de satélites em órbita.",
    icon: RadioTower,
  },
  {
    title: "Astronomia e Observação Espacial",
    description:
      "Observação astronômica e do espaço, frente que já rendeu descobertas de asteroides reconhecidas pelo MCTI.",
    icon: Telescope,
  },
];
