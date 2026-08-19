import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForetagContent from "@/components/ForetagContent";

export const metadata = {
  title: "Företagsstädning Stockholm | Kontor, Butik & Trappor",
  alternates: { canonical: "/foretag" },
  description:
    "Professionell företagsstädning i Stockholm. Kontorstädning, fönsterputs, butiksservice, trappstädning och golvvård. Kvalitetssäkrad leverans varje gång.",
  openGraph: {
    title: "Företagsstädning Stockholm | Timeout Service",
    description:
      "Alla städtjänster för företag i Stockholm. Egen kontaktperson, miljömedvetet, kvalitetssäkrat.",
  },
};

export default function Foretag() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://www.timeoutservice.se/foretag" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <ForetagContent />
      <Footer />
    </>
  );
}
