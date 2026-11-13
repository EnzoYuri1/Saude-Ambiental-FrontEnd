import type { ImageMetadata } from "astro";

import pulverizacao from "@/assets/images/services/pulverizacao.svg";
import caixaDagua from "@/assets/images/services/caixa-dagua.svg";
import poco from "@/assets/images/services/poco.svg";
import eta from "@/assets/images/services/eta.svg";
import ete from "@/assets/images/services/ete.svg";
import analiseAgua from "@/assets/images/services/analise-agua.svg";
import bebedouro from "@/assets/images/gallery/bebedouro.svg";
import cisterna from "@/assets/images/gallery/cisterna.svg";
import fachada from "@/assets/images/gallery/fachada.svg";
import desratizacao from "@/assets/images/pests/desratizacao.svg";
import descupinizacao from "@/assets/images/pests/descupinizacao.svg";
import desinsetizacao from "@/assets/images/pests/desinsetizacao.svg";
import fumace from "@/assets/images/pests/fumace.svg";
import polvilhamento from "@/assets/images/pests/polvilhamento.svg";
import gel from "@/assets/images/pests/gel.svg";
import barreiraFisica from "@/assets/images/pests/barreira-fisica.svg";
import armadilhas from "@/assets/images/pests/armadilhas.svg";

/**
 * Registro único de imagens do site.
 *
 * TODO(conteúdo real): substitua os `.svg` por fotos `.jpg`/`.png`/`.webp` com os
 * MESMOS nomes em `src/assets/images/` e atualize os imports deste arquivo.
 * Nenhum componente importa imagens diretamente — sempre via este registro.
 */
export const images = {
  services: {
    pulverizacao,
    caixaDagua,
    poco,
    eta,
    ete,
    analiseAgua,
  },
  gallery: {
    pulverizacao: pulverizacao as ImageMetadata,
    bebedouro,
    cisterna,
    fachada,
  },
  pests: {
    pulverizacao: pulverizacao as ImageMetadata,
    desratizacao,
    descupinizacao,
    desinsetizacao,
    fumace,
    polvilhamento,
    gel,
    barreiraFisica,
    armadilhas,
  },
} as const;
