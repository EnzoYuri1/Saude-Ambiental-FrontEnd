/**
 * Identidade e parâmetros do site — PONTO DE TROCA DA MARCA.
 * Trocar logo/imagens: `src/components/layout/Logo.astro` + `src/data/images.ts`.
 */
export const site = {
  brand: {
    short: "SAA",
    name: "Saúde Ambiental",
    fullName: "SAA Saúde Ambiental",
    tagline: "Cuidado com a água e com o seu ambiente.",
    /** Texto alternativo da logo (sem marca real por enquanto). */
    logoAlt: "SAA Saúde Ambiental — marca provisória",
  },
  contact: {
    /**
     * PLACEHOLDER — número de WhatsApp em formato internacional, só dígitos.
     * Ex.: 5511999999999 → o formulário abre o wa.me com este destino.
     */
    whatsapp: "5511900000000",
    /** Cidade/UF base de atendimento (usada em SEO e JSON-LD). */
    city: "Sua Cidade/UF",
  },
  meta: {
    description:
      "Controle de pragas, higienização de reservatórios, poços, ETA, ETE e análise de água. Solicite um orçamento.",
  },
} as const;

/** Metadados de navegação principal (âncoras da one-page). */
export const navLinks = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Avaliações" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const ctaLabel = "Solicitar orçamento";
export const contactAnchor = "#contato";
