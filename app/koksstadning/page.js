import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KoksstadningContent from "@/components/KoksstadningContent";

export const metadata = {
  title: "Köksstädning Stockholm | Från 1 150 kr efter RUT | Timeout Service",
  description:
    "Professionell köksstädning i Stockholm. Djuprengöring av spis, fläkt, ugn och alla ytor. Från 1 150 kr efter RUT-avdrag. 35 års erfarenhet. Boka idag!",
  openGraph: {
    title: "Köksstädning Stockholm | Timeout Service",
    description: "Köksstädning i Stockholm med 35 års erfarenhet. Djuprengöring av hela köket från 1 150 kr efter RUT.",
  },
};

export default function Koksstadning() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Köksstädning", item: "https://timeoutservice.se/koksstadning" },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Köksstädning Stockholm", description: "Professionell köksstädning och djuprengöring i Stockholm.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Köksstädning",
    offers: { "@type": "Offer", priceCurrency: "SEK", price: "1150", description: "Pris efter RUT-avdrag, 1-10 kvm" },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Vad kostar köksstädning?", acceptedAnswer: { "@type": "Answer", text: "1-10 kvm: 1 150 kr, 11-15 kvm: 1 500 kr. Priser efter RUT-avdrag." } },
      { "@type": "Question", name: "Får man använda RUT-avdrag för köksstädning?", acceptedAnswer: { "@type": "Answer", text: "Ja, köksstädning räknas som hushållsnära tjänst och ger 50% skattereduktion." } },
      { "@type": "Question", name: "Hur lång tid tar köksstädning?", acceptedAnswer: { "@type": "Answer", text: "Vi ser till att ha tillräckligt med personal för att slutföra städningen inom en arbetsdag." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <KoksstadningContent />
      <Footer />
    </>
  );
}
