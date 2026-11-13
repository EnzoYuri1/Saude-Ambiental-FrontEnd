import { images } from "@/data/images";
import type { ImageMetadata } from "astro";

/** Slides internos de um serviço (carrossel de temas dentro da seção). */
export interface ServiceSlide {
  name: string;
  category: string;
  description: string;
  /** Item da lista "Como funciona" deste slide. */
  how: string;
  image: ImageMetadata;
  /** object-position da foto, quando o padrão "center" não for o ideal. */
  position?: string;
}

export interface Service {
  /** Slug estável — usado em id de âncora e chaves. */
  id: string;
  /** Rótulo curto (fora do layout principal, uso futuro). */
  tab: string;
  category: string;
  title: string;
  description: string;
  details: string[];
  image: ImageMetadata;
  /** Texto alternativo da foto de fundo. */
  alt: string;
  /** Quando presente, a seção vira um carrossel de temas. */
  slides?: ServiceSlide[];
}

export const services: Service[] = [
  {
    id: "controle-de-pragas",
    tab: "Controle de pragas",
    category: "PREVENÇÃO E CONTROLE",
    title: "Controle de pragas",
    description:
      "Soluções para prevenir e controlar pragas em residências, condomínios e empresas, conforme as características de cada ambiente.",
    details: [
      "Avaliação das condições do local",
      "Tratamento conforme a praga identificada",
      "Orientações de prevenção e acompanhamento",
    ],
    image: images.services.pulverizacao,
    alt: "Técnico aplicando controle de pragas no ambiente",
    slides: [
      {
        name: "Controle de pragas",
        category: "PREVENÇÃO E CONTROLE",
        description:
          "Soluções para prevenir e controlar pragas em residências, condomínios e empresas, conforme as características de cada ambiente.",
        how: "Avaliação do local e escolha dos métodos conforme a necessidade.",
        image: images.pests.pulverizacao,
      },
      {
        name: "Desratização",
        category: "CONTROLE DE ROEDORES",
        description:
          "Controle de ratos e camundongos, com identificação de sinais de atividade e pontos de acesso.",
        how: "Inspeção, escolha de dispositivos adequados e acompanhamento dos pontos monitorados.",
        image: images.pests.desratizacao,
      },
      {
        name: "Descupinização",
        category: "CONTROLE DE CUPINS",
        description:
          "Tratamento de infestações de cupins em madeira ou em estruturas, conforme a espécie e o local.",
        how: "Avaliação dos focos e definição do tratamento indicado para cada situação.",
        image: images.pests.descupinizacao,
      },
      {
        name: "Desinsetização",
        category: "CONTROLE DE INSETOS",
        description:
          "Controle de insetos como baratas, formigas e outras pragas presentes no ambiente.",
        how: "Identificação da praga e aplicação de métodos adequados aos focos e abrigos.",
        image: images.pests.desinsetizacao,
      },
      {
        name: "Fumacê",
        category: "CONTROLE DE INSETOS VOADORES",
        description:
          "Aplicação por nebulização para situações em que esse método é tecnicamente indicado.",
        how: "Avaliação do ambiente e execução com equipamento apropriado e orientações de segurança.",
        image: images.pests.fumace,
      },
      {
        name: "Pulverização",
        category: "APLICAÇÃO DIRECIONADA",
        description:
          "Aplicação de produto por pulverização em locais indicados pela avaliação técnica.",
        how: "Tratamento direcionado a pontos de abrigo, passagem ou ocorrência das pragas.",
        image: images.pests.pulverizacao,
      },
      {
        name: "Polvilhamento",
        category: "TRATAMENTO DE FRESTAS",
        description: "Aplicação técnica de formulação em pó em pontos específicos e protegidos.",
        how: "Avaliação de frestas e abrigos, com uso controlado conforme indicação do produto.",
        image: images.pests.polvilhamento,
      },
      {
        name: "Aplicação de gel",
        category: "ISCAGEM PARA INSETOS",
        description:
          "Uso de iscas em gel para o controle de pragas como baratas e formigas, conforme indicação.",
        how: "Pequenos pontos de aplicação em locais estratégicos, seguidos de avaliação da atividade.",
        image: images.pests.gel,
      },
      {
        name: "Porta-isca",
        category: "MONITORAMENTO DE ROEDORES",
        description:
          "Dispositivos protegidos para apoiar o controle e o monitoramento de roedores.",
        how: "Posicionamento em pontos estratégicos e inspeções conforme o plano de atendimento.",
        image: images.pests.desratizacao,
      },
      {
        name: "Barreira química",
        category: "PROTEÇÃO DO PERÍMETRO",
        description:
          "Tratamento químico em áreas definidas para auxiliar a prevenção ou o controle de pragas.",
        how: "Avaliação técnica do perímetro e aplicação conforme a praga, o ambiente e o produto indicado.",
        image: images.pests.pulverizacao,
      },
      {
        name: "Barreira física",
        category: "PREVENÇÃO DE ACESSOS",
        description:
          "Uso de telas, vedações e outras soluções físicas para dificultar a entrada de pragas.",
        how: "Identificação de aberturas e instalação de proteção compatível com o local.",
        image: images.pests.barreiraFisica,
      },
      {
        name: "Armadilhas",
        category: "CAPTURA E MONITORAMENTO",
        description:
          "Dispositivos para monitorar ou capturar pragas, escolhidos conforme o ambiente e o objetivo.",
        how: "Instalação em pontos estratégicos, inspeção e registro da atividade encontrada.",
        image: images.pests.armadilhas,
      },
    ],
  },
  {
    id: "limpeza-de-reservatorios",
    tab: "Reservatórios",
    category: "HIGIENIZAÇÃO DA ÁGUA",
    title: "Limpeza de reservatórios",
    description:
      "Limpeza e desinfecção de caixas d’água e reservatórios, com planejamento para o acesso, a execução e o retorno ao uso.",
    details: [
      "Remoção de resíduos acumulados",
      "Limpeza e desinfecção conforme o escopo",
      "Orientações para conservação do reservatório",
    ],
    image: images.services.caixaDagua,
    alt: "Limpeza e higienização de caixa d’água",
    slides: [
      {
        name: "Limpeza de caixa d’água",
        category: "HIGIENIZAÇÃO DA ÁGUA",
        description:
          "Limpeza e desinfecção de caixas d’água, com remoção de resíduos e orientação para retorno seguro ao uso.",
        how: "Escovação, retirada de sujidades e desinfecção conforme a necessidade do reservatório.",
        image: images.services.caixaDagua,
      },
      {
        name: "Limpeza de bebedouro",
        category: "BEBEDOUROS E PONTOS DE CONSUMO",
        description:
          "Higienização de bebedouros e pontos de água para manter o consumo mais seguro em empresas, escolas e condomínios.",
        how: "Limpeza técnica das superfícies, componentes e área de uso, com cuidado para não contaminar o ponto de consumo.",
        image: images.gallery.bebedouro,
      },
      {
        name: "Limpeza de cisterna",
        category: "CISTERNAS RESIDENCIAIS",
        description:
          "Limpeza de cisternas com atenção ao acesso, à retirada de resíduos e à conservação da estrutura.",
        how: "Remoção de material acumulado, lavagem das paredes e orientação para conservação do reservatório.",
        image: images.gallery.cisterna,
      },
      {
        name: "Limpeza de fachada",
        category: "LAVAGEM TÉCNICA",
        description:
          "Limpeza de fachadas e áreas externas com equipe equipada para serviços em altura e superfícies expostas.",
        how: "Avaliação do local, isolamento da área e execução com equipamentos adequados ao tipo de superfície.",
        image: images.gallery.fachada,
        position: "center 42%",
      },
    ],
  },
  {
    id: "poco",
    tab: "Poços",
    category: "CUIDADO COM A CAPTAÇÃO",
    title: "Perfuração e limpeza de poço",
    description:
      "Perfuração, limpeza e conservação de poços, com avaliação das condições do local, da estrutura e do sistema de captação.",
    details: [
      "Avaliação das condições do poço",
      "Planejamento do procedimento",
      "Definição da documentação na proposta",
    ],
    image: images.services.poco,
    alt: "Perfuração de poço com equipe técnica",
  },
  {
    id: "eta",
    tab: "ETA",
    category: "TRATAMENTO DE ÁGUA",
    title: "Estação de tratamento de água",
    description:
      "Serviços para estações de tratamento de água, com avaliação das necessidades de limpeza, conservação e acompanhamento do sistema.",
    details: [
      "Avaliação das instalações",
      "Escopo ajustado à estação",
      "Orientações de conservação e monitoramento",
    ],
    image: images.services.eta,
    alt: "Técnico inspecionando estação de tratamento de água",
  },
  {
    id: "ete",
    tab: "ETE",
    category: "TRATAMENTO DE ESGOTO",
    title: "Estação de tratamento de esgoto",
    description:
      "Limpeza e conservação de estações de tratamento de esgoto, com atenção às condições operacionais e às necessidades de cada instalação.",
    details: [
      "Avaliação do sistema",
      "Planejamento do atendimento",
      "Acompanhamento conforme o serviço contratado",
    ],
    image: images.services.ete,
    alt: "Trabalhador em estação de tratamento de esgoto",
  },
  {
    id: "analise-de-agua",
    tab: "Análise de água",
    category: "CONHEÇA A QUALIDADE DA SUA ÁGUA",
    title: "Análise de água",
    description:
      "Avaliação da qualidade da água por meio de análise, com definição dos parâmetros e do procedimento de coleta conforme a finalidade.",
    details: [
      "Definição do tipo de análise",
      "Orientações para a coleta",
      "Resultados para apoiar a avaliação técnica",
    ],
    image: images.services.analiseAgua,
    alt: "Análise de qualidade da água em laboratório",
  },
];

/** Imagens em destaque no carrossel do hero, na ordem de exibição. */
export const heroSlides = [
  { name: "Limpeza de caixa d’água", image: images.services.caixaDagua },
  { name: "Controle de pragas", image: images.services.pulverizacao },
  { name: "Limpeza de bebedouro", image: images.gallery.bebedouro },
  { name: "Perfuração e limpeza de poço", image: images.services.poco },
  { name: "Limpeza de cisterna", image: images.gallery.cisterna },
  { name: "Limpeza de fachada", image: images.gallery.fachada },
] as const;
