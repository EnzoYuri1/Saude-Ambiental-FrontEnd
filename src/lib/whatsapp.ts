import { site } from "@/data/site";

export interface QuoteData {
  name: string;
  phone: string;
  city: string;
  service: string;
  details: string;
}

/** Monta a mensagem de orçamento (mesmo template do layout de referência). */
export function buildQuoteMessage(data: QuoteData): string {
  return [
    `Olá, ${site.brand.short}! Gostaria de solicitar um orçamento.`,
    "",
    `Nome: ${data.name}`,
    `WhatsApp: ${data.phone}`,
    `Cidade: ${data.city}`,
    `Serviço: ${data.service}`,
    "",
    `Detalhes: ${data.details}`,
  ].join("\n");
}

/**
 * Link `wa.me` para o número configurado em `site.contact.whatsapp`.
 * PLACEHOLDER — com o número fictício o link não abrirá conversa real.
 */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Normaliza o telefone para exibição no envio (fallback simples). */
export function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return input.trim();
}
