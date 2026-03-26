import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TjansterContent from "@/components/TjansterContent";

export const metadata = {
  title: "Städtjänster för privatpersoner i Stockholm | Timeout Service",
  description:
    "Alla städtjänster för privatpersoner i Stockholm. Hemstädning, flyttstädning, fönsterputs, storstädning, visningsstädning och mer. RUT-avdrag. Boka idag!",
  openGraph: {
    title: "Städtjänster för privatpersoner | Timeout Service",
    description:
      "Professionella städtjänster för privatpersoner i Stockholm. 35 års erfarenhet, nöjd-kund-garanti.",
  },
};

export default function Tjanster() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Privatperson", item: "https://timeoutservice.se/tjanster" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <TjansterContent />
      <Footer />
    </>
  );
}
