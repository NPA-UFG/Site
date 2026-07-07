import type { GalleryImage, ProjectArea, ProjectItem } from "@/types";

export const projectsIntro = {
  title: "Nossos Projetos",
  text: "Desde 2021, o NPA desenvolve projetos aeroespaciais concretos — de CubeSats para lançamento orbital a estações terrenas de rastreamento de satélites. Nossa trajetória já inclui descobertas de asteroides reconhecidas pelo MCTI e publicações em conferências internacionais, sempre unindo pesquisa e desenvolvimento, formação prática dos membros e divulgação científica. Cada projeto é uma oportunidade real de aplicar conhecimento técnico e construir um portfólio sólido na área.",
};

export const projectAreas: ProjectArea[] = [
  {
    id: 1,
    label: "CubeSats",
    title: "CubeSats",
    text: "Projetamos e construímos CubeSats para lançamento orbital, aplicando na prática conceitos de engenharia aeroespacial. Esses satélites de pequeno porte são a base para missões de coleta de dados e experimentos científicos desenvolvidos pelos tripulantes do NPA.",
  },
  {
    id: 2,
    label: "Estações Terrenas",
    title: "Estações Terrenas",
    text: "Desenvolvemos e operamos estações base para rastreamento e comunicação com satélites, incluindo uma estação SatNOGS construída em parceria com a ABC (Amigos do Brasil Central). Essa infraestrutura permite receber sinais de satélites em órbita e integrar a rede global de estações terrenas.",
  },
  {
    id: 3,
    label: "Dados de Satélites",
    title: "Análise de Dados de Satélites",
    text: "Coletamos e analisamos dados de satélites, trabalhando com técnicas como a estimativa de órbita em pequenos satélites LEO. Esse esforço resultou no artigo \"Orbit estimation in small LEO satellites\", aceito na conferência internacional LAFUSION2024.",
  },
  {
    id: 4,
    label: "Astronomia",
    title: "Astronomia e Asteroides",
    text: "Realizamos observações astronômicas que já levaram a descobertas de asteroides reconhecidas pelo MCTI. Essa frente aproxima os membros da astronomia observacional e da ciência de dados aplicada ao espaço.",
  },
  {
    id: 5,
    label: "Sensoriamento",
    title: "Sensoriamento Remoto",
    text: "Estudamos aplicações de monitoramento remoto do território, linha iniciada pela equipe Goyasat na 1ª OBSAT com o monitoramento de fronteiras do território brasileiro. A área explora o uso de satélites para observação da Terra.",
  },
  {
    id: 6,
    label: "Divulgação",
    title: "Divulgação Científica",
    text: "Levamos a ciência aeroespacial ao público em eventos como Expofavela, DroneShow, Campus Party, OpenUniverse e a Copa Centro-Oeste de Foguetes, democratizando o conhecimento e inspirando novas gerações de cientistas e engenheiros.",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Equipe Millenium — 1ª OBSAT",
    description:
      "Formada por alunos de Engenharia de Computação da UFG sob supervisão do Professor Aldo Diaz (INF), teve como missão o estudo de anomalias magnéticas na magnetosfera terrestre. Foi o primeiro projeto do NPA, estabelecendo nossa presença na área aeroespacial.",
  },
  {
    title: "Equipe Goyasat — 1ª OBSAT",
    description:
      "Formada por alunos de Engenharia Mecânica e de Computação da UFG sob supervisão do Professor Marco Assfalk (EMC), teve como missão o monitoramento remoto de fronteiras do território brasileiro, demonstrando a capacidade interdisciplinar do NPA.",
  },
  {
    title: "Estação SatNOGS",
    description:
      "Estação terrena de rastreamento de satélites desenvolvida em parceria com a ABC (Amigos do Brasil Central), integrando o NPA à rede global de estações e fortalecendo nossa capacidade de recepção de dados orbitais.",
  },
  {
    title: "Publicação LAFUSION2024",
    description:
      "Artigo \"Orbit estimation in small LEO satellites: Application and comparison of Kalman filters\", de Débora Eliane Soares de Souza Batista e Aldo André Diaz Salazar, aceito na conferência internacional LAFUSION2024.",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/assets/proj-img1.jpg", alt: "Imagem de satélite" },
  { src: "/assets/proj-img2.jpg", alt: "Nebulosa" },
  { src: "/assets/proj-img3.jpg", alt: "Eclipse" },
];
