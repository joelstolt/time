import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlyttstadningContent from "@/components/FlyttstadningContent";

export const metadata = {
  title: "Flyttstädning Stockholm | Från 2 400 kr efter RUT | Timeout Service",
  description:
    "Professionell flyttstädning i Stockholm. Fönsterputs ingår, 10 dagars garanti, allt material ingår. Samarbete med Notar & SKB. 35 års erfarenhet. Boka idag!",
  openGraph: {
    title: "Flyttstädning Stockholm | Timeout Service",
    description: "Flyttstädning i Stockholm med 10 dagars garanti. Fönsterputs ingår, allt material ingår.",
  },
};

export default function Flyttstadning() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Flyttstädning", item: "https://timeoutservice.se/flyttstadning" },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Flyttstädning Stockholm",
    description: "Professionell flyttstädning i Stockholm. Fönsterputs ingår, 10 dagars garanti, allt material ingår.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Flyttstädning",
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Vad ingår i priset för flyttstädning?", acceptedAnswer: { "@type": "Answer", text: "Resa, material, utrustning, fönsterputs, arbetsgaranti och RUT-administration ingår i priset." } },
      { "@type": "Question", name: "Hur lång garanti har ni på flyttstädning?", acceptedAnswer: { "@type": "Answer", text: "Vi har 10 dagars nöjd-kund-garanti. Eventuella brister som noteras vid första besiktning åtgärdas kostnadsfritt." } },
      { "@type": "Question", name: "När ska jag boka flyttstädning?", acceptedAnswer: { "@type": "Answer", text: "Vi rekommenderar att boka 10-15 dagar innan nyckelöverlämning." } },
      { "@type": "Question", name: "Måste jag ha utrustning och rengöringsmedel?", acceptedAnswer: { "@type": "Answer", text: "Nej, vi tar med all utrustning och alla material som behövs." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <FlyttstadningContent />
      <Footer />
    </>
  );
}
