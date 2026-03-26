import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HemstadningContent from "@/components/HemstadningContent";

export const metadata = {
  title: "Hemstädning Stockholm | Nöjd-kund-garanti | Timeout Service",
  description:
    "Boka hemstädning i Stockholm. Samma städare varje gång, nöjd-kund-garanti, inga bindningstider. RUT-avdrag. 35 års erfarenhet. Kostnadsfritt hembesök. Ring 08-37 71 76.",
  openGraph: {
    title: "Hemstädning Stockholm | Timeout Service",
    description:
      "Professionell hemstädning i Stockholm med 35 års erfarenhet. Nöjd-kund-garanti, samma städare, inga bindningstider. Boka kostnadsfritt hembesök.",
    images: ["/images/hemstad-3.png"],
    type: "website",
  },
};

export default function Hemstadning() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: "https://timeoutservice.se",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privatperson",
        item: "https://timeoutservice.se/tjanster",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hemstädning",
        item: "https://timeoutservice.se/hemstadning",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hemstädning Stockholm",
    description:
      "Professionell hemstädning i Stockholm. Regelbunden städning med samma städare varje gång. Nöjd-kund-garanti och inga bindningstider.",
    provider: {
      "@type": "LocalBusiness",
      name: "Timeout Service AB",
      "@id": "https://timeoutservice.se",
    },
    areaServed: {
      "@type": "City",
      name: "Stockholm",
    },
    serviceType: "Hemstädning",
    offers: {
      "@type": "Offer",
      description: "Pris efter RUT-avdrag",
      priceCurrency: "SEK",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Får man använda RUT-avdrag för hemstädning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år fyllda vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och vara helt eller delvis bosatt i bostaden där tjänsten utförs.",
        },
      },
      {
        "@type": "Question",
        name: "Hur gör jag för att få RUT-avdrag för hemstädning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ni behöver inte göra någonting. För privatpersoner skickar vi alltid en faktura med RUT-avdraget förberett. Vi sköter allt pappersarbete åt dig.",
        },
      },
      {
        "@type": "Question",
        name: "Är det alltid samma person som kommer och städar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, med oss är det alltid samma person som kommer, utom vid sjukdom eller semester. Då skickar vi en vikarie istället.",
        },
      },
      {
        "@type": "Question",
        name: "Vad händer om något skulle råka gå sönder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeout Service AB är ansvarsförsäkrad upp till 10 miljoner kronor. Om skadan uppkommit genom att vi har varit oaktsamma står vi självklart för kostnaden.",
        },
      },
      {
        "@type": "Question",
        name: "Har ni bindningstider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej, vi har inga bindnings- eller uppsägningstider. Så länge du vill att vi fortsätter att städa ditt hem så gör vi det, när du behöver avsluta eller pausa tjänsten så gör vi det direkt.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Header />
      <HemstadningContent />
      <Footer />
    </>
  );
}
