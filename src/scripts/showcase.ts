/**
 * Motor genérico de "showcase": slides empilhados com crossfade + painéis de
 * conteúdo opcionais. Um único módulo atende hero e as seções de serviço com
 * carrossel interno (controle de pragas, reservatórios) — sem duplicação.
 *
 * Contrato de DOM (atributos data-*), tolerante a omissões:
 *   raiz          [data-showcase] · [data-interval="5000"] · [data-pause-on-hover]
 *   slides        [data-slide] com `data-name` opcional (rótulo atual)
 *   painéis       [data-panel] na mesma ordem dos slides (classe .is-active; o CSS
 *                 empilha os painéis em grid — sem reflow de layout)
 *   disparadores  [data-goto] com índice numérico (chips/dots)
 *   navegação     [data-prev] · [data-next]
 *   pausa         [data-pause] (texto por data-pause-text / data-play-text)
 *   contador      [data-counter] (usa data-total do elemento)
 *   rótulo atual  [data-label]
 *
 * Regras de autoplay: pausa com aba oculta, fora de vista, hover (opcional),
 * foco dentro do componente e prefers-reduced-motion.
 */

const PAD = (n: number) => String(n).padStart(2, "0");

export function initShowcase(root: HTMLElement): void {
  const slides = [...root.querySelectorAll<HTMLElement>("[data-slide]")];
  if (slides.length === 0) return;

  const panels = [...root.querySelectorAll<HTMLElement>("[data-panel]")];
  const triggers = [...root.querySelectorAll<HTMLElement>("[data-goto]")];
  const prevButton = root.querySelector<HTMLElement>("[data-prev]");
  const nextButton = root.querySelector<HTMLElement>("[data-next]");
  const pauseButton = root.querySelector<HTMLElement>("[data-pause]");
  const counter = root.querySelector<HTMLElement>("[data-counter]");
  const label = root.querySelector<HTMLElement>("[data-label]");
  const total = counter?.dataset.total ? Number(counter.dataset.total) : slides.length;

  const intervalMs = Number(root.dataset.interval ?? 5000);
  const pausesOnHover = root.dataset.pauseOnHover !== undefined;

  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let index = 0;
  let paused = motion.matches;
  let visible = true;
  let hovered = false;
  let timer: ReturnType<typeof setInterval> | undefined;

  function setActive(next: number): void {
    index = (next + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    panels.forEach((panel, i) => panel.classList.toggle("is-active", i === index));

    triggers.forEach((trigger, i) => trigger.setAttribute("aria-pressed", String(i === index)));

    if (counter) {
      counter.textContent = `${PAD(index + 1)} / ${PAD(total)}`;
    }
    if (label) {
      label.textContent = slides[index].dataset.name ?? "";
    }
  }

  function next(): void {
    if (
      paused ||
      document.hidden ||
      !visible ||
      (pausesOnHover && hovered) ||
      root.contains(document.activeElement)
    ) {
      return;
    }
    setActive(index + 1);
  }

  function startTimer(): void {
    clearInterval(timer);
    timer = setInterval(next, intervalMs);
  }

  function syncPause(): void {
    if (!pauseButton) return;
    const isPaused = paused;
    pauseButton.textContent = isPaused
      ? (pauseButton.dataset.playText ?? "Reproduzir")
      : (pauseButton.dataset.pauseText ?? "Pausar");
    pauseButton.setAttribute("aria-pressed", String(isPaused));
    pauseButton.setAttribute(
      "aria-label",
      `${isPaused ? "Reproduzir" : "Pausar"} ${pauseButton.dataset.subject ?? "destaques"}`,
    );
  }

  pauseButton?.addEventListener("click", () => {
    paused = !paused;
    syncPause();
    startTimer();
  });

  prevButton?.addEventListener("click", () => {
    setActive(index - 1);
    startTimer();
  });

  nextButton?.addEventListener("click", () => {
    setActive(index + 1);
    startTimer();
  });

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      setActive(Number(trigger.dataset.goto));
      startTimer();
    });
  });

  if (pausesOnHover) {
    root.addEventListener("mouseenter", () => (hovered = true));
    root.addEventListener("mouseleave", () => (hovered = false));
  }

  new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? visible;
  }).observe(root);

  motion.addEventListener("change", (event) => {
    paused = event.matches;
    syncPause();
  });

  setActive(0);
  syncPause();
  startTimer();
}
