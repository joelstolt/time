import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GolvvardContent from "@/components/GolvvardContent";
export const metadata = {
  title: "Golvvård Stockholm | Alla golvtyper | Timeout Service",
  description: "Professionell golvvård i Stockholm. Trä, linoleum, marmor, sten och plast. 35 års erfarenhet, miljömärkta produkter. Kostnadsfri konsultation.",
  openGraph: { title: "Golvvård Stockholm | Timeout Service", description: "Golvvård för alla golvtyper i Stockholm." },
};
export default function Golvvard() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Golvvård", item: "https://timeoutservice.se/golvvard" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Golvvård Stockholm", description: "Professionell golvvård för alla golvtyper i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Golvvård" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Blir golven hala efter golvvård?", acceptedAnswer: { "@type": "Answer", text: "Nej, optimalt halkskydd i toppskiktet minimerar halkolyckor." } },
      { "@type": "Question", name: "Hur ofta bör golven behandlas?", acceptedAnswer: { "@type": "Answer", text: "Beror på golvtyp och slitage. Vi gör en behovsanalys innan start." } },
    ]},
  ];
  return (<>{schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><GolvvardContent /><Footer /></>);
}
