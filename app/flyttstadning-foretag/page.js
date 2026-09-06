import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlyttstadningForetagContent from "@/components/FlyttstadningForetagContent";

export const metadata = {
  title: "Flyttstädning kontor Stockholm | Fast pris, kostnadsfri offert",
  alternates: { canonical: "/flyttstadning-foretag" },
  description:
    "Flyttstädning av kontor och lokaler i Stockholm. Fast pris efter kostnadsfritt platsbesök, garanti vid besiktningen och egen personal. Fyll i formuläret så får du en offert.",
  openGraph: { title: "Flyttstädning kontor Stockholm | Timeout Service", description: "Flyttstädning för kontor och lokaler. Garanti och fast pris." },
};

export default function FlyttstadningForetag() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://www.timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Flyttstädning företag", item: "https://www.timeoutservice.se/flyttstadning-foretag" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Flyttstädning företag Stockholm",
      description: "Flyttstädning för kontor och företagslokaler i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://www.timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Flyttstädning företag" },
  ];
  return (
    <>{schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><FlyttstadningForetagContent /><Footer /></>
  );
}
