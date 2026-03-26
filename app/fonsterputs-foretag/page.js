import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FonsterputsForetagContent from "@/components/FonsterputsForetagContent";

export const metadata = {
  title: "Fönsterputs företag Stockholm | Kontor & Fastigheter | Timeout Service",
  description:
    "Professionell fönsterputs för företag i Stockholm. Kontor, fastigheter och industri. 35 års erfarenhet, liftcertifikat, nöjd-kund-garanti. Kostnadsfritt platsbesök.",
  openGraph: {
    title: "Fönsterputs företag Stockholm | Timeout Service",
    description: "Fönsterputs för kontor och fastigheter i Stockholm. Kostnadsfritt platsbesök.",
  },
};

export default function FonsterputsForetag() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Fönsterputs företag", item: "https://timeoutservice.se/fonsterputs-foretag" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Fönsterputs företag Stockholm",
      description: "Professionell fönsterputs för kontor och fastigheter i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Fönsterputs företag" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Vilken lägsta temperatur putsar ni fönster i?", acceptedAnswer: { "@type": "Answer", text: "Vi putsar fönster ner till -16°C." } },
      { "@type": "Question", name: "Kan ni putsa fönster medan kontoret är bemannat?", acceptedAnswer: { "@type": "Answer", text: "Ja, om fönstren är åtkomliga och området runt fönstren är framkomligt." } },
    ]},
  ];
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Header /><FonsterputsForetagContent /><Footer />
    </>
  );
}
