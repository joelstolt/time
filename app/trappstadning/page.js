import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrappstadningContent from "@/components/TrappstadningContent";
export const metadata = {
  title: "Trappstädning Stockholm | BRF & Fastigheter | Timeout Service",
  description: "Professionell trappstädning för BRF och fastighetsägare i Stockholm. Tydliga städscheman, minst 10% lägre pris. Kostnadsfritt platsbesök.",
  openGraph: { title: "Trappstädning Stockholm | Timeout Service", description: "Trappstädning för BRF och fastigheter i Stockholm." },
};
export default function Trappstadning() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Företag", item: "https://timeoutservice.se/foretag" },
      { "@type": "ListItem", position: 3, name: "Trappstädning", item: "https://timeoutservice.se/trappstadning" },
    ]},
    { "@context": "https://schema.org", "@type": "Service", name: "Trappstädning Stockholm", description: "Trappstädning för BRF och fastighetsägare i Stockholm.",
      provider: { "@type": "LocalBusiness", name: "Timeout Service AB", "@id": "https://timeoutservice.se" },
      areaServed: { "@type": "City", name: "Stockholm" }, serviceType: "Trappstädning" },
  ];
  return (<>{schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}<Header /><TrappstadningContent /><Footer /></>);
}
