import { site } from "@/data/site";
import { services } from "@/data/services";

/**
 * JSON-LD de negócio local — importante para SEO regional do nicho.
 * Quando a marca e o endereço reais existirem, completer com
 * `address`, `geo` e `openingHoursSpecification`.
 */
export function localBusinessJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand.fullName,
    description: site.meta.description,
    slogan: site.brand.tagline,
    areaServed: site.contact.city,
    telephone: site.contact.whatsapp,
    url: "https://example.com",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  };
}
