import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StorstadningForetagContent from "@/components/StorstadningForetagContent";

export const metadata = {
  title: "Storstädning företag Stockholm | Kontor & Lokaler | Timeout Service",
  description:
    "Storstädning för företag i Stockholm. Djuprengöring av kontor och lokaler. Allt material ingår, klart på en dag. Kostnadsfri offert. 35 års erfarenhet.",
  openGraph: { title: "Storstädning företag Stockholm | Timeout Service", description: "Storstädning för kontor och lokaler i Stockholm. Allt material ingår." },
};

export default function StorstadningForetag() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Storstädning företag", item: "https://timeoutservice.se/storstadning-foretag" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Storstädning företag Stockholm",
      description: "Djuprengöring av kontor och företagslokaler i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Storstädning företag" },
  ];
  return (
    <>{schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><StorstadningForetagContent /><Footer /></>
  );
}
