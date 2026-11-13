/** Menu mobile do cabeçalho: alterna o nav e fecha ao navegar por âncora. */
export function initMenu(): void {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!button || !nav) return;

  // Definidos após o guard para manter a estreiteza de tipos nos closures.
  const setOpen = (open: boolean): void => {
    nav.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  button.addEventListener("click", () => setOpen(!nav.classList.contains("open")));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}
