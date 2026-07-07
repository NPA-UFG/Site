import {
  Globe,
  LineChart,
  Megaphone,
  Satellite,
  SatelliteDish,
  Telescope,
} from "lucide-react";
import type { AreaCard } from "@/types";

export const areaCards: AreaCard[] = [
  {
    title: "CubeSats",
    description:
      "Projeto e construção de CubeSats para lançamento orbital e experimentos científicos.",
    icon: Satellite,
  },
  {
    title: "Estações Terrenas",
    description:
      "Estações base para rastreamento e comunicação com satélites, incluindo a rede SatNOGS.",
    icon: SatelliteDish,
  },
  {
    title: "Dados de Satélites",
    description:
      "Coleta e análise de dados orbitais, com estimativa de órbita de pequenos satélites LEO.",
    icon: LineChart,
  },
  {
    title: "Astronomia",
    description:
      "Observações astronômicas que já resultaram em descobertas de asteroides reconhecidas pelo MCTI.",
    icon: Telescope,
  },
  {
    title: "Sensoriamento Remoto",
    description:
      "Uso de satélites para observação da Terra e monitoramento do território.",
    icon: Globe,
  },
  {
    title: "Divulgação Científica",
    description:
      "Compartilhamos ciência em eventos e ações que democratizam o conhecimento aeroespacial.",
    icon: Megaphone,
  },
];
