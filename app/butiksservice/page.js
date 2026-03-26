import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButiksserviceContent from "@/components/ButiksserviceContent";

export const metadata = {
  title: "Butiksservice Stockholm | Städning, Fönsterputs & Golvvård | Timeout Service",
  description:
    "Komplett butiksservice i Stockholm. Butiksstädning, fönsterputs och golvvård 7 dagar i veckan. Rabatt vid kombination. Kostnadsfritt kundbesök.",
  openGraph: {
    title: "Butiksservice Stockholm | Timeout Service",
    description: "Komplett butiksservice: städning, fönsterputs och golvvård. 7 dagar i veckan.",
  },
};

export default function Butiksservice() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Butiksservice", item: "https://timeoutservice.se/butiksservice" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Butiksservice Stockholm",
      description: "Komplett butiksservice i Stockholm: butiksstädning, fönsterputs och golvvård.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Butiksservice" },
  ];
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <Header /><ButiksserviceContent /><Footer />
    </>
  );
}
