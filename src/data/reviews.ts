/**
 * Depoimentos (PLACEHOLDERS ilustrativos, como no layout original).
 * Substituir por avaliações reais — mesmo formato.
 */
export interface Review {
  tag: string;
  quote: string;
  person: string;
  context: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    tag: "CONTROLE DE PRAGAS",
    quote: "Atendimento atencioso e orientações claras sobre os cuidados com o ambiente.",
    person: "Depoimento ilustrativo",
    context: "Residência · exemplo",
    stars: 5,
  },
  {
    tag: "LIMPEZA DE RESERVATÓRIOS",
    quote: "Equipe organizada durante a limpeza e cuidadosa com o local.",
    person: "Depoimento ilustrativo",
    context: "Condomínio · exemplo",
    stars: 5,
  },
  {
    tag: "PERFURAÇÃO E LIMPEZA DE POÇO",
    quote: "Recebemos explicações sobre o serviço e os próximos cuidados com o poço.",
    person: "Depoimento ilustrativo",
    context: "Empresa · exemplo",
    stars: 5,
  },
  {
    tag: "DESCUPINIZAÇÃO",
    quote: "A equipe avaliou o problema e explicou o tratamento proposto.",
    person: "Depoimento ilustrativo",
    context: "Residência · exemplo",
    stars: 5,
  },
  {
    tag: "FUMACÊ",
    quote: "O atendimento foi organizado e recebemos orientações antes da execução.",
    person: "Depoimento ilustrativo",
    context: "Estabelecimento comercial · exemplo",
    stars: 5,
  },
];

export const reviewsNote =
  "Exemplos ilustrativos para apresentação do layout. Serão substituídos por avaliações reais.";
