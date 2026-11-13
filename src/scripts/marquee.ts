/**
 * Controle de marquês pausável (parceiros, avaliações).
 * A seção recebe `[data-paused]`; o CSS cuida de parar a animação.
 */
export function initMarquee(section: HTMLElement): void {
  const button = section.querySelector<HTMLButtonElement>("[data-marquee-pause]");
  if (!button) return;

  const pauseText = button.dataset.pauseText ?? "Pausar";
  const playText = button.dataset.playText ?? "Reproduzir";
  const subject = button.dataset.subject ?? "";
  const motion = matchMedia("(prefers-reduced-motion: reduce)");

  let paused = motion.matches;

  // Definido após o guard para manter a estreiteza de tipos no closure.
  const sync = (): void => {
    section.toggleAttribute("data-paused", paused);
    button.textContent = paused ? playText : pauseText;
    button.setAttribute("aria-pressed", String(paused));
    button.setAttribute("aria-label", `${paused ? "Reproduzir" : "Pausar"} ${subject}`.trim());
  };

  button.addEventListener("click", () => {
    paused = !paused;
    sync();
  });

  motion.addEventListener("change", (event) => {
    paused = event.matches;
    sync();
  });

  sync();
}
