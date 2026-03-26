import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlyttstadningForetagContent from "@/components/FlyttstadningForetagContent";

export const metadata = {
  title: "Flyttstädning företag Stockholm | Kontor & Lokaler | Timeout Service",
  description:
    "Flyttstädning för företag i Stockholm. Garanti, fast pris, allt material ingår. Ingen underleverantör. Kostnadsfritt platsbesök. Boka idag!",
  openGraph: { title: "Flyttstädning företag Stockholm | Timeout Service", description: "Flyttstädning för kontor och lokaler. Garanti och fast pris." },
};

export default function FlyttstadningForetag() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Flyttstädning företag", item: "https://timeoutservice.se/flyttstadning-foretag" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Flyttstädning företag Stockholm",
      description: "Flyttstädning för kontor och företagslokaler i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Flyttstädning företag" },
  ];
  return (
    <>{schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><FlyttstadningForetagContent /><Footer /></>
  );
}
