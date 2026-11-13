/**
 * Ponto único de montagem do JavaScript do cliente.
 * Todo o conteúdo já existe no HTML (SSR) — os scripts apenas adicionam
 * comportamento (progressive enhancement).
 */
import { initShowcase } from "@/scripts/showcase";
import { initMarquee } from "@/scripts/marquee";
import { initReveal } from "@/scripts/reveal";
import { initMenu } from "@/scripts/menu";
import { initRail } from "@/scripts/rail";
import { initQuoteForm } from "@/scripts/quote-form";

function mount(): void {
  document.querySelectorAll<HTMLElement>("[data-showcase]").forEach(initShowcase);
  document.querySelectorAll<HTMLElement>("[data-marquee]").forEach(initMarquee);
  initReveal();
  initMenu();
  initRail();
  initQuoteForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
