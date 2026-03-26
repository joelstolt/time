import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StorstadningContent from "@/components/StorstadningContent";

export const metadata = {
  title: "Storstädning Stockholm | Från 2 500 kr efter RUT | Timeout Service",
  description:
    "Professionell storstädning i Stockholm. Allt material ingår, 5 dagars garanti, RUT-avdrag. Vi tar hand om allt från golv till tak. Boka idag!",
  openGraph: {
    title: "Storstädning Stockholm | Timeout Service",
    description: "Storstädning i Stockholm med 35 års erfarenhet. Allt material ingår, 5 dagars kvalitetsgaranti.",
  },
};

export default function Storstadning() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Storstädning", item: "https://timeoutservice.se/storstadning" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Storstädning Stockholm",
    description: "Professionell storstädning i Stockholm. Allt material ingår, 5 dagars kvalitetsgaranti.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" },
    serviceType: "Storstädning",
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Får man använda RUT-avdrag för storstädning?", acceptedAnswer: { "@type": "Answer", text: "Ja, storstädning räknas som hushållsnära tjänst. Du får 50% skattereduktion, upp till 75 000 kr per person och år." } },
      { "@type": "Question", name: "Hur ofta behöver man storstäda?", acceptedAnswer: { "@type": "Answer", text: "Vi rekommenderar ett par storstädningar per år för att hålla städstandarden på en hög nivå." } },
      { "@type": "Question", name: "Ingår städmaterial?", acceptedAnswer: { "@type": "Answer", text: "Ja, vi har med oss all utrustning, rengöringsmedel och material som kan behövas." } },
      { "@type": "Question", name: "Hur lång tid tar storstädning?", acceptedAnswer: { "@type": "Answer", text: "Vi anpassar teamets storlek så att städningen slutförs på en arbetsdag." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <StorstadningContent />
      <Footer />
    </>
  );
}
