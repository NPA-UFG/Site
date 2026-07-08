import type { GalleryImage, ProjectArea, ProjectItem } from "@/types";

export const projectsIntro = {
  title: "Nossos Projetos",
  text: "Desde 2021, o NPA desenvolve projetos aeroespaciais concretos — de CubeSats para lançamento orbital a estações terrenas de rastreamento de satélites. Nossa trajetória já inclui descobertas de asteroides reconhecidas pelo MCTI e publicações em conferências internacionais, sempre unindo pesquisa e desenvolvimento, formação prática dos membros e divulgação científica. Cada projeto é uma oportunidade real de aplicar conhecimento técnico e construir um portfólio sólido na área.",
};

export const projectAreas: ProjectArea[] = [
  {
    id: 1,
    label: "Eletrônica",
    title: "Eletrônica e Sistemas Embarcados",
    text: "Projetamos hardware e firmware para CubeSats e estações terrenas, integrando sensores, microcontroladores e sistemas de bordo. É a base física das nossas missões, aplicando na prática conceitos de engenharia eletrônica e aeroespacial.",
  },
  {
    id: 2,
    label: "Divulgação",
    title: "Divulgação Científica e Educação",
    text: "Levamos a ciência aeroespacial ao público em eventos como Expofavela, DroneShow, Campus Party, OpenUniverse e a Copa Centro-Oeste de Foguetes, democratizando o conhecimento e inspirando novas gerações de cientistas e engenheiros.",
  },
  {
    id: 3,
    label: "Software",
    title: "Software e Algoritmos",
    text: "Desenvolvemos o software que dá vida às missões: firmware de voo, ferramentas de simulação e algoritmos de controle e processamento embarcado, além do ferramental de apoio a projetos e análises do núcleo.",
  },
  {
    id: 4,
    label: "Dados",
    title: "Ciência de Dados e IA",
    text: "Coletamos e analisamos dados de satélites com técnicas de ciência de dados e IA, como a estimativa de órbita em pequenos satélites LEO. Esse esforço resultou no artigo \"Orbit estimation in small LEO satellites\", aceito na conferência internacional LAFUSION2024.",
  },
  {
    id: 5,
    label: "Comunicações",
    title: "Comunicações e RF",
    text: "Cuidamos da comunicação com satélites e da radiofrequência, incluindo a estação SatNOGS construída em parceria com a ABC (Amigos do Brasil Central), que recebe sinais de satélites em órbita e integra a rede global de estações terrenas.",
  },
  {
    id: 6,
    label: "Astronomia",
    title: "Astronomia e Observação Espacial",
    text: "Realizamos observações astronômicas e do espaço, frente que já levou a descobertas de asteroides reconhecidas pelo MCTI e aproxima os membros da astronomia observacional aplicada.",
  },
];

// area referencia o id da area em projectAreas:
// 1 Eletronica e Sistemas Embarcados | 2 Divulgacao Cientifica e Educacao
// 3 Software e Algoritmos | 4 Ciencia de Dados e IA
// 5 Comunicacoes e RF | 6 Astronomia e Observacao Espacial
export const projectItems: ProjectItem[] = [
  {
    title: "Equipe Millenium — 1ª OBSAT",
    description:
      "Formada por alunos de Engenharia de Computação da UFG sob supervisão do Professor Aldo Diaz (INF), teve como missão o estudo de anomalias magnéticas na magnetosfera terrestre. Foi o primeiro projeto do NPA, estabelecendo nossa presença na área aeroespacial.",
    area: 1,
  },
  {
    title: "Equipe Goyasat — 1ª OBSAT",
    description:
      "Formada por alunos de Engenharia Mecânica e de Computação da UFG sob supervisão do Professor Marco Assfalk (EMC), teve como missão o monitoramento remoto de fronteiras do território brasileiro, demonstrando a capacidade interdisciplinar do NPA.",
    area: 4,
  },
  {
    title: "Estação SatNOGS",
    description:
      "Estação terrena de rastreamento de satélites desenvolvida em parceria com a ABC (Amigos do Brasil Central), integrando o NPA à rede global de estações e fortalecendo nossa capacidade de recepção de dados orbitais.",
    area: 5,
  },
  {
    title: "Publicação LAFUSION2024",
    description:
      "Artigo \"Orbit estimation in small LEO satellites: Application and comparison of Kalman filters\", de Débora Eliane Soares de Souza Batista e Aldo André Diaz Salazar, aceito na conferência internacional LAFUSION2024.",
    area: 4,
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/assets/proj-img1.jpg", alt: "Imagem de satélite" },
  { src: "/assets/proj-img2.jpg", alt: "Nebulosa" },
  { src: "/assets/proj-img3.jpg", alt: "Eclipse" },
];
