# SAA — Saúde Ambiental (portfólio)

Landing page one-page de serviços de saúde ambiental (controle de pragas, reservatórios, poços, ETA/ETE, análise de água), recriada como **exercício de engenharia de front-end**. Marca, fotos e dados são **placeholders neutros** — trocáveis em um único lugar.

## Stack

| Camada     | Escolha                                      | Motivo                                                     |
| ---------- | -------------------------------------------- | ---------------------------------------------------------- |
| Framework  | **Astro 5** (estático)                       | Conteúdo 100% SSR no build, SEO nativo, zero JS por padrão |
| Estilo     | **Tailwind CSS 4** (via Vite)                | Tokens centralizados no `@theme`, sem hex solto            |
| Linguagem  | **TypeScript strict**                        | Contrato do conteúdo: dado faltando quebra o build         |
| JS cliente | Vanilla TS (~2 kB gzip total)                | Progressive enhancement — o site funciona sem JS           |
| Qualidade  | ESLint (flat) + Prettier + `astro check`     | Padrão de código automatizado                              |
| SEO        | JSON-LD `LocalBusiness`, OG, sitemap, robots | Nicho local: descoberta orgânica é o canal principal       |

## Comandos

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento (localhost:4321)
npm run build      # build de produção → dist/
npm run preview    # serve o dist/ localmente
npm run check      # verificação de tipos (astro check)
npm run lint       # eslint
npm run format     # prettier
```

## Estrutura

```
src/
├── assets/images/        # imagens (PLACEHOLDERS SVG gerados por scripts/)
├── data/                 # ★ FONTE ÚNICA DE VERDADE — todo o conteúdo
│   ├── site.ts           #   marca, WhatsApp, metadados, navegação
│   ├── services.ts       #   6 serviços + carrosséis internos + slides do hero
│   ├── reviews.ts        #   depoimentos (ilustrativos)
│   ├── faq.ts            #   perguntas frequentes
│   ├── partners.ts       #   clientes fictícios (placeholder)
│   ├── about.ts          #   texto "Sobre nós" (interpolado com a marca)
│   └── images.ts         #   registro único de imagens
├── layouts/BaseLayout.astro   # <head>, meta/OG, JSON-LD, montagem do JS
├── components/           # organizados por domínio (feature-based)
│   ├── layout/  hero/  about/  partners/  services/  reviews/  faq/  contact/
├── scripts/              # JS do cliente (vanilla TS)
│   ├── showcase.ts       #   motor genérico: hero + carrosséis de serviço
│   ├── marquee.ts  rail.ts  menu.ts  reveal.ts  quote-form.ts
│   └── mount.ts          #   ponto único de montagem
├── lib/
│   ├── whatsapp.ts       # template da mensagem + link wa.me
│   └── seo.ts            # JSON-LD LocalBusiness
├── styles/global.css     # tokens do tema + componentes compartilhados
└── pages/                # index.astro (orquestração) + 404
```

### Regras de dependência

- `pages → components → data/lib` — componentes **nunca** importam dados de outros componentes
- Imagens são importadas **apenas** via `data/images.ts`
- O JS cliente só encontra elementos por `data-*` (contrato documentado em `scripts/showcase.ts`)

## Arquitetura em resumo

1. **Data-driven**: cada seção é um componente genérico alimentado por `src/data/`. Adicionar um serviço = adicionar um objeto; sem tocar em HTML.
2. **Um motor de carrossel**: hero e os dois carrosséis internos das seções de serviço usam o mesmo `initShowcase()` (slides + painéis em grid — sem reflow de layout), com autoplay que respeita aba oculta, área visível, hover, foco e `prefers-reduced-motion`.
3. **Progressive enhancement**: todo o conteúdo existe no HTML estático; `mount.ts` apenas adiciona comportamento.
4. **Acessibilidade**: carrosséis pausáveis com `aria-pressed`, `role="status"` no feedback do formulário, foco visível, `details/summary` nativo no FAQ.
5. **Formulário sem backend**: `quote-form.ts` monta a mensagem e abre `wa.me` (deep-link). Quando houver API oficial do WhatsApp/backend, trocar apenas `lib/whatsapp.ts`.

## Como trocar os placeholders

| O quê                              | Onde                                                                                                                              |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Marca (nome, slogan, contatos)     | `src/data/site.ts` + `src/components/layout/Logo.astro`                                                                           |
| WhatsApp de destino                | `src/contact.whatsapp` em `src/data/site.ts` (formato `55DDDNNNNNNNNN`)                                                           |
| Fotos                              | Substituir os `.svg` de `src/assets/images/` por `.jpg`/`.png` com os mesmos nomes e atualizar os imports em `src/data/images.ts` |
| Domínio (sitemap/canônico/JSON-LD) | `astro.config.mjs`, `src/lib/seo.ts`, `public/robots.txt`                                                                         |
| Parceiros reais                    | `src/data/partners.ts`                                                                                                            |

## TODO antes de publicar de verdade

- [x] Marca real (logo + nome) em `site.ts`/`Logo.astro`
- [ ] Fotos reais dos serviços em `assets/images/`
- [ ] Número real de WhatsApp em `site.ts`
- [ ] Domínio próprio em `astro.config.mjs` + `seo.ts` + `robots.txt`
- [ ] Endereço/GPS no JSON-LD (`address`, `geo`, horários)
- [ ] Avaliações reais em `reviews.ts`
- [ ] Deploy (Cloudflare Pages ou Vercel, ambos gratuitos)
