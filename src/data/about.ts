import { site } from "@/data/site";

/**
 * Conteúdo da seção "Sobre nós".
 * O texto é interpolado com `site.brand` para que a troca de marca
 * reflita aqui automaticamente.
 */
export const about = {
  eyebrow: "SOBRE NÓS",
  titleLine1: `Somos a ${site.brand.short}.`,
  titleLine2: "Cuidar é a nossa essência.",
  paragraphs: [
    `A ${site.brand.short} nasceu de uma ideia simples: cuidar dos ambientes é também cuidar das pessoas. Foi com esse olhar, atento às necessidades de cada cliente, que começamos a construir nossa história.`,
    "A cada novo desafio, ampliamos esse cuidado. Hoje, reunimos soluções para controle de pragas, higienização de reservatórios, poços e tratamento de água e esgoto, conectando saúde ambiental à rotina de residências, condomínios e empresas.",
  ],
  purposeLine1: "Cuidamos do que é essencial:",
  purposeStrong: "pessoas, ambientes e o futuro.",
  cta: { href: "#servicos", label: "Conheça nossas soluções" },
  facts: [
    { value: "+5", unit: "anos", label: "de experiência e cuidado" },
    { value: "2", unit: "unidades", label: "mais próximas de você" },
    { value: "+500", unit: "clientes", label: "relações de confiança" },
  ],
  purposeFact: {
    title: "Nosso propósito",
    text: "Promover saúde e qualidade de vida, protegendo pessoas e o meio ambiente.",
  },
} as const;
