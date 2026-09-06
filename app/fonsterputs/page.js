import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FonsterputsContent from "@/components/FonsterputsContent";

export const metadata = {
  title: "Fönsterputs Stockholm: pris från 450 kr efter RUT",
  alternates: { canonical: "/fonsterputs" },
  description:
    "Vad kostar fönsterputs i Stockholm? Fast pris från 450 kr efter RUT för lägenhet och från 50 kr per fönster för villa. Se hela prislistan och boka direkt.",
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
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://www.timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Fönsterputs", item: "https://www.timeoutservice.se/fonsterputs" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fönsterputs Stockholm",
    description: "Professionell fönsterputs i Stockholm med fast pris och RUT-avdrag. 3 dagars garanti.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://www.timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" },
    serviceType: "Fönsterputs",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Vad kostar fönsterputs i Stockholm?", acceptedAnswer: { "@type": "Answer", text: "Vi tar fast pris. För lägenhet från 450 kr efter RUT-avdrag (1 rok med upp till 9 fönster) upp till 880 kr (5 rok med 3-glasfönster). För villa och radhus från 50 kr per fönster med minimidebitering 800 kr. Materialavgift 100 kr tillkommer per tillfälle." } },
      { "@type": "Question", name: "Vad kostar fönsterputs per timme?", acceptedAnswer: { "@type": "Answer", text: "Vi debiterar inte per timme utan ett fast pris per bostad eller per fönster. Hjälp med undanplockning kostar 250 kr per timme." } },
      { "@type": "Question", name: "Vad kostar det att putsa en inglasad balkong?", acceptedAnswer: { "@type": "Answer", text: "Inglasad balkong eller veranda från 400 kr och inglasad uteplats med upp till 10 glaspartier från 500 kr, efter RUT-avdrag." } },
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
