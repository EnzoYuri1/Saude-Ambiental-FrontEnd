/**
 * Gera placeholders SVG neutros para `src/assets/images/`.
 *
 * Servem enquanto as fotos reais não entram (portfólio sem marca).
 * Quando as fotos definitivas forem adicionadas com os MESMOS nomes de arquivo
 * (extensão .jpg/.png/.webp), atualize apenas `src/data/images.ts` — o resto do
 * site não muda.
 *
 * Uso: node scripts/generate-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const outBase = join(rootDir, "src", "assets", "images");

const W = 1600;
const H = 1000;

/** Ícones em grade 24×24 (stroke). Pictogramas simples e neutros. */
const ICONS = {
  drop: ["M12 3C12 3 6 10.5 6 15a6 6 0 0 0 12 0C18 10.5 12 3 12 3Z"],
  spray: ["M9 11h6v9H9z", "M10 8h4v3h-4z", "M14 9l3-2.5", "M19 4.5h.01M20.5 6.5h.01M19.5 8.5h.01"],
  tank: [
    "M5 9h14v11H5z",
    "M8 14q2 -1.8 4 0t4 0",
    "M12 5.5C12 5.5 10 8 10 9.5h4C14 8 12 5.5 12 5.5Z",
  ],
  rig: ["M6 21L12 4l6 17", "M9 14h6", "M8 17.5h8", "M12 4V2.5"],
  funnel: ["M6 5h12l-4.5 6v6.5h-3V11L6 5Z", "M9 21h6"],
  recycle: [
    "M7 9a5.5 5.5 0 0 1 9.5-2.5",
    "M17 15a5.5 5.5 0 0 1-9.5 2.5",
    "M16 3v3.5h-3.5",
    "M8 21v-3.5h3.5",
  ],
  flask: [
    "M10 3h4",
    "M11 3v5.2L6.2 17a2.6 2.6 0 0 0 2.3 3.8h7a2.6 2.6 0 0 0 2.3-3.8L13 8.2V3",
    "M8.5 15h7",
  ],
  fountain: ["M8 21h8", "M9 21v-5h6v5", "M12 4v5.5q0 2.5-1.5 4", "M12 4a2 2 0 0 1 2 2"],
  cistern: [
    "M5 7a7 2.6 0 0 1 14 0v10a7 2.6 0 0 1-14 0Z",
    "M5 7a7 2.6 0 0 0 14 0",
    "M5 12a7 2.6 0 0 0 14 0",
  ],
  building: ["M6 21V4h12v17", "M6 21h12", "M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"],
  baitbox: ["M5 10h14v9H5z", "M9 7.5h6V10H9z", "M8.5 14.5h3"],
  termite: [
    "M5 8.5h14",
    "M5 12h14",
    "M5 15.5h14",
    "M9.5 12a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 0 0-3.2 0",
  ],
  bug: [
    "M12 8a4 3.6 0 0 1 4 3.6v2.8A4 3.6 0 0 1 12 18a4 3.6 0 0 1-4-3.6v-2.8A4 3.6 0 0 1 12 8Z",
    "M8 11L4.5 9.5M8 14H4.5M8.5 16.5L5.5 18.5",
    "M16 11l3.5-1.5M16 14h3.5M15.5 16.5l3 2",
    "M10.5 7.5L9 5M13.5 7.5L15 5",
  ],
  cloud: [
    "M6.5 15.5a4 4 0 0 1 .3-8A5.4 5.4 0 0 1 17 6.6a4.3 4.3 0 0 1 2.5 8.4",
    "M8 19h.01M12 20.5h.01M16 19h.01",
  ],
  duster: ["M14 21L9.5 10.5", "M8 8a3.2 3.2 0 1 1 4 3", "M17 5.5h.01M19.5 8h.01M17.5 10.5h.01"],
  gel: ["M7 10h10v8H7z", "M10 6h4v4h-4z", "M11 13.5h3"],
  mesh: ["M5 5h14v14H5z", "M9.7 5v14M14.3 5v14M5 9.7h14M5 14.3h14"],
  trap: [
    "M8 6h8l1.5 3.5h-11z",
    "M12 12v2",
    "M9.5 13.5h.01M14.5 13.5h.01M12 17h.01M8 16h.01M16 16h.01",
  ],
};

const FILES = {
  "services/pulverizacao": "spray",
  "services/caixa-dagua": "tank",
  "services/poco": "rig",
  "services/eta": "funnel",
  "services/ete": "recycle",
  "services/analise-agua": "flask",
  "gallery/bebedouro": "fountain",
  "gallery/cisterna": "cistern",
  "gallery/fachada": "building",
  "pests/desratizacao": "baitbox",
  "pests/descupinizacao": "termite",
  "pests/desinsetizacao": "bug",
  "pests/fumace": "cloud",
  "pests/polvilhamento": "duster",
  "pests/gel": "gel",
  "pests/barreira-fisica": "mesh",
  "pests/armadilhas": "trap",
};

function svg(iconPaths) {
  const body = iconPaths.map((d) => `<path d="${d}"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Imagem ilustrativa">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#12324e"/>
      <stop offset="1" stop-color="#1b6943"/>
    </linearGradient>
    <pattern id="p" width="90" height="90" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="45" height="90" fill="#ffffff" opacity="0.03"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#p)"/>
  <circle cx="800" cy="470" r="310" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2.5"/>
  <g transform="translate(800 470) scale(21) translate(-12 -12)" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round">${body}</g>
</svg>
`;
}

for (const [file, icon] of Object.entries(FILES)) {
  const out = join(outBase, `${file}.svg`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, svg(ICONS[icon]), "utf8");
  console.log("gerado:", file);
}
console.log(`\n${Object.keys(FILES).length} placeholders criados em src/assets/images/`);
