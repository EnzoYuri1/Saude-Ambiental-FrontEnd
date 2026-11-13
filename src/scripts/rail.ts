/**
 * Trilho fixo de navegação das seções de serviço (ex.: "01 / 06" + pontos).
 * Detecta a seção centralizada na tela via scroll com rAF (throttle).
 */
export function initRail(): void {
  const rail = document.querySelector<HTMLElement>("[data-rail]");
  const sections = [...document.querySelectorAll<HTMLElement>("[data-rail-section]")];
  if (!rail || sections.length === 0) return;

  const current = rail.querySelector<HTMLElement>("[data-rail-current]");
  const total = rail.querySelector<HTMLElement>("[data-rail-total]");
  const dots = [...rail.querySelectorAll<HTMLButtonElement>("[data-rail-dot]")];

  if (total) total.textContent = PAD(sections.length);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      sections[i]?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    });
  });

  let scheduled = false;

  const update = (): void => {
    scheduled = false;
    const mid = window.innerHeight * 0.5;
    const activeIndex = sections.findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= mid && rect.bottom > mid;
    });

    rail.classList.toggle("shown", activeIndex >= 0);
    if (activeIndex < 0) return;

    if (current) current.textContent = PAD(activeIndex + 1);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
      if (i === activeIndex) dot.setAttribute("aria-current", "step");
      else dot.removeAttribute("aria-current");
    });
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", update);
  update();
}

const PAD = (n: number) => String(n).padStart(2, "0");
