import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MattvattContent from "@/components/MattvattContent";

export const metadata = {
  title: "Mattvätt Stockholm | Professionell mattvätt hemma hos dig | Timeout Service",
  description:
    "Professionell mattvätt i Stockholm — på plats hemma hos dig. Svanenmärkta produkter, RUT-avdrag. Förlänger mattans livslängd. Kontakta oss för offert!",
  openGraph: {
    title: "Mattvätt Stockholm | Timeout Service",
    description: "Mattvätt i hela Storstockholm på plats hos dig. 99 kr/kvm, miljövänliga produkter.",
  },
};

export default function Mattvatt() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
      { "@type": "ListItem", position: 3, name: "Mattvätt", item: "https://timeoutservice.se/mattvatt" },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Mattvätt Stockholm", description: "Professionell mattvätt på plats i hela Storstockholm.",
    provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
    areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Mattvätt",
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Vad kostar mattvätt?", acceptedAnswer: { "@type": "Answer", text: "99 kr per kvadratmeter för privatpersoner. 100 kr/kvm vid flytt- och visningsstädning." } },
      { "@type": "Question", name: "Utför ni mattvätt hemma hos mig?", acceptedAnswer: { "@type": "Answer", text: "Ja, de flesta uppdrag utför vi på plats hemma hos dig." } },
      { "@type": "Question", name: "Hur lång tid tar det innan jag kan gå på mattan?", acceptedAnswer: { "@type": "Answer", text: "Vänta minst 8-12 timmar innan du går på mattan." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <MattvattContent />
      <Footer />
    </>
  );
}
