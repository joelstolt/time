import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MattvattForetagContent from "@/components/MattvattForetagContent";
export const metadata = {
  title: "Mattvätt företag Stockholm | Kontor & BRF | Timeout Service",
  description: "Professionell mattvätt för företag, BRF och fastigheter i Stockholm. På plats hos er. Svanenmärkta produkter. Kostnadsfri offert.",
  openGraph: { title: "Mattvätt företag Stockholm | Timeout Service", description: "Mattvätt för kontor och fastigheter i Stockholm." },
};
export default function MattvattForetag() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Mattvätt företag", item: "https://timeoutservice.se/mattvatt-foretag" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Mattvätt företag Stockholm", description: "Mattvätt för kontor, BRF och fastigheter i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Mattvätt företag" },
  ];
  return (<>{schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><MattvattForetagContent /><Footer /></>);
}
