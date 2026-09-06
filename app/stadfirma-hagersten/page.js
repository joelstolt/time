import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HagerstenContent from "@/components/HagerstenContent";
import { faqsHagersten, omradenHagersten } from "@/components/hagerstenData";

export const metadata = {
  title: "Städfirma Hägersten | Hemstädning, flyttstädning, fönsterputs",
  alternates: { canonical: "/stadfirma-hagersten" },
  description:
    "Städfirma i Hägersten med 35 års erfarenhet och kontor på Terrängvägen. Hemstädning, flyttstädning, fönsterputs och kontorsstädning i Hägersten, Västertorp, Fruängen, Aspudden och Midsommarkransen. RUT-avdrag och nöjd-kund-garanti.",
  openGraph: {
    title: "Städfirma Hägersten | Timeout Service",
    description:
      "Lokal städfirma i Hägersten sedan 35 år. Hemstädning, flyttstädning, fönsterputs och kontorsstädning med fast pris och RUT-avdrag.",
    images: ["/images/staff-kitchen.jpg"],
    type: "website",
  },
};

export default function StadfirmaHagersten() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Städfirma Hägersten", item: "https://www.timeoutservice.se/stadfirma-hagersten" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Städfirma Hägersten",
    description: "Hemstädning, flyttstädning, fönsterputs, storstädning och kontorsstädning i Hägersten med omnejd.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://www.timeoutservice.se" },
    areaServed: omradenHagersten.map((namn) => ({ "@type": "Place", name: namn })),
    serviceType: "Städning",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsHagersten.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <HagerstenContent />
      <Footer />
    </>
  );
}
