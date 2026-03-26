import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FonsterputsButikContent from "@/components/FonsterputsButikContent";

export const metadata = {
  title: "Fönsterputs butik Stockholm | Skyltfönster från 250 kr | Timeout Service",
  description:
    "Fönsterputs för butiker och restauranger i Stockholm. Skyltfönster från 250 kr/tillfälle. Vecko-, varannan vecka- eller månadsservice. 35 års erfarenhet.",
  openGraph: {
    title: "Fönsterputs butik Stockholm | Timeout Service",
    description: "Fönsterputs för butiker i Stockholm. Skyltfönster från 250 kr/tillfälle.",
  },
};

export default function FonsterputsButik() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Fönsterputs butik", item: "https://timeoutservice.se/fonsterputs-butik" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Fönsterputs butik Stockholm",
      description: "Fönsterputs för butiker och restauranger i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Fönsterputs butik",
      offers: { "@type": "Offer", priceCurrency: "SEK", price: "250", description: "Från-pris per tillfälle exkl. moms" } },
  ];
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Header /><FonsterputsButikContent /><Footer />
    </>
  );
}
