/**
 * Clientes e parceiros — NOMES FICTÍCIOS (placeholder, sem marcas reais).
 * Ao substituir pelas marcas verdadeiras, adicione os arquivos em
 * `src/assets/images/partners/` e troque este arquivo por objetos com `image`.
 */
export interface Partner {
  name: string;
  /** Classe de forma do pseudo-logo (círculo, quadrado, gota) para variar o visual. */
  shape: "circle" | "square" | "drop";
}

export const partners: Partner[] = [
  { name: "Residencial Aurora", shape: "circle" },
  { name: "Condomínio Jardim Ipê", shape: "square" },
  { name: "Hotel Vale Verde", shape: "drop" },
  { name: "Colégio Semente", shape: "square" },
  { name: "Supermercado Bom Fruto", shape: "circle" },
  { name: "Clínica Vida Mais", shape: "drop" },
  { name: "Sabor da Terra", shape: "square" },
  { name: "MetalFor Indústria", shape: "circle" },
  { name: "Água Viva Distribuidora", shape: "drop" },
  { name: "Academia Movimento", shape: "square" },
];

export const partnersHeading = {
  eyebrow: "CONFIANÇA QUE NOS CONECTA",
  title: "Clientes e parceiros",
};
