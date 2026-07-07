import type { GrowthItem, Pillar, TripartiteItem } from "@/types";

export const aboutText =
  "O Núcleo de Pesquisas Aeroespaciais é uma equipe autogerenciada criada em 2022 para estudo e divulgação de iniciativas na área aeroespacial. Nossa estrutura única como organização autogerenciada significa que cada tripulante tem responsabilidades diretas no funcionamento e direcionamento do núcleo, desenvolvendo não apenas competências técnicas, mas também habilidades de liderança e gestão de projetos.";

export const pillars: Pillar[] = [
  {
    title: "Pilar 1: Fomentar a Pesquisa e Desenvolvimento",
    description:
      "Trabalhamos no desenvolvimento de projetos e tecnologias no setor aeroespacial. Isso significa que não apenas estudamos teorias existentes, mas criamos soluções reais para desafios reais. Cada projeto que desenvolvemos visa contribuir para o avanço do conhecimento científico brasileiro na área aeroespacial.",
    image: "/assets/pilar1.jpg",
    imageAlt: "Pesquisa e desenvolvimento",
  },
  {
    title: "Pilar 2: Treinamento Prático dos Membros",
    description:
      "Acreditamos que o aprendizado mais efetivo acontece através da prática. Por isso, os nossos tripulantes podem participar de projetos temáticos em engenharia aeroespacial, como desenvolvimento de CubeSats, construção de estações base e análise de dados de satélites. Cada projeto é cuidadosamente estruturado para desenvolver competências específicas de forma progressiva.",
    image: "/assets/pilar2.jpg",
    imageAlt: "Treinamento prático",
  },
  {
    title: "Pilar 3: Divulgação Científica",
    description:
      "Compartilhamos nossas descobertas e tecnologias em eventos acadêmicos e comunitários, contribuindo para a democratização do conhecimento científico. Esta atividade não apenas beneficia a sociedade, mas também desenvolve as habilidades de comunicação científica dos membros, essenciais para qualquer carreira na área.",
    image: "/assets/pilar3.jpg",
    imageAlt: "Divulgação científica",
  },
];

export const tripartite: TripartiteItem[] = [
  {
    title: "Pesquisa",
    description:
      "Fomentamos o desenvolvimento de projetos e tecnologias no setor aeroespacial, criando soluções reais para desafios reais.",
    image: "/assets/tri-pesquisa.jpg",
    imageAlt: "Pesquisa",
  },
  {
    title: "Treinamento",
    description:
      "Formação prática dos membros em projetos de engenharia aeroespacial, como CubeSats, estações base e análise de dados de satélites.",
    image: "/assets/tri-treino.jpg",
    imageAlt: "Treinamento",
  },
  {
    title: "Divulgação",
    description:
      "Compartilhamos descobertas e tecnologias em eventos acadêmicos e comunitários, democratizando o conhecimento científico.",
    image: "/assets/tri-divulgacao.jpg",
    imageAlt: "Divulgação",
  },
];

export const growthItems: GrowthItem[] = [
  {
    title: "Desenvolvimento Através de Projetos Aeroespaciais",
    description:
      "Um ambiente único onde os membros se desenvolvem profissionalmente através de projetos práticos no setor aeroespacial, com experiências reais que vão além do aprendizado teórico tradicional.",
  },
  {
    title: "Publicações Científicas",
    description:
      "A participação em projetos frequentemente resulta em oportunidades de publicação: dados coletados, análises e soluções são transformados em artigos para conferências e revistas especializadas.",
  },
  {
    title: "Network e Iniciação Científica",
    description:
      "Parcerias com professores da UFG abrem acesso a projetos de iniciação científica, bolsas de pesquisa e orientação especializada para o desenvolvimento acadêmico e profissional.",
  },
];
