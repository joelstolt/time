import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FonsterputsContent from "@/components/FonsterputsContent";

export const metadata = {
  title: "Fönsterputs Stockholm | Fast pris från 450 kr efter RUT | Timeout Service",
  description:
    "Professionell fönsterputs i Stockholm. Fast pris, RUT-avdrag, 3 dagars garanti. Vi putsar fönster ner till -16°C. Över 550 kunder per år. Boka idag!",
  openGraph: {
    title: "Fönsterputs Stockholm | Timeout Service",
    description:
      "Fönsterputs i Stockholm med fast pris och RUT-avdrag. 35 års erfarenhet, försäkrad personal, 3 dagars garanti.",
  },
};

export default function Fonsterputs() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Fönsterputs", item: "https://timeoutservice.se/fonsterputs" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fönsterputs Stockholm",
    description: "Professionell fönsterputs i Stockholm med fast pris och RUT-avdrag. 3 dagars garanti.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" },
    serviceType: "Fönsterputs",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Varför är era priser lägre än de flesta fönsterputsföretag?", acceptedAnswer: { "@type": "Answer", text: "TimeOut Service AB är ett familjeägt företag med 35 års erfarenhet. Vi utför de flesta uppdrag själva vilket gör att vi kan erbjuda konkurrenskraftiga priser." } },
      { "@type": "Question", name: "Får man använda RUT-avdrag för fönsterputs?", acceptedAnswer: { "@type": "Answer", text: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år. Du betalar bara 50% av arbetskostnaden." } },
      { "@type": "Question", name: "Vilken lägsta temperatur putsar ni fönster i?", acceptedAnswer: { "@type": "Answer", text: "Vi putsar fönster ända ner till -16°C." } },
      { "@type": "Question", name: "Vad händer om det regnar?", acceptedAnswer: { "@type": "Answer", text: "Om fönstren öppnas inåt genomförs putsningen som planerat. Vid utåtgående fönster kontaktar vi dig i förväg för att boka om." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <FonsterputsContent />
      <Footer />
    </>
  );
}
