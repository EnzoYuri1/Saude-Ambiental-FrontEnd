// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// TODO(portfólio): troque `site` pelo domínio real antes de publicar.
// O sitemap e as URLs canônicas dependem dele.
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
