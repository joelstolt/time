import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisningsstadningContent from "@/components/VisningsstadningContent";

export const metadata = {
  title: "Visningsstädning Stockholm | Från 2 500 kr efter RUT | Timeout Service",
  description:
    "Professionell visningsstädning i Stockholm. Samarbete med Notar & SKB. Ge köparna bästa möjliga intryck. 35 års erfarenhet. 10% rabatt vid kombination med flyttstäd.",
  openGraph: {
    title: "Visningsstädning Stockholm | Timeout Service",
    description: "Visningsstädning i Stockholm. Samarbete med Notar. Få 10% rabatt vid kombination med flyttstädning.",
  },
};

export default function Visningsstadning() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Visningsstädning", item: "https://timeoutservice.se/visningsstadning" },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Visningsstädning Stockholm",
    description: "Professionell visningsstädning i Stockholm. Samarbete med Notar & SKB sedan 2016.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Visningsstädning",
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Ingår fönsterputs i visningsstädning?", acceptedAnswer: { "@type": "Answer", text: "Fönsterputs är en tilläggstjänst som kan bokas vid beställning." } },
      { "@type": "Question", name: "Hur lång tid tar visningsstädning?", acceptedAnswer: { "@type": "Answer", text: "Vi ser till att ha tillräckligt med personal för att slutföra städningen inom en arbetsdag." } },
      { "@type": "Question", name: "Kan jag få rabatt om jag bokar flyttstädning också?", acceptedAnswer: { "@type": "Answer", text: "Ja, du får 10% rabatt på flyttstädningen om du bokar visningsstädning och flyttstädning tillsammans." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <VisningsstadningContent />
      <Footer />
    </>
  );
}
