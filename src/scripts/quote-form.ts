/**
 * Formulário de orçamento: monta a mensagem, exibe o diálogo com o texto
 * pronto, botão de copiar e deep-link de WhatsApp. Sem backend — o envio
 * acontece no WhatsApp do cliente.
 */
import { buildQuoteMessage, whatsappUrl } from "@/lib/whatsapp";

export function initQuoteForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-quote-form]");
  const dialog = document.querySelector<HTMLDialogElement>("[data-quote-dialog]");
  if (!form || !dialog) return;

  const messageField = dialog.querySelector<HTMLTextAreaElement>("[data-quote-message]");
  const copyButton = dialog.querySelector<HTMLButtonElement>("[data-quote-copy]");
  const sendLink = dialog.querySelector<HTMLAnchorElement>("[data-quote-send]");
  const status = dialog.querySelector<HTMLElement>("[data-quote-status]");
  const closeButton = dialog.querySelector<HTMLButtonElement>("[data-quote-close]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);

    const quote = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      city: String(data.get("city") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
    };

    const message = buildQuoteMessage(quote);
    if (messageField) messageField.value = message;
    if (sendLink) sendLink.href = whatsappUrl(message);
    if (status) status.textContent = "";

    dialog.showModal();
  });

  closeButton?.addEventListener("click", () => dialog.close());

  // CTA das seções de serviço: pré-seleciona o serviço no formulário.
  document.querySelectorAll<HTMLElement>("[data-service-cta]").forEach((cta) => {
    cta.addEventListener("click", () => {
      const select = form.querySelector<HTMLSelectElement>('select[name="service"]');
      if (select && cta.dataset.serviceCta) select.value = cta.dataset.serviceCta;
    });
  });

  copyButton?.addEventListener("click", async () => {
    if (!messageField) return;
    try {
      await navigator.clipboard.writeText(messageField.value);
      if (status) status.textContent = "Mensagem copiada!";
    } catch {
      messageField.focus();
      messageField.select();
      if (status) status.textContent = "Selecione o texto e copie para encaminhar.";
    }
  });
}
