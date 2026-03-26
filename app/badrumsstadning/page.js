import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BadrumsstadningContent from "@/components/BadrumsstadningContent";

export const metadata = {
  title: "Badrumsstädning Stockholm | Från 1 200 kr efter RUT | Timeout Service",
  description:
    "Professionell badrumsstädning i Stockholm. Djuprengöring av kakel, fogar, kalk och mögel. Ångmaskin tillgänglig. Från 1 200 kr efter RUT. Boka idag!",
  openGraph: {
    title: "Badrumsstädning Stockholm | Timeout Service",
    description: "Badrumsstädning i Stockholm. Kalk, mögel och fogar — vi får ditt badrum att glänsa.",
  },
};

export default function Badrumsstadning() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Badrumsstädning", item: "https://timeoutservice.se/badrumsstadning" },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Badrumsstädning Stockholm", description: "Professionell badrumsstädning med djuprengöring av kakel, fogar och sanitetsporslin.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Badrumsstädning",
    offers: { "@type": "Offer", priceCurrency: "SEK", price: "1200", description: "Pris efter RUT-avdrag, 1-10 kvm" },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Vad kostar badrumsstädning?", acceptedAnswer: { "@type": "Answer", text: "1-10 kvm: ca 1 200 kr, 11-15 kvm: ca 1 600 kr, 16-20 kvm: ca 2 200 kr. Priser efter RUT-avdrag." } },
      { "@type": "Question", name: "Ingår ångmaskin i priset?", acceptedAnswer: { "@type": "Answer", text: "Ångmaskin är ett tillval som kostar 550 kr. Industriell ånga med 8 bars tryck och upp till 200°C." } },
      { "@type": "Question", name: "Kan ni ta bort mögel och kalk?", acceptedAnswer: { "@type": "Answer", text: "Ja, djuprengöring av fogar, kalk, mögel eller rost kostar 400 kr/tim, normalt 1-2 extra timmar." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <BadrumsstadningContent />
      <Footer />
    </>
  );
}
