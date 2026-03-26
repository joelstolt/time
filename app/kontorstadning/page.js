import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontorstadningContent from "@/components/KontorstadningContent";

export const metadata = {
  title: "Kontorstädning Stockholm | Från 300 kr/h | Timeout Service",
  description:
    "Professionell kontorstädning i Stockholm. Samma städare, ingen bindningstid, nöjd-kund-garanti. Dag, kväll och helg. Från 300 kr/h exkl. moms. Kostnadsfritt möte.",
  openGraph: { title: "Kontorstädning Stockholm | Timeout Service", description: "Kontorstädning i Stockholm. Flexibla tider, fast pris, ingen bindningstid." },
};

export default function Kontorstadning() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Kontorstädning", item: "https://timeoutservice.se/kontorstadning" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Kontorstädning Stockholm",
      description: "Professionell kontorstädning i Stockholm med fast pris och nöjd-kund-garanti.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Kontorstädning",
      offers: { "@type": "Offer", priceCurrency: "SEK", price: "300", description: "Från-pris per timme exkl. moms" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "Kostar kontorstädning extra på kvällar och helger?", acceptedAnswer: { "@type": "Answer", text: "Priset varierar beroende på tid: dagtid (07-17), kväll (18-06) och helg har olika priser." } },
      { "@type": "Question", name: "Har ni bindningstid?", acceptedAnswer: { "@type": "Answer", text: "Nej, vi har ingen bindningstid. 2 månaders uppsägningstid gäller." } },
    ]},
  ];
  return (
    <>{schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><KontorstadningContent /><Footer /></>
  );
}
